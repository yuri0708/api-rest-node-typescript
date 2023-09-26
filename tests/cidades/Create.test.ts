import { testServer } from '../jest.setup';
import { StatusCodes } from 'http-status-codes/build/cjs/status-codes';


describe('Cidades - Create', () => {



  it('Cria registro', async () => {

    const res1 = await testServer
      .post('/cidades')
      .send({ nome: 'Belo Horizonte' });



    expect(res1.statusCode).toEqual(StatusCodes.CREATED);
    expect(typeof res1.body).toEqual('number');
  });
  it('Tenta criar um registro com nome muito curto', async () => {

    const res1 = await testServer
      .post('/cidades')
      .send({ nome: 'Be' });



    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res1.body).toHaveProperty('errors.body.nome');
  });
});

