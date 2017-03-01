"use strict";
class InMemoryDataService {
    createDb() {
        let atividades = [
            {
                "titulo": "Palestra de abertura - \"A Internet das Coisas que eu posso criar\", por Intel",
                "descricao": "A nova moda na área de tecnologia é falar sobre a Internet das Coisas. Mas como fazer para começar? Que tal fazer você mesmo? Rubem Saldanha vai contar tudo o que a Intel está fazendo nesse novo tema e você terá uma visão de como você pode iniciar suas próprias descobertas nessa área. Se sobrar um tempinho, ele ainda vai falar sobre carreira na Intel.",
                "local": "Anfiteatro da Elétrica",
                "palestrantes": [{
                        "nome_palestrante": "Rubem Saldanha",
                        "foto_palestrante": "rubem-saldanha.jpg",
                        "cargo": "Gerente de Educação Superior da Intel",
                        "descricao": "Rubem Saldanha é gerente de educação superior da Intel Semicondutores do Brasil, formado em Ciências da Computação pela Universidade Federal de Mato Grosso (UFMT) e mestre em Novas Tecnologias Aplicadas ao Currículo pela PUC-SP. Rubem Saldanha trabalha com suporte ao desenvolvimento de atividades curriculares nas universidades brasileiras. Já trabalhou no Instituto Ayrton Senna, Microsoft e TV Cultura."
                    }],
                "empresa": "Intel",
                "tipo_atividade": "Palestra",
                "data_horario_inicio": "2016-09-19T11:00:00",
                "data_horario_fim": "2016-09-19T12:00:00",
                "dia_da_semana": "Segunda",
                "pontos": "500",
                "quantidade_vagas": "175"
            },
            {
                "titulo": "Internet das coisas na indústria – The Connected Enterprise, por Rockwell Automation",
                "descricao": "Na \"Internet of Things\" (IoT) , quase todos os objetos podem usar a tecnologia embarcada para recolher e transmitir informações. Uma pílula que pode realizar a análise médica, uma auto estrada que pode oferecer orientação sobre o tráfego e máquinas no chão de fábrica que podem gerenciar o controle de qualidade e uso de energia. A conexão acelerada de tecnologia de operações (OT) para a tecnologia da informação (TI) permite a colaboração sem precedentes em toda a empresa, processos e instalações conectados aos fornecedores e clientes de novas maneiras. Fabricantes, operadores industriais e fabricantes de máquinas podem tirar vantagem da tomada de decisão em tempo real e impulsionar a rentabilidade – TODAVIA, eles também enfrentam novos desafios em obter os dados e infra-estrutura que está subjacente a essa oportunidade.",
                "local": "Anfiteatro da Elétrica",
                "palestrantes": [{
                        "nome_palestrante": "Marcelo Crivelaro",
                        "foto_palestrante": "marcelo-crivelaro.jpg",
                        "cargo": "Líder de Desenvolvimento de Negócios e Supervisão da Rockwell Automation",
                        "descricao": "Mestre em Inteligência Artificial aplicada a automação e MBA em International Industrial Management. Experiência de 10 anos em relevantes empresas de automação industrial, passando pelas áreas de treinamento, gerenciamento de projetos, marketing e gerência de vendas."
                    }],
                "empresa": "Rockwell Automation",
                "tipo_atividade": "Palestra",
                "data_horario_inicio": "2016-09-19T17:00:00",
                "data_horario_fim": "2016-09-19T18:00:00",
                "dia_da_semana": "Segunda",
                "pontos": "500",
                "quantidade_vagas": "175"
            },
            {
                "titulo": "\"Internet das Coisas: você está preparado para aproveitar essa oportunidade?\", por V2COM",
                "descricao": "A Internet das Coisas, ou IoT, promete revolucionar e dramaticamente alterar grandes setores da economia, como manufatura, energia, agricultura, transportes entre outros para atingir quase dois terços do PIB global. Novas tecnologias de comunicações e segurança endereçam desafios de conectividade, identificação e habilitam novas aplicações que não eram possíveis há pouco tempo - as expectativas estão altas e ainda não há vencedores. Venha conhecer o que é necessário para ter sucesso com IoT e prepare-se para aproveitar essa oportunidade.",
                "local": "Anfiteatro da Elétrica",
                "palestrantes": [{
                        "nome_palestrante": "Guilherme Spina",
                        "foto_palestrante": "guilherme-spina.png",
                        "cargo": "Fundador e CEO da V2COM",
                        "descricao": "Por mais de 15 anos, Guilherme Spina tem trabalhado no desenvolvimento de negócios baseados em tecnologia. Foi gerente de serviços móveis de dados da Claro, onde foi responsável pelo desenvolvimento de novos serviços de dados, aproveitando a infra-estrutura de rede. Também atuou como consultor da Monitor Company, em projetos para empresas de telecomunicações e TI. Spina tem Bacharelado em Engenharia Elétrica pela Escola Politécnica da Universidade de São Paulo e participou do programa Owner / President Management (OPM) da Harvard Business School."
                    }],
                "empresa": "V2COM",
                "tipo_atividade": "Palestra",
                "data_horario_inicio": "2016-09-19T13:00:00",
                "data_horario_fim": "2016-09-19T14:00:00",
                "dia_da_semana": "Segunda",
                "pontos": "200",
                "quantidade_vagas": "175"
            },
            {
                "titulo": "Engenharia de Software na atualidade, por Radix",
                "descricao": "Em breve mais informações.",
                "local": "Anfiteatro da Elétrica",
                "palestrantes": [{
                        "nome_palestrante": "Maurício Miele",
                        "foto_palestrante": "mauricio-miele.jpg",
                        "cargo": "Sócio-fundador da Radix",
                        "descricao": ""
                    }],
                "empresa": "Radix",
                "tipo_atividade": "Palestra",
                "data_horario_inicio": "2016-09-20T15:00:00",
                "data_horario_fim": "2016-09-20T16:30:00",
                "dia_da_semana": "Terca",
                "pontos": "200",
                "quantidade_vagas": "175"
            },
            {
                "titulo": "\"Estrutura e oportunidades no Mercado de Energia\", por Profº Dorel Ramos",
                "descricao": "A partir de 1995 iniciou-se um processo de reestruturação do setor de energia, sendo que uma das principias consequências foi a desverticalização de toda a cadeia produtiva: geração, transmissão, distribuição e comercialização. Nessa palestra, o Prof. Dr. Dorel Ramos, um dos principais nomes em Mercado de Energia no Brasil, falará das principais características e dificuldades desse comércio.",
                "local": "Anfiteatro da Elétrica",
                "palestrantes": [{
                        "nome_palestrante": "Prof. Dorel Ramos",
                        "foto_palestrante": "dorel-ramos.jpg",
                        "cargo": "Consultor e Professor na Escola Politécnica da USP",
                        "descricao": "Possui graduação em Engenharia Elétrica pela Universidade de São Paulo (1975), mestrado em Engenharia Elétrica pela Universidade de São Paulo (1988) e doutorado em Engenharia Elétrica pela Universidade de São Paulo (1996). Atualmente é Consultor do Grupo EDP Energias do Brasil, onde exerceu cargo de Diretor de Regulação até Março de 2009, tendo sido ainda Diretor Comercial (Aquisição de Energia) e de Regulação das Distribuidoras Bandeirante Energia / Escelsa (Espírito Santo) e Enersul (Mato Grosso do Sul), pertencentes ao mesmo Grupo Empresarial, além de Diretor de Regulação da Holding EDP Energias do Brasil. É Professor Doutor do Departamento de Engenharia de Energia e Automação Elétricas da Escola Politécnica da Universidade de São Paulo e Sócio Administrador da MRTS Consultoria e Engenharia Ltda. Tem atuado principalmente nos seguintes temas: planejamento de sistemas elétricos, regulação do setor elétrico, comercialização de energia e análise de riscos, geração de energia elétrica e modelagem institucional do setor elétrico."
                    }],
                "empresa": "",
                "tipo_atividade": "Palestra",
                "data_horario_inicio": "2016-09-20T17:00:00",
                "data_horario_fim": "2016-09-20T18:00:00",
                "dia_da_semana": "Terca",
                "pontos": "100",
                "quantidade_vagas": "175"
            },
            {
                "titulo": "Panorama sobre Computação Paralela, por Intel",
                "descricao": "Essa palestra será uma introdução geral ao coprocessador Intel Xeon Phi. Os participantes aprenderão sobre a arquitetura, a infraestrutura de softwares, modelos de programação suportados, e programação e análise de OpenMP e MPI. É importantíssimo participar dessa atividade, caso você pretenda fazer o Workshop da Intel.",
                "local": "Anfiteatro da Elétrica",
                "palestrantes": [{
                        "nome_palestrante": "Silvio Luiz Stanzani",
                        "foto_palestrante": "silvio-stanzani.jpg",
                        "cargo": "Pesquisador",
                        "descricao": "Silvio Luiz é pesquisador do Núcleo de Computação Científica da Universidade Estadual Paulista - UNESP trabalhando no projeto de Code Modernization da Intel que tem como objetivo disseminar conhecimento sobre programação paralela. Tem doutorado em ciência na Escola Politécnica da Universidade de São Paulo e Mestrado na Universidade Católica de Santos. Tem experiencia em desenvolvimento de Software focando em programação paralela e distributed computing desde 2005."
                    }],
                "empresa": "Intel",
                "tipo_atividade": "Palestra",
                "data_horario_inicio": "2016-09-21T11:00:00",
                "data_horario_fim": "2016-09-21T13:00:00",
                "dia_da_semana": "Quarta",
                "pontos": "225",
                "quantidade_vagas": "175"
            },
            {
                "titulo": "Primeiros passos para uma carreira acelerada em tecnologia, por Contratado",
                "descricao": "Vai dar os primeiros passos na sua carreira na área de tecnologia? Sentindo-se um pouco perdido em relação a salários, tipos de empresas e linguagens/tecnologias para priorizar? A Contratado é uma plataforma de recrutamento online na qual já foram feitas 4 mil ofertas a devs e outros profissionais de tecnologia. Analisando esses dados, eles compilaram algumas dicas matadoras e irão apresentar o caminho das pedras pra você começar sua carreira com o pé direito e explorar todo o seu potencial.",
                "local": "Anfiteatro da Elétrica",
                "palestrantes": [{
                        "nome_palestrante": "Lucas Mendes",
                        "foto_palestrante": "lucas-mendes.jpg",
                        "cargo": "Cofundador da Contratado",
                        "descricao": "Formado em Engenharia pela Escola Politécnica da USP e Ecole Polytechnique, e com MBA em Stanford, Lucas teve passagens por consultoria estratégica (Bain e Co.) e banco de investimento (Goldman Sachs) antes de decidir dedicar sua carreira à construção de start-ups de tecnologia. Em 2014 co-fundou a Contratado.ME, plataforma de recrutamento online focada em talentos de tecnologia."
                    }],
                "empresa": "Contratado",
                "tipo_atividade": "Palestra",
                "data_horario_inicio": "2016-09-22T11:00:00",
                "data_horario_fim": "2016-09-22T12:00:00",
                "dia_da_semana": "Quinta",
                "pontos": "200",
                "quantidade_vagas": "175"
            },
            {
                "titulo": "Engenharia baseada em idéias \"esquisitas\": introdução à Computação Quântica, por Professor Paulo Nussenzveig",
                "descricao": "Com a inexorável tendência à miniaturização de processadores de informação, em acordo com a chamada “Lei de Moore”, o tamanho de transistores individuais se aproxima da escala atômica.  Nessa escala, as leis da física clássica não fornecem boa descrição dos processos naturais, sendo necessário recorrer à física quântica. Isso é problemático ou pode trazer vantagens? Como veremos nessa palestra, o processamento quântico de informação pode trazer ganhos de eficiência em relação ao processamento usando lógica clássica. Faremos uma introdução qualitativa aos “ingredientes” quânticos que podem abrir novos caminhos para a computação e apresentaremos as perspectivas que estão abertas.",
                "local": "Anfiteatro da Elétrica",
                "palestrantes": [{
                        "nome_palestrante": "Professor Paulo Nussenzveig",
                        "foto_palestrante": "paulo-nussen.jpeg",
                        "cargo": "Professor do Instituto de Física da USP",
                        "descricao": "Bacharel em Física pela Pontifícia Universidade Católica do Rio de Janeiro (1988), Mestre em Física pela Pontifícia Universidade Católica do Rio de Janeiro (1990) e Doutor em \"Physique Quantique\" - Université de Paris VI (Pierre et Marie Curie), École Normale Supérieure (1994). Livre-docente pela Universidade de São Paulo (2002). Professor Visitante na Cornell University no ano de 2012. É membro do \"International Council\" da OSA (Optical Society). É Topical Editor da revista Optics Letters e Editor Associado do Brazilian Journal of Physics. É professor titular (MS-6) no Instituto de Física da Universidade de São Paulo. Atualmente é presidente da Comissão de Pós-Graduação e Coordenador do Programa de Pós-Graduação do Instituto de Física da USP. Suas áreas de interesse são Ótica Quântica, Física Atômica e Informação Quântica."
                    }],
                "empresa": "",
                "tipo_atividade": "Palestra",
                "data_horario_inicio": "2016-09-22T17:00:00",
                "data_horario_fim": "2016-09-22T18:00:00",
                "dia_da_semana": "Quinta",
                "pontos": "100",
                "quantidade_vagas": "175"
            },
            {
                "titulo": "Os novos modelos de computação da NVIDIA",
                "descricao": "Nessa palestra serão abordadas as tecnologias mais recentes da NVIDIA, como Deep Learning, Machine Learning, AI, VR, novos SDKs e a plataforma TESLA.",
                "local": "Anfiteatro da Elétrica",
                "palestrantes": [{
                        "nome_palestrante": "Pedro Mário Silva",
                        "foto_palestrante": "pedro-mario-silva.jpg",
                        "cargo": "Arquiteto de Soluções da NVIDIA",
                        "descricao": "Arquiteto de soluções da NVIDIA, bacharel e mestre em otimização combinatória em matemática pela Universidade Federal de Pernambuco (UFPE) e doutor em computação gráfica (Informática) pela Universidade Pontifícia do Rio de Janeiro (PUC-Rio). Atua há mais de 15 anos no segmento de pesquisa e desenvolvimento de sistemas para a indústria de óleo e gás, sendo os últimos 8 anos como gerente do grupo de geofísica computacional. Possui certificados em metodologias ágeis para o desenvolvimento de sistemas, com foco em inovação tecnológica."
                    }],
                "empresa": "NVIDIA",
                "tipo_atividade": "Palestra",
                "data_horario_inicio": "2016-09-23T11:00:00",
                "data_horario_fim": "2016-09-23T12:00:00",
                "dia_da_semana": "Sexta",
                "pontos": "200",
                "quantidade_vagas": "175"
            },
            {
                "titulo": "Oficina de construção de irrigador maker automático, por MundoMaker",
                "descricao": "O MundoMaker convida você a participar de uma oficina maker para construção de um irrigador de plantas automático programado por computador e construído com sensores e placa arduino.",
                "local": "Sala de Estudos do CEE",
                "palestrantes": [{
                        "nome_palestrante": "Fabio Zsigmond",
                        "foto_palestrante": "fabio-zsigmond.jpg",
                        "cargo": "Cofundador do MundoMaker",
                        "descricao": "É formado em Administração e é um empreendedor que trabalhou mais de 25 anos com varejo e tecnologia. Nos últimos 4 anos dedica-se a sua paixão: tecnologia e educação. Além do MundoMaker ele também trabalha no Projeto Ancora (www.projetoancora.org.br), uma organização sem fins lucrativos que oferece uma educação inovadora de excelente qualidade para crianças menos privilegiadas."
                    },
                    {
                        "nome_palestrante": "Orlando Lobosco",
                        "foto_palestrante": "orlando-lobosco.jpg",
                        "cargo": "Fundador do MundoMaker",
                        "descricao": "Representante do movimento Do It Yourself, começou com projetos tecnológicos em sua garagem. Cursou arquitetura na FAU USP e tornou-se ModelMaker autodidata, produzindo maquetes para arquitetura e efeitos especiais para cinema. Posteriormente, cursou filosofia na USP tornando-se um Maker-educador. Foi coordenador tecnológico do ateliê Tempo e Espaço, desenvolvendo e aperfeiçoando a metodologia pedagógica praticada naquela empresa."
                    },
                    {
                        "nome_palestrante": "Sergio Valverde",
                        "foto_palestrante": "sergio-valverde.jpg",
                        "cargo": "Físico",
                        "descricao": "Bacharel em física formado pelo instituto de Física da Universidade de São Paulo iniciou sua pós-graduação no LHC. Dedica seu tempo conciliando técnicas de aeromodelismo, eletrônica, arduino e design thinking no universo maker."
                    }],
                "empresa": "MundoMaker",
                "tipo_atividade": "Workshop",
                "data_horario_inicio": "2016-09-19T14:00:00",
                "data_horario_fim": "2016-09-19T16:30:00",
                "dia_da_semana": "Segunda",
                "pontos": "80",
                "quantidade_vagas": "16"
            },
            {
                "titulo": "\"Tecnologias em agronegócio\", por J. Assy",
                "descricao": "J. Assy é especialista em soluções tecnológicas para o agronegócio do gerenciamento perfeito da dosagem de sementes ao monitoramento do plantio. Nesse workshop, os participantes terão que solucionar alguns problemas que eles já passaram na criação de seus produtos utilizando conceitos de engenharia eletrônica. No final, a empresa mostrará como solucionaram e avaliarão as solções propostas.",
                "local": "Labsoft",
                "palestrantes": [{
                        "nome_palestrante": "",
                        "foto_palestrante": "",
                        "cargo": "",
                        "descricao": ""
                    }],
                "empresa": "J. Assy",
                "tipo_atividade": "Workshop",
                "data_horario_inicio": "2016-09-20T14:00:00",
                "data_horario_fim": "2016-09-20T16:00:00",
                "dia_da_semana": "Terca",
                "pontos": "100",
                "quantidade_vagas": "15"
            },
            {
                "titulo": "IPv6, por NIC.br - parte 1",
                "descricao": "Esse é um mini curso introdutório, abordando porque o IPv6 é necessário na Internet, o status de sua implantação no Brasil, as principais diferenças técnicas em relação ao IPv4. O curso inclui como tópicos o endereçamento e planejamento de redes IPv6 e alguns experimentos práticos em laboratório virtualizado.",
                "local": "Labsoft",
                "palestrantes": [{
                        "nome_palestrante": "Antonio M. Moreiras",
                        "foto_palestrante": "antonio-moreira.png",
                        "cargo": "Gerente de Desenvolvimento e Projetos da NIC.br",
                        "descricao": "Antonio M. Moreiras é gerente de desenvolvimento e projetos no NIC.br, onde coordena o IPv6.br, uma iniciativa para a disseminação do novo protocolo Internet no país. É responsável também por outras iniciativas ligadas à infraestrutura da Internet. Moreiras é engenheiro eletricista e mestre em engenharia pela POLI/USP, com MBA pela UFRJ."
                    }],
                "empresa": "NIC.br",
                "tipo_atividade": "Workshop",
                "data_horario_inicio": "2016-09-20T08:30:00",
                "data_horario_fim": "2016-09-20T11:30:00",
                "dia_da_semana": "Terca",
                "pontos": "80",
                "quantidade_vagas": "19"
            },
            {
                "titulo": "IPv6, por NIC.br - parte 2",
                "descricao": "(continuação do dia anterior) Esse é um mini curso introdutório, abordando porque o IPv6 é necessário na Internet, o status de sua implantação no Brasil, as principais diferenças técnicas em relação ao IPv4. O curso inclui como tópicos o endereçamento e planejamento de redes IPv6 e alguns experimentos práticos em laboratório virtualizado.",
                "local": "Labsoft",
                "palestrantes": [{
                        "nome_palestrante": "",
                        "foto_palestrante": "antonio-moreira.png",
                        "cargo": "Gerente de Desenvolvimento e Projetos da NIC.br",
                        "descricao": "Antonio M. Moreiras é gerente de desenvolvimento e projetos no NIC.br, onde coordena o IPv6.br, uma iniciativa para a disseminação do novo protocolo Internet no país. É responsável também por outras iniciativas ligadas à infraestrutura da Internet. Moreiras é engenheiro eletricista e mestre em engenharia pela POLI/USP, com MBA pela UFRJ."
                    }],
                "empresa": "NIC.br",
                "tipo_atividade": "Workshop",
                "data_horario_inicio": "2016-09-21T08:30:00",
                "data_horario_fim": "2016-09-21T11:30:00",
                "dia_da_semana": "Quarta",
                "pontos": "10",
                "quantidade_vagas": "19"
            },
            {
                "titulo": "\"Arquitetura Intel Xeon e Xeon Phi\", por Intel",
                "descricao": "(É necessário ter comparecido à palestra \"Panorama sobre Computação Paralela\") Esse workshop é baseado nas informações aprendidas durante a palestra do dia anterior e fornece atividades práticas. Os participantes trabalharão em uma série de exercícios pré-definidos que engloba uma larga variedade de aspectos com o objetivo de ajudá-los a se familiarizar com a arquitetura do Intel Xeon Phi.",
                "local": "C1-10",
                "palestrantes": [{
                        "nome_palestrante": "Silvio Luiz Stanzani",
                        "foto_palestrante": "silvio-stanzani.jpg",
                        "cargo": "Pesquisador",
                        "descricao": "Silvio Luiz é pesquisador do Núcleo de Computação Científica da Universidade Estadual Paulista - UNESP trabalhando no projeto de Code Modernization da Intel que tem como objetivo disseminar conhecimento sobre programação paralela. Tem doutorado em ciência na Escola Politécnica da Universidade de São Paulo e Mestrado na Universidade Católica de Santos. Tem experiencia em desenvolvimento de Software focando em programação paralela e distributed computing desde 2005."
                    }],
                "empresa": "Intel",
                "tipo_atividade": "Workshop",
                "data_horario_inicio": "2016-09-21T14:00:00",
                "data_horario_fim": "2016-09-21T17:00:00",
                "dia_da_semana": "Quarta",
                "pontos": "125",
                "quantidade_vagas": "16"
            },
            {
                "titulo": "Introdução ao Multisim e Ultiboard: Captura de esquemático, simulação e layout PCB, por National Instruments",
                "descricao": "O seminário prático de Multisim e Ultiboard apresenta o ambiente integrado de captura e simulação Multisim e Ultiboard. Aprenda como construir um esquema e avaliar o desempenho de circuitos básicos, através de simulação interativa e análises utilizando instrumentos virtuais. Você aprenderá a projetar e simular circuitos simples, prontos para ser transferido para o layout da placa. Os tópicos abordados serão as características da interface de usuário Multisim, usar Multisim para capturar esquemas de circuito, usar simulação interativa para verificar seu projeto, usar instrumentos virtuais e análises, transferir seu projeto ao software de layout PCB, Introdução ao NI Ultiboard",
                "local": "C1-10",
                "palestrantes": [{
                        "nome_palestrante": "Professor Newton Braga",
                        "foto_palestrante": "newton-braga.jpg",
                        "cargo": "Professor e autor de livros técnicos",
                        "descricao": "Newton Carvalho Braga é um dos maiores especialistas em eletronica do Brasil. Dirigiu revistas como \"Eletrônica Zotal\" e \"Êxperiencias e Brincadeiras com Eletronica\". Publicou 140 livros, sendo boa parte no exterior, como EUA Turquia e China. Coordena o Instituto Newton C. Braga e leciona Tecnologia Eletrônica e Telecomunicações."
                    }],
                "empresa": "National Instruments",
                "tipo_atividade": "Workshop",
                "data_horario_inicio": "2016-09-22T08:30:00",
                "data_horario_fim": "2016-09-22T11:00:00",
                "dia_da_semana": "Quinta",
                "pontos": "80",
                "quantidade_vagas": "16"
            },
            {
                "titulo": "\"Alternative Transient Program (ATP)\", por Professor Giovanni Manassero Junior",
                "descricao": "O software ATP (Alternative Transients Program) é um programa gratuito de simulação de transitórios eletromagnéticos em sistemas elétricos de potência, sendo um dos programas mais utilizados para a análise de redes de energia elétrica. Nesse hands on, será apresentada uma aplicação básica dele na análise de curtos-circuitos em um sistema de transmissão real.",
                "local": "Sala Energia",
                "palestrantes": [{
                        "nome_palestrante": "Professor Giovanni Manassero Junior",
                        "foto_palestrante": "giovanni-manassero.jpg",
                        "cargo": "Professor da Escola Politécnica da USP",
                        "descricao": "Possui graduação (1999), mestrado (2001) e doutorado (2006) em Engenharia Elétrica pela Escola Politécnica da Universidade de São Paulo (EPUSP), com ênfase em Sistemas de Potência. Atualmente é Professor Doutor da EPUSP, integra o Grupo de Pesquisa do Laboratório de Pesquisa em Proteção de Sistemas Elétricos da EPUSP e desenvolve projetos de pesquisa na área de Proteção, Controle e Automação de Sistemas Elétricos de Potência. Tem experiência na área de Engenharia Elétrica, com ênfase em Medição, Controle, Correção e Proteção de Sistemas Elétricos de Potência, atuando principalmente nos seguintes temas: proteção de sistemas elétricos de transmissão e redes de distribuição, localização de faltas em linhas de transmissão, localização de faltas em redes de distribuição, faltas de alta-impedância, automação da distribuição e redes elétricas inteligentes (Smart Grids)."
                    }],
                "empresa": "",
                "tipo_atividade": "Workshop",
                "data_horario_inicio": "2016-09-23T08:30:00",
                "data_horario_fim": "2016-09-23T10:30:00",
                "dia_da_semana": "Sexta",
                "pontos": "80",
                "quantidade_vagas": "16"
            },
            {
                "titulo": "Visita Técnica à Caterpillar",
                "descricao": "A visita a Caterpillar contará com uma recepção e coffee break para os alunos assim que chegarem ao local, seguida de uma apresentação institucional da Caterpillar e uma palestra ministrada por Frederico Balloni - Supervisor de Engenharia. Por final, um Plant Tour e encerramento.",
                "local": "Caterpillar (Piracicaba)",
                "palestrantes": [{
                        "nome_palestrante": "Frederico Balloni",
                        "foto_palestrante": "",
                        "cargo": "Supervisor de Engenharia da Caterpillar",
                        "descricao": ""
                    }],
                "empresa": "Caterpillar",
                "tipo_atividade": "Visita técnica",
                "data_horario_inicio": "2016-09-19T07:30:00",
                "data_horario_fim": "2016-09-19T13:30:00",
                "dia_da_semana": "Segunda",
                "pontos": "50",
                "quantidade_vagas": "40"
            },
            {
                "titulo": "Exposição - \"Óculos de Realidade Virtual\", por Professor Marcelo Zuffo",
                "descricao": "Realidade virtual é uma tecnologia com o objetivo de recriar ao máximo a sensação de realidade para um indivíduo, levando-o a adotar essa interação como uma de suas realidades temporais. Nessa exposição Prof. Dr. Marcelo Zuffo irá mostrar, no vão do prédio da Engenharia Elétrica, um Óculos de Realidade Virtual feito pelo Departamento de Engenharia de Sistemas Eletrônicos da Poli.",
                "local": "Vão da Elétrica",
                "palestrantes": [{
                        "nome_palestrante": "Professor Marcelo Zuffo",
                        "foto_palestrante": "marcelo-zuffo.jpg",
                        "cargo": "Professor da Escola Politécnica da USP",
                        "descricao": "Engenheiro Eletricista (1989), mestre em Engenharia Elétrica (1993), doutor em Engenharia Elétrica (1997) e livre-docência na especialidade Meios Eletrônicos Interativos (2001), é Professor Titular (2006) junto ao Depto. de Engenharia de Sistemas Eletrônicos da Escola Politécnica da Universidade de São Paulo. Tem atuado junto ao Laboratório de Sistemas Integráveis (LSI) coordenando pesquisas e desenvolvimentos na área de Meios Eletrônicos Interativos ,com foco nos seguintes temas: engenharia de meios interativos, saúde digital, computação de alto desempenho, realidade virtual, computação gráfica, e visualização. Em 2001 desenvolveu o primeiro sistema de realidade virtual totalmente imersivo no Brasil denominada CAVERNA Digital. É coordenador científico do LEA (Laboratório de Ensaios e Auditoria) da ICP Brasil. Desde 2011 Coordena o Centro Interdisciplinar em Tecnologias Interativas da USP."
                    }],
                "empresa": "",
                "tipo_atividade": "Outros",
                "data_horario_inicio": "2016-09-19T09:00:00",
                "data_horario_fim": "2016-09-19T13:00:00",
                "dia_da_semana": "Segunda",
                "pontos": "",
                "quantidade_vagas": ""
            },
            {
                "titulo": "Exposição - \"Óculos de Realidade Virtual\", por Professor Marcelo Zuffo",
                "descricao": "Realidade virtual é uma tecnologia com o objetivo de recriar ao máximo a sensação de realidade para um indivíduo, levando-o a adotar essa interação como uma de suas realidades temporais. Nessa exposição Prof. Dr. Marcelo Zuffo irá mostrar, no vão do prédio da Engenharia Elétrica, um Óculos de Realidade Virtual feito pelo Departamento de Engenharia de Sistemas Eletrônicos da Poli.",
                "local": "Vão da Elétrica",
                "palestrantes": [{
                        "nome_palestrante": "",
                        "foto_palestrante": "",
                        "cargo": "Professor da Escola Politécnica da USP",
                        "descricao": "Engenheiro Eletricista (1989), mestre em Engenharia Elétrica (1993), doutor em Engenharia Elétrica (1997) e livre-docência na especialidade Meios Eletrônicos Interativos (2001), é Professor Titular (2006) junto ao Depto. de Engenharia de Sistemas Eletrônicos da Escola Politécnica da Universidade de São Paulo. Tem atuado junto ao Laboratório de Sistemas Integráveis (LSI) coordenando pesquisas e desenvolvimentos na área de Meios Eletrônicos Interativos ,com foco nos seguintes temas: engenharia de meios interativos, saúde digital, computação de alto desempenho, realidade virtual, computação gráfica, e visualização. Em 2001 desenvolveu o primeiro sistema de realidade virtual totalmente imersivo no Brasil denominada CAVERNA Digital. É coordenador científico do LEA (Laboratório de Ensaios e Auditoria) da ICP Brasil. Desde 2011 Coordena o Centro Interdisciplinar em Tecnologias Interativas da USP."
                    }],
                "empresa": "",
                "tipo_atividade": "Outros",
                "data_horario_inicio": "2016-09-21T09:00:00",
                "data_horario_fim": "2016-09-21T13:00:00",
                "dia_da_semana": "Quarta",
                "pontos": "",
                "quantidade_vagas": ""
            },
            {
                "titulo": "Talk: Empreendendo na Engenharia",
                "descricao": "Você já se imaginou abrindo o seu negócio? Gostaria de ter uma noção mais real do que um empreendedor faz e das vantagens e dificuldades em empreender? Nessa atividade, 4 convidados empreendedores irão realizar um talk com os participantes, evidenciando não só os casos de sucesso, como também os que não deram certo e os aprendizados que eles trouxeram.",
                "local": "Anfiteatro da Elétrica",
                "palestrantes": [{
                        "nome_palestrante": "Camila Achutti",
                        "foto_palestrante": "camila-achutti.jpg",
                        "cargo": "Fundadora e CTO da MasterTech",
                        "descricao": "Camila Achutti é Influenciadora digital na FIAP, onde esta liderando projetos como a Semana da Mulher na Tecnologia e a Maratona de Aplicativos. É co-fundadora do Ponte 21, uma consultoria de inovação que promove a conexão da tecnologia com as pessoas, fundadora do blog Mulheres na Computação e embaixadora do Technovation Challenge Brasil. Formada em Ciência da Computação pelo IME-USP e também mestranda pela mesma instituição, estagiou no Google em Mountain View e decidiu voltar para o Brasil fazer o que ama: mostrar o poder de transformação da tecnologia e empreendedorismo. Seu trabalho como evangelizadora do poder da tecnologia vem sendo reconhecido nacionalmente e internacionalmente por exemplo com a premiação inédita para uma latina no prêmio Women of Vision 2015 - categoria Student."
                    },
                    {
                        "nome_palestrante": "Cileneu Nunes",
                        "foto_palestrante": "cileneu-nunes.jpg",
                        "cargo": "Fundador e CEO da UPAYA",
                        "descricao": "Cileneu Nunes é engenheiro Eletrônico formado na Escola Politécnica da USP em 1979, bacharel em Administração de Empresas na FEA-USP e possui um extenso curriculo profissional, acumulando diversas experiênicas como empreendedor. Cileneu foi presidente da Omnilink, sócio fundador da Skylink Paging e Amplus Informática, já foi gerente geral de Marketing da Scopus e hoje é CEO da Upaya Desenvolvimento e Consultoria."
                    },
                    {
                        "nome_palestrante": "Renato Tano",
                        "foto_palestrante": "renato-tano.jpg",
                        "cargo": "Diretor da Taqtile",
                        "descricao": "blabla"
                    },
                    {
                        "nome_palestrante": "Victor Lazarte",
                        "foto_palestrante": "victor-lazarte.jpg",
                        "cargo": "Fundador e CEO da TFG",
                        "descricao": "Formado em Engenharia pela POLI e pela École Centrale de Paris. Iniciou a carreira no banco de investimentos JP Morgan em Londres, de onde saiu em 2011 para realizar um sonho: fundar a TFG junto de seu irmão. A TFG é uma das maiores empresas de games mobile do mundo e ultrapassou a marca de 500 milhões de downloads."
                    }],
                "empresa": "",
                "tipo_atividade": "Outros",
                "data_horario_inicio": "2016-09-20T13:00:00",
                "data_horario_fim": "2016-09-20T15:00:00",
                "dia_da_semana": "Terca",
                "pontos": "125",
                "quantidade_vagas": "80"
            },
            {
                "titulo": "Mesa Redonda - \"A Engenharia e a Ciência por trás das Ondas Gravitacionais\", por Ethevaldo Siqueira, Professor João Zuffo e Professor Yuda Goldman",
                "descricao": "Diariamente, questões importantes da Ciência são discutidas. Diante da descoberta experimental de ondas gravitacionais, no ano passado - um século depois da Teoria da Relatividade Geral de Albert Einsten tê-las previsto -, surge uma nova questão: seremos capazes de utilizar esse conhecimento para a Engenharia? Contamos com 3 ilustres convidados - um Físico, um Engenheiro e um Comunicador - para debater essa e outras questões referentes aos limites da aplicação prática das descobertas da Física, numa discussão regada a conhecimento histórico.",
                "local": "Anfiteatro da Elétrica",
                "palestrantes": [{
                        "nome_palestrante": "Ethevaldo Siqueira",
                        "foto_palestrante": "ethevaldo-siqueira.jpg",
                        "cargo": "Jornalista e Comentarista da CBN",
                        "descricao": "Ethevaldo Mello de Siqueira (1932) é um jornalista brasileiro, sendo ainda escritor e consultor especializado em telecomunicações, eletrônica de entretenimento e novas tecnologias da informação. Atualmente comentarista da rádio CBN.Foi colunista do jornal O Estado de S. Paulo de 1967 a 2012. Ganhou Prêmio José Reis de Divulgação Científica e Tecnológica, do CNPq (1985), Prêmio Telesp de Telecomunicações (1979), Prêmio Ministério das Comunicações de Telecomunicações (1974), duas versões do Prêmio Esso de Jornalismo (1968 e 1978), Prêmio Comunique-se de 2007 (Jornalista de Tecnologia). Participa do Júri do Prêmio Embratel de Jornalismo desde o ano 2001. Foi professor de Tecnologia da Informação e Telemática do Curso de Jornalismo da Escola de Comunicações e Artes (ECA), da Universidade de São Paulo (USP), de 1986 a 1996. Fundou e dirigiu as Revistas RNT (Revista Nacional de Telecomunicações (de 1979 até abril de 2001) e TelePress Latinoamérica (de 1991 a abril de 2001)."
                    },
                    {
                        "nome_palestrante": "João Zuffo",
                        "foto_palestrante": "joao-zuffo.jpg",
                        "cargo": "Professor da Escola Politécnica da USP",
                        "descricao": "João Zuffo Possui graduação em Engenharia Eletrônica pela Universidade de São Paulo (1963) e doutorado em Engenharia Elétrica pela Universidade de São Paulo (1968). Atualmente é professor aposentado pela Universidade de São Paulo. Tem experiência na área de Engenharia Elétrica, com ênfase em Circuitos Eletrônicos."
                    },
                    {
                        "nome_palestrante": "Iuda Goldman",
                        "foto_palestrante": "iuda-goldman.jpg",
                        "cargo": "Professor do Instituto de Física da USP",
                        "descricao": "Iuda Dawid Goldman possui graduação em Engenheiro Mecânico Eletricista Bacharel Em Física pela Universidade de São Paulo (1955) , doutorado em Física pela Universidade de São Paulo (1973) , pos-doutorado pela Lawrence Berkeley Laboratory (1994) e pos-doutorado pela Faculté de Sciences D'orsay (1974) . Atualmente é professor titular da Universidade de São Paulo e professor titular da Lawrence Berkeley Laboratory. Tem experiência na área de Física , com ênfase em Física Nuclear."
                    }],
                "empresa": "",
                "tipo_atividade": "Outros",
                "data_horario_inicio": "2016-09-21T17:00:00",
                "data_horario_fim": "2016-09-21T19:00:00",
                "dia_da_semana": "Quarta",
                "pontos": "125",
                "quantidade_vagas": "175"
            },
            {
                "titulo": "Exposição - Acura Global",
                "descricao": "Em breve mais informações.",
                "local": "Vão da Elétrica",
                "palestrantes": [{
                        "nome_palestrante": "",
                        "foto_palestrante": "",
                        "cargo": "",
                        "descricao": ""
                    }],
                "empresa": "Acura Global",
                "tipo_atividade": "Outros",
                "data_horario_inicio": "2016-09-22T10:00:00",
                "data_horario_fim": "2016-09-22T14:00:00",
                "dia_da_semana": "Quinta",
                "pontos": "",
                "quantidade_vagas": ""
            },
            {
                "titulo": "Exposição - Acura Global",
                "descricao": "Em breve mais informações",
                "local": "Vão da Elétrica",
                "palestrantes": [{
                        "nome_palestrante": "",
                        "foto_palestrante": "",
                        "cargo": "",
                        "descricao": ""
                    }],
                "empresa": "Acura Global",
                "tipo_atividade": "Outros",
                "data_horario_inicio": "2016-09-23T10:00:00",
                "data_horario_fim": "2016-09-23T14:00:00",
                "dia_da_semana": "Sexta",
                "pontos": "",
                "quantidade_vagas": ""
            },
            {
                "titulo": "\"Ciclo de Gerenciamento de Projeto + Case de Sucesso\", por ClearSale",
                "descricao": "WORKSHOP: Vamos bater um papo sobre a concepção de um Projeto de TI, planejamento, desenvolvimento e, principalmente, como é o relacionamento com profissionais das outras áreas. Aprender como um desenvolver trabalha na prática. VISITA TÉCNICA: Um tour pela ClearSale passando por todas as áreas impactadas pela TI, mostrando como é o dia a dia.  Cronograma do dia: Apresentação em nosso salão, Tour pela ClearSale, Bate-papo com a área de TI, Happy Hour na Clear + Sorteio de brinde",
                "local": "Sede da ClearSale",
                "palestrantes": [{
                        "nome_palestrante": "Felipe Faria",
                        "foto_palestrante": "felipe-faria.jpeg",
                        "cargo": "Engenheiro da ClearSale",
                        "descricao": "Tem 32 anos, é carioca e mora em São Paulo há 6 anos. Pós graduado em Qualidade de Software e MBA em Engenharia de Software Orientada para Serviços - SOA."
                    }],
                "empresa": "ClearSale",
                "tipo_atividade": "Visita técnica",
                "data_horario_inicio": "2016-09-22T14:00:00",
                "data_horario_fim": "2016-09-22T18:00:00",
                "dia_da_semana": "Quinta",
                "pontos": "150",
                "quantidade_vagas": "40"
            },
            {
                "titulo": "Lightning Talk - Revelações na Engenharia",
                "descricao": "Inspirado nas palestras no estilo TED, o Flash Talk é um espaço destinado a alunos da Escola Politécnica para falarem, de 10 a 15 minutos, ideias que merecem ser compartilhadas. Nele ouviremos politécnicos, despidos de sua categoria de aluno, relatarem experiências de vida, projetos de que participaram e impressões sobre o futuro na Engenharia.",
                "local": "Anfiteatro da Elétrica",
                "palestrantes": [{
                        "nome_palestrante": "",
                        "foto_palestrante": "",
                        "cargo": "",
                        "descricao": ""
                    }],
                "empresa": "",
                "tipo_atividade": "Outros",
                "data_horario_inicio": "2016-09-23T13:00:00",
                "data_horario_fim": "2016-09-23T14:30:00",
                "dia_da_semana": "Sexta",
                "pontos": "100",
                "quantidade_vagas": "175"
            }
        ];
        return { atividades };
    }
}
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map