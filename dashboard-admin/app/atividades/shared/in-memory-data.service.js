"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var atividades = [
            {
                "id": "1",
                "titulo": "Palestra de abertura - \"A Internet das Coisas que eu posso criar\", por Intel",
                "descricao": "A nova moda na área de tecnologia é falar sobre a Internet das Coisas. Mas como fazer para começar? Que tal fazer você mesmo? Rubem Saldanha vai contar tudo o que a Intel está fazendo nesse novo tema e você terá uma visão de como você pode iniciar suas próprias descobertas nessa área. Se sobrar um tempinho, ele ainda vai falar sobre carreira na Intel.",
                "local": "Anfiteatro da Elétrica",
                "tipo": "Palestra",
                "visivel": true,
                "inicioInscricao": "2017-02-20T11:20:00-03:00",
                "terminoInscricao": "2017-02-22T11:23:59-03:00",
                "inicioAtividade": "2017-09-18T11:00:00-03:00",
                "terminoAtividade": "2017-09-18T12:00:00-03:00",
                "pontos": "500",
                "vagas": "175",
                "confirmed": false
            },
            {
                "id": "2",
                "titulo": "Internet das coisas na indústria – The Connected Enterprise, por Rockwell Automation",
                "descricao": "Na \"Internet of Things\" (IoT) , quase todos os objetos podem usar a tecnologia embarcada para recolher e transmitir informações. Uma pílula que pode realizar a análise médica, uma auto estrada que pode oferecer orientação sobre o tráfego e máquinas no chão de fábrica que podem gerenciar o controle de qualidade e uso de energia. A conexão acelerada de tecnologia de operações (OT) para a tecnologia da informação (TI) permite a colaboração sem precedentes em toda a empresa, processos e instalações conectados aos fornecedores e clientes de novas maneiras. Fabricantes, operadores industriais e fabricantes de máquinas podem tirar vantagem da tomada de decisão em tempo real e impulsionar a rentabilidade – TODAVIA, eles também enfrentam novos desafios em obter os dados e infra-estrutura que está subjacente a essa oportunidade.",
                "local": "Anfiteatro da Elétrica",
                "tipo": "Palestra",
                "visivel": true,
                "inicioInscricao": "2017-09-03T11:20:00-03:00",
                "terminoInscricao": "2017-09-17T11:23:59-03:00",
                "inicioAtividade": "2017-09-18T17:00:00-03:00",
                "terminoAtividade": "2017-09-18T18:00:00-03:00",
                "pontos": "500",
                "vagas": "175",
                "confirmed": false
            },
            {
                "id": "3",
                "titulo": "\"Internet das Coisas: você está preparado para aproveitar essa oportunidade?\", por V2COM",
                "descricao": "A Internet das Coisas, ou IoT, promete revolucionar e dramaticamente alterar grandes setores da economia, como manufatura, energia, agricultura, transportes entre outros para atingir quase dois terços do PIB global. Novas tecnologias de comunicações e segurança endereçam desafios de conectividade, identificação e habilitam novas aplicações que não eram possíveis há pouco tempo - as expectativas estão altas e ainda não há vencedores. Venha conhecer o que é necessário para ter sucesso com IoT e prepare-se para aproveitar essa oportunidade.",
                "local": "Anfiteatro da Elétrica",
                "tipo": "Palestra",
                "visivel": true,
                "inicioInscricao": "2017-09-03T11:20:00-03:00",
                "terminoInscricao": "2017-09-17T11:23:59-03:00",
                "inicioAtividade": "2017-09-18T13:00:00-03:00",
                "terminoAtividade": "2017-09-18T14:00:00-03:00",
                "pontos": "200",
                "vagas": "175",
                "confirmed": false
            },
            {
                "id": "4",
                "titulo": "Engenharia de Software na atualidade, por Radix",
                "descricao": "Em breve mais informações.",
                "local": "Anfiteatro da Elétrica",
                "tipo": "Palestra",
                "visivel": true,
                "inicioInscricao": "2017-09-03T11:20:00-03:00",
                "terminoInscricao": "2017-09-17T11:23:59-03:00",
                "inicioAtividade": "2017-09-19T15:00:00-03:00",
                "terminoAtividade": "2017-09-19T16:30:00-03:00",
                "pontos": "200",
                "vagas": "175",
                "confirmed": false
            },
            {
                "id": "5",
                "titulo": "\"Estrutura e oportunidades no Mercado de Energia\", por Profº Dorel Ramos",
                "descricao": "A partir de 1995 iniciou-se um processo de reestruturação do setor de energia, sendo que uma das principias consequências foi a desverticalização de toda a cadeia produtiva: geração, transmissão, distribuição e comercialização. Nessa palestra, o Prof. Dr. Dorel Ramos, um dos principais nomes em Mercado de Energia no Brasil, falará das principais características e dificuldades desse comércio.",
                "local": "Anfiteatro da Elétrica",
                "tipo": "Palestra",
                "visivel": true,
                "inicioInscricao": "2017-09-03T11:20:00-03:00",
                "terminoInscricao": "2017-09-17T11:23:59-03:00",
                "inicioAtividade": "2017-09-19T17:00:00-03:00",
                "terminoAtividade": "2017-09-19T18:00:00-03:00",
                "pontos": "100",
                "vagas": "175",
                "confirmed": false
            },
            {
                "id": "6",
                "titulo": "Panorama sobre Computação Paralela, por Intel",
                "descricao": "Essa palestra será uma introdução geral ao coprocessador Intel Xeon Phi. Os participantes aprenderão sobre a arquitetura, a infraestrutura de softwares, modelos de programação suportados, e programação e análise de OpenMP e MPI. É importantíssimo participar dessa atividade, caso você pretenda fazer o Workshop da Intel.",
                "local": "Anfiteatro da Elétrica",
                "tipo": "Palestra",
                "visivel": true,
                "inicioInscricao": "2017-09-03T11:20:00-03:00",
                "terminoInscricao": "2017-09-17T11:23:59-03:00",
                "inicioAtividade": "2017-09-20T11:00:00-03:00",
                "terminoAtividade": "2017-09-20T13:00:00-03:00",
                "pontos": "225",
                "vagas": "175",
                "confirmed": false
            },
            {
                "id": "7",
                "titulo": "Primeiros passos para uma carreira acelerada em tecnologia, por Contratado",
                "descricao": "Vai dar os primeiros passos na sua carreira na área de tecnologia? Sentindo-se um pouco perdido em relação a salários, tipos de empresas e linguagens/tecnologias para priorizar? A Contratado é uma plataforma de recrutamento online na qual já foram feitas 4 mil ofertas a devs e outros profissionais de tecnologia. Analisando esses dados, eles compilaram algumas dicas matadoras e irão apresentar o caminho das pedras pra você começar sua carreira com o pé direito e explorar todo o seu potencial.",
                "local": "Anfiteatro da Elétrica",
                "tipo": "Palestra",
                "visivel": true,
                "inicioInscricao": "2017-09-03T11:20:00-03:00",
                "terminoInscricao": "2017-09-17T11:23:59-03:00",
                "inicioAtividade": "2017-09-21T11:00:00-03:00",
                "terminoAtividade": "2017-09-21T12:00:00-03:00",
                "pontos": "200",
                "vagas": "175",
                "confirmed": false
            },
            {
                "id": "8",
                "titulo": "Engenharia baseada em idéias \"esquisitas\": introdução à Computação Quântica, por Professor Paulo Nussenzveig",
                "descricao": "Com a inexorável tendência à miniaturização de processadores de informação, em acordo com a chamada “Lei de Moore”, o tamanho de transistores individuais se aproxima da escala atômica.  Nessa escala, as leis da física clássica não fornecem boa descrição dos processos naturais, sendo necessário recorrer à física quântica. Isso é problemático ou pode trazer vantagens? Como veremos nessa palestra, o processamento quântico de informação pode trazer ganhos de eficiência em relação ao processamento usando lógica clássica. Faremos uma introdução qualitativa aos “ingredientes” quânticos que podem abrir novos caminhos para a computação e apresentaremos as perspectivas que estão abertas.",
                "local": "Anfiteatro da Elétrica",
                "tipo": "Palestra",
                "visivel": true,
                "inicioInscricao": "2017-09-03T11:20:00-03:00",
                "terminoInscricao": "2017-09-17T11:23:59-03:00",
                "inicioAtividade": "2017-09-21T17:00:00-03:00",
                "terminoAtividade": "2017-09-21T18:00:00-03:00",
                "pontos": "100",
                "vagas": "175",
                "confirmed": true
            },
            {
                "id": "9",
                "titulo": "Os novos modelos de computação da NVIDIA",
                "descricao": "Nessa palestra serão abordadas as tecnologias mais recentes da NVIDIA, como Deep Learning, Machine Learning, AI, VR, novos SDKs e a plataforma TESLA.",
                "local": "Anfiteatro da Elétrica",
                "tipo": "Palestra",
                "visivel": true,
                "inicioInscricao": "2017-09-03T11:20:00-03:00",
                "terminoInscricao": "2017-09-17T11:23:59-03:00",
                "inicioAtividade": "2017-09-22T11:00:00-03:00",
                "terminoAtividade": "2017-09-22T12:00:00-03:00",
                "pontos": "200",
                "vagas": "175",
                "confirmed": true
            },
            {
                "id": "10",
                "titulo": "Oficina de construção de irrigador maker automático, por MundoMaker",
                "descricao": "O MundoMaker convida você a participar de uma oficina maker para construção de um irrigador de plantas automático programado por computador e construído com sensores e placa arduino.",
                "local": "Sala de Estudos do CEE",
                "tipo": "Workshop",
                "visivel": true,
                "inicioInscricao": "2017-09-03T11:20:00-03:00",
                "terminoInscricao": "2017-09-17T11:23:59-03:00",
                "inicioAtividade": "2017-09-18T14:00:00-03:00",
                "terminoAtividade": "2017-09-18T16:30:00-03:00",
                "pontos": "80",
                "vagas": "16",
                "confirmed": true
            },
            {
                "id": "11",
                "titulo": "\"Tecnologias em agronegócio\", por J. Assy",
                "descricao": "J. Assy é especialista em soluções tecnológicas para o agronegócio do gerenciamento perfeito da dosagem de sementes ao monitoramento do plantio. Nesse workshop, os participantes terão que solucionar alguns problemas que eles já passaram na criação de seus produtos utilizando conceitos de engenharia eletrônica. No final, a empresa mostrará como solucionaram e avaliarão as solções propostas.",
                "local": "Labsoft",
                "tipo": "Workshop",
                "visivel": true,
                "inicioInscricao": "2017-09-03T11:20:00-03:00",
                "terminoInscricao": "2017-09-17T11:23:59-03:00",
                "inicioAtividade": "2017-09-19T14:00:00-03:00",
                "terminoAtividade": "2017-09-19T16:00:00-03:00",
                "pontos": "",
                "vagas": "15",
                "confirmed": true
            },
            {
                "id": "12",
                "titulo": "IPv6, por NIC.br - parte 1",
                "descricao": "Esse é um mini curso introdutório, abordando porque o IPv6 é necessário na Internet, o status de sua implantação no Brasil, as principais diferenças técnicas em relação ao IPv4. O curso inclui como tópicos o endereçamento e planejamento de redes IPv6 e alguns experimentos práticos em laboratório virtualizado.",
                "local": "Labsoft",
                "tipo": "Workshop",
                "visivel": true,
                "inicioInscricao": "2017-09-03T11:20:00-03:00",
                "terminoInscricao": "2017-09-17T11:23:59-03:00",
                "inicioAtividade": "2017-09-19T08:30:00-03:00",
                "terminoAtividade": "2017-09-19T11:30:00-03:00",
                "pontos": "80",
                "vagas": "19",
                "confirmed": false
            },
            {
                "id": "13",
                "titulo": "IPv6, por NIC.br - parte 2",
                "descricao": "(continuação do dia anterior) Esse é um mini curso introdutório, abordando porque o IPv6 é necessário na Internet, o status de sua implantação no Brasil, as principais diferenças técnicas em relação ao IPv4. O curso inclui como tópicos o endereçamento e planejamento de redes IPv6 e alguns experimentos práticos em laboratório virtualizado.",
                "local": "Labsoft",
                "tipo": "Workshop",
                "visivel": true,
                "inicioInscricao": "2017-09-03T11:20:00-03:00",
                "terminoInscricao": "2017-09-17T11:23:59-03:00",
                "inicioAtividade": "2017-09-20T08:30:00-03:00",
                "terminoAtividade": "2017-09-20T11:30:00-03:00",
                "pontos": "10",
                "vagas": "19",
                "confirmed": true
            },
            {
                "id": "14",
                "titulo": "\"Arquitetura Intel Xeon e Xeon Phi\", por Intel",
                "descricao": "(É necessário ter comparecido à palestra \"Panorama sobre Computação Paralela\") Esse workshop é baseado nas informações aprendidas durante a palestra do dia anterior e fornece atividades práticas. Os participantes trabalharão em uma série de exercícios pré-definidos que engloba uma larga variedade de aspectos com o objetivo de ajudá-los a se familiarizar com a arquitetura do Intel Xeon Phi.",
                "local": "C1-10",
                "tipo": "Workshop",
                "visivel": true,
                "inicioInscricao": "2017-09-03T11:20:00-03:00",
                "terminoInscricao": "2017-09-17T11:23:59-03:00",
                "inicioAtividade": "2017-09-20T14:00:00-03:00",
                "terminoAtividade": "2017-09-20T17:00:00-03:00",
                "pontos": "125",
                "vagas": "16",
                "confirmed": true
            },
            {
                "id": "15",
                "titulo": "Introdução ao Multisim e Ultiboard: Captura de esquemático, simulação e layout PCB, por National Instruments",
                "descricao": "O seminário prático de Multisim e Ultiboard apresenta o ambiente integrado de captura e simulação Multisim e Ultiboard. Aprenda como construir um esquema e avaliar o desempenho de circuitos básicos, através de simulação interativa e análises utilizando instrumentos virtuais. Você aprenderá a projetar e simular circuitos simples, prontos para ser transferido para o layout da placa. Os tópicos abordados serão as características da interface de usuário Multisim, usar Multisim para capturar esquemas de circuito, usar simulação interativa para verificar seu projeto, usar instrumentos virtuais e análises, transferir seu projeto ao software de layout PCB, Introdução ao NI Ultiboard",
                "local": "C1-10",
                "tipo": "Workshop",
                "visivel": true,
                "inicioInscricao": "2017-09-03T11:20:00-03:00",
                "terminoInscricao": "2017-09-17T11:23:59-03:00",
                "inicioAtividade": "2017-09-21T08:30:00-03:00",
                "terminoAtividade": "2017-09-21T11:00:00-03:00",
                "pontos": "80",
                "vagas": "16",
                "confirmed": false
            },
            {
                "id": "16",
                "titulo": "\"Alternative Transient Program (ATP)\", por Professor Giovanni Manassero Junior",
                "descricao": "O software ATP (Alternative Transients Program) é um programa gratuito de simulação de transitórios eletromagnéticos em sistemas elétricos de potência, sendo um dos programas mais utilizados para a análise de redes de energia elétrica. Nesse hands on, será apresentada uma aplicação básica dele na análise de curtos-circuitos em um sistema de transmissão real.",
                "local": "Sala Energia",
                "tipo": "Workshop",
                "visivel": true,
                "inicioInscricao": "2017-09-03T11:20:00-03:00",
                "terminoInscricao": "2017-09-17T11:23:59-03:00",
                "inicioAtividade": "2017-09-22T08:30:00-03:00",
                "terminoAtividade": "2017-09-22T10:30:00-03:00",
                "pontos": "80",
                "vagas": "16",
                "confirmed": true
            },
            {
                "id": "17",
                "titulo": "Visita Técnica à Caterpillar",
                "descricao": "A visita a Caterpillar contará com uma recepção e coffee break para os alunos assim que chegarem ao local, seguida de uma apresentação institucional da Caterpillar e uma palestra ministrada por Frederico Balloni - Supervisor de Engenharia. Por final, um Plant Tour e encerramento.",
                "local": "Caterpillar (Piracicaba)",
                "tipo": "Visita técnica",
                "visivel": true,
                "inicioInscricao": "2017-09-03T11:20:00-03:00",
                "terminoInscricao": "2017-09-17T11:23:59-03:00",
                "inicioAtividade": "2017-09-18T07:30:00-03:00",
                "terminoAtividade": "2017-09-18T13:30:00-03:00",
                "pontos": "50",
                "vagas": "40",
                "confirmed": false
            },
            {
                "id": "18",
                "titulo": "Exposição - \"Óculos de Realidade Virtual\", por Professor Marcelo Zuffo",
                "descricao": "Realidade virtual é uma tecnologia com o objetivo de recriar ao máximo a sensação de realidade para um indivíduo, levando-o a adotar essa interação como uma de suas realidades temporais. Nessa exposição Prof. Dr. Marcelo Zuffo irá mostrar, no vão do prédio da Engenharia Elétrica, um Óculos de Realidade Virtual feito pelo Departamento de Engenharia de Sistemas Eletrônicos da Poli.",
                "local": "Vão da Elétrica",
                "tipo": "Outros",
                "visivel": true,
                "inicioInscricao": "2017-09-03T11:20:00-03:00",
                "terminoInscricao": "2017-09-17T11:23:59-03:00",
                "inicioAtividade": "2017-09-18T09:00:00-03:00",
                "terminoAtividade": "2017-09-18T13:00:00-03:00",
                "pontos": "",
                "vagas": "",
                "confirmed": false
            },
            {
                "id": "19",
                "titulo": "Exposição - \"Óculos de Realidade Virtual\", por Professor Marcelo Zuffo",
                "descricao": "Realidade virtual é uma tecnologia com o objetivo de recriar ao máximo a sensação de realidade para um indivíduo, levando-o a adotar essa interação como uma de suas realidades temporais. Nessa exposição Prof. Dr. Marcelo Zuffo irá mostrar, no vão do prédio da Engenharia Elétrica, um Óculos de Realidade Virtual feito pelo Departamento de Engenharia de Sistemas Eletrônicos da Poli.",
                "local": "Vão da Elétrica",
                "tipo": "Outros",
                "visivel": true,
                "inicioInscricao": "2017-09-03T11:20:00-03:00",
                "terminoInscricao": "2017-09-17T11:23:59-03:00",
                "inicioAtividade": "2017-09-20T09:00:00-03:00",
                "terminoAtividade": "2017-09-20T13:00:00-03:00",
                "pontos": "",
                "vagas": "",
                "confirmed": false
            },
            {
                "id": "20",
                "titulo": "Talk: Empreendendo na Engenharia",
                "descricao": "Você já se imaginou abrindo o seu negócio? Gostaria de ter uma noção mais real do que um empreendedor faz e das vantagens e dificuldades em empreender? Nessa atividade, 4 convidados empreendedores irão realizar um talk com os participantes, evidenciando não só os casos de sucesso, como também os que não deram certo e os aprendizados que eles trouxeram.",
                "local": "Anfiteatro da Elétrica",
                "tipo": "Outros",
                "visivel": true,
                "inicioInscricao": "2017-09-03T11:20:00-03:00",
                "terminoInscricao": "2017-09-17T11:23:59-03:00",
                "inicioAtividade": "2017-09-19T13:00:00-03:00",
                "terminoAtividade": "2017-09-19T15:00:00-03:00",
                "pontos": "125",
                "vagas": "80",
                "confirmed": true
            },
            {
                "id": "21",
                "titulo": "Mesa Redonda - \"A Engenharia e a Ciência por trás das Ondas Gravitacionais\", por Ethevaldo Siqueira, Professor João Zuffo e Professor Yuda Goldman",
                "descricao": "Diariamente, questões importantes da Ciência são discutidas. Diante da descoberta experimental de ondas gravitacionais, no ano passado - um século depois da Teoria da Relatividade Geral de Albert Einsten tê-las previsto -, surge uma nova questão: seremos capazes de utilizar esse conhecimento para a Engenharia? Contamos com 3 ilustres convidados - um Físico, um Engenheiro e um Comunicador - para debater essa e outras questões referentes aos limites da aplicação prática das descobertas da Física, numa discussão regada a conhecimento histórico.",
                "local": "Anfiteatro da Elétrica",
                "tipo": "Outros",
                "visivel": true,
                "inicioInscricao": "2017-09-03T11:20:00-03:00",
                "terminoInscricao": "2017-09-17T11:23:59-03:00",
                "inicioAtividade": "2017-09-20T17:00:00-03:00",
                "terminoAtividade": "2017-09-20T19:00:00-03:00",
                "pontos": "125",
                "vagas": "175",
                "confirmed": true
            },
            {
                "id": "22",
                "titulo": "Exposição - Acura Global",
                "descricao": "Em breve mais informações.",
                "local": "Vão da Elétrica",
                "tipo": "Outros",
                "visivel": true,
                "inicioInscricao": "2017-09-03T11:20:00-03:00",
                "terminoInscricao": "2017-09-17T11:23:59-03:00",
                "inicioAtividade": "2017-09-21T10:00:00-03:00",
                "terminoAtividade": "2017-09-21T14:00:00-03:00",
                "pontos": "",
                "vagas": "",
                "confirmed": true
            },
            {
                "id": "23",
                "titulo": "Exposição - Acura Global",
                "descricao": "Em breve mais informações",
                "local": "Vão da Elétrica",
                "tipo": "Outros",
                "visivel": true,
                "inicioInscricao": "2017-09-03T11:20:00-03:00",
                "terminoInscricao": "2017-09-17T11:23:59-03:00",
                "inicioAtividade": "2017-09-22T10:00:00-03:00",
                "terminoAtividade": "2017-09-22T14:00:00-03:00",
                "pontos": "",
                "vagas": "",
                "confirmed": true
            },
            {
                "id": "24",
                "titulo": "\"Ciclo de Gerenciamento de Projeto + Case de Sucesso\", por ClearSale",
                "descricao": "WORKSHOP: Vamos bater um papo sobre a concepção de um Projeto de TI, planejamento, desenvolvimento e, principalmente, como é o relacionamento com profissionais das outras áreas. Aprender como um desenvolver trabalha na prática. VISITA TÉCNICA: Um tour pela ClearSale passando por todas as áreas impactadas pela TI, mostrando como é o dia a dia.  Cronograma do dia: Apresentação em nosso salão, Tour pela ClearSale, Bate-papo com a área de TI, Happy Hour na Clear + Sorteio de brinde",
                "local": "Sede da ClearSale",
                "tipo": "Visita técnica",
                "visivel": true,
                "inicioInscricao": "2017-09-03T11:20:00-03:00",
                "terminoInscricao": "2017-09-17T11:23:59-03:00",
                "inicioAtividade": "2017-09-21T14:00:00-03:00",
                "terminoAtividade": "2017-09-21T18:00:00-03:00",
                "pontos": "150",
                "vagas": "40",
                "confirmed": true
            },
            {
                "id": "25",
                "titulo": "Lightning Talk - Revelações na Engenharia",
                "descricao": "Inspirado nas palestras no estilo TED, o Flash Talk é um espaço destinado a alunos da Escola Politécnica para falarem, de 10 a 15 minutos, ideias que merecem ser compartilhadas. Nele ouviremos politécnicos, despidos de sua categoria de aluno, relatarem experiências de vida, projetos de que participaram e impressões sobre o futuro na Engenharia.",
                "local": "Anfiteatro da Elétrica",
                "tipo": "Outros",
                "visivel": true,
                "inicioInscricao": "2017-09-03T11:20:00-03:00",
                "terminoInscricao": "2017-09-17T11:23:59-03:00",
                "inicioAtividade": "2017-09-22T13:00:00-03:00",
                "terminoAtividade": "2017-09-22T14:30:00-03:00",
                "pontos": "100",
                "vagas": "175",
                "confirmed": true
            }
        ];
        return { atividades: atividades };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map