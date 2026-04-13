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
        "Verificar se foi criada uma nova linha de aprovação.",
        "Fazer F5 ou voltar à encomenda para confirmar que a delegação ficou ativa."
      ],
      notes: [
        "Sempre que possível, deve existir substituto previamente definido para períodos de ausência."
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
      relatedCases: ["APR-002"]
    }
  },
  {
    id: "APR-002",
    title: "Team Approval em aprovações de venda",
    category: "Aprovações",
    aliases: ["team approval", "aprovação em grupo", "qualquer um pode aprovar", "workflow grupo"],
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
        "Ativar o Team Approval no grupo.",
        "Validar que basta uma aprovação para libertar o pedido."
      ],
      notes: ["Quando um elemento aprova, as restantes aprovações pendentes devem ser canceladas automaticamente."]
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
      relatedCases: ["APR-001"]
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
      "lista de preços instituições"
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
        "Importar, validar linhas e ativar a lista."
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
      relatedCases: []
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
      "data de registo errada"
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
        "Verificar o campo Data de Registo.",
        "Se estiver diferente do dia atual, atualizar para a data corrente.",
        "Guardar as alterações.",
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
      relatedCases: ["FAT-002"]
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
        "Abrir a encomenda de venda.",
        "Localizar a linha indicada no erro.",
        "Preencher o campo Nº Encomenda Compra.",
        "Preencher o campo Nº Linha Enc. Compra.",
        "Guardar e voltar a tentar faturar."
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
    id: "FIN-001",
    title: "Erro ao registar recibo no diário de cobranças",
    category: "Financeiro",
    aliases: ["erro recibo", "diário de cobranças", "nºs recibo", "não consigo registar recibo"],
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
    id: "DIM-001",
    title: "Erro ao criar pedido de amostra por dimensão em falta",
    category: "Dimensões",
    aliases: ["pedido de amostra", "dimensão padrão não existe", "área gestão produto", "erro dimensão amostra"],
    keywords: ["dimensão", "produto", "amostra", "área gestão produto"],
    errorPatterns: ["Dimensão Padrão não existe"],
    common: {
      problem:
        "Ao avançar com um pedido de amostra, o sistema indica que a dimensão padrão Área de Gestão do Produto não existe para o artigo.",
      solution:
        "Preencher a dimensão padrão correta na ficha do produto.",
      steps: [
        "Pesquisar por Produtos.",
        "Abrir a ficha do produto referido na mensagem.",
        "Ir a Dimensões ou Dimensões Padrão.",
        "Preencher o campo Área Gestão Produto com o valor correto.",
        "Guardar a ficha.",
        "Repetir a criação do pedido de amostra."
      ],
      notes: ["Sem a dimensão obrigatória, o sistema bloqueia a continuação do documento."]
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
      relatedCases: ["TRA-001"]
    }
  },
  {
    id: "TRA-001",
    title: "Erro ao criar ordem de transferência por falta de gestor comercial no cliente",
    category: "Transferências",
    aliases: ["gc indefin", "valor dimensão indefinido", "ordem de transferência erro dimensão", "cliente sem gestor comercial"],
    keywords: ["transferência", "gestor comercial", "cliente", "dimensão"],
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
        "Guardar a ficha.",
        "Voltar à ordem de transferência e atualizar."
      ],
      notes: ["Sempre que um cliente passa a ter gestor comercial definido, esta configuração deve ser revista."]
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
      relatedCases: ["DIM-001"]
    }
  },
  {
    id: "MOB-001",
    title: "Erro ao puxar envio na mobilidade por falta de email em vendedor/comprador",
    category: "Mobilidade",
    aliases: ["erro email vendedor", "falta email vendedor", "mobilidade envio email", "gc hc email"],
    keywords: ["mobilidade", "email", "vendedor", "comprador", "views"],
    errorPatterns: ["E-mail tem que ter um valor em Vendedor"],
    common: {
      problem:
        "Ao puxar dados dos envios na mobilidade surge erro porque o vendedor/comprador não tem email preenchido.",
      solution:
        "Preencher o campo E-mail na ficha do vendedor/comprador indicado no erro.",
      steps: [
        "Pesquisar por Vendedores/Compradores.",
        "Abrir o registo com o código indicado no erro.",
        "Preencher o campo E-mail com o endereço correto.",
        "Guardar a ficha.",
        "Voltar a puxar os dados em views ou mobilidade."
      ],
      notes: ["Mesmo um campo aparentemente secundário pode bloquear integrações e consultas."]
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
    id: "EXC-001",
    title: "Suplemento Excel do Business Central deixou de funcionar",
    category: "Excel",
    aliases: ["excel add in", "suplemento excel", "microsoft dynamics office add in", "ligação excel bc"],
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
  }
];
