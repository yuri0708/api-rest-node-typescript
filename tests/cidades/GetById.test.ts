import { testServer } from '../jest.setup';

import { StatusCodes } from 'http-status-codes';


describe('Cidades - GetById', () => {

  let accessToken = '';
  beforeAll(async () => {
    const email = 'getbyId-cidades@gmail.com';
    await testServer.post('/cadastrar').send({ nome: 'Teste', email, senha: '123456'});
    const signInRes = await testServer.post('/entrar').send({email, senha: '123456'});
  
    accessToken = signInRes.body.accessToken;
  });

  it('Tenta consultar sem usar token de autenticação',async () => {
    const res1 = await testServer
      .get('/cidades/1')
      .send();

    expect(res1.statusCode).toEqual(StatusCodes.UNAUTHORIZED);
    expect(res1.body).toHaveProperty('errors.default');
  });
  it('Busca registro por id', async () => {
    
    const res1 = await testServer
      .post('/cidades')
      .set({Authorization: `Bearer ${accessToken}`})
      .send({ nome: 'Belo Horizonte' });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);

    const resBuscada = await testServer
      .get(`/cidades/${res1.body}`)
      .set({Authorization: `Bearer ${accessToken}`})
      .send();

    expect(resBuscada.statusCode).toEqual(StatusCodes.OK);
    expect(resBuscada.body).toHaveProperty('nome');
  });
  it('Tenta buscar registro que não existe', async () => {
    
    const res1 = await testServer
      .get('/cidades/99999')
      .set({Authorization: `Bearer ${accessToken}`})
      .send();
      
    expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(res1.body).toHaveProperty('errors.default');
  });
});