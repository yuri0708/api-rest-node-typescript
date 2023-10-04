import * as create from './Create';
import * as GetByEmail from './GetByEmail';

export const UsuariosProvider = {
  ...create,
  ...GetByEmail,
};