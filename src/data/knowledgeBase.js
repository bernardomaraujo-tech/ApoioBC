export const KNOWLEDGE_BASE = [
  {
    id: "APR-001",
    title: "Delegação de aprovações bloqueadas",
    category: "Aprovações",
    aliases: [
      "delegar aprovação",
      "aprovação bloqueada",
      "substituto aprovador",
      "encomenda urgente aprovação",
      "não consigo aprovar",
      "aprovação em férias",
      "delegação de aprovação"
    ],
    keywords: ["aprovação", "delegar", "substituto", "workflow", "ausência"],
    errorPatterns: [],
    common: {
      problem:
        "Uma colaboradora ficou sem conseguir aprovar uma encomenda urgente por estar sem acesso às ferramentas necessárias.",
      solution:
        "Delegar temporariamente a aprovação para outro utilizador e garantir que existe substituto configurado no utilizador de aprovação.",
      steps: [
        "Aceder à encomenda no Business Central.",
        "Ir ao separador Aprovações e selecionar Delegar.",
        "Indicar o utilizador que irá assumir a aprovação.",
        "Verificar se a nova linha de aprovação foi criada com sucesso.",
        "Fazer F5 ou voltar à encomenda para confirmar que a delegação ficou ativa."
      ],
      notes: [
        "Garantir que na configuração do utilizador de aprovação está definida a pessoa substituta, especialmente em períodos de ausência planeada.",
        "Se existirem conflitos, como aprovações em duplicado ou funções sobrepostas, considerar passar a tarefa a outro colega direto."
      ]
    },
    agentOnly: {
      context:
        "Situação típica quando o aprovador titular está sem acesso ao equipamento, sem rede ou ausente.",
      cause:
        "Ausência de substituto configurado ou necessidade de delegação manual no documento em curso.",
      diagnosis: [
        "Confirmar quem é o aprovador pendente.",
        "Validar se existe substituto definido na Configuração Utilizador Aprovação.",
        "Confirmar se a delegação gera nova linha de aprovação."
      ],
      validation: [
        "Nova linha de aprovação criada com o utilizador substituto.",
        "Documento deixa de ficar bloqueado no aprovador original.",
        "O novo aprovador consegue concluir a tarefa."
      ],
      escalation:
        "Se a delegação não gerar nova linha ou houver conflito de workflow, escalar para o administrador de aprovações.",
      relatedCases: ["APR-002", "APR-003"]
    }
  },
  {
    id: "APR-002",
    title: "Team Approval em aprovações de venda",
    category: "Aprovações",
    aliases: [
      "team approval",
      "aprovação em grupo",
      "qualquer um pode aprovar",
      "workflow grupo",
      "aprovações em grupo"
    ],
    keywords: ["team approval", "workflow", "grupo", "aprovação"],
    errorPatterns: [],
    common: {
      problem:
        "Existe necessidade de permitir aprovações em grupo, em que qualquer elemento do grupo possa aprovar o pedido.",
      solution:
        "Usar Team Approval em grupos de utilizador de workflow com o mesmo número de sequência.",
      steps: [
        "Configurar o grupo de utilizadores de workflow.",
        "Garantir que todos os utilizadores do grupo têm o mesmo número de sequência.",
        "Ativar o Team Approval no grupo de utilizadores de workflow.",
        "Validar que basta uma aprovação para libertar o pedido."
      ],
      notes: [
        "Se todos os utilizadores do grupo tiverem o mesmo número, têm igual importância, sem hierarquia.",
        "Assim que um aprova, as restantes aprovações pendentes são automaticamente canceladas."
      ]
    },
    agentOnly: {
      context:
        "Útil quando não se pretende hierarquia entre vários aprovadores do mesmo passo.",
      cause:
        "O modelo de workflow exige flexibilidade para que qualquer elemento do grupo possa concluir o passo de aprovação.",
      diagnosis: [
        "Confirmar se o workflow usa Grupo de Utilizadores de Workflow.",
        "Validar se todos os membros têm o mesmo número de sequência.",
        "Confirmar se o Team Approval está ativo."
      ],
      validation: [
        "Uma única aprovação conclui o passo.",
        "As restantes linhas pendentes são anuladas.",
        "O documento é libertado sem nova intervenção do grupo."
      ],
      escalation:
        "Se o grupo não se comportar como aprovação coletiva, rever a configuração do workflow e a sequência dos utilizadores.",
      relatedCases: ["APR-001", "APR-003"]
    }
  },
  {
    id: "APR-003",
    title: "Delegações de aprovação por ausência do aprovador",
    category: "Aprovações",
    aliases: [
      "aprovador ausente",
      "delegação por ausência",
      "substituir aprovador",
      "férias aprovador",
      "pedido bloqueado aprovação"
    ],
    keywords: ["aprovação", "ausência", "substituto", "delegação"],
    errorPatterns: [],
    common: {
      problem:
        "Se o aprovador titular estiver ausente e não existir substituto, o pedido pode ficar bloqueado no sistema.",
      solution:
        "Configurar o substituto no utilizador de aprovação e delegar a aprovação quando necessário.",
      steps: [
        "Verificar nas configurações do utilizador se existe substituto definido em Substituir.",
        "Caso não exista, efetuar a configuração do substituto no código do aprovador ausente.",
        "Delegar a aprovação para o substituto, se necessário.",
        "Garantir que a aprovação é redirecionada e concluída sem bloqueios."
      ],
      notes: [
        "A delegação pode ser feita pelo utilizador que submete o pedido, pelo aprovador ou pelo gestor de aprovações."
      ]
    },
    agentOnly: {
      context:
        "Aplica-se quando o processo usa o aprovador designado na configuração Utilizador Aprovação.",
      cause:
        "O campo Substituir não está configurado ou a delegação não foi feita atempadamente.",
      diagnosis: [
        "Confirmar quem é o aprovador titular.",
        "Verificar se existe substituto definido.",
        "Validar se a aprovação pode ser delegada manualmente."
      ],
      validation: [
        "O pedido deixa de ficar bloqueado.",
        "A aprovação é redirecionada para o substituto correto."
      ],
      escalation:
        "Se a delegação não estiver disponível ou o workflow estiver inconsistente, escalar para administrador de aprovações.",
      relatedCases: ["APR-001", "APR-002"]
    }
  },
  {
    id: "PRE-001",
    title: "Erro ao criar lista de preços para instituições",
    category: "Preços",
    aliases: [
      "lista de preços",
      "preços e descontos",
      "erro tipo lista preços e descontos",
      "não consigo criar lista de preços",
      "lista de preços instituições",
      "apenas preços sem desconto"
    ],
    keywords: ["preços", "descontos", "lista", "instituições", "excel"],
    errorPatterns: ["Tipo lista Preços e Descontos não pode ser utilizado"],
    common: {
      problem:
        "Ao criar uma nova lista de preços para instituições surge erro porque a lista foi criada no modo preço e desconto em vez de apenas preço.",
      solution:
        "Criar uma nova lista configurada apenas como preço antes de inserir linhas.",
      steps: [
        "Criar a lista de preços.",
        "Antes de inserir qualquer linha, definir Ver coluna para apenas com preços.",
        "Não alterar esta configuração depois de inserir dados.",
        "Se usar Excel, manter apenas nº do produto, quantidade mínima e preço.",
        "Garantir a formatação correta dos preços com vírgula decimal.",
        "Importar, validar linhas e ativar a lista.",
        "Apagar listas antigas para evitar duplicação."
      ],
      notes: ["Evitar reaproveitar listas mal parametrizadas, para não introduzir inconsistências."]
    },
    agentOnly: {
      context:
        "O erro surge na criação ou alimentação de listas quando a tipologia da lista não é coerente com a utilização pretendida.",
      cause:
        "A lista foi criada com estrutura de preços e descontos, mas o processo exigia apenas preços.",
      diagnosis: [
        "Confirmar o valor de Ver coluna para na lista.",
        "Validar se já existem linhas carregadas.",
        "Confirmar se a importação Excel tem apenas as colunas necessárias."
      ],
      validation: [
        "A nova lista aceita linhas sem erro.",
        "Os preços ficam visíveis corretamente.",
        "A lista pode ser ativada sem bloqueios."
      ],
      escalation:
        "Se a lista continuar a falhar após recriação correta, validar estrutura de importação e eventual customização da página.",
      relatedCases: ["PRE-002"]
    }
  },
  {
    id: "FAT-001",
    title: "Faturar encomenda de venda - data de registo desatualizada",
    category: "Faturação",
    aliases: [
      "erro data de registo",
      "não consigo faturar",
      "erro ao faturar encomenda",
      "data de registo errada",
      "data de registo desatualizada"
    ],
    keywords: ["faturar", "data de registo", "configuração utilizador"],
    errorPatterns: [],
    common: {
      problem:
        "Ao tentar faturar uma encomenda de venda, o sistema bloqueia porque a data de registo do utilizador não está definida para o dia atual.",
      solution:
        "Atualizar a Data de Registo nas configurações do utilizador antes de faturar.",
      steps: [
        "Aceder a Configuração Utilizador.",
        "Verificar a Data de Registo.",
        "Caso esteja diferente do dia de hoje, atualizar para a data atual e guardar.",
        "Voltar a tentar faturar a encomenda."
      ],
      notes: ["Este é um dos bloqueios mais simples de resolver, mas é frequentemente esquecido."]
    },
    agentOnly: {
      context:
        "Surge tipicamente quando o utilizador esteve a trabalhar com datas anteriores ou com restrições de registo não atualizadas.",
      cause:
        "O documento está a ser registado fora da data permitida ou fora da data atual parametrizada no utilizador.",
      diagnosis: [
        "Confirmar a data corrente do sistema.",
        "Abrir Configuração Utilizador.",
        "Comparar a Data de Registo com a data pretendida para faturação."
      ],
      validation: [
        "A fatura passa a registar sem bloqueio de data.",
        "O utilizador consegue continuar o processo normal."
      ],
      escalation:
        "Se a data estiver correta e o erro persistir, validar períodos permitidos e restrições adicionais de registo.",
      relatedCases: ["FAT-002", "FAT-004"]
    }
  },
  {
    id: "FAT-002",
    title: "Faturar encomenda de venda - envio direto não associado à encomenda de compra",
    category: "Faturação",
    aliases: [
      "envio direto",
      "linha marcada como envio direto",
      "não associada a encomenda de compra",
      "erro envio direto faturar",
      "nº encomenda compra"
    ],
    keywords: ["envio direto", "faturação", "encomenda compra", "linha"],
    errorPatterns: ["A linha está marcada como envio direto e ainda não está associada a uma encomenda de compra"],
    common: {
      problem:
        "Ao tentar faturar, a linha está marcada como envio direto mas ainda não está associada à encomenda de compra correspondente.",
      solution:
        "Preencher os campos de associação da linha da encomenda de venda à encomenda de compra.",
      steps: [
        "Abrir a encomenda de venda e localizar a linha indicada no erro.",
        "Preencher o campo Nº Encomenda Compra com o número da encomenda de compra associada.",
        "Preencher o campo Nº Linha Enc. Compra com o número da linha correspondente.",
        "Guardar e pedir para voltar a tentar faturar."
      ],
      notes: ["Sem esta ligação, o sistema não consegue concluir o fluxo de envio direto."]
    },
    agentOnly: {
      context:
        "Afeta linhas de venda configuradas como envio direto quando a associação técnica à encomenda de compra não ficou preenchida.",
      cause:
        "Os campos de ligação entre venda e compra ficaram vazios ou foram perdidos durante o processo.",
      diagnosis: [
        "Confirmar a mensagem exata do erro.",
        "Validar se a linha está marcada como envio direto.",
        "Confirmar se Nº Encomenda Compra e Nº Linha Enc. Compra estão preenchidos."
      ],
      validation: [
        "A linha deixa de gerar erro.",
        "O documento pode ser faturado normalmente."
      ],
      escalation:
        "Se os campos forem repostos e o erro persistir, validar consistência da encomenda de compra de origem.",
      relatedCases: ["FAT-001"]
    }
  },
  {
    id: "VEN-001",
    title: "Consulta de vendas por cliente e produto",
    category: "Vendas",
    aliases: [
      "consultar vendas",
      "vendas por cliente",
      "vendas por produto",
      "quanto foi vendido",
      "linhas fatura venda registadas"
    ],
    keywords: ["vendas", "cliente", "produto", "nota de crédito", "fatura"],
    errorPatterns: [],
    common: {
      problem:
        "É necessário consultar as vendas já realizadas de um produto específico para um cliente, considerando também eventuais notas de crédito.",
      solution:
        "Usar Linhas Fatura Venda Registadas e Linhas Nota de Crédito Registadas com filtros por cliente e produto.",
      steps: [
        "Na pesquisa, abrir Linhas Fatura Venda Registadas.",
        "Filtrar por Venda-a Nr. Cliente.",
        "Filtrar por Nº do produto.",
        "Opcionalmente filtrar por Data de Registo.",
        "Repetir no menu Linhas Nota de Crédito Registadas com os mesmos filtros.",
        "Consolidar a informação: vendas líquidas = faturas - créditos."
      ],
      notes: ["O resultado final deve considerar saídas e eventuais devoluções/créditos."]
    },
    agentOnly: {
      context:
        "Consulta funcional para apurar vendas líquidas por cliente e produto.",
      cause:
        "Necessidade de análise comercial ou validação de histórico de movimentos.",
      diagnosis: [
        "Confirmar cliente e produto corretos.",
        "Confirmar período pretendido.",
        "Validar se existem notas de crédito associadas."
      ],
      validation: [
        "Foram apuradas as vendas registadas.",
        "Foram descontadas eventuais notas de crédito."
      ],
      escalation:
        "Se existirem divergências entre documentos registados e análise esperada, validar filtros adicionais ou documentos anulados.",
      relatedCases: []
    }
  },
  {
    id: "MOB-001",
    title: "Erro ao puxar envio na mobilidade por falta de email em vendedor/comprador",
    category: "Mobilidade",
    aliases: [
      "erro email vendedor",
      "falta email vendedor",
      "mobilidade envio email",
      "gc hc email",
      "e-mail tem que ter um valor em vendedor"
    ],
    keywords: ["mobilidade", "email", "vendedor", "comprador", "views"],
    errorPatterns: ["E-mail tem que ter um valor em Vendedor"],
    common: {
      problem:
        "Ao tentar puxar dados dos envios na mobilidade surge erro porque o vendedor/comprador indicado não tem email preenchido.",
      solution:
        "Preencher o campo E-mail na ficha do vendedor/comprador identificado no erro.",
      steps: [
        "Na pesquisa, procurar por Vendedores/Compradores.",
        "Abrir o registo com o código indicado no erro.",
        "No campo E-mail, introduzir o endereço correto.",
        "Guardar a ficha e voltar a puxar os dados em views."
      ],
      notes: ["Após este ajuste, o erro deixa de ocorrer e os dados podem ser consultados normalmente."]
    },
    agentOnly: {
      context:
        "Erro comum em integrações ou páginas de consulta que assumem dados obrigatórios no vendedor/comprador.",
      cause:
        "O código referenciado na mensagem não tem o email preenchido e a lógica da rotina exige esse valor.",
      diagnosis: [
        "Ler o código exato do vendedor na mensagem.",
        "Abrir a lista de Vendedores/Compradores.",
        "Validar se o campo E-mail está vazio."
      ],
      validation: [
        "A consulta volta a abrir sem erro.",
        "Os dados de envio ficam novamente acessíveis."
      ],
      escalation:
        "Se o email estiver preenchido e o erro persistir, validar cache da integração ou rotina que consome o registo.",
      relatedCases: []
    }
  },
  {
    id: "DIM-001",
    title: "Erro ao criar pedido de amostra por dimensão em falta",
    category: "Dimensões",
    aliases: [
      "pedido de amostra",
      "dimensão padrão não existe",
      "área gestão produto",
      "erro dimensão amostra",
      "amostra dimensão em falta"
    ],
    keywords: ["dimensão", "produto", "amostra", "área gestão produto"],
    errorPatterns: ["Dimensão Padrão não existe"],
    common: {
      problem:
        "Ao avançar com um pedido de amostra, o sistema indica que a dimensão padrão Área de Gestão do Produto não existe para o artigo.",
      solution:
        "Preencher a dimensão padrão correta na ficha do produto.",
      steps: [
        "Na pesquisa, procurar por Produtos.",
        "Abrir a ficha do produto referido na mensagem de erro.",
        "No separador Dimensões ou Dimensões Padrão, preencher o campo Área Gestão Produto com o valor correto.",
        "Guardar a ficha.",
        "Repetir a tentativa de criação do pedido de amostra."
      ],
      notes: ["Depois de preenchida a dimensão em falta, o sistema já permite avançar sem erros."]
    },
    agentOnly: {
      context:
        "Erro típico em produtos ou amostras criadas sem a parametrização dimensional mínima exigida pelo processo.",
      cause:
        "O artigo não tem a dimensão padrão obrigatória associada.",
      diagnosis: [
        "Validar o nº do artigo indicado na mensagem.",
        "Abrir Dimensões Padrão do produto.",
        "Confirmar ausência da dimensão AREA.GEST.PRODUTO ou equivalente local."
      ],
      validation: [
        "O documento passa a ser criado sem erro.",
        "A dimensão fica gravada no produto para utilizações futuras."
      ],
      escalation:
        "Se a dimensão estiver preenchida e o erro persistir, validar conflitos noutras dimensões obrigatórias.",
      relatedCases: ["DIM-004", "TRA-001"]
    }
  },
  {
    id: "LOG-001",
    title: "Produto não incluído nas recolhas por lotes bloqueados",
    category: "Logística",
    aliases: [
      "recolha não gera",
      "referência não disponível para envio",
      "lotes bloqueados",
      "produto não aparece na recolha",
      "envios não incluem referência"
    ],
    keywords: ["recolha", "lotes", "bloqueado", "envio", "validade", "reserva"],
    errorPatterns: [],
    common: {
      problem:
        "Uma referência não está a ser incluída nas recolhas ao gerar envios porque todos os lotes disponíveis estão bloqueados.",
      solution:
        "Validar lotes, reservas, validade e confirmar se os lotes estão marcados como bloqueados.",
      steps: [
        "Verificar o conteúdo de posição para confirmar disponibilidade.",
        "Validar a validade dos lotes.",
        "Confirmar que não existem reservas ativas.",
        "Abrir a lista de lotes disponíveis para a referência.",
        "Verificar a coluna Bloqueado.",
        "Regularizar o bloqueio dos lotes antes de gerar as recolhas."
      ],
      notes: ["Neste caso, as quantidades podem existir, mas não ficam elegíveis para seleção automática."]
    },
    agentOnly: {
      context:
        "Aplica-se quando a geração do envio não seleciona automaticamente a referência esperada.",
      cause:
        "Todos os lotes disponíveis estão marcados como bloqueados, mesmo com validade e disponibilidade corretas.",
      diagnosis: [
        "Confirmar referência e encomenda.",
        "Validar conteúdo de posição.",
        "Confirmar inexistência de reservas.",
        "Verificar estado Bloqueado dos lotes."
      ],
      validation: [
        "A referência passa a ser elegível para recolha.",
        "O envio volta a incluir o artigo."
      ],
      escalation:
        "Se os lotes não estiverem bloqueados e o problema persistir, validar regras adicionais de expedição ou disponibilidade por localização.",
      relatedCases: []
    }
  },
  {
    id: "DIM-002",
    title: "Erro de dimensões por qualificação de fornecedor e produto",
    category: "Dimensões",
    aliases: [
      "combinação de dimensões bloqueada",
      "qualif prod",
      "qualif forn",
      "fornecedor não qualificado",
      "erro qualificação fornecedor produto"
    ],
    keywords: ["dimensão", "qualificação", "fornecedor", "produto", "receção"],
    errorPatterns: ["A combinação de dimensões utilizada está bloqueada"],
    common: {
      problem:
        "Ao receber uma encomenda de compra, a combinação de dimensões utilizada está bloqueada porque o fornecedor ainda não está qualificado para aquele produto.",
      solution:
        "Reencaminhar o caso para a Qualidade para validação documental e qualificação do fornecedor para o produto.",
      steps: [
        "Confirmar a mensagem de erro na encomenda de compra.",
        "Validar que a causa é a qualificação do fornecedor para o produto.",
        "Reencaminhar o caso para a Qualidade.",
        "Aguardar a validação documental junto do comprador e do fornecedor.",
        "Após qualificação, repetir a receção."
      ],
      notes: [
        "A Logística não consegue resolver diretamente este caso.",
        "Até à qualificação, a encomenda fica bloqueada à receção."
      ]
    },
    agentOnly: {
      context:
        "Surge em receções de compra quando a combinação de dimensões deriva de qualificação de fornecedor/produto.",
      cause:
        "O fornecedor ainda não possui qualificação válida para fornecer aquele produto.",
      diagnosis: [
        "Confirmar o documento e linha afetados.",
        "Ler a combinação de dimensões indicada na mensagem.",
        "Validar junto da Qualidade e Compras se o fornecedor está qualificado."
      ],
      validation: [
        "O fornecedor fica devidamente qualificado para o produto.",
        "A receção pode prosseguir sem erro."
      ],
      escalation:
        "Escalar sempre para Qualidade quando a qualificação não estiver regularizada.",
      relatedCases: ["FOR-001"]
    }
  },
  {
    id: "VEN-002",
    title: "Erro de múltiplos de venda no produto",
    category: "Vendas",
    aliases: [
      "múltiplos de venda",
      "permitido apenas múltiplos de venda",
      "quantidade inválida produto",
      "erro múltiplos",
      "produto só vende múltiplos"
    ],
    keywords: ["múltiplos", "produto", "quantidade", "gestor de produto"],
    errorPatterns: ["Permitido apenas múltiplos de venda"],
    common: {
      problem:
        "O sistema bloqueia o registo porque o produto só permite quantidades que sejam múltiplos exatos do valor configurado.",
      solution:
        "Validar com o Gestor de Produto se pode alterar temporariamente o múltiplo para 1 ou ajustar a quantidade para um múltiplo válido.",
      steps: [
        "Identificar o múltiplo de venda configurado na ficha do artigo.",
        "Pedir ao Gestor de Produto a validação da alteração temporária, se necessário.",
        "Se aprovado, alterar temporariamente os múltiplos para 1.",
        "Efetuar o registo do documento.",
        "Repor o múltiplo original, se aplicável.",
        "Em alternativa, ajustar a quantidade para um múltiplo correto."
      ],
      notes: [
        "Se o Gestor de Produto não autorizar a alteração, o documento deve respeitar o múltiplo configurado."
      ]
    },
    agentOnly: {
      context:
        "Surge em documentos registados com quantidades que não respeitam o múltiplo mínimo configurado no artigo.",
      cause:
        "O artigo está configurado com múltiplos de venda obrigatórios.",
      diagnosis: [
        "Identificar o artigo e o múltiplo configurado.",
        "Confirmar a quantidade que está a ser registada.",
        "Validar com o Gestor de Produto se a exceção é admissível."
      ],
      validation: [
        "O documento passa a registar corretamente.",
        "A quantidade final respeita a regra ou foi autorizada exceção."
      ],
      escalation:
        "Escalar para Gestão de Produto sempre que seja necessário alterar temporariamente o múltiplo configurado.",
      relatedCases: []
    }
  },
  {
    id: "IMP-001",
    title: "Configuração de impressora no Business Central",
    category: "Impressão",
    aliases: [
      "configurar impressora",
      "printnode",
      "seleções impressora",
      "mapa impressora",
      "impressora online bc"
    ],
    keywords: ["impressora", "printnode", "mapa", "utilizador", "dimensões"],
    errorPatterns: [],
    common: {
      problem:
        "É necessário configurar uma nova impressora online para mapas específicos e validar dimensões de impressão.",
      solution:
        "Atualizar as impressoras PrintNode, associar a impressora ao mapa ou utilizador e validar o output com teste real.",
      steps: [
        "Abrir Insight Works PrintNode Printers.",
        "Executar Atualizar impressoras PrintNode.",
        "Ir a Seleções Impressora.",
        "Associar a impressora ao mapa e/ou ao utilizador.",
        "Pedir um teste de impressão ao utilizador.",
        "Se necessário, ajustar largura e altura nas definições da impressora."
      ],
      notes: [
        "É obrigatório validar sempre com uma impressão local se as dimensões de saída estão corretas."
      ]
    },
    agentOnly: {
      context:
        "Aplica-se a impressoras usadas apenas por alguns colegas e para mapas específicos.",
      cause:
        "A impressora ainda não está corretamente sincronizada ou associada ao mapa/utilizador.",
      diagnosis: [
        "Confirmar se a impressora aparece em PrintNode.",
        "Validar a Seleção Impressora para o mapa e/ou utilizador.",
        "Testar impressão real com o colega."
      ],
      validation: [
        "Os documentos passam a sair na impressora especificada.",
        "As dimensões de impressão ficam corretas."
      ],
      escalation:
        "Se a impressora não surgir ou imprimir fora do formato, validar o agente PrintNode e a parametrização local.",
      relatedCases: []
    }
  },
  {
    id: "FOR-001",
    title: "Fornecedor bloqueado por aprovação rejeitada ou pendente",
    category: "Fornecedores",
    aliases: [
      "fornecedor bloqueado",
      "aprovação fornecedor rejeitada",
      "fornecedor não deixa registar",
      "histórico aprovações fornecedor",
      "novo pedido de aprovação fornecedor"
    ],
    keywords: ["fornecedor", "bloqueado", "aprovação", "rejeitado", "pendente"],
    errorPatterns: [],
    common: {
      problem:
        "O fornecedor está bloqueado porque existem linhas de aprovação rejeitadas ou pendentes na ficha do fornecedor.",
      solution:
        "Consultar o histórico de aprovações do fornecedor e, se necessário, pedir novo pedido de aprovação.",
      steps: [
        "Abrir a ficha do fornecedor.",
        "Verificar se existe alguma nota de bloqueio.",
        "Aceder a Fornecedor > Aprovações.",
        "Consultar o histórico de linhas.",
        "Se houver rejeições, pedir novo pedido de aprovação.",
        "Se houver pendências, identificar o aprovador responsável."
      ],
      notes: [
        "Todos os novos fornecedores necessitam de aprovação concluída para estarem desbloqueados."
      ]
    },
    agentOnly: {
      context:
        "Surge quando o utilizador tenta registar documentos para um fornecedor ainda não aprovado.",
      cause:
        "Existem linhas rejeitadas ou pendentes no circuito de aprovação do fornecedor.",
      diagnosis: [
        "Confirmar na ficha do fornecedor se existe alguma nota de bloqueio.",
        "Marcar temporariamente o utilizador como Administrador de Aprovações, se necessário, para ganhar visibilidade.",
        "Abrir o histórico de aprovações do fornecedor."
      ],
      validation: [
        "Com novo pedido de aprovação concluído e aceite, o fornecedor fica desbloqueado.",
        "O utilizador passa a conseguir registar documentos relacionados."
      ],
      escalation:
        "Se o histórico não estiver visível ou existir incoerência de aprovação, escalar para administrador funcional das aprovações.",
      relatedCases: ["DIM-002", "USR-001"]
    }
  },
  {
    id: "PRO-001",
    title: "Erro no campo prazo de entrega do produto",
    category: "Produtos",
    aliases: [
      "prazo de entrega",
      "56d",
      "não aceita prazo entrega",
      "dias semanas meses produto",
      "erro prazo entrega"
    ],
    keywords: ["prazo entrega", "produto", "dias", "semanas", "meses"],
    errorPatterns: [],
    common: {
      problem:
        "Ao preencher o Prazo Entrega, o sistema não aceita apenas números porque é obrigatória a unidade de tempo.",
      solution:
        "Introduzir o valor com a respetiva unidade, por exemplo 56D para 56 dias.",
      steps: [
        "Abrir a ficha do produto.",
        "Localizar o campo Prazo Entrega.",
        "Introduzir o número acompanhado da unidade de tempo.",
        "Usar D para dias, S para semanas, M para meses, T para trimestres ou U para anos.",
        "Guardar a ficha."
      ],
      notes: [
        "Em vez de 56, deve ser colocado 56D.",
        "Para 8 semanas, deve ser colocado 8S."
      ]
    },
    agentOnly: {
      context:
        "Este erro surge quando o campo recebe apenas um valor numérico sem unidade.",
      cause:
        "O sistema exige um formato de duração com número + unidade temporal.",
      diagnosis: [
        "Confirmar o valor que foi introduzido.",
        "Validar o formato aceite pelo campo.",
        "Testar novamente com a unidade correta."
      ],
      validation: [
        "O campo passa a aceitar o valor.",
        "A ficha do produto grava sem bloqueios."
      ],
      escalation:
        "Se o valor com unidade continuar a falhar, validar se existe extensão ou validação adicional sobre o campo.",
      relatedCases: []
    }
  },
  {
    id: "APR-004",
    title: "Erro na aprovação da proposta de venda por gestor comercial não configurado",
    category: "Aprovações",
    aliases: [
      "erro aprovação proposta de venda",
      "gestor comercial indefinido",
      "não consigo enviar proposta para aprovação",
      "linha farma amb aprovação",
      "produto sem gestor comercial"
    ],
    keywords: ["proposta", "aprovação", "gestor comercial", "farma-amb"],
    errorPatterns: [],
    common: {
      problem:
        "Ao enviar uma proposta de venda para aprovação surge erro porque não existe configuração de gestor comercial para os produtos da linha em causa.",
      solution:
        "Pedir à área de negócio que caracterize corretamente a alocação do gestor comercial para esses produtos no cliente.",
      steps: [
        "Confirmar que a causa do erro é a ausência de gestor comercial associado.",
        "Pedir à área responsável para caracterizar a alocação correta do gestor comercial para os produtos FARMA-AMB no cliente.",
        "Após a atualização, voltar a pedir a aprovação da encomenda ou proposta."
      ],
      notes: [
        "O problema será resolvido após a devida caracterização e configuração do gestor comercial associado aos produtos em questão."
      ]
    },
    agentOnly: {
      context:
        "Surge em propostas de venda cuja linha de produtos depende de caracterização comercial no cliente.",
      cause:
        "Não existe gestor comercial corretamente configurado para a linha de produto envolvida.",
      diagnosis: [
        "Confirmar a proposta e os produtos em causa.",
        "Validar a alocação do gestor comercial no cliente.",
        "Verificar se o código atual cobre a área certa."
      ],
      validation: [
        "A proposta volta a ser enviada para aprovação com sucesso."
      ],
      escalation:
        "Se a parametrização comercial estiver correta e o erro persistir, validar workflow e regras de aprovação associadas à área de negócio.",
      relatedCases: ["APR-005", "TRA-001"]
    }
  },
  {
    id: "TRA-002",
    title: "Expandir kit expositor numa ordem de transferência",
    category: "Transferências",
    aliases: [
      "explode bom",
      "expandir kit",
      "kit expositor",
      "ordem de transferência kit",
      "explodir bom"
    ],
    keywords: ["kit", "explode bom", "transferência", "eventos"],
    errorPatterns: [],
    common: {
      problem:
        "É necessário visualizar e movimentar os artigos que compõem um kit dentro de uma ordem de transferência.",
      solution:
        "Usar a funcionalidade Explode BOM na linha do produto.",
      steps: [
        "Abrir a ordem de transferência associada ao evento.",
        "Localizar a linha do kit expositor.",
        "Selecionar a linha do produto.",
        "Ir a Funções > Explode BOM.",
        "Confirmar os artigos expandidos e as quantidades.",
        "Prosseguir com o processo normal de transferência/envio."
      ],
      notes: ["O sistema irá automaticamente expandir o kit, listando todos os artigos que o compõem."]
    },
    agentOnly: {
      context:
        "Aplica-se a kits comerciais ou de eventos que precisam de ser movimentados ao nível dos componentes.",
      cause:
        "O documento contém um kit/BOM que precisa de ser explodido para movimentação detalhada.",
      diagnosis: [
        "Confirmar se o artigo é um kit com BOM.",
        "Validar se a ordem de transferência permite Explode BOM na linha."
      ],
      validation: [
        "Os componentes passam a surgir na ordem.",
        "As quantidades ficam visíveis para validação e movimentação."
      ],
      escalation:
        "Se a função Explode BOM não estiver disponível, validar se o artigo está corretamente configurado como kit/BOM.",
      relatedCases: ["TRA-003"]
    }
  },
  {
    id: "FAT-003",
    title: "Correção do documento externo em fatura de venda registada",
    category: "Faturação",
    aliases: [
      "documento externo",
      "corrigir documento externo",
      "fatura registada documento externo",
      "atualizar documento",
      "número externo errado"
    ],
    keywords: ["fatura registada", "documento externo", "atualizar documento"],
    errorPatterns: [],
    common: {
      problem:
        "Foi emitida uma fatura de venda com o Documento Externo incorreto.",
      solution:
        "Usar a função Atualizar Documento na fatura registada para corrigir o campo Documento Externo.",
      steps: [
        "Abrir a fatura de venda já registada.",
        "Ir ao separador Base.",
        "Selecionar a opção Atualizar Documento.",
        "Corrigir o campo Documento Externo.",
        "Guardar a alteração.",
        "Confirmar que o número atualizado aparece corretamente."
      ],
      notes: [
        "A atualização será comunicada apenas no envio eletrónico diário."
      ]
    },
    agentOnly: {
      context:
        "Evita a necessidade de anular e reemitir a fatura quando a correção necessária está apenas no documento externo.",
      cause:
        "O campo Documento Externo foi preenchido incorretamente no momento do registo.",
      diagnosis: [
        "Confirmar que a fatura já está registada.",
        "Validar se a função Atualizar Documento está disponível.",
        "Confirmar o valor correto a inserir."
      ],
      validation: [
        "O Documento Externo passa a refletir o número correto.",
        "A atualização fica visível na vista da fatura."
      ],
      escalation:
        "Se o campo não permitir atualização ou a comunicação eletrónica exigir outro tratamento, validar com a equipa responsável pela integração fiscal.",
      relatedCases: []
    }
  },
  {
    id: "LOG-002",
    title: "Erro ao criar arrumação de produto por falta de posição fixa e padrão",
    category: "Logística",
    aliases: [
      "erro arrumação produto",
      "fixo e padrão",
      "conteúdo de posição",
      "produto desaparece na arrumação",
      "criar doc arrumação"
    ],
    keywords: ["arrumação", "posição", "fixo", "padrão", "armazém"],
    errorPatterns: [],
    common: {
      problem:
        "Ao criar uma arrumação, o sistema gera erro porque o produto não tem uma posição de armazém marcada como Fixo e Padrão.",
      solution:
        "Configurar uma posição correta no Conteúdo de Posição com as opções Fixo e Padrão ativas.",
      steps: [
        "Abrir a ficha do produto.",
        "Ir a Relacionado > Armazém > Conteúdo de Posição.",
        "Verificar se existe uma posição marcada como Fixo e Padrão.",
        "Se não existir, selecionar a posição correta e marcar essas opções.",
        "Voltar à Folha de Arrumação.",
        "Gerar novamente o documento de arrumação."
      ],
      notes: [
        "Após esta correção, é possível gerar novamente a arrumação sem erro."
      ]
    },
    agentOnly: {
      context:
        "Surge quando o artigo não tem parametrização mínima de armazém para geração da arrumação.",
      cause:
        "Não existe posição definida como Fixo e Padrão para o artigo.",
      diagnosis: [
        "Confirmar o artigo e a localização em causa.",
        "Abrir Conteúdo de Posição.",
        "Validar se existe linha ativa com Fixo e Padrão marcados."
      ],
      validation: [
        "A arrumação volta a ser gerada sem erro.",
        "O produto deixa de desaparecer do processo."
      ],
      escalation:
        "Se a posição estiver corretamente marcada e o erro persistir, validar regras adicionais da localização ou parametrização do artigo.",
      relatedCases: ["LOG-001"]
    }
  },
  {
    id: "FIN-001",
    title: "Erro ao registar recibo no diário de cobranças",
    category: "Financeiro",
    aliases: [
      "erro recibo",
      "diário de cobranças",
      "nºs recibo",
      "emitir recibo cliente",
      "não consigo registar recibo"
    ],
    keywords: ["recibo", "cliente", "pagamentos", "cobranças"],
    errorPatterns: ["Nºs Recibo tem de ter um valor em Configuração Vendas & Cobranças"],
    common: {
      problem:
        "Ao registar um recibo no diário de cobranças surge um erro relacionado com a numeração do recibo.",
      solution:
        "Validar a ficha do cliente e confirmar se a opção Emitir Recibo está ativa.",
      steps: [
        "Abrir a ficha do cliente.",
        "Ir ao separador Pagamentos.",
        "Confirmar se a opção Emitir Recibo está marcada.",
        "Se não estiver, ativar a opção.",
        "Guardar e voltar ao diário de cobranças.",
        "Tentar registar novamente o recibo."
      ],
      notes: ["Depois da parametrização correta, o sistema volta a atribuir numeração automaticamente."]
    },
    agentOnly: {
      context:
        "Este erro surge normalmente no momento do registo no diário de cobranças.",
      cause:
        "O cliente não está parametrizado para emissão de recibo, o que impede a atribuição automática do nº do recibo.",
      diagnosis: [
        "Confirmar que o erro ocorre no registo do diário.",
        "Abrir a ficha do cliente associado ao movimento.",
        "Validar o campo Emitir Recibo."
      ],
      validation: [
        "O recibo passa a ser registado sem erro.",
        "É atribuída numeração automática ao documento."
      ],
      escalation:
        "Se o campo Emitir Recibo estiver correto e o erro persistir, validar séries e Configuração Vendas & Cobranças.",
      relatedCases: []
    }
  },
  {
    id: "EXC-001",
    title: "Suplemento Excel do Business Central deixou de funcionar",
    category: "Excel",
    aliases: [
      "excel add in",
      "suplemento excel",
      "microsoft dynamics office add in",
      "excel business central não funciona",
      "ligação excel bc"
    ],
    keywords: ["excel", "add-in", "office add-in", "business central"],
    errorPatterns: [],
    common: {
      problem:
        "O suplemento do Excel utilizado para ligação ao Business Central deixou de funcionar, impedindo atualização ou exportação de dados.",
      solution:
        "Reinstalar ou reativar o Microsoft Dynamics Office Add-in e voltar a associar o servidor correto.",
      steps: [
        "Abrir o Excel.",
        "Ir a Base > Suplementos > Mais Suplementos.",
        "Se o suplemento já estiver instalado, removê-lo primeiro.",
        "Fechar e voltar a abrir o Excel.",
        "Pesquisar por Microsoft Dynamics Office Add-in e adicionar.",
        "Quando solicitado, indicar o URL https://exceladdinprovider.smb.dynamics.com."
      ],
      notes: ["Depois da reinstalação, a ligação ao Business Central volta a ser restabelecida automaticamente na maioria dos casos."]
    },
    agentOnly: {
      context:
        "Falha típica após atualização do Office, credenciais expiradas ou corrupção da ligação do add-in.",
      cause:
        "O suplemento deixou de estar corretamente instalado ou perdeu a associação ao servidor do Business Central.",
      diagnosis: [
        "Confirmar se o add-in aparece na lista do Excel.",
        "Validar se responde ao abrir um ficheiro ligado ao BC.",
        "Se necessário, remover e reinstalar o suplemento."
      ],
      validation: [
        "O suplemento volta a carregar no Excel.",
        "É possível atualizar ou publicar dados para o Business Central."
      ],
      escalation:
        "Se a reinstalação não resultar, validar permissões, conta Microsoft e política de suplementos da organização.",
      relatedCases: []
    }
  },
  {
    id: "USR-001",
    title: "Criação e configuração de novos utilizadores no Business Central",
    category: "Utilizadores",
    aliases: [
      "novo utilizador",
      "criar utilizador bc",
      "office 365 business central",
      "licença team member",
      "licença essentials",
      "sincronizar utilizador office 365"
    ],
    keywords: ["utilizador", "licença", "office 365", "permissões", "aprovações"],
    errorPatterns: [],
    common: {
      problem:
        "A criação de novos utilizadores pode resultar em falhas de acesso, permissões incorretas ou ausência de ligação ao Microsoft 365 quando faltam dados no pedido inicial.",
      solution:
        "Recolher tipo de licença, funções e utilizador de referência, sincronizar a partir do Office 365 e completar todas as configurações necessárias no Business Central.",
      steps: [
        "Definir o tipo de licença necessário, como Essentials ou Team Member.",
        "Identificar um utilizador de referência ou descrever as funções do novo colaborador.",
        "Atribuir a licença no Microsoft 365.",
        "No Business Central, executar Atualizar utilizador a partir do Office 365.",
        "Validar páginas Utilizador, Configurações Utilizador e Configuração Utilizador.",
        "Configurar datas de registo, comprador/vendedor, departamento e aprovações, se aplicável.",
        "Se for logística, configurar também empregado de armazém e acessos de mobilidade."
      ],
      notes: [
        "O pedido deve incluir licença, perfil funcional e um utilizador de referência sempre que possível."
      ]
    },
    agentOnly: {
      context:
        "Processo transversal que envolve Microsoft 365, Business Central e parametrizações adicionais por área.",
      cause:
        "Os pedidos de criação não trazem toda a informação necessária ou a configuração fica incompleta após sincronização.",
      diagnosis: [
        "Confirmar licença atribuída no Microsoft 365.",
        "Validar sincronização do utilizador no Business Central.",
        "Rever todas as páginas de configuração relevantes conforme a função do colaborador."
      ],
      validation: [
        "O utilizador aparece corretamente no Business Central.",
        "Tem as permissões, função, empresa e parametrizações necessárias.",
        "Consegue aceder e trabalhar no sistema sem bloqueios."
      ],
      escalation:
        "Se o utilizador não sincronizar ou a licença não refletir corretamente, escalar para administração Microsoft 365 ou suporte BC.",
      relatedCases: ["FOR-001", "APR-001", "MOB-001"]
    }
  },
  {
    id: "LOG-003",
    title: "Erro nas etiquetas de envio por código postal não reconhecido na delegação",
    category: "Logística",
    aliases: [
      "etiquetas envio",
      "código postal não reconhecido",
      "delegação parcel",
      "elogista delegations",
      "erro etiquetas delegação"
    ],
    keywords: ["etiquetas", "código postal", "delegação", "parcel", "elogística"],
    errorPatterns: [],
    common: {
      problem:
        "Durante a emissão de etiquetas de envio, o sistema não reconhece o código postal ou o respetivo código parcial na delegação.",
      solution:
        "Criar ou completar manualmente o código postal em falta na lista de delegações do operador logístico.",
      steps: [
        "Aceder a eLogística Externa.",
        "Abrir o operador logístico.",
        "Ir a Relacionado > eLogista Delegations.",
        "Verificar se o código postal completo e o parcial existem.",
        "Se faltar o parcial, criar uma nova linha com o código em falta.",
        "Atribuir a mesma delegação usada no código existente.",
        "Repetir a configuração para os operadores necessários, como Parcel 1 e Parcel 2."
      ],
      notes: [
        "Adicionar um asterisco na descrição quando o código for criado manualmente.",
        "Em caso de dúvida sobre a delegação correta, validar com Operações."
      ]
    },
    agentOnly: {
      context:
        "O sistema tenta identificar a delegação pelo código completo e, se falhar, pelo código parcial.",
      cause:
        "O código parcial não está configurado nas delegações do operador.",
      diagnosis: [
        "Confirmar o código postal completo do destinatário.",
        "Validar se existe o código completo e o parcial nas delegações.",
        "Confirmar se o problema afeta Parcel 1, Parcel 2 ou ambos."
      ],
      validation: [
        "As etiquetas passam a ser emitidas sem erro.",
        "A delegação fica corretamente associada ao envio."
      ],
      escalation:
        "Se o código existir e o erro persistir, validar o operador logístico e as integrações associadas.",
      relatedCases: ["LOG-004"]
    }
  },
  {
    id: "APR-005",
    title: "Erro na aprovação de encomenda por cliente sem gestor comercial para produtos de diagnóstico",
    category: "Aprovações",
    aliases: [
      "cliente sem gestor comercial",
      "erro aprovação encomenda diagnóstico",
      "farma amb diagnóstico",
      "gestor indefinido cliente",
      "alocação gestor comercial"
    ],
    keywords: ["cliente", "gestor comercial", "diagnóstico", "aprovação"],
    errorPatterns: [],
    common: {
      problem:
        "Ao aprovar uma encomenda de produtos de Diagnóstico, o sistema dá erro porque o cliente só tem gestor comercial associado a outra área, como Farma-Amb.",
      solution:
        "Criar uma nova linha de vendedor para a área correta ou remover o filtro da área de gestão, se aplicável.",
      steps: [
        "Abrir a ficha do cliente.",
        "Ir ao separador ou secção de alocação do vendedor.",
        "Verificar se o gestor comercial está limitado apenas a uma área errada.",
        "Criar uma nova linha para a área de Diagnóstico ou remover o filtro de área.",
        "Guardar a ficha.",
        "Voltar à encomenda e reenviar para aprovação."
      ],
      notes: [
        "Se o erro se repetir noutros clientes, aplicar o mesmo procedimento aos que tenham apenas o filtro Farma-Amb."
      ]
    },
    agentOnly: {
      context:
        "A aprovação depende da correta identificação do gestor comercial para a área de produto da encomenda.",
      cause:
        "O cliente está parametrizado apenas para outra área comercial, impedindo a identificação do gestor correto.",
      diagnosis: [
        "Confirmar área dos produtos da encomenda.",
        "Abrir a ficha do cliente e validar a alocação de vendedor.",
        "Verificar se o código atual está limitado a Farma-Amb."
      ],
      validation: [
        "A encomenda volta a ser reenviada para aprovação com sucesso."
      ],
      escalation:
        "Se a alocação estiver correta e o erro persistir, validar regras de workflow ou parametrização comercial adicional.",
      relatedCases: ["APR-004", "TRA-001"]
    }
  },
  {
    id: "ADM-001",
    title: "Remover utilizadores inativos de grupos de tarefas para parar emails automáticos",
    category: "Administração",
    aliases: [
      "emails automáticos utilizadores inativos",
      "grupos tarefas utilizador",
      "business central envia emails a ex colaboradores",
      "remover utilizadores grupos tarefas",
      "parar emails automáticos"
    ],
    keywords: ["emails", "utilizadores inativos", "grupos tarefas", "export"],
    errorPatterns: [],
    common: {
      problem:
        "Continuam a ser enviados emails automáticos do Business Central para utilizadores que já não trabalham na empresa porque continuam associados a grupos de tarefas.",
      solution:
        "Remover os utilizadores inativos dos respetivos Grupos Tarefas Utilizador.",
      steps: [
        "Pesquisar por Grupos Tarefas Utilizador.",
        "Rever os grupos existentes, especialmente os internacionais ou com export no nome.",
        "Abrir cada grupo e localizar utilizadores inativos.",
        "Eliminar as linhas desses utilizadores.",
        "Confirmar que já não ficam associados a grupos ativos."
      ],
      notes: [
        "Após esta revisão, os emails automáticos deixam de ser enviados para esses endereços."
      ]
    },
    agentOnly: {
      context:
        "O envio automático continua a usar os utilizadores presentes nos grupos de tarefas, independentemente da sua situação laboral.",
      cause:
        "Os utilizadores inativos ainda constam dos grupos responsáveis pelas notificações.",
      diagnosis: [
        "Identificar os emails que continuam a receber notificações.",
        "Validar os grupos onde esses utilizadores ainda estão incluídos.",
        "Rever em especial grupos de empresas internacionais."
      ],
      validation: [
        "Os utilizadores deixam de estar associados aos grupos ativos.",
        "Os emails automáticos deixam de ser enviados para esses endereços."
      ],
      escalation:
        "Se os emails persistirem após remoção dos grupos, validar outras fontes de notificação automáticas.",
      relatedCases: ["USR-001"]
    }
  },
  {
    id: "DIM-003",
    title: "Erro ao enviar pedido de amostras por código de departamento em falta",
    category: "Dimensões",
    aliases: [
      "código departamento em falta",
      "pedido de amostras erro",
      "linha transferência código departamento",
      "não consigo enviar pedido de amostras",
      "departamento vazio"
    ],
    keywords: ["amostras", "departamento", "linha transferência", "dimensão"],
    errorPatterns: ["Código Departamento tem de ter um valor"],
    common: {
      problem:
        "Ao enviar um pedido de amostras surge erro porque existem linhas sem o campo Código Departamento preenchido.",
      solution:
        "Preencher o Código Departamento em todas as linhas do pedido.",
      steps: [
        "Abrir o Pedido de Amostras com erro.",
        "Verificar as linhas do documento.",
        "Identificar as que têm o campo Código Departamento vazio.",
        "Preencher o valor correto em cada linha.",
        "Guardar as alterações.",
        "Voltar a tentar o envio do pedido."
      ],
      notes: [
        "Após o preenchimento completo, o sistema permite o envio sem apresentar o erro."
      ]
    },
    agentOnly: {
      context:
        "O documento contém linhas sem uma dimensão obrigatória para conclusão do processo.",
      cause:
        "O campo Código Departamento está vazio numa ou mais linhas.",
      diagnosis: [
        "Abrir o documento e identificar as linhas sem Código Departamento.",
        "Confirmar o valor correto a aplicar a cada linha."
      ],
      validation: [
        "O pedido passa a ser enviado sem erro."
      ],
      escalation:
        "Se o campo voltar a ficar vazio automaticamente, validar a origem da criação do documento e herança de dimensões.",
      relatedCases: ["DIM-001", "TRA-003"]
    }
  },
  {
    id: "TRA-001",
    title: "Erro ao criar ordem de transferência por falta de gestor comercial no cliente",
    category: "Transferências",
    aliases: [
      "gc indefin",
      "valor dimensão indefinido",
      "ordem de transferência erro dimensão",
      "cliente sem gestor comercial",
      "mov combinação dimensão"
    ],
    keywords: ["transferência", "gestor comercial", "cliente", "dimensão", "indefinido"],
    errorPatterns: ["INDEFINIDO"],
    common: {
      problem:
        "Ao criar uma ordem de transferência, o sistema indica que o valor de dimensão INDEFINIDO não existe porque o cliente não tem gestor comercial corretamente atribuído.",
      solution:
        "Atribuir o gestor comercial correto na ficha do cliente para que as dimensões sejam preenchidas automaticamente.",
      steps: [
        "Abrir a ficha do cliente.",
        "Verificar o campo Cód. Vendedor.",
        "Se estiver com GC-INDEFIN ou equivalente, alterar para o gestor comercial correto.",
        "Confirmar que o vendedor tem as dimensões associadas.",
        "Guardar a ficha.",
        "Voltar à ordem de transferência e atualizar.",
        "Confirmar que os campos de dimensão passam a ser preenchidos automaticamente."
      ],
      notes: [
        "Este tipo de erro é recorrente em clientes configurados com o gestor comercial genérico GC-INDEFIN."
      ]
    },
    agentOnly: {
      context:
        "Erro recorrente em documentos que dependem de dimensões comerciais derivadas do cliente e do vendedor associado.",
      cause:
        "O cliente está com vendedor genérico ou inválido, pelo que o sistema não consegue derivar as dimensões necessárias.",
      diagnosis: [
        "Abrir a ficha do cliente.",
        "Validar o campo Cód. Vendedor.",
        "Confirmar se o vendedor tem as dimensões corretamente associadas."
      ],
      validation: [
        "Os campos dimensionais passam a ser preenchidos sem erro.",
        "A ordem de transferência pode ser continuada normalmente."
      ],
      escalation:
        "Se o gestor estiver correto e o erro persistir, validar configuração das dimensões no cabeçalho e na parametrização do vendedor.",
      relatedCases: ["TRA-003", "APR-004", "APR-005", "DIM-001"]
    }
  },
  {
    id: "TRA-003",
    title: "Configurar dimensões numa ordem de transferência",
    category: "Transferências",
    aliases: [
      "dimensões ordem de transferência",
      "cabeçalho transferência dimensões",
      "mov combinação dimensões",
      "como configurar dimensões transferência",
      "cód valor dimensão"
    ],
    keywords: ["dimensões", "ordem de transferência", "cabeçalho", "mov combinação"],
    errorPatterns: [],
    common: {
      problem:
        "É necessário preencher manualmente as dimensões numa ordem de transferência quando não são herdadas automaticamente.",
      solution:
        "Configurar as dimensões no cabeçalho da ordem de transferência para que sejam aplicadas às linhas.",
      steps: [
        "Abrir a Ordem de Transferência.",
        "Ir ao menu Encomenda.",
        "Selecionar Dimensões.",
        "Criar ou editar linhas com o Código Dimensão necessário.",
        "Selecionar o Cód. Valor Dimensão correto.",
        "Guardar e fechar.",
        "Validar se as linhas herdam as dimensões."
      ],
      notes: [
        "O mais comum e recomendado é configurar as dimensões no cabeçalho."
      ]
    },
    agentOnly: {
      context:
        "Útil quando os valores dimensionais não são herdados automaticamente do cliente ou do documento de origem.",
      cause:
        "As dimensões não estão definidas no cabeçalho ou há conflito com valores manuais nas linhas.",
      diagnosis: [
        "Confirmar se a ordem já tem dimensões no cabeçalho.",
        "Validar se existem linhas com dimensões manuais em conflito.",
        "Confirmar os valores dimensionais esperados."
      ],
      validation: [
        "As dimensões passam a estar presentes no cabeçalho e linhas.",
        "Os erros de valor indefinido deixam de ocorrer."
      ],
      escalation:
        "Se as dimensões não herdarem mesmo com cabeçalho preenchido, validar extensões ou regras adicionais de combinação de dimensões.",
      relatedCases: ["TRA-001", "DIM-003"]
    }
  },
  {
    id: "PRE-002",
    title: "Atualização mensal de preços por importação de ficheiro de preços e margens",
    category: "Preços",
    aliases: [
      "atualização mensal preços",
      "importação preços margens",
      "csv preços business central",
      "ficheiro glintt preços",
      "não aceita ficheiro preços"
    ],
    keywords: ["preços", "margens", "csv", "glintt", "importação"],
    errorPatterns: [],
    common: {
      problem:
        "A atualização mensal de preços só pode ser carregada no Business Central se o ficheiro estiver no formato correto exigido pelo sistema.",
      solution:
        "Preparar o ficheiro em CSV delimitado por vírgulas, sem cabeçalhos e apenas com as colunas necessárias, e depois importar no módulo correto.",
      steps: [
        "Obter o ficheiro mensal de preços e margens.",
        "Abrir o ficheiro no Excel.",
        "Manter apenas as primeiras 11 colunas.",
        "Remover linhas de cabeçalho.",
        "Guardar como CSV separado por vírgulas.",
        "No Business Central, abrir o módulo de histórico de preços correspondente.",
        "Usar a ação de importação dedicada.",
        "Selecionar o ficheiro CSV e validar a importação."
      ],
      notes: [
        "O ficheiro deve ser pedido no início de cada mês.",
        "Sem o formato correto, o BC rejeita a importação."
      ]
    },
    agentOnly: {
      context:
        "Processo periódico de atualização de preços e margens com ficheiro externo enviado pela Glintt.",
      cause:
        "O ficheiro não está no formato técnico esperado para importação.",
      diagnosis: [
        "Confirmar origem e mês do ficheiro.",
        "Validar se tem apenas as 11 primeiras colunas.",
        "Confirmar ausência de cabeçalhos e separador vírgula."
      ],
      validation: [
        "O sistema aceita o ficheiro sem erros.",
        "A atualização fica carregada no módulo correspondente."
      ],
      escalation:
        "Se o ficheiro estiver correto e a importação falhar, validar o módulo alvo e a ação de importação usada.",
      relatedCases: ["PRE-001"]
    }
  },
  {
    id: "FAT-004",
    title: "Erro ao registar fatura antecipada por percentagem de pré-pagamento não preenchida",
    category: "Faturação",
    aliases: [
      "fatura antecipada",
      "pré pagamento",
      "não existem quantidades para faturar",
      "erro pré pagamento encomenda",
      "percentagem pré pagamento vazia"
    ],
    keywords: ["fatura antecipada", "pré-pagamento", "encomenda", "quantidades"],
    errorPatterns: ["não existiam quantidades para faturar"],
    common: {
      problem:
        "Ao tentar registar uma fatura antecipada, o sistema indica que não existem quantidades para faturar porque o campo % Pré-pagamento não está preenchido.",
      solution:
        "Reabrir a encomenda de venda e preencher manualmente o campo % Pré-pagamento.",
      steps: [
        "Abrir a Encomenda de Venda.",
        "Se estiver libertada, reabrir a encomenda.",
        "Localizar o campo % Pré-pagamento no cabeçalho.",
        "Preencher o valor pretendido, por exemplo 100%.",
        "Guardar a encomenda.",
        "Voltar a libertar ou aprovar, se aplicável.",
        "Registar a Fatura Antecipada."
      ],
      notes: [
        "Sempre que surgir erro de quantidades em faturas antecipadas, confirmar primeiro se o % Pré-pagamento está efetivamente preenchido."
      ]
    },
    agentOnly: {
      context:
        "Pode ocorrer quando a encomenda foi criada ou ajustada fora do fluxo habitual e o campo não ficou preenchido automaticamente.",
      cause:
        "O documento não está a ser reconhecido como fatura antecipada por falta do valor de % Pré-pagamento.",
      diagnosis: [
        "Confirmar se a encomenda está reaberta.",
        "Validar o campo % Pré-pagamento no cabeçalho.",
        "Confirmar que o processo pretendido é faturação antecipada."
      ],
      validation: [
        "A fatura antecipada passa a registar sem erro.",
        "O sistema reconhece corretamente o contexto de pré-pagamento."
      ],
      escalation:
        "Se o campo estiver preenchido e o erro persistir, validar quantidades, estado do documento e customizações no processo de pré-pagamento.",
      relatedCases: ["FAT-001", "FAT-002"]
    }
  },
  {
    id: "LOG-004",
    title: "Erro na atualização automática do estado das encomendas Parcel",
    category: "Logística",
    aliases: [
      "update order status",
      "parcel estados",
      "estados encomendas não atualizam",
      "movimentos filas tarefas",
      "get status ws",
      "the job update order status scheduled by"
    ],
    keywords: ["parcel", "estados", "filas tarefas", "get status ws", "job queue"],
    errorPatterns: ["The job Update Order Status scheduled by"],
    common: {
      problem:
        "Os estados das encomendas não são atualizados automaticamente porque a tarefa agendada de atualização falhou.",
      solution:
        "Executar manualmente a tarefa responsável pela atualização de estados na página Movimentos Filas Tarefas.",
      steps: [
        "Pesquisar por Movimentos Filas Tarefas.",
        "Localizar a tarefa relacionada com atualização de estados, como Get Status Ws ou Estados Parcel.",
        "Selecionar a tarefa.",
        "Executar Correr uma vez (em primeiro plano).",
        "Aguardar a execução.",
        "Voltar ao ecrã de origem e atualizar para confirmar a atualização dos estados."
      ],
      notes: [
        "A execução manual permite forçar a atualização imediata dos estados.",
        "Algumas tarefas apenas processam um período limitado de dias."
      ]
    },
    agentOnly: {
      context:
        "O comportamento está associado às tarefas automáticas responsáveis pela atualização dos estados das encomendas e integração com Parcel.",
      cause:
        "A tarefa agendada não executou corretamente ou falhou pontualmente.",
      diagnosis: [
        "Confirmar a mensagem exibida nas Operações.",
        "Abrir Movimentos Filas Tarefas.",
        "Localizar a tarefa correta e verificar se está ativa."
      ],
      validation: [
        "Os estados das encomendas passam a ser atualizados corretamente."
      ],
      escalation:
        "Se a execução manual também falhar, validar configuração da fila de tarefas, logs da integração e serviço associado.",
      relatedCases: ["LOG-003"]
    }
  },
  {
    id: "INT-001",
    title: "Atualização de dados 2Logical",
    category: "Integrações",
    aliases: [
      "2logical",
      "envio 2logical",
      "atualizar 2logical",
      "dados 2logical",
      "envio mensal 2logical",
      "navapp01 2logical",
      "aplicação 2logical",
      "não enviei 2logical",
      "processo 2logical mensal"
    ],
    keywords: ["2logical", "navapp01", "envio", "mensal", "integração"],
    errorPatterns: [],
    common: {
      problem:
        "Falta enviar os dados à 2Logical. Este envio deve ser efetuado no início de cada mês.",
      solution:
        "Executar a aplicação de envio de dados no servidor NAVAPP01.",
      steps: [
        "Entrar no servidor NAVAPP01 via ambiente de trabalho remoto.",
        "Aceder ao disco local C.",
        "Entrar na pasta 2Logical_AP ou 2Logical_MDS.",
        "Procurar e executar a aplicação que está dentro da pasta.",
        "Fazer isto para uma ou para ambas as empresas, se necessário."
      ],
      notes: [
        "Este processo deve ser realizado no início de cada mês."
      ]
    },
    agentOnly: {
      context:
        "Processo manual periódico de envio de dados para a 2Logical.",
      cause:
        "O envio mensal não foi executado.",
      diagnosis: [
        "Confirmar se o envio do mês atual já foi realizado.",
        "Validar se existe acesso ao servidor NAVAPP01.",
        "Confirmar se é necessário correr a aplicação para uma ou para ambas as empresas."
      ],
      validation: [
        "A aplicação foi executada com sucesso.",
        "O envio foi realizado para as empresas necessárias."
      ],
      escalation:
        "Se a aplicação não existir, não abrir ou falhar, escalar para IT.",
      relatedCases: []
    }
  }
];
