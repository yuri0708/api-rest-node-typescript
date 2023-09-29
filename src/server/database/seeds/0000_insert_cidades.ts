import { Knex } from 'knex';
import { ETableNames } from '../ETableNames';



export const seed = async (knex: Knex) => {

  const [{ count }] = await knex(ETableNames.cidade).count<[{ count: number }]>('* as count');
  if (!Number.isInteger(count) || Number(count) > 0) return;

  const cidadesToInsert = cidadesDeMinasGerais.map(nomeDaCidade => ({ nome: nomeDaCidade}));
  await knex(ETableNames.cidade).insert(cidadesToInsert);
};


const cidadesDeMinasGerais = [
  'Abadia dos Dourados',
  'Abaeté',
  'Abre Campo',
  'Acaiaca',
  'Açucena',
  'Água Boa',
  'Água Comprida',
  'Aguanil',
  'Águas Formosas',
  'Águas Vermelhas',
  'Aimorés',
  'Aiuruoca',
  'Alagoa',
  'Albertina',
  'Além Paraíba',
  'Alfenas',
  'Alfredo Vasconcelos',
  'Almenara',
  'Alpercata',
  'Alpinópolis',
  'Alterosa',
  'Alto Caparaó',
  'Alto Jequitibá',
  'Alto Rio Doce',
  'Alvarenga',
  'Alvinópolis',
  'Alvorada de Minas',
  'Amparo do Serra',
  'Andradas',
  'Andrelândia',
  'Angelândia',
  'Antônio Carlos',
  'Antônio Dias',
  'Antônio Prado de Minas',
  'Araçaí',
  'Aracitaba',
  'Araçuaí',
  'Araguari',
  'Arantina',
  'Araponga',
  'Araporã',
  'Arapuá',
  'Araújos',
  'Araxá',
  'Arceburgo',
  'Arcos',
  'Areado',
  'Argirita',
  'Aricanduva',
  'Arinos',
  'Astolfo Dutra',
  'Ataléia',
  'Augusto de Lima',
  'Baependi',
  'Baldim',
  'Bambuí',
  'Bandeira',
  'Bandeira do Sul',
  'Barão de Cocais',
  'Barão de Monte Alto',
  'Barbacena',
  'Barra Longa',
  'Barroso',
  'Bela Vista de Minas',
  'Belmiro Braga',
  'Belo Horizonte',
  'Belo Oriente', 
  'Belo Vale', 
  'Berilo', 
  'Berizal', 
  'Bertópolis', 
  'Betim', 
  'Bias Fortes', 
  'Bicas', 
  'Biquinhas', 
  'Boa Esperança', 
  'Bocaina de Minas', 
  'Bocaiúva', 
  'Bom Despacho', 'Bom Jardim de Minas', 'Bom Jesus da Penha', 'Bom Jesus do Amparo', 'Bom Jesus do Galho', 'Bom Repouso', 'Bom Sucesso', 'Bonfim', 'Bonfinópolis de Minas', 'Bonito de Minas', 'Borda da Mata', 'Botelhos', 'Botumirim', 'Brás Pires', 'Brasilândia de Minas', 'Brasília de Minas', 'Brazópolis', 'Braúnas', 'Brumadinho', 'Bueno Brandão', 'Buenópolis', 'Bugre', 'Buritis', 'Buritizeiro', 'Cabeceira Grande', 'Cabo Verde', 'Cachoeira da Prata', 'Cachoeira de Minas', 'Cachoeira de Pajeú', 'Cachoeira Dourada', 'Caetanópolis', 'Caeté', 'Caiana', 'Cajuri', 'Caldas', 'Camacho', 'Camanducaia', 'Cambuí', 'Cambuquira', 'Campanário', 'Campanha', 'Campestre', 'Campina Verde', 'Campo Azul', 'Campo Belo', 'Campo do Meio', 'Campo Florido', 'Campos Altos', 'Campos Gerais', 'Cana Verde', 'Canaã', 'Canápolis', 'Candeias', 'Cantagalo', 'Caparaó', 'Capela Nova', 'Capelinha', 'Capetinga', 'Capim Branco', 'Capinópolis', 'Capitão Andrade', 'Capitão Enéas', 'Capitólio', 'Caputira', 'Caraí', 'Caranaíba', 'Carandaí', 'Carangola', 'Caratinga', 'Carbonita', 'Careaçu', 'Carlos Chagas', 'Carmésia', 'Carmo da Cachoeira', 'Carmo da Mata', 'Carmo de Minas', 'Carmo do Cajuru', 'Carmo do Paranaíba', 'Carmo do Rio Claro', 'Carmópolis de Minas', 'Carneirinho', 'Carrancas', 'Carvalhópolis', 'Carvalhos', 'Casa Grande', 'Cascalho Rico', 'Cássia', 'Cataguases', 'Catas Altas', 'Catas Altas da Noruega', 'Catuji', 'Catuti', 'Caxambu', 'Cedro do Abaeté', 'Central de Minas', 'Centralina', 'Chácara', 'Chalé', 'Chapada do Norte', 'Chapada Gaúcha', 'Chiador', 'Cipotânea', 'Claraval', 'Claro dos Poções', 'Cláudio', 'Coimbra', 'Coluna', 'Comendador Gomes', 'Comercinho', 'Conceição da Aparecida', 'Conceição da Barra de Minas', 'Conceição das Alagoas', 'Conceição das Pedras', 'Conceição de Ipanema', 'Conceição do Mato Dentro', 'Conceição do Pará', 'Conceição do Rio Verde', 'Conceição dos Ouros', 'Cônego Marinho', 'Confins', 'Congonhal', 'Congonhas', 'Congonhas do Norte', 'Conquista', 'Conselheiro Lafaiete', 'Conselheiro Pena', 'Consolação', 'Contagem', 'Coqueiral', 'Coração de Jesus', 'Cordisburgo', 'Cordislândia', 'Corinto', 'Coroaci', 'Coromandel', 'Coronel Fabriciano', 'Coronel Murta', 'Coronel Pacheco', 'Coronel Xavier Chaves', 'Córrego Danta', 'Córrego do Bom Jesus', 'Córrego Fundo', 'Córrego Novo', 'Couto de Magalhães de Minas', 'Crisólita', 'Cristais', 'Cristália', 'Cristiano Otoni', 'Cristina', 'Crucilândia', 'Cruzeiro da Fortaleza', 'Cruzília', 'Cuparaque', 'Curral de Dentro', 'Curvelo', 'Datas', 'Delfim Moreira', 'Delfinópolis', 'Delta', 'Descoberto', 'Desterro de Entre Rios', 'Desterro do Melo', 'Diamantina', 'Diogo de Vasconcelos', 'Dionísio', 'Divinésia', 'Divino', 'Divino das Laranjeiras', 'Divinolândia de Minas', 'Divinópolis', 'Divisa Alegre', 'Divisa Nova', 'Divisópolis', 'Dom Bosco', 'Dom Cavati', 'Dom Joaquim', 'Dom Silvério', 'Dom Viçoso', 'Dona Euzébia', 'Dores de Campos', 'Dores de Guanhães', 'Dores do Indaiá', 'Dores do Turvo', 'Doresópolis', 'Douradoquara', 'Durandé', 'Elói Mendes', 'Engenheiro Caldas', 'Engenheiro Navarro', 'Entre Folhas', 'Entre Rios de Minas', 'Ervália', 'Esmeraldas', 'Espera Feliz', 'Espinosa', 'Espírito Santo do Dourado', 'Estiva', 'Estrela Dalva', 'Estrela do Indaiá', 'Estrela do Sul', 'Eugenópolis', 'Ewbank da Câmara', 'Extrema', 'Fama', 'Faria Lemos', 'Felício dos Santos', 'Felisburgo', 'Felixlândia', 'Fernandes Tourinho', 'Ferros', 'Fervedouro', 'Florestal', 'Formiga', 'Formoso', 'Fortaleza de Minas', 'Fortuna de Minas', 'Francisco Badaró', 'Francisco Dumont', 'Francisco Sá', 'Franciscópolis', 'Frei Gaspar', 'Frei Inocêncio', 'Frei Lagonegro', 'Fronteira', 'Fronteira dos Vales', 'Fruta de Leite', 'Frutal', 'Funilândia', 'Galiléia', 'Gameleiras', 'Glaucilândia', 'Goiabeira', 'Goianá', 'Gonçalves', 'Gonzaga', 'Gouveia', 'Governador Valadares', 'Grão Mogol', 'Grupiara', 'Guanhães', 'Guapé', 'Guaraciaba', 'Guaraciama', 'Guaranésia', 'Guarani', 'Guarará', 'Guarda-Mor', 'Guaxupé', 'Guidoval', 'Guimarânia', 'Guiricema', 'Gurinhatã', 'Heliodora', 'Iapu', 'Ibertioga', 'Ibiá', 'Ibiaí', 'Ibiracatu', 'Ibiraci', 'Ibirité', 'Ibitiúra de Minas', 'Ibituruna', 'Icaraí de Minas', 'Igarapé', 'Igaratinga', 'Iguatama', 'Ijaci', 'Ilicínea', 'Imbé de Minas', 'Inconfidentes', 'Indaiabira', 'Indianópolis', 'Ingaí', 'Inhapim', 'Inhaúma', 'Inimutaba', 'Ipaba', 'Ipanema', 'Ipatinga', 'Ipiaçu', 'Ipuiúna', 'Iraí de Minas', 'Itabira', 'Itabirinha', 'Itabirito', 'Itacambira', 'Itacarambi', 'Itaguara', 'Itaipé', 'Itajubá', 'Itamarandiba', 'Itamarati de Minas', 'Itambacuri', 'Itambé do Mato Dentro', 'Itamogi', 'Itamonte', 'Itanhandu', 'Itanhomi', 'Itaobim', 'Itapagipe', 'Itapecerica', 'Itapeva', 'Itatiaiuçu', 'Itaú de Minas', 'Itaúna', 'Itaverava', 'Itinga', 'Itueta', 'Ituiutaba', 'Itumirim', 'Iturama', 'Itutinga', 'Jaboticatubas', 'Jacinto', 'Jacuí', 'Jacutinga', 'Jaguaraçu', 'Jaíba', 'Jampruca', 'Janaúba', 'Januária', 'Japaraíba', 'Japonvar', 'Jeceaba', 'Jenipapo de Minas', 'Jequeri', 'Jequitaí', 'Jequitibá', 'Jequitinhonha', 'Jesuânia', 'Joaíma', 'Joanésia', 'João Monlevade', 'João Pinheiro', 'Joaquim Felício', 'Jordânia', 'José Gonçalves de Minas', 'José Raydan', 'Josenópolis', 'Juatuba', 'Juiz de Fora', 'Juramento', 'Juruaia', 'Juvenília', 'Ladainha', 'Lagamar', 'Lagoa da Prata', 'Lagoa dos Patos', 'Lagoa Dourada', 'Lagoa Formosa', 'Lagoa Grande', 'Lagoa Santa', 'Lajinha', 'Lambari', 'Lamim', 'Laranjal', 'Lassance', 'Lavras'

];
