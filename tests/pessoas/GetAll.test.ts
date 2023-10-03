import { testServer } from '../jest.setup';
import { StatusCodes } from 'http-status-codes';


describe('Pessoas - GetAll', () => {

  let cidadeId: number | undefined = undefined;
  beforeAll(async () => {
    const resCidade = await testServer 
      .post('/cidades')
      .send({ nome: 'Teste'});   

    cidadeId = resCidade.body;
  });


  it('Busca registros',async () => {
    
    const res1 = await testServer
      .post('/pessoas')
      .send({ 
        cidadeId,
        email: 'yurifurbino@gmail.com',
        nomeCompleto: 'Yuri Furbino', 
      });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);

    const resBuscada = await testServer
      .get('/pessoas')
      .send();

    expect(Number(resBuscada.header['x-total-count'])).toBeGreaterThan(0);
    expect(resBuscada.statusCode).toEqual(StatusCodes.OK);
    expect(resBuscada.body.length).toBeGreaterThan(0);
  });
});