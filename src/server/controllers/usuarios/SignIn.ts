import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

import { validation } from '../../shared/middleware';
import { IUsuario } from '../../database/models';
import { UsuariosProvider } from '../../database/providers/usuarios';
import { JWTService, PasswordCrypto } from '../../shared/services';


interface IBodyProps extends Omit<IUsuario, 'id'|'nome'> { }

export const signInValidation = validation((getSchema) => ({
  body: getSchema<IBodyProps>(yup.object().shape({
    senha: yup.string().required().min(6),
    email: yup.string().required().email().min(5),
  })),
}));

export const signIn = async (req: Request<{}, {}, IBodyProps>, res: Response) => {
  const { email, senha} = req.body;
  

  const result = await UsuariosProvider.getByEmail(email);
  if (result instanceof Error) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      errors: {
        default: 'Email ou senha inválidos'
      }
    });
  }  

  const passwordMatch = await PasswordCrypto.verifyPassword(senha, result.senha);
  if (!passwordMatch) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      errors: {
        default: 'Email ou senha inválidos'
      }
    });
  } else {

    const accessToken = JWTService.sign({uid: result.id});
    if (accessToken === 'JWT_SECRET_NOT_FOUND') {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        errors: {
          default: 'Erro ao gerar o token de acesso'
        }
      }); 
    }


    return res.status(StatusCodes.OK).json({ accessToken });
  }
};
