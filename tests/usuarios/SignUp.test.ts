import { testServer } from '../jest.setup';
import { StatusCodes } from 'http-status-codes/build/cjs/status-codes';


describe('Usuarios - SignUp', () => {
  it('Cadastra usuário 1', async () => {

    const res1 = await testServer
      .post('/cadastrar')
      .send({ 
        nome: 'teste', 
        email: 'teste@gmail.com',
        senha: '123456',
      });



    expect(res1.statusCode).toEqual(StatusCodes.CREATED);
    expect(typeof res1.body).toEqual('number');
  });
  it('Cadastra usuário 2', async () => {

    const res1 = await testServer
      .post('/cadastrar')
      .send({ 
        nome: 'teste2', 
        email: 'teste2@gmail.com',
        senha: '123456',
      });



    expect(res1.statusCode).toEqual(StatusCodes.CREATED);
    expect(typeof res1.body).toEqual('number');
  });
  it('Erro ao cadastrar um usuário com email duplicado', async () => {

    const res1 = await testServer
      .post('/cadastrar')
      .send({
        senha: '123456',
        nome: 'Pedro2',
        email: 'pedro@gmail.com',
      });
    expect(res1.statusCode).toEqual(StatusCodes.CREATED);
    expect(typeof res1.body).toEqual('number');

    const res2 = await testServer
      .post('/cadastrar')
      .send({
        senha: '123456',
        nome: 'Pedro',
        email: 'pedro@gmail.com',
      });
    expect(res2.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(res2.body).toHaveProperty('errors.default');
  });
  it('Erro ao cadastrar um usuário sem email', async () => {

    const res1 = await testServer
      .post('/cadastrar')
      .send({ 
        nome: 'teste', 
        senha: '123456',
      });



    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res1.body).toHaveProperty('errors.body.email');
  });
  it('Erro ao cadastrar um usuário sem nome', async () => {

    const res1 = await testServer
      .post('/cadastrar')
      .send({ 
        email: 'teste@gmail.com', 
        senha: '123456',
      });



    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res1.body).toHaveProperty('errors.body.nome');
  });
  it('Erro ao cadastrar um usuário sem senha', async () => {

    const res1 = await testServer
      .post('/cadastrar')
      .send({ 
        nome: 'teste', 
        email: 'teste@gmail.com',
      });



    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res1.body).toHaveProperty('errors.body.senha');
  });
  it('Erro ao cadastrar um usuário com email inválido', async () => {

    const res1 = await testServer
      .post('/cadastrar')
      .send({ 
        nome: 'teste', 
        senha: '123456',
        email: 'teste gmail.com'
      });


    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res1.body).toHaveProperty('errors.body.email');
  });
  it('Erro ao cadastrar um usuário com senha muito pequena', async () => {

    const res1 = await testServer
      .post('/cadastrar')
      .send({ 
        nome: 'teste', 
        senha: '12345',
        email: 'teste@gmail.com'
      });


    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res1.body).toHaveProperty('errors.body.senha');
  });
  it('Erro ao cadastrar um usuário com nome muito pequeno', async () => {

    const res1 = await testServer
      .post('/cadastrar')
      .send({ 
        nome: 'te', 
        senha: '123456',
        email: 'teste@gmail.com'
      });


    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res1.body).toHaveProperty('errors.body.nome');
  });
});
