export const SUPPORT_CASES = [
  {
    "id": "CONT-001",
    "title": "Template não identificado",
    "category": "Continia",
    "product": "Continia",
    "visibility": {
      "user": false,
      "agent": true
    },
    "context": "Entrada de documentos",
    "cause": "Falta de critérios (NIF / nome / Pesquisa Texto)",
    "diagnosis": [
      "Template vazio"
    ],
    "solution": "Criar identificação",
    "steps": [
      "Definir NIF / Pesquisa Texto"
    ],
    "validation": [
      "Documento classificado automaticamente"
    ],
    "notes": [
      "Pesquisa Texto é crítico"
    ]
  },
  {
    "id": "CONT-002",
    "title": "Campos desaparecem após reconhecer",
    "category": "Continia",
    "product": "Continia",
    "visibility": {
      "user": false,
      "agent": true
    },
    "context": "Configuração OCR",
    "cause": "Reset do reconhecimento",
    "diagnosis": [
      "Campo desaparece após reconhecer"
    ],
    "solution": "Identificar a Legenda com o botão direito do rato e o valor com o botão esquerdo do rato",
    "steps": [
      "Identificar a Legenda com o botão direito do rato e o valor com o botão esquerdo do rato"
    ],
    "validation": [
      "Campos mantêm-se"
    ],
    "notes": [
      "Regra base do Continia"
    ]
  },
  {
    "id": "CONT-003",
    "title": "OCR lê valores errados de casas decimais",
    "category": "Continia",
    "product": "Continia",
    "visibility": {
      "user": false,
      "agent": true
    },
    "context": "Leitura de faturas",
    "cause": "Vírgula não reconhecida",
    "diagnosis": [
      "Valor diferente do documento"
    ],
    "solution": "Correção manual, na ficha do campo do template, identificar o númer de cadas decimais, e no separador decimal identificar o tipo de leitura \",\",\".\"",
    "steps": [
      "Correção manual, na ficha do campo do template, identificar o númer de cadas decimais, e no separador decimal identificar o tipo de leitura \",\",\".\""
    ],
    "validation": [
      "Totais corretos"
    ],
    "notes": [
      "Problema recorrente"
    ]
  },
  {
    "id": "CONT-004",
    "title": "Linhas não reconhecidas",
    "category": "Continia",
    "product": "Continia",
    "visibility": {
      "user": false,
      "agent": true
    },
    "context": "Layout do documento",
    "cause": "OCR não identifica tabela",
    "diagnosis": [
      "Sem linhas criadas"
    ],
    "solution": "Mapeamento manual",
    "steps": [
      "Definir colunas (produto, quantidade, preço)"
    ],
    "validation": [
      "Linhas criadas corretamente"
    ],
    "notes": [
      "Nem sempre 100% automático"
    ]
  },
  {
    "id": "CONT-005",
    "title": "Produto não identificado",
    "category": "Continia",
    "product": "Continia",
    "visibility": {
      "user": false,
      "agent": true
    },
    "context": "Linhas documento",
    "cause": "Falta de referência cruzada",
    "diagnosis": [
      "Produto não preenchido"
    ],
    "solution": "Criar referência cruzada",
    "steps": [
      "Associar produto ao cliente"
    ],
    "validation": [
      "Produto automático"
    ],
    "notes": [
      "Essencial para automatização"
    ]
  },
  {
    "id": "CONT-006",
    "title": "Não liga à ENCAV",
    "category": "Continia",
    "product": "Continia",
    "visibility": {
      "user": false,
      "agent": true
    },
    "context": "Integração vendas",
    "cause": "Campo não mapeado",
    "diagnosis": [
      "Documento sem ligação"
    ],
    "solution": "Necessita de mapeamento no documento  de:  nº contrato ou nº procedimento ou Nosso Nº Cotação",
    "steps": [
      "Necessita de mapeamento no documento  de:  nº contrato ou nº procedimento ou Nosso Nº Cotação"
    ],
    "validation": [
      "ENCAV associada"
    ],
    "notes": [
      "Campo crítico"
    ]
  },
  {
    "id": "CONT-007",
    "title": "Local de entrega não identificado",
    "category": "Continia",
    "product": "Continia",
    "visibility": {
      "user": false,
      "agent": true
    },
    "context": "Cabeçalho documento",
    "cause": "Texto variável",
    "diagnosis": [
      "Campo vazio"
    ],
    "solution": "Usar traduções",
    "steps": [
      "Criar regras de tradução e mapear para o código de envio pretendido"
    ],
    "validation": [
      "Campo preenchido"
    ],
    "notes": [
      "Usar padrões curtos"
    ]
  },
  {
    "id": "CONT-008",
    "title": "Documento registado sem preços (encomenda de venda)",
    "category": "Continia",
    "product": "Continia",
    "visibility": {
      "user": true,
      "agent": true
    },
    "context": "Criação de encomenda via Continia",
    "cause": "Preço só é preenchido automaticamente se existir ENCAV ou lista de preços",
    "diagnosis": [
      "Encomenda criada no BC com preço = 0"
    ],
    "solution": "Garantir origem de preço válida",
    "steps": [
      "1) Validar ligação à ENCAV 2) Validar existência de lista de preços ativa3) Se necessário, preencher manualmente ou ajustar configuração"
    ],
    "validation": [
      "Encomenda criada com preço correto"
    ],
    "notes": [
      "Comportamento standard — não é erro"
    ]
  },
  {
    "id": "BC-001",
    "title": "Uma colaboradora ficou sem conseguir aprovar uma encomenda urgente por estar sem acesso às ferramentas necessárias.",
    "category": "Aprovações",
    "product": "Business Central",
    "visibility": {
      "user": true,
      "agent": true
    },
    "context": "Situação típica quando o aprovador titular está sem acesso ao equipamento, sem rede ou ausente.",
    "cause": "Ausência de substituto configurado ou necessidade de delegação manual no documento em curso.",
    "diagnosis": [
      "Confirmar quem é o aprovador pendente.",
      "Validar se existe substituto definido na Configuração Utilizador Aprovação.",
      "Confirmar se a delegação gera nova linha de aprovação."
    ],
    "solution": "Delegar temporariamente a aprovação para outro utilizador e garantir que existe substituto configurado no utilizador de aprovação.",
    "steps": [
      "Aceder à encomenda no Business Central.",
      "Ir ao separador Aprovações e selecionar Delegar.",
      "Indicar o utilizador que irá assumir a aprovação.",
      "Verificar se a nova linha de aprovação foi criada com sucesso.",
      "Fazer F5 ou voltar à encomenda para confirmar que a delegação ficou ativa."
    ],
    "validation": [
      "Nova linha de aprovação criada com o utilizador substituto.",
      "Documento deixa de ficar bloqueado no aprovador original.",
      "O novo aprovador consegue concluir a tarefa."
    ],
    "notes": [
      "Garantir que na configuração do utilizador de aprovação está definida a pessoa substituta, especialmente em períodos de ausência planeada.",
      "Se existirem conflitos, como aprovações em duplicado ou funções sobrepostas, considerar passar a tarefa a outro colega direto."
    ]
  },
  {
    "id": "BC-002",
    "title": "Existe necessidade de permitir aprovações em grupo, em que qualquer elemento do grupo possa aprovar o pedido.",
    "category": "Aprovações",
    "product": "Business Central",
    "visibility": {
      "user": false,
      "agent": true
    },
    "context": "Útil quando não se pretende hierarquia entre vários aprovadores do mesmo passo.",
    "cause": "O modelo de workflow exige flexibilidade para que qualquer elemento do grupo possa concluir o passo de aprovação.",
    "diagnosis": [
      "Confirmar se o workflow usa Grupo de Utilizadores de Workflow.",
      "Validar se todos os membros têm o mesmo número de sequência.",
      "Confirmar se o Team Approval está ativo."
    ],
    "solution": "Usar Team Approval em grupos de utilizador de workflow com o mesmo número de sequência.",
    "steps": [
      "Configurar o grupo de utilizadores de workflow.",
      "Garantir que todos os utilizadores do grupo têm o mesmo número de sequência.",
      "Ativar o Team Approval no grupo de utilizadores de workflow.",
      "Validar que basta uma aprovação para libertar o pedido."
    ],
    "validation": [
      "Uma única aprovação conclui o passo.",
      "As restantes linhas pendentes são anuladas.",
      "O documento é libertado sem nova intervenção do grupo."
    ],
    "notes": [
      "Se todos os utilizadores do grupo tiverem o mesmo número, têm igual importância, sem hierarquia.",
      "Assim que um aprova, as restantes aprovações pendentes são automaticamente canceladas."
    ]
  },
  {
    "id": "BC-003",
    "title": "Se o aprovador titular estiver ausente e não existir substituto, o pedido pode ficar bloqueado no sistema.",
    "category": "Aprovações",
    "product": "Business Central",
    "visibility": {
      "user": true,
      "agent": true
    },
    "context": "Aplica-se quando o processo usa o aprovador designado na configuração Utilizador Aprovação.",
    "cause": "O campo Substituir não está configurado ou a delegação não foi feita atempadamente.",
    "diagnosis": [
      "Confirmar quem é o aprovador titular.",
      "Verificar se existe substituto definido.",
      "Validar se a aprovação pode ser delegada manualmente."
    ],
    "solution": "Configurar o substituto no utilizador de aprovação e delegar a aprovação quando necessário.",
    "steps": [
      "Verificar nas configurações do utilizador se existe substituto definido em Substituir.",
      "Caso não exista, efetuar a configuração do substituto no código do aprovador ausente.",
      "Delegar a aprovação para o substituto, se necessário.",
      "Garantir que a aprovação é redirecionada e concluída sem bloqueios."
    ],
    "validation": [
      "O pedido deixa de ficar bloqueado.",
      "A aprovação é redirecionada para o substituto correto."
    ],
    "notes": [
      "A delegação pode ser feita pelo utilizador que submete o pedido, pelo aprovador ou pelo gestor de aprovações."
    ]
  },
  {
    "id": "BC-004",
    "title": "Ao criar uma nova lista de preços para instituições surge erro porque a lista foi criada no modo preço e desconto em vez de apenas preço.",
    "category": "Preços",
    "product": "Business Central",
    "visibility": {
      "user": true,
      "agent": true
    },
    "context": "O erro surge na criação ou alimentação de listas quando a tipologia da lista não é coerente com a utilização pretendida.",
    "cause": "A lista foi criada com estrutura de preços e descontos, mas o processo exigia apenas preços.",
    "diagnosis": [
      "Confirmar o valor de Ver coluna para na lista.",
      "Validar se já existem linhas carregadas.",
      "Confirmar se a importação Excel tem apenas as colunas necessárias."
    ],
    "solution": "Criar uma nova lista configurada apenas como preço antes de inserir linhas.",
    "steps": [
      "Criar a lista de preços.",
      "Antes de inserir qualquer linha, definir Ver coluna para apenas com preços.",
      "Não alterar esta configuração depois de inserir dados.",
      "Se usar Excel, manter apenas nº do produto, quantidade mínima e preço.",
      "Garantir a formatação correta dos preços com vírgula decimal.",
      "Importar, validar linhas e ativar a lista.",
      "Apagar listas antigas para evitar duplicação."
    ],
    "validation": [
      "A nova lista aceita linhas sem erro.",
      "Os preços ficam visíveis corretamente.",
      "A lista pode ser ativada sem bloqueios."
    ],
    "notes": [
      "Evitar reaproveitar listas mal parametrizadas, para não introduzir inconsistências."
    ]
  },
  {
    "id": "BC-005",
    "title": "Ao tentar faturar uma encomenda de venda, o sistema bloqueia porque a data de registo do utilizador não está definida para o dia atual.",
    "category": "Faturação",
    "product": "Business Central",
    "visibility": {
      "user": true,
      "agent": true
    },
    "context": "Surge tipicamente quando o utilizador esteve a trabalhar com datas anteriores ou com restrições de registo não atualizadas.",
    "cause": "O documento está a ser registado fora da data permitida ou fora da data atual parametrizada no utilizador.",
    "diagnosis": [
      "Confirmar a data corrente do sistema.",
      "Abrir Configuração Utilizador.",
      "Comparar a Data de Registo com a data pretendida para faturação."
    ],
    "solution": "Atualizar a Data de Registo nas configurações do utilizador antes de faturar.",
    "steps": [
      "Aceder a Configuração Utilizador.",
      "Verificar a Data de Registo.",
      "Caso esteja diferente do dia de hoje, atualizar para a data atual e guardar.",
      "Voltar a tentar faturar a encomenda."
    ],
    "validation": [
      "A fatura passa a registar sem bloqueio de data.",
      "O utilizador consegue continuar o processo normal."
    ],
    "notes": [
      "Este é um dos bloqueios mais simples de resolver, mas é frequentemente esquecido."
    ]
  },
  {
    "id": "BC-006",
    "title": "Ao tentar faturar, a linha está marcada como envio direto mas ainda não está associada à encomenda de compra correspondente.",
    "category": "Faturação",
    "product": "Business Central",
    "visibility": {
      "user": true,
      "agent": true
    },
    "context": "Afeta linhas de venda configuradas como envio direto quando a associação técnica à encomenda de compra não ficou preenchida.",
    "cause": "Os campos de ligação entre venda e compra ficaram vazios ou foram perdidos durante o processo.",
    "diagnosis": [
      "Confirmar a mensagem exata do erro.",
      "Validar se a linha está marcada como envio direto.",
      "Confirmar se Nº Encomenda Compra e Nº Linha Enc. Compra estão preenchidos."
    ],
    "solution": "Preencher os campos de associação da linha da encomenda de venda à encomenda de compra.",
    "steps": [
      "Abrir a encomenda de venda e localizar a linha indicada no erro.",
      "Preencher o campo Nº Encomenda Compra com o número da encomenda de compra associada.",
      "Preencher o campo Nº Linha Enc. Compra com o número da linha correspondente.",
      "Guardar e pedir para voltar a tentar faturar."
    ],
    "validation": [
      "A linha deixa de gerar erro.",
      "O documento pode ser faturado normalmente."
    ],
    "notes": [
      "Sem esta ligação, o sistema não consegue concluir o fluxo de envio direto."
    ]
  },
  {
    "id": "BC-007",
    "title": "É necessário consultar as vendas já realizadas de um produto específico para um cliente, considerando também eventuais notas de crédito.",
    "category": "Vendas",
    "product": "Business Central",
    "visibility": {
      "user": true,
      "agent": true
    },
    "context": "Consulta funcional para apurar vendas líquidas por cliente e produto.",
    "cause": "Necessidade de análise comercial ou validação de histórico de movimentos.",
    "diagnosis": [
      "Confirmar cliente e produto corretos.",
      "Confirmar período pretendido.",
      "Validar se existem notas de crédito associadas."
    ],
    "solution": "Usar Linhas Fatura Venda Registadas e Linhas Nota de Crédito Registadas com filtros por cliente e produto.",
    "steps": [
      "Na pesquisa, abrir Linhas Fatura Venda Registadas.",
      "Filtrar por Venda-a Nr. Cliente.",
      "Filtrar por Nº do produto.",
      "Opcionalmente filtrar por Data de Registo.",
      "Repetir no menu Linhas Nota de Crédito Registadas com os mesmos filtros.",
      "Consolidar a informação: vendas líquidas = faturas - créditos."
    ],
    "validation": [
      "Foram apuradas as vendas registadas.",
      "Foram descontadas eventuais notas de crédito."
    ],
    "notes": [
      "O resultado final deve considerar saídas e eventuais devoluções/créditos."
    ]
  },
  {
    "id": "BC-008",
    "title": "Ao tentar puxar dados dos envios na mobilidade surge erro porque o vendedor/comprador indicado não tem email preenchido.",
    "category": "Mobilidade",
    "product": "Business Central",
    "visibility": {
      "user": true,
      "agent": true
    },
    "context": "Erro comum em integrações ou páginas de consulta que assumem dados obrigatórios no vendedor/comprador.",
    "cause": "O código referenciado na mensagem não tem o email preenchido e a lógica da rotina exige esse valor.",
    "diagnosis": [
      "Ler o código exato do vendedor na mensagem.",
      "Abrir a lista de Vendedores/Compradores.",
      "Validar se o campo E-mail está vazio."
    ],
    "solution": "Preencher o campo E-mail na ficha do vendedor/comprador identificado no erro.",
    "steps": [
      "Na pesquisa, procurar por Vendedores/Compradores.",
      "Abrir o registo com o código indicado no erro.",
      "No campo E-mail, introduzir o endereço correto.",
      "Guardar a ficha e voltar a puxar os dados em views."
    ],
    "validation": [
      "A consulta volta a abrir sem erro.",
      "Os dados de envio ficam novamente acessíveis."
    ],
    "notes": [
      "Após este ajuste, o erro deixa de ocorrer e os dados podem ser consultados normalmente."
    ]
  },
  {
    "id": "BC-009",
    "title": "Ao avançar com um pedido de amostra, o sistema indica que a dimensão padrão Área de Gestão do Produto não existe para o artigo.",
    "category": "Dimensões",
    "product": "Business Central",
    "visibility": {
      "user": true,
      "agent": true
    },
    "context": "Erro típico em produtos ou amostras criadas sem a parametrização dimensional mínima exigida pelo processo.",
    "cause": "O artigo não tem a dimensão padrão obrigatória associada.",
    "diagnosis": [
      "Validar o nº do artigo indicado na mensagem.",
      "Abrir Dimensões Padrão do produto.",
      "Confirmar ausência da dimensão AREA.GEST.PRODUTO ou equivalente local."
    ],
    "solution": "Preencher a dimensão padrão correta na ficha do produto.",
    "steps": [
      "Na pesquisa, procurar por Produtos.",
      "Abrir a ficha do produto referido na mensagem de erro.",
      "No separador Dimensões ou Dimensões Padrão, preencher o campo Área Gestão Produto com o valor correto.",
      "Guardar a ficha.",
      "Repetir a tentativa de criação do pedido de amostra."
    ],
    "validation": [
      "O documento passa a ser criado sem erro.",
      "A dimensão fica gravada no produto para utilizações futuras."
    ],
    "notes": [
      "Depois de preenchida a dimensão em falta, o sistema já permite avançar sem erros."
    ]
  },
  {
    "id": "BC-010",
    "title": "Uma referência não está a ser incluída nas recolhas ao gerar envios porque todos os lotes disponíveis estão bloqueados.",
    "category": "Logística",
    "product": "Business Central",
    "visibility": {
      "user": true,
      "agent": true
    },
    "context": "Aplica-se quando a geração do envio não seleciona automaticamente a referência esperada.",
    "cause": "Todos os lotes disponíveis estão marcados como bloqueados, mesmo com validade e disponibilidade corretas.",
    "diagnosis": [
      "Confirmar referência e encomenda.",
      "Validar conteúdo de posição.",
      "Confirmar inexistência de reservas.",
      "Verificar estado Bloqueado dos lotes."
    ],
    "solution": "Validar lotes, reservas, validade e confirmar se os lotes estão marcados como bloqueados.",
    "steps": [
      "Verificar o conteúdo de posição para confirmar disponibilidade.",
      "Validar a validade dos lotes.",
      "Confirmar que não existem reservas ativas.",
      "Abrir a lista de lotes disponíveis para a referência.",
      "Verificar a coluna Bloqueado.",
      "Regularizar o bloqueio dos lotes antes de gerar as recolhas."
    ],
    "validation": [
      "A referência passa a ser elegível para recolha.",
      "O envio volta a incluir o artigo."
    ],
    "notes": [
      "Neste caso, as quantidades podem existir, mas não ficam elegíveis para seleção automática."
    ]
  },
  {
    "id": "BC-011",
    "title": "Ao receber uma encomenda de compra, a combinação de dimensões utilizada está bloqueada porque o fornecedor ainda não está qualificado para aquele produto.",
    "category": "Dimensões",
    "product": "Business Central",
    "visibility": {
      "user": true,
      "agent": true
    },
    "context": "Surge em receções de compra quando a combinação de dimensões deriva de qualificação de fornecedor/produto.",
    "cause": "O fornecedor ainda não possui qualificação válida para fornecer aquele produto.",
    "diagnosis": [
      "Confirmar o documento e linha afetados.",
      "Ler a combinação de dimensões indicada na mensagem.",
      "Validar junto da Qualidade e Compras se o fornecedor está qualificado."
    ],
    "solution": "Reencaminhar o caso para a Qualidade para validação documental e qualificação do fornecedor para o produto.",
    "steps": [
      "Confirmar a mensagem de erro na encomenda de compra.",
      "Validar que a causa é a qualificação do fornecedor para o produto.",
      "Reencaminhar o caso para a Qualidade.",
      "Aguardar a validação documental junto do comprador e do fornecedor.",
      "Após qualificação, repetir a receção."
    ],
    "validation": [
      "O fornecedor fica devidamente qualificado para o produto.",
      "A receção pode prosseguir sem erro."
    ],
    "notes": [
      "A Logística não consegue resolver diretamente este caso.",
      "Até à qualificação, a encomenda fica bloqueada à receção."
    ]
  },
  {
    "id": "BC-012",
    "title": "O sistema bloqueia o registo porque o produto só permite quantidades que sejam múltiplos exatos do valor configurado.",
    "category": "Vendas",
    "product": "Business Central",
    "visibility": {
      "user": true,
      "agent": true
    },
    "context": "Surge em documentos registados com quantidades que não respeitam o múltiplo mínimo configurado no artigo.",
    "cause": "O artigo está configurado com múltiplos de venda obrigatórios.",
    "diagnosis": [
      "Identificar o artigo e o múltiplo configurado.",
      "Confirmar a quantidade que está a ser registada.",
      "Validar com o Gestor de Produto se a exceção é admissível."
    ],
    "solution": "Validar com o Gestor de Produto se pode alterar temporariamente o múltiplo para 1 ou ajustar a quantidade para um múltiplo válido.",
    "steps": [
      "Identificar o múltiplo de venda configurado na ficha do artigo.",
      "Pedir ao Gestor de Produto a validação da alteração temporária, se necessário.",
      "Se aprovado, alterar temporariamente os múltiplos para 1.",
      "Efetuar o registo do documento.",
      "Repor o múltiplo original, se aplicável.",
      "Em alternativa, ajustar a quantidade para um múltiplo correto."
    ],
    "validation": [
      "O documento passa a registar corretamente.",
      "A quantidade final respeita a regra ou foi autorizada exceção."
    ],
    "notes": [
      "Se o Gestor de Produto não autorizar a alteração, o documento deve respeitar o múltiplo configurado."
    ]
  },
  {
    "id": "BC-013",
    "title": "É necessário configurar uma nova impressora online para mapas específicos e validar dimensões de impressão.",
    "category": "Impressão",
    "product": "Business Central",
    "visibility": {
      "user": true,
      "agent": true
    },
    "context": "Aplica-se a impressoras usadas apenas por alguns colegas e para mapas específicos.",
    "cause": "A impressora ainda não está corretamente sincronizada ou associada ao mapa/utilizador.",
    "diagnosis": [
      "Confirmar se a impressora aparece em PrintNode.",
      "Validar a Seleção Impressora para o mapa e/ou utilizador.",
      "Testar impressão real com o colega."
    ],
    "solution": "Atualizar as impressoras PrintNode, associar a impressora ao mapa ou utilizador e validar o output com teste real.",
    "steps": [
      "Abrir Insight Works PrintNode Printers.",
      "Executar Atualizar impressoras PrintNode.",
      "Ir a Seleções Impressora.",
      "Associar a impressora ao mapa e/ou ao utilizador.",
      "Pedir um teste de impressão ao utilizador.",
      "Se necessário, ajustar largura e altura nas definições da impressora."
    ],
    "validation": [
      "Os documentos passam a sair na impressora especificada.",
      "As dimensões de impressão ficam corretas."
    ],
    "notes": [
      "É obrigatório validar sempre com uma impressão local se as dimensões de saída estão corretas."
    ]
  },
  {
    "id": "BC-014",
    "title": "O fornecedor está bloqueado porque existem linhas de aprovação rejeitadas ou pendentes na ficha do fornecedor.",
    "category": "Fornecedores",
    "product": "Business Central",
    "visibility": {
      "user": true,
      "agent": true
    },
    "context": "Surge quando o utilizador tenta registar documentos para um fornecedor ainda não aprovado.",
    "cause": "Existem linhas rejeitadas ou pendentes no circuito de aprovação do fornecedor.",
    "diagnosis": [
      "Confirmar na ficha do fornecedor se existe alguma nota de bloqueio.",
      "Marcar temporariamente o utilizador como Administrador de Aprovações, se necessário, para ganhar visibilidade.",
      "Abrir o histórico de aprovações do fornecedor."
    ],
    "solution": "Consultar o histórico de aprovações do fornecedor e, se necessário, pedir novo pedido de aprovação.",
    "steps": [
      "Abrir a ficha do fornecedor.",
      "Verificar se existe alguma nota de bloqueio.",
      "Aceder a Fornecedor > Aprovações.",
      "Consultar o histórico de linhas.",
      "Se houver rejeições, pedir novo pedido de aprovação.",
      "Se houver pendências, identificar o aprovador responsável."
    ],
    "validation": [
      "Com novo pedido de aprovação concluído e aceite, o fornecedor fica desbloqueado.",
      "O utilizador passa a conseguir registar documentos relacionados."
    ],
    "notes": [
      "Todos os novos fornecedores necessitam de aprovação concluída para estarem desbloqueados."
    ]
  },
  {
    "id": "BC-015",
    "title": "Ao preencher o Prazo Entrega, o sistema não aceita apenas números porque é obrigatória a unidade de tempo.",
    "category": "Produtos",
    "product": "Business Central",
    "visibility": {
      "user": true,
      "agent": true
    },
    "context": "Este erro surge quando o campo recebe apenas um valor numérico sem unidade.",
    "cause": "O sistema exige um formato de duração com número + unidade temporal.",
    "diagnosis": [
      "Confirmar o valor que foi introduzido.",
      "Validar o formato aceite pelo campo.",
      "Testar novamente com a unidade correta."
    ],
    "solution": "Introduzir o valor com a respetiva unidade, por exemplo 56D para 56 dias.",
    "steps": [
      "Abrir a ficha do produto.",
      "Localizar o campo Prazo Entrega.",
      "Introduzir o número acompanhado da unidade de tempo.",
      "Usar D para dias, S para semanas, M para meses, T para trimestres ou U para anos.",
      "Guardar a ficha."
    ],
    "validation": [
      "O campo passa a aceitar o valor.",
      "A ficha do produto grava sem bloqueios."
    ],
    "notes": [
      "Em vez de 56, deve ser colocado 56D.",
      "Para 8 semanas, deve ser colocado 8S."
    ]
  },
  {
    "id": "BC-016",
    "title": "Ao enviar uma proposta de venda para aprovação surge erro porque não existe configuração de gestor comercial para os produtos da linha em causa.",
    "category": "Aprovações",
    "product": "Business Central",
    "visibility": {
      "user": true,
      "agent": true
    },
    "context": "Surge em propostas de venda cuja linha de produtos depende de caracterização comercial no cliente.",
    "cause": "Não existe gestor comercial corretamente configurado para a linha de produto envolvida.",
    "diagnosis": [
      "Confirmar a proposta e os produtos em causa.",
      "Validar a alocação do gestor comercial no cliente.",
      "Verificar se o código atual cobre a área certa."
    ],
    "solution": "Pedir à área de negócio que caracterize corretamente a alocação do gestor comercial para esses produtos no cliente.",
    "steps": [
      "Confirmar que a causa do erro é a ausência de gestor comercial associado.",
      "Pedir à área responsável para caracterizar a alocação correta do gestor comercial para os produtos FARMA-AMB no cliente.",
      "Após a atualização, voltar a pedir a aprovação da encomenda ou proposta."
    ],
    "validation": [
      "A proposta volta a ser enviada para aprovação com sucesso."
    ],
    "notes": [
      "O problema será resolvido após a devida caracterização e configuração do gestor comercial associado aos produtos em questão."
    ]
  },
  {
    "id": "BC-017",
    "title": "É necessário visualizar e movimentar os artigos que compõem um kit dentro de uma ordem de transferência.",
    "category": "Transferências",
    "product": "Business Central",
    "visibility": {
      "user": true,
      "agent": true
    },
    "context": "Aplica-se a kits comerciais ou de eventos que precisam de ser movimentados ao nível dos componentes.",
    "cause": "O documento contém um kit/BOM que precisa de ser explodido para movimentação detalhada.",
    "diagnosis": [
      "Confirmar se o artigo é um kit com BOM.",
      "Validar se a ordem de transferência permite Explode BOM na linha."
    ],
    "solution": "Usar a funcionalidade Explode BOM na linha do produto.",
    "steps": [
      "Abrir a ordem de transferência associada ao evento.",
      "Localizar a linha do kit expositor.",
      "Selecionar a linha do produto.",
      "Ir a Funções > Explode BOM.",
      "Confirmar os artigos expandidos e as quantidades.",
      "Prosseguir com o processo normal de transferência/envio."
    ],
    "validation": [
      "Os componentes passam a surgir na ordem.",
      "As quantidades ficam visíveis para validação e movimentação."
    ],
    "notes": [
      "O sistema irá automaticamente expandir o kit, listando todos os artigos que o compõem."
    ]
  },
  {
    "id": "BC-018",
    "title": "Foi emitida uma fatura de venda com o Documento Externo incorreto.",
    "category": "Faturação",
    "product": "Business Central",
    "visibility": {
      "user": true,
      "agent": true
    },
    "context": "Evita a necessidade de anular e reemitir a fatura quando a correção necessária está apenas no documento externo.",
    "cause": "O campo Documento Externo foi preenchido incorretamente no momento do registo.",
    "diagnosis": [
      "Confirmar que a fatura já está registada.",
      "Validar se a função Atualizar Documento está disponível.",
      "Confirmar o valor correto a inserir."
    ],
    "solution": "Usar a função Atualizar Documento na fatura registada para corrigir o campo Documento Externo.",
    "steps": [
      "Abrir a fatura de venda já registada.",
      "Ir ao separador Base.",
      "Selecionar a opção Atualizar Documento.",
      "Corrigir o campo Documento Externo.",
      "Guardar a alteração.",
      "Confirmar que o número atualizado aparece corretamente."
    ],
    "validation": [
      "O Documento Externo passa a refletir o número correto.",
      "A atualização fica visível na vista da fatura."
    ],
    "notes": [
      "A atualização será comunicada apenas no envio eletrónico diário."
    ]
  },
  {
    "id": "BC-019",
    "title": "Ao criar uma arrumação, o sistema gera erro porque o produto não tem uma posição de armazém marcada como Fixo e Padrão.",
    "category": "Logística",
    "product": "Business Central",
    "visibility": {
      "user": true,
      "agent": true
    },
    "context": "Surge quando o artigo não tem parametrização mínima de armazém para geração da arrumação.",
    "cause": "Não existe posição definida como Fixo e Padrão para o artigo.",
    "diagnosis": [
      "Confirmar o artigo e a localização em causa.",
      "Abrir Conteúdo de Posição.",
      "Validar se existe linha ativa com Fixo e Padrão marcados."
    ],
    "solution": "Configurar uma posição correta no Conteúdo de Posição com as opções Fixo e Padrão ativas.",
    "steps": [
      "Abrir a ficha do produto.",
      "Ir a Relacionado > Armazém > Conteúdo de Posição.",
      "Verificar se existe uma posição marcada como Fixo e Padrão.",
      "Se não existir, selecionar a posição correta e marcar essas opções.",
      "Voltar à Folha de Arrumação.",
      "Gerar novamente o documento de arrumação."
    ],
    "validation": [
      "A arrumação volta a ser gerada sem erro.",
      "O produto deixa de desaparecer do processo."
    ],
    "notes": [
      "Após esta correção, é possível gerar novamente a arrumação sem erro."
    ]
  },
  {
    "id": "BC-020",
    "title": "Ao registar um recibo no diário de cobranças surge um erro relacionado com a numeração do recibo.",
    "category": "Financeiro",
    "product": "Business Central",
    "visibility": {
      "user": true,
      "agent": true
    },
    "context": "Este erro surge normalmente no momento do registo no diário de cobranças.",
    "cause": "O cliente não está parametrizado para emissão de recibo, o que impede a atribuição automática do nº do recibo.",
    "diagnosis": [
      "Confirmar que o erro ocorre no registo do diário.",
      "Abrir a ficha do cliente associado ao movimento.",
      "Validar o campo Emitir Recibo."
    ],
    "solution": "Validar a ficha do cliente e confirmar se a opção Emitir Recibo está ativa.",
    "steps": [
      "Abrir a ficha do cliente.",
      "Ir ao separador Pagamentos.",
      "Confirmar se a opção Emitir Recibo está marcada.",
      "Se não estiver, ativar a opção.",
      "Guardar e voltar ao diário de cobranças.",
      "Tentar registar novamente o recibo."
    ],
    "validation": [
      "O recibo passa a ser registado sem erro.",
      "É atribuída numeração automática ao documento."
    ],
    "notes": [
      "Depois da parametrização correta, o sistema volta a atribuir numeração automaticamente."
    ]
  },
  {
    "id": "BC-021",
    "title": "O suplemento do Excel utilizado para ligação ao Business Central deixou de funcionar, impedindo atualização ou exportação de dados.",
    "category": "Excel",
    "product": "Business Central",
    "visibility": {
      "user": true,
      "agent": true
    },
    "context": "Falha típica após atualização do Office, credenciais expiradas ou corrupção da ligação do add-in.",
    "cause": "O suplemento deixou de estar corretamente instalado ou perdeu a associação ao servidor do Business Central.",
    "diagnosis": [
      "Confirmar se o add-in aparece na lista do Excel.",
      "Validar se responde ao abrir um ficheiro ligado ao BC.",
      "Se necessário, remover e reinstalar o suplemento."
    ],
    "solution": "Reinstalar ou reativar o Microsoft Dynamics Office Add-in e voltar a associar o servidor correto.",
    "steps": [
      "Abrir o Excel.",
      "Ir a Base > Suplementos > Mais Suplementos.",
      "Se o suplemento já estiver instalado, removê-lo primeiro.",
      "Fechar e voltar a abrir o Excel.",
      "Pesquisar por Microsoft Dynamics Office Add-in e adicionar.",
      "Quando solicitado, indicar o URL https://exceladdinprovider.smb.dynamics.com."
    ],
    "validation": [
      "O suplemento volta a carregar no Excel.",
      "É possível atualizar ou publicar dados para o Business Central."
    ],
    "notes": [
      "Depois da reinstalação, a ligação ao Business Central volta a ser restabelecida automaticamente na maioria dos casos."
    ]
  },
  {
    "id": "BC-022",
    "title": "A criação de novos utilizadores pode resultar em falhas de acesso, permissões incorretas ou ausência de ligação ao Microsoft 365 quando faltam dados no pedido inicial.",
    "category": "Utilizadores",
    "product": "Business Central",
    "visibility": {
      "user": true,
      "agent": true
    },
    "context": "Processo transversal que envolve Microsoft 365, Business Central e parametrizações adicionais por área.",
    "cause": "Os pedidos de criação não trazem toda a informação necessária ou a configuração fica incompleta após sincronização.",
    "diagnosis": [
      "Confirmar licença atribuída no Microsoft 365.",
      "Validar sincronização do utilizador no Business Central.",
      "Rever todas as páginas de configuração relevantes conforme a função do colaborador."
    ],
    "solution": "Recolher tipo de licença, funções e utilizador de referência, sincronizar a partir do Office 365 e completar todas as configurações necessárias no Business Central.",
    "steps": [
      "Definir o tipo de licença necessário, como Essentials ou Team Member.",
      "Identificar um utilizador de referência ou descrever as funções do novo colaborador.",
      "Atribuir a licença no Microsoft 365.",
      "No Business Central, executar Atualizar utilizador a partir do Office 365.",
      "Validar páginas Utilizador, Configurações Utilizador e Configuração Utilizador.",
      "Configurar datas de registo, comprador/vendedor, departamento e aprovações, se aplicável.",
      "Se for logística, configurar também empregado de armazém e acessos de mobilidade."
    ],
    "validation": [
      "O utilizador aparece corretamente no Business Central.",
      "Tem as permissões, função, empresa e parametrizações necessárias.",
      "Consegue aceder e trabalhar no sistema sem bloqueios."
    ],
    "notes": [
      "O pedido deve incluir licença, perfil funcional e um utilizador de referência sempre que possível."
    ]
  },
  {
    "id": "BC-023",
    "title": "Durante a emissão de etiquetas de envio, o sistema não reconhece o código postal ou o respetivo código parcial na delegação.",
    "category": "Logística",
    "product": "Business Central",
    "visibility": {
      "user": true,
      "agent": true
    },
    "context": "O sistema tenta identificar a delegação pelo código completo e, se falhar, pelo código parcial.",
    "cause": "O código parcial não está configurado nas delegações do operador.",
    "diagnosis": [
      "Confirmar o código postal completo do destinatário.",
      "Validar se existe o código completo e o parcial nas delegações.",
      "Confirmar se o problema afeta Parcel 1, Parcel 2 ou ambos."
    ],
    "solution": "Criar ou completar manualmente o código postal em falta na lista de delegações do operador logístico.",
    "steps": [
      "Aceder a eLogística Externa.",
      "Abrir o operador logístico.",
      "Ir a Relacionado > eLogista Delegations.",
      "Verificar se o código postal completo e o parcial existem.",
      "Se faltar o parcial, criar uma nova linha com o código em falta.",
      "Atribuir a mesma delegação usada no código existente.",
      "Repetir a configuração para os operadores necessários, como Parcel 1 e Parcel 2."
    ],
    "validation": [
      "As etiquetas passam a ser emitidas sem erro.",
      "A delegação fica corretamente associada ao envio."
    ],
    "notes": [
      "Adicionar um asterisco na descrição quando o código for criado manualmente.",
      "Em caso de dúvida sobre a delegação correta, validar com Operações."
    ]
  },
  {
    "id": "BC-024",
    "title": "Ao aprovar uma encomenda de produtos de Diagnóstico, o sistema dá erro porque o cliente só tem gestor comercial associado a outra área, como Farma-Amb.",
    "category": "Aprovações",
    "product": "Business Central",
    "visibility": {
      "user": true,
      "agent": true
    },
    "context": "A aprovação depende da correta identificação do gestor comercial para a área de produto da encomenda.",
    "cause": "O cliente está parametrizado apenas para outra área comercial, impedindo a identificação do gestor correto.",
    "diagnosis": [
      "Confirmar área dos produtos da encomenda.",
      "Abrir a ficha do cliente e validar a alocação de vendedor.",
      "Verificar se o código atual está limitado a Farma-Amb."
    ],
    "solution": "Criar uma nova linha de vendedor para a área correta ou remover o filtro da área de gestão, se aplicável.",
    "steps": [
      "Abrir a ficha do cliente.",
      "Ir ao separador ou secção de alocação do vendedor.",
      "Verificar se o gestor comercial está limitado apenas a uma área errada.",
      "Criar uma nova linha para a área de Diagnóstico ou remover o filtro de área.",
      "Guardar a ficha.",
      "Voltar à encomenda e reenviar para aprovação."
    ],
    "validation": [
      "A encomenda volta a ser reenviada para aprovação com sucesso."
    ],
    "notes": [
      "Se o erro se repetir noutros clientes, aplicar o mesmo procedimento aos que tenham apenas o filtro Farma-Amb."
    ]
  },
  {
    "id": "BC-025",
    "title": "Continuam a ser enviados emails automáticos do Business Central para utilizadores que já não trabalham na empresa porque continuam associados a grupos de tarefas.",
    "category": "Administração",
    "product": "Business Central",
    "visibility": {
      "user": true,
      "agent": true
    },
    "context": "O envio automático continua a usar os utilizadores presentes nos grupos de tarefas, independentemente da sua situação laboral.",
    "cause": "Os utilizadores inativos ainda constam dos grupos responsáveis pelas notificações.",
    "diagnosis": [
      "Identificar os emails que continuam a receber notificações.",
      "Validar os grupos onde esses utilizadores ainda estão incluídos.",
      "Rever em especial grupos de empresas internacionais."
    ],
    "solution": "Remover os utilizadores inativos dos respetivos Grupos Tarefas Utilizador.",
    "steps": [
      "Pesquisar por Grupos Tarefas Utilizador.",
      "Rever os grupos existentes, especialmente os internacionais ou com export no nome.",
      "Abrir cada grupo e localizar utilizadores inativos.",
      "Eliminar as linhas desses utilizadores.",
      "Confirmar que já não ficam associados a grupos ativos."
    ],
    "validation": [
      "Os utilizadores deixam de estar associados aos grupos ativos.",
      "Os emails automáticos deixam de ser enviados para esses endereços."
    ],
    "notes": [
      "Após esta revisão, os emails automáticos deixam de ser enviados para esses endereços."
    ]
  },
  {
    "id": "BC-026",
    "title": "Ao enviar um pedido de amostras surge erro porque existem linhas sem o campo Código Departamento preenchido.",
    "category": "Dimensões",
    "product": "Business Central",
    "visibility": {
      "user": true,
      "agent": true
    },
    "context": "O documento contém linhas sem uma dimensão obrigatória para conclusão do processo.",
    "cause": "O campo Código Departamento está vazio numa ou mais linhas.",
    "diagnosis": [
      "Abrir o documento e identificar as linhas sem Código Departamento.",
      "Confirmar o valor correto a aplicar a cada linha."
    ],
    "solution": "Preencher o Código Departamento em todas as linhas do pedido.",
    "steps": [
      "Abrir o Pedido de Amostras com erro.",
      "Verificar as linhas do documento.",
      "Identificar as que têm o campo Código Departamento vazio.",
      "Preencher o valor correto em cada linha.",
      "Guardar as alterações.",
      "Voltar a tentar o envio do pedido."
    ],
    "validation": [
      "O pedido passa a ser enviado sem erro."
    ],
    "notes": [
      "Após o preenchimento completo, o sistema permite o envio sem apresentar o erro."
    ]
  },
  {
    "id": "BC-027",
    "title": "Ao criar uma ordem de transferência, o sistema indica que o valor de dimensão INDEFINIDO não existe porque o cliente não tem gestor comercial corretamente atribuído.",
    "category": "Transferências",
    "product": "Business Central",
    "visibility": {
      "user": true,
      "agent": true
    },
    "context": "Erro recorrente em documentos que dependem de dimensões comerciais derivadas do cliente e do vendedor associado.",
    "cause": "O cliente está com vendedor genérico ou inválido, pelo que o sistema não consegue derivar as dimensões necessárias.",
    "diagnosis": [
      "Abrir a ficha do cliente.",
      "Validar o campo Cód. Vendedor.",
      "Confirmar se o vendedor tem as dimensões corretamente associadas."
    ],
    "solution": "Atribuir o gestor comercial correto na ficha do cliente para que as dimensões sejam preenchidas automaticamente.",
    "steps": [
      "Abrir a ficha do cliente.",
      "Verificar o campo Cód. Vendedor.",
      "Se estiver com GC-INDEFIN ou equivalente, alterar para o gestor comercial correto.",
      "Confirmar que o vendedor tem as dimensões associadas.",
      "Guardar a ficha.",
      "Voltar à ordem de transferência e atualizar.",
      "Confirmar que os campos de dimensão passam a ser preenchidos automaticamente."
    ],
    "validation": [
      "Os campos dimensionais passam a ser preenchidos sem erro.",
      "A ordem de transferência pode ser continuada normalmente."
    ],
    "notes": [
      "Este tipo de erro é recorrente em clientes configurados com o gestor comercial genérico GC-INDEFIN."
    ]
  },
  {
    "id": "BC-028",
    "title": "É necessário preencher manualmente as dimensões numa ordem de transferência quando não são herdadas automaticamente.",
    "category": "Transferências",
    "product": "Business Central",
    "visibility": {
      "user": true,
      "agent": true
    },
    "context": "Útil quando os valores dimensionais não são herdados automaticamente do cliente ou do documento de origem.",
    "cause": "As dimensões não estão definidas no cabeçalho ou há conflito com valores manuais nas linhas.",
    "diagnosis": [
      "Confirmar se a ordem já tem dimensões no cabeçalho.",
      "Validar se existem linhas com dimensões manuais em conflito.",
      "Confirmar os valores dimensionais esperados."
    ],
    "solution": "Configurar as dimensões no cabeçalho da ordem de transferência para que sejam aplicadas às linhas.",
    "steps": [
      "Abrir a Ordem de Transferência.",
      "Ir ao menu Encomenda.",
      "Selecionar Dimensões.",
      "Criar ou editar linhas com o Código Dimensão necessário.",
      "Selecionar o Cód. Valor Dimensão correto.",
      "Guardar e fechar.",
      "Validar se as linhas herdam as dimensões."
    ],
    "validation": [
      "As dimensões passam a estar presentes no cabeçalho e linhas.",
      "Os erros de valor indefinido deixam de ocorrer."
    ],
    "notes": [
      "O mais comum e recomendado é configurar as dimensões no cabeçalho."
    ]
  },
  {
    "id": "BC-029",
    "title": "A atualização mensal de preços só pode ser carregada no Business Central se o ficheiro estiver no formato correto exigido pelo sistema.",
    "category": "Preços",
    "product": "Business Central",
    "visibility": {
      "user": true,
      "agent": true
    },
    "context": "Processo periódico de atualização de preços e margens com ficheiro externo enviado pela Glintt.",
    "cause": "O ficheiro não está no formato técnico esperado para importação.",
    "diagnosis": [
      "Confirmar origem e mês do ficheiro.",
      "Validar se tem apenas as 11 primeiras colunas.",
      "Confirmar ausência de cabeçalhos e separador vírgula."
    ],
    "solution": "Preparar o ficheiro em CSV delimitado por vírgulas, sem cabeçalhos e apenas com as colunas necessárias, e depois importar no módulo correto.",
    "steps": [
      "Obter o ficheiro mensal de preços e margens.",
      "Abrir o ficheiro no Excel.",
      "Manter apenas as primeiras 11 colunas.",
      "Remover linhas de cabeçalho.",
      "Guardar como CSV separado por vírgulas.",
      "No Business Central, abrir o módulo de histórico de preços correspondente.",
      "Usar a ação de importação dedicada.",
      "Selecionar o ficheiro CSV e validar a importação."
    ],
    "validation": [
      "O sistema aceita o ficheiro sem erros.",
      "A atualização fica carregada no módulo correspondente."
    ],
    "notes": [
      "O ficheiro deve ser pedido no início de cada mês.",
      "Sem o formato correto, o BC rejeita a importação."
    ]
  },
  {
    "id": "BC-030",
    "title": "Ao tentar registar uma fatura antecipada, o sistema indica que não existem quantidades para faturar porque o campo % Pré-pagamento não está preenchido.",
    "category": "Faturação",
    "product": "Business Central",
    "visibility": {
      "user": true,
      "agent": true
    },
    "context": "Pode ocorrer quando a encomenda foi criada ou ajustada fora do fluxo habitual e o campo não ficou preenchido automaticamente.",
    "cause": "O documento não está a ser reconhecido como fatura antecipada por falta do valor de % Pré-pagamento.",
    "diagnosis": [
      "Confirmar se a encomenda está reaberta.",
      "Validar o campo % Pré-pagamento no cabeçalho.",
      "Confirmar que o processo pretendido é faturação antecipada."
    ],
    "solution": "Reabrir a encomenda de venda e preencher manualmente o campo % Pré-pagamento.",
    "steps": [
      "Abrir a Encomenda de Venda.",
      "Se estiver libertada, reabrir a encomenda.",
      "Localizar o campo % Pré-pagamento no cabeçalho.",
      "Preencher o valor pretendido, por exemplo 100%.",
      "Guardar a encomenda.",
      "Voltar a libertar ou aprovar, se aplicável.",
      "Registar a Fatura Antecipada."
    ],
    "validation": [
      "A fatura antecipada passa a registar sem erro.",
      "O sistema reconhece corretamente o contexto de pré-pagamento."
    ],
    "notes": [
      "Sempre que surgir erro de quantidades em faturas antecipadas, confirmar primeiro se o % Pré-pagamento está efetivamente preenchido."
    ]
  },
  {
    "id": "BC-031",
    "title": "Os estados das encomendas não são atualizados automaticamente porque a tarefa agendada de atualização falhou.",
    "category": "Logística",
    "product": "Business Central",
    "visibility": {
      "user": true,
      "agent": true
    },
    "context": "O comportamento está associado às tarefas automáticas responsáveis pela atualização dos estados das encomendas e integração com Parcel.",
    "cause": "A tarefa agendada não executou corretamente ou falhou pontualmente.",
    "diagnosis": [
      "Confirmar a mensagem exibida nas Operações.",
      "Abrir Movimentos Filas Tarefas.",
      "Localizar a tarefa correta e verificar se está ativa."
    ],
    "solution": "Executar manualmente a tarefa responsável pela atualização de estados na página Movimentos Filas Tarefas.",
    "steps": [
      "Pesquisar por Movimentos Filas Tarefas.",
      "Localizar a tarefa relacionada com atualização de estados, como Get Status Ws ou Estados Parcel.",
      "Selecionar a tarefa.",
      "Executar Correr uma vez (em primeiro plano).",
      "Aguardar a execução.",
      "Voltar ao ecrã de origem e atualizar para confirmar a atualização dos estados."
    ],
    "validation": [
      "Os estados das encomendas passam a ser atualizados corretamente."
    ],
    "notes": [
      "A execução manual permite forçar a atualização imediata dos estados.",
      "Algumas tarefas apenas processam um período limitado de dias."
    ]
  },
  {
    "id": "BC-032",
    "title": "Falta enviar os dados à 2Logical. Este envio deve ser efetuado no início de cada mês.",
    "category": "Integrações",
    "product": "Business Central",
    "visibility": {
      "user": true,
      "agent": true
    },
    "context": "Processo manual periódico de envio de dados para a 2Logical.",
    "cause": "O envio mensal não foi executado.",
    "diagnosis": [
      "Confirmar se o envio do mês atual já foi realizado.",
      "Validar se existe acesso ao servidor NAVAPP01.",
      "Confirmar se é necessário correr a aplicação para uma ou para ambas as empresas."
    ],
    "solution": "Executar a aplicação de envio de dados no servidor NAVAPP01.",
    "steps": [
      "Entrar no servidor NAVAPP01 via ambiente de trabalho remoto.",
      "Aceder ao disco local C.",
      "Entrar na pasta 2Logical_AP ou 2Logical_MDS.",
      "Procurar e executar a aplicação que está dentro da pasta.",
      "Fazer isto para uma ou para ambas as empresas, se necessário."
    ],
    "validation": [
      "A aplicação foi executada com sucesso.",
      "O envio foi realizado para as empresas necessárias."
    ],
    "notes": [
      "Este processo deve ser realizado no início de cada mês."
    ]
  },
  {
    "id": "BC-033",
    "title": "É necessário comunicar faturas registadas à AGT e validar o estado da comunicação.",
    "category": "AGT",
    "product": "Business Central",
    "visibility": {
      "user": true,
      "agent": true
    },
    "context": "Processo manual de comunicação fiscal eletrónica de faturas à AGT no Business Central Australpharma.",
    "cause": "As faturas ainda não foram comunicadas ou o estado ainda não foi atualizado no sistema.",
    "diagnosis": [
      "Validar se a tarefa AP_Send_FE foi executada.",
      "Confirmar se Data Registo e Estado AGT foram corretamente filtrados.",
      "Confirmar que o documento ainda não tem Nº AGT nem estado Aceite."
    ],
    "solution": "Executar a fila de tarefas e usar as ações de comunicar documento e obter estado nas faturas registadas.",
    "steps": [
      "Abrir a pesquisa do Business Central.",
      "Procurar por Movs. Fila Tarefas.",
      "Localizar a tarefa do processo AGT.",
      "Confirmar ID Objeto a Executar = 50525 e legenda AP_Send_FE.",
      "Selecionar a linha e clicar em Correr uma vez (em primeiro plano).",
      "Procurar por Faturas Venda Registadas.",
      "Filtrar Data Registo pela data pretendida.",
      "Deixar Estado AGT em branco.",
      "Selecionar os documentos.",
      "Ir a Ações > Fatura > Comunicar Documento AGT.",
      "Aguardar o processamento.",
      "Voltar a filtrar os documentos com Estado AGT = Pendente e Código AGT = ''.",
      "Selecionar os documentos e executar Ações > Fatura > Obter Estado AGT."
    ],
    "validation": [
      "Os documentos deixam de estar com Estado AGT vazio.",
      "Os estados passam a refletir Pendente, Aceite ou Rejeitado conforme o retorno."
    ],
    "notes": [
      "Depois de comunicadas, as faturas deixam normalmente de aparecer no filtro inicial.",
      "Estados possíveis: Pendente, Aceite, Rejeitado."
    ]
  },
  {
    "id": "BC-034",
    "title": "É necessário comunicar notas de crédito registadas à AGT e validar o estado da comunicação.",
    "category": "AGT",
    "product": "Business Central",
    "visibility": {
      "user": true,
      "agent": true
    },
    "context": "Processo manual de comunicação eletrónica de notas de crédito à AGT.",
    "cause": "As notas de crédito ainda não foram submetidas ou o retorno ainda não foi atualizado.",
    "diagnosis": [
      "Confirmar que os documentos estão na lista correta.",
      "Validar filtros de Data Registo e Estado AGT.",
      "Confirmar ausência de Nº AGT antes da comunicação."
    ],
    "solution": "Executar a comunicação nas notas de crédito registadas e depois obter o respetivo estado.",
    "steps": [
      "Procurar por Notas de Crédito Registadas.",
      "Filtrar Data Registo pela data pretendida.",
      "Deixar Estado AGT em branco.",
      "Selecionar os documentos.",
      "Ir a Ações > Nota de Crédito > Comunicar Documento AGT.",
      "Aguardar o processamento.",
      "Filtrar os documentos com Estado AGT = Pendente e Código AGT = ''.",
      "Selecionar os documentos.",
      "Executar Ações > Nota de Crédito > Obter Estado AGT."
    ],
    "validation": [
      "Os documentos passam a apresentar estado AGT atualizado."
    ],
    "notes": [
      "O processo é equivalente ao das faturas, mas aplicado às notas de crédito."
    ]
  },
  {
    "id": "BC-035",
    "title": "É necessário comunicar recibos registados à AGT e confirmar o respetivo estado.",
    "category": "AGT",
    "product": "Business Central",
    "visibility": {
      "user": true,
      "agent": true
    },
    "context": "Aplicável a recibos registados que tenham a flag eletrónica ativa para comunicação à AGT.",
    "cause": "Os recibos ainda não foram comunicados ou não têm as condições mínimas para comunicação.",
    "diagnosis": [
      "Confirmar PTSS FE Document = Sim.",
      "Validar se Estado AGT está em branco antes da comunicação.",
      "Confirmar que o recibo ainda não tem Nº Documento AGT."
    ],
    "solution": "Filtrar os recibos eletrónicos elegíveis e executar a ação de comunicação seguida da obtenção de estado.",
    "steps": [
      "Abrir a pesquisa do Business Central.",
      "Procurar por Recibos.",
      "Entrar na lista.",
      "Filtrar PTSS FE Document = Sim.",
      "Deixar Estado AGT em branco.",
      "Selecionar os recibos pretendidos.",
      "Ir a Ações > Novo Documento > Comunicar Documento AGT.",
      "Aguardar o processamento.",
      "Filtrar os recibos com Estado AGT = Pendente e Código AGT = ''.",
      "Selecionar os documentos.",
      "Executar Ações > Obter Estado AGT."
    ],
    "validation": [
      "Os recibos passam a apresentar Estado AGT.",
      "O Nº Documento AGT fica preenchido quando aplicável."
    ],
    "notes": [
      "Depois da comunicação, o Estado AGT é atualizado e o Nº Documento AGT pode ser preenchido."
    ]
  },
  {
    "id": "BC-036",
    "title": "Podem ocorrer erros, duplicações ou comunicações indevidas se os documentos forem enviados sem validação prévia.",
    "category": "AGT",
    "product": "Business Central",
    "visibility": {
      "user": true,
      "agent": true
    },
    "context": "Camada de controlo para evitar falhas funcionais na comunicação eletrónica à AGT.",
    "cause": "Envio de documentos já processados, elegibilidade incorreta ou filtros indevidos.",
    "diagnosis": [
      "Validar Estado AGT e Nº AGT antes de comunicar.",
      "Confirmar se o documento é eletrónico e elegível.",
      "Rever os filtros antes de executar ações em massa."
    ],
    "solution": "Validar sempre os campos e filtros essenciais antes de comunicar documentos à AGT.",
    "steps": [
      "Confirmar PTSS FE Document = Sim, quando aplicável.",
      "Garantir que o documento não tem Nº AGT.",
      "Verificar que o Estado AGT não está já como Aceite.",
      "Confirmar que os filtros aplicados correspondem apenas aos documentos pretendidos.",
      "Evitar comunicação em massa sem validação prévia da lista."
    ],
    "validation": [
      "A comunicação decorre sem duplicações.",
      "Só são enviados os documentos corretos."
    ],
    "notes": [
      "Erros comuns: documentos já comunicados, recibos sem flag eletrónica e filtros mal aplicados."
    ]
  }
];
