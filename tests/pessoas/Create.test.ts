import { testServer } from '../jest.setup';
import { StatusCodes } from 'http-status-codes/build/cjs/status-codes';


describe('Pessoas - Create', () => {

  let cidadeId: number | undefined = undefined;
  beforeAll(async () => {
    const resCidade = await testServer
      .post('/cidades')
      .send({ nome: 'Teste' });

    cidadeId = resCidade.body;
  });

  it('Cria registro', async () => {

    const res1 = await testServer
      .post('/pessoas')
      .send({ 
        cidadeId,
        email: 'yurifurbino@gmail.com',
        nomeCompleto: 'Yuri Furbino',  
      });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);
    expect(typeof res1.body).toEqual('number');
  });
  it('Cadastra registro 2', async () => {

    const res1 = await testServer
      .post('/pessoas')
      .send({ 
        cidadeId,
        email: 'yurifurbino2@gmail.com',
        nomeCompleto: 'Yuri Furbino',  
      });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);
    expect(typeof res1.body).toEqual('number');
  });
  it('Tenta criar um registro com email duplicado', async () => {

    const res1 = await testServer
      .post('/pessoas')
      .send({ 
        cidadeId,
        email: 'yuriduplicado@gmail.com',
        nomeCompleto: 'Yuri Furbino',  
      });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);
    expect(typeof res1.body).toEqual('number');

    const res2 = await testServer
      .post('/pessoas')
      .send({ 
        cidadeId,
        email: 'yuriduplicado@gmail.com',
        nomeCompleto: 'Yuri Furbino',  
      });

    expect(res2.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(res2.body).toHaveProperty('errors.default');
  });
  it('Tenta criar um registro com nomeCompleto muito curto', async () => {

    const res1 = await testServer
      .post('/pessoas')
      .send({ 
        cidadeId,
        email: 'yurifurbino@gmail.com',
        nomeCompleto: 'Yu',  
      });



    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res1.body).toHaveProperty('errors.body.nomeCompleto');
  });
  it('Tenta criar um registro sem nomeCompleto', async () => {

    const res1 = await testServer
      .post('/pessoas')
      .send({ 
        cidadeId,
        email: 'yurifurbino@gmail.com', 
      });



    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res1.body).toHaveProperty('errors.body.nomeCompleto');
  });
  it('Tenta criar um registro sem email', async () => {

    const res1 = await testServer
      .post('/pessoas')
      .send({ 
        cidadeId,
        nomeCompleto: 'Yuri Furbino', 
      });



    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res1.body).toHaveProperty('errors.body.email');
  });
  it('Tenta criar um registro com email inválido', async () => {

    const res1 = await testServer
      .post('/pessoas')
      .send({ 
        cidadeId,
        email: 'yuri gmail.com',
        nomeCompleto: 'Yuri Furbino', 
      });



    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res1.body).toHaveProperty('errors.body.email');
  });
  it('Tenta criar um registro sem cidadeId', async () => {

    const res1 = await testServer
      .post('/pessoas')
      .send({ 
        email: 'yuri@gmail.com',
        nomeCompleto: 'Yuri Furbino', 
      });



    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res1.body).toHaveProperty('errors.body.cidadeId');
  });
  it('Tenta criar um registro com cidadeId inválido', async () => {

    const res1 = await testServer
      .post('/pessoas')
      .send({ 
        cidadeId: 'sadsads',
        email: 'yuri gmail.com',
        nomeCompleto: 'Yuri Furbino', 
      });



    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res1.body).toHaveProperty('errors.body.cidadeId');
  });
  it('Tenta criar sem enviar nenhuma propriedade', async () => {

    const res1 = await testServer
      .post('/pessoas')
      .send({});



    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res1.body).toHaveProperty('errors.body.email');
    expect(res1.body).toHaveProperty('errors.body.cidadeId');
    expect(res1.body).toHaveProperty('errors.body.nomeCompleto');
  });
});