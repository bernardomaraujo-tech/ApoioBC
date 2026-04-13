const data = [
  {
    title: "Delegação de aprovações bloqueadas",
    problem: "Uma colaboradora ficou sem conseguir aprovar uma encomenda urgente por ter o computador bloqueado, sem rede no telemóvel e sem acesso às ferramentas necessárias.",
    solution: "Delegar temporariamente a aprovação para outro utilizador e garantir que existe substituto configurado no utilizador de aprovação.",
    steps: [
      "Aceder à encomenda no Business Central.",
      "Ir ao separador Aprovações e selecionar Delegar.",
      "Indicar o utilizador que irá assumir a aprovação.",
      "Verificar se foi criada uma nova linha de aprovação.",
      "Fazer F5 ou voltar à encomenda para confirmar que a delegação ficou ativa.",
      "Confirmar que o utilizador aprovador tem substituto configurado para períodos de ausência."
    ],
    aliases: [
      "delegar aprovação",
      "aprovação bloqueada",
      "substituto aprovador",
      "encomenda urgente aprovação",
      "não consigo aprovar",
      "aprovação em férias",
      "delegação de aprovação"
    ]
  },
  {
    title: "Erro ao criar lista de preços para instituições",
    problem: "Ao criar uma lista de preços para instituições surge o erro 'Tipo lista Preços e Descontos não pode ser utilizado' porque a lista foi criada como preço e desconto em vez de apenas preço.",
    solution: "Criar uma nova lista configurada apenas como preço antes de inserir linhas.",
    steps: [
      "Criar a lista de preços.",
      "Antes de inserir qualquer linha, definir 'Ver coluna para' apenas com preços.",
      "Não alterar esta configuração depois de inserir dados.",
      "Se usar Excel, manter apenas número do produto, quantidade mínima e preço.",
      "Garantir a formatação correta dos preços com vírgula decimal.",
      "Importar, validar linhas e ativar a lista.",
      "Apagar listas antigas para evitar duplicações."
    ],
    aliases: [
      "lista de preços",
      "preços e descontos",
      "erro tipo lista preços e descontos",
      "não consigo criar lista de preços",
      "lista de preços instituições",
      "preço sem desconto"
    ]
  },
  {
    title: "Faturar encomenda de venda - data de registo desatualizada",
    problem: "Ao tentar faturar uma encomenda de venda, o sistema bloqueia porque a data de registo do utilizador não está definida para o dia atual.",
    solution: "Atualizar a Data de Registo nas configurações do utilizador antes de faturar.",
    steps: [
      "Aceder a Configuração Utilizador.",
      "Verificar o campo Data de Registo.",
      "Se estiver diferente do dia atual, atualizar para a data corrente.",
      "Guardar as alterações.",
      "Voltar a tentar faturar a encomenda."
    ],
    aliases: [
      "erro data de registo",
      "não consigo faturar",
      "erro ao faturar encomenda",
      "data de registo errada",
      "data de registo desatualizada",
      "faturação bloqueada por data"
    ]
  },
  {
    title: "Faturar encomenda de venda - envio direto não associado à encomenda de compra",
    problem: "Ao tentar faturar surge o erro de que a linha está marcada como envio direto mas ainda não está associada a uma encomenda de compra.",
    solution: "Preencher os campos de associação da linha da encomenda de venda à encomenda de compra correspondente.",
    steps: [
      "Abrir a encomenda de venda.",
      "Localizar a linha indicada no erro.",
      "Preencher o campo 'Nº Encomenda Compra'.",
      "Preencher o campo 'Nº Linha Enc. Compra'.",
      "Guardar e pedir para voltar a tentar faturar."
    ],
    aliases: [
      "envio direto",
      "linha marcada como envio direto",
      "não associada a encomenda de compra",
      "erro envio direto faturar",
      "nº encomenda compra",
      "nº linha enc compra"
    ]
  },
  {
    title: "Team Approval em aprovações de venda",
    problem: "Existe necessidade de permitir aprovações em grupo, em que qualquer elemento do grupo possa aprovar o pedido.",
    solution: "Usar Team Approval em grupos de utilizador de workflow com o mesmo número de sequência.",
    steps: [
      "Configurar o grupo de utilizadores de workflow.",
      "Garantir que todos os utilizadores do grupo têm o mesmo número de sequência.",
      "Ativar o Team Approval no grupo.",
      "Validar que basta uma aprovação para libertar o pedido e cancelar as restantes pendentes."
    ],
    aliases: [
      "team approval",
      "aprovação em grupo",
      "qualquer um pode aprovar",
      "workflow grupo",
      "aprovação sem hierarquia"
    ]
  },
  {
    title: "Delegações de aprovação por ausência do aprovador",
    problem: "O aprovador titular está ausente e o pedido fica bloqueado por não existir substituto definido.",
    solution: "Configurar o substituto no utilizador de aprovação e delegar a aprovação quando necessário.",
    steps: [
      "Abrir a configuração do utilizador aprovador.",
      "Verificar se existe substituto definido no campo apropriado.",
      "Se não existir, configurar o substituto.",
      "Delegar a aprovação manualmente para o substituto.",
      "Confirmar que a aprovação foi redirecionada com sucesso."
    ],
    aliases: [
      "aprovador ausente",
      "férias aprovador",
      "substituir aprovador",
      "delegação por ausência",
      "pedido bloqueado aprovação"
    ]
  },
  {
    title: "Consulta de vendas por cliente e produto",
    problem: "É necessário consultar as vendas já realizadas de um produto específico para um cliente, considerando também eventuais notas de crédito.",
    solution: "Usar Linhas Fatura Venda Registadas e Linhas Nota de Crédito Registadas com filtros por cliente e produto.",
    steps: [
      "Pesquisar por Linhas Fatura Venda Registadas.",
      "Filtrar por 'Venda-a Nr. Cliente'.",
      "Filtrar por 'Nº' do produto.",
      "Opcionalmente filtrar por data de registo.",
      "Repetir no menu Linhas Nota de Crédito Registadas.",
      "Calcular vendas líquidas = faturas menos notas de crédito."
    ],
    aliases: [
      "consultar vendas",
      "vendas por cliente",
      "vendas por produto",
      "linhas fatura venda registadas",
      "notas de crédito produto cliente",
      "quanto foi vendido"
    ]
  },
  {
    title: "Erro ao puxar envio na mobilidade por falta de email em vendedor/comprador",
    problem: "Ao puxar dados dos envios na mobilidade surge erro porque o vendedor/comprador não tem email preenchido.",
    solution: "Preencher o campo E-mail na ficha do vendedor/comprador indicado no erro.",
    steps: [
      "Pesquisar por Vendedores/Compradores.",
      "Abrir o registo com o código indicado no erro.",
      "Preencher o campo E-mail com o endereço correto.",
      "Guardar a ficha.",
      "Voltar a puxar os dados em views ou mobilidade."
    ],
    aliases: [
      "erro email vendedor",
      "falta email vendedor",
      "mobilidade envio email",
      "gc hc email",
      "e-mail tem que ter um valor em vendedor"
    ]
  },
  {
    title: "Erro ao criar pedido de amostra por dimensão em falta",
    problem: "Ao avançar com um pedido de amostra, o sistema indica que a dimensão padrão Área de Gestão do Produto não existe para o artigo.",
    solution: "Preencher a dimensão padrão correta na ficha do produto.",
    steps: [
      "Pesquisar por Produtos.",
      "Abrir a ficha do produto referido na mensagem.",
      "Ir a Dimensões ou Dimensões Padrão.",
      "Preencher o campo Área Gestão Produto com o valor correto.",
      "Guardar a ficha.",
      "Repetir a criação do pedido de amostra."
    ],
    aliases: [
      "pedido de amostra",
      "dimensão padrão não existe",
      "área gestão produto",
      "erro dimensão amostra",
      "amostra dimensão em falta"
    ]
  },
  {
    title: "Produto não incluído nas recolhas por lotes bloqueados",
    problem: "Uma referência não está a ser incluída nas recolhas ao gerar envios porque todos os lotes disponíveis estão bloqueados.",
    solution: "Validar lotes, reservas, validade e confirmar se os lotes estão marcados como bloqueados.",
    steps: [
      "Verificar o conteúdo de posição para confirmar disponibilidade.",
      "Validar a validade dos lotes.",
      "Confirmar que não existem reservas ativas.",
      "Abrir a lista de lotes disponíveis para a referência.",
      "Verificar a coluna 'Bloqueado'.",
      "Se todos os lotes estiverem bloqueados, regularizar esse bloqueio antes de gerar as recolhas."
    ],
    aliases: [
      "recolha não gera",
      "referência não disponível para envio",
      "lotes bloqueados",
      "produto não aparece na recolha",
      "envios não incluem referência"
    ]
  },
  {
    title: "Erro de dimensões por qualificação de fornecedor e produto",
    problem: "Ao receber uma encomenda de compra, a combinação de dimensões utilizada está bloqueada porque o fornecedor ainda não está qualificado para aquele produto.",
    solution: "Encaminhar o caso para a Qualidade para validação documental e qualificação do fornecedor para o produto.",
    steps: [
      "Confirmar a mensagem de erro na encomenda de compra.",
      "Validar que a causa é a qualificação do fornecedor para o produto.",
      "Reencaminhar o caso para a Qualidade.",
      "Aguardar a validação documental junto do comprador e fornecedor.",
      "Após qualificação, repetir a receção."
    ],
    aliases: [
      "combinação de dimensões bloqueada",
      "qualif prod",
      "qualif forn",
      "fornecedor não qualificado",
      "erro qualificação fornecedor produto"
    ]
  },
  {
    title: "Erro de múltiplos de venda no produto",
    problem: "O sistema bloqueia o registo porque o produto só permite quantidades que sejam múltiplos exatos do valor configurado.",
    solution: "Validar com o Gestor de Produto se pode alterar temporariamente o múltiplo para 1 ou ajustar a quantidade para um múltiplo válido.",
    steps: [
      "Identificar o múltiplo de venda configurado na ficha do artigo.",
      "Pedir ao Gestor de Produto a validação da alteração temporária, se necessário.",
      "Se aprovado, alterar temporariamente os múltiplos para 1.",
      "Efetuar o registo do documento.",
      "Repor o múltiplo original, se aplicável.",
      "Em alternativa, ajustar a quantidade para um múltiplo correto."
    ],
    aliases: [
      "múltiplos de venda",
      "permitido apenas múltiplos de venda",
      "quantidade inválida produto",
      "erro múltiplos",
      "produto só vende múltiplos"
    ]
  },
  {
    title: "Configuração de impressora no Business Central",
    problem: "É necessário configurar uma nova impressora online para mapas específicos e validar dimensões de impressão.",
    solution: "Atualizar as impressoras PrintNode, associar a impressora ao mapa ou utilizador e validar o output com teste real.",
    steps: [
      "Abrir Insight Works PrintNode Printers.",
      "Executar 'Atualizar impressoras PrintNode'.",
      "Ir a Seleções Impressora.",
      "Associar a impressora ao mapa e/ou ao utilizador.",
      "Pedir um teste de impressão ao utilizador.",
      "Se necessário, ajustar largura e altura nas definições da impressora."
    ],
    aliases: [
      "configurar impressora",
      "printnode",
      "seleções impressora",
      "mapa impressora",
      "impressora online bc"
    ]
  },
  {
    title: "Fornecedor bloqueado por aprovação rejeitada ou pendente",
    problem: "O fornecedor está bloqueado porque existem linhas de aprovação rejeitadas ou pendentes na ficha do fornecedor.",
    solution: "Consultar o histórico de aprovações do fornecedor e, se necessário, pedir novo pedido de aprovação.",
    steps: [
      "Abrir a ficha do fornecedor.",
      "Verificar se existe alguma nota de bloqueio.",
      "Aceder a Fornecedor > Aprovações.",
      "Consultar o histórico de linhas.",
      "Se houver rejeições, pedir novo pedido de aprovação.",
      "Se houver pendências, identificar o aprovador responsável."
    ],
    aliases: [
      "fornecedor bloqueado",
      "aprovação fornecedor rejeitada",
      "fornecedor não deixa registar",
      "histórico aprovações fornecedor",
      "novo pedido de aprovação fornecedor"
    ]
  },
  {
    title: "Erro no campo prazo de entrega do produto",
    problem: "Ao preencher o Prazo Entrega, o sistema não aceita apenas números porque é obrigatória a unidade de tempo.",
    solution: "Introduzir o valor com a respetiva unidade, por exemplo 56D para 56 dias.",
    steps: [
      "Abrir a ficha do produto.",
      "Localizar o campo Prazo Entrega.",
      "Introduzir o número acompanhado da unidade de tempo.",
      "Usar D para dias, S para semanas, M para meses, T para trimestres ou U para anos.",
      "Guardar a ficha."
    ],
    aliases: [
      "prazo de entrega",
      "56d",
      "não aceita prazo entrega",
      "dias semanas meses produto",
      "erro prazo entrega"
    ]
  },
  {
    title: "Erro na aprovação da proposta de venda por gestor comercial não configurado",
    problem: "Ao enviar uma proposta de venda para aprovação surge erro porque não existe configuração de gestor comercial para os produtos da linha em causa.",
    solution: "Pedir à área de negócio que caracterize corretamente a alocação do gestor comercial para esses produtos no cliente.",
    steps: [
      "Confirmar que a causa do erro é a ausência de gestor comercial associado.",
      "Pedir à área responsável para caracterizar a alocação correta do gestor comercial.",
      "Após a atualização, voltar a pedir a aprovação da encomenda ou proposta."
    ],
    aliases: [
      "erro aprovação proposta de venda",
      "gestor comercial indefinido",
      "não consigo enviar proposta para aprovação",
      "linha farma amb aprovação",
      "produto sem gestor comercial"
    ]
  },
  {
    title: "Expandir kit expositor numa ordem de transferência",
    problem: "É necessário visualizar e movimentar os artigos que compõem um kit dentro de uma ordem de transferência.",
    solution: "Usar a funcionalidade Explode BOM na linha do produto.",
    steps: [
      "Abrir a ordem de transferência.",
      "Localizar a linha do kit expositor.",
      "Selecionar a linha do produto.",
      "Ir a Funções > Explode BOM.",
      "Confirmar os artigos expandidos e as quantidades."
    ],
    aliases: [
      "explode bom",
      "expandir kit",
      "kit expositor",
      "ordem de transferência kit",
      "explodir bom"
    ]
  },
  {
    title: "Correção do documento externo em fatura de venda registada",
    problem: "Foi emitida uma fatura de venda com o Documento Externo incorreto.",
    solution: "Usar a função Atualizar Documento na fatura registada para corrigir o campo Documento Externo.",
    steps: [
      "Abrir a fatura de venda já registada.",
      "Ir ao separador Base.",
      "Selecionar a opção Atualizar Documento.",
      "Corrigir o campo Documento Externo.",
      "Guardar a alteração.",
      "Confirmar que o número atualizado aparece corretamente."
    ],
    aliases: [
      "documento externo",
      "corrigir documento externo",
      "fatura registada documento externo",
      "atualizar documento",
      "número externo errado"
    ]
  },
  {
    title: "Erro ao criar arrumação de produto por falta de posição fixa e padrão",
    problem: "Ao criar uma arrumação, o sistema gera erro porque o produto não tem uma posição de armazém marcada como Fixo e Padrão.",
    solution: "Configurar uma posição correta no Conteúdo de Posição com as opções Fixo e Padrão ativas.",
    steps: [
      "Abrir a ficha do produto.",
      "Ir a Relacionado > Armazém > Conteúdo de Posição.",
      "Verificar se existe uma posição marcada como Fixo e Padrão.",
      "Se não existir, selecionar a posição correta e marcar essas opções.",
      "Voltar à Folha de Arrumação.",
      "Gerar novamente o documento de arrumação."
    ],
    aliases: [
      "erro arrumação produto",
      "fixo e padrão",
      "conteúdo de posição",
      "produto desaparece na arrumação",
      "criar doc arrumação"
    ]
  },
  {
    title: "Erro ao registar recibo no diário de cobranças",
    problem: "Ao registar um recibo no diário de cobranças, o sistema indica que os números de recibo têm de ter um valor em Configuração Vendas e Cobranças.",
    solution: "Confirmar se a opção Emitir Recibo está ativa na ficha do cliente.",
    steps: [
      "Abrir a ficha do cliente.",
      "Ir ao separador Pagamentos.",
      "Confirmar se a opção Emitir Recibo está marcada.",
      "Se não estiver, ativar a opção.",
      "Guardar e voltar ao diário de cobranças.",
      "Tentar registar novamente o recibo."
    ],
    aliases: [
      "erro recibo",
      "diário de cobranças",
      "nºs recibo",
      "emitir recibo cliente",
      "não consigo registar recibo"
    ]
  },
  {
    title: "Suplemento Excel do Business Central deixou de funcionar",
    problem: "O suplemento do Excel utilizado para ligação ao Business Central deixou de funcionar, impedindo atualização ou exportação de dados.",
    solution: "Reinstalar ou reativar o Microsoft Dynamics Office Add-in e voltar a associar o servidor correto.",
    steps: [
      "Abrir o Excel.",
      "Ir a Base > Suplementos > Mais Suplementos.",
      "Se o suplemento já estiver instalado, removê-lo primeiro.",
      "Fechar e voltar a abrir o Excel.",
      "Pesquisar por Microsoft Dynamics Office Add-in e adicionar.",
      "Quando solicitado, indicar o URL https://exceladdinprovider.smb.dynamics.com."
    ],
    aliases: [
      "excel add in",
      "suplemento excel",
      "microsoft dynamics office add in",
      "excel business central não funciona",
      "ligação excel bc"
    ]
  },
  {
    title: "Criação e configuração de novos utilizadores no Business Central",
    problem: "A criação de novos utilizadores pode resultar em falhas de acesso, permissões incorretas ou ausência de ligação ao Microsoft 365 quando faltam dados no pedido inicial.",
    solution: "Recolher tipo de licença, funções e utilizador de referência, sincronizar a partir do Office 365 e completar todas as configurações necessárias no Business Central.",
    steps: [
      "Definir o tipo de licença necessário, como Essentials ou Team Member.",
      "Identificar um utilizador de referência ou descrever as funções do novo colaborador.",
      "Atribuir a licença no Microsoft 365.",
      "No Business Central, executar 'Atualizar utilizador a partir do Office 365'.",
      "Validar páginas Utilizador, Configurações Utilizador e Configuração Utilizador.",
      "Configurar datas de registo, comprador/vendedor, departamento e aprovações, se aplicável.",
      "Se for logística, configurar também empregado de armazém e acessos de mobilidade."
    ],
    aliases: [
      "novo utilizador",
      "criar utilizador bc",
      "office 365 business central",
      "licença team member",
      "licença essentials",
      "sincronizar utilizador office 365"
    ]
  },
  {
    title: "Erro nas etiquetas de envio por código postal não reconhecido na delegação",
    problem: "Durante a emissão de etiquetas de envio, o sistema não reconhece o código postal ou o respetivo código parcial na delegação.",
    solution: "Criar ou completar manualmente o código postal em falta na lista de delegações do operador logístico.",
    steps: [
      "Aceder a eLogística Externa.",
      "Abrir o operador logístico.",
      "Ir a Relacionado > eLogista Delegations.",
      "Verificar se o código postal completo e o parcial existem.",
      "Se faltar o parcial, criar uma nova linha com o código em falta.",
      "Atribuir a mesma delegação usada no código existente.",
      "Repetir a configuração para os operadores necessários, como Parcel 1 e Parcel 2."
    ],
    aliases: [
      "etiquetas envio",
      "código postal não reconhecido",
      "delegação parcel",
      "elogista delegations",
      "erro etiquetas delegação"
    ]
  },
  {
    title: "Erro na aprovação de encomenda por cliente sem gestor comercial para produtos de diagnóstico",
    problem: "Ao aprovar uma encomenda de produtos de Diagnóstico, o sistema dá erro porque o cliente só tem gestor comercial associado a outra área, como Farma-Amb.",
    solution: "Criar uma nova linha de vendedor para a área correta ou remover o filtro da área de gestão, se aplicável.",
    steps: [
      "Abrir a ficha do cliente.",
      "Ir ao separador ou secção de alocação do vendedor.",
      "Verificar se o gestor comercial está limitado apenas a uma área errada.",
      "Criar uma nova linha para a área de Diagnóstico ou remover o filtro de área.",
      "Guardar a ficha.",
      "Voltar à encomenda e reenviar para aprovação."
    ],
    aliases: [
      "cliente sem gestor comercial",
      "erro aprovação encomenda diagnóstico",
      "farma amb diagnóstico",
      "gestor indefinido cliente",
      "alocação gestor comercial"
    ]
  },
  {
    title: "Remover utilizadores inativos de grupos de tarefas para parar emails automáticos",
    problem: "Continuam a ser enviados emails automáticos do Business Central para utilizadores que já não trabalham na empresa porque continuam associados a grupos de tarefas.",
    solution: "Remover os utilizadores inativos dos respetivos Grupos Tarefas Utilizador.",
    steps: [
      "Pesquisar por Grupos Tarefas Utilizador.",
      "Rever os grupos existentes, especialmente os internacionais ou com 'export' no nome.",
      "Abrir cada grupo e localizar utilizadores inativos.",
      "Eliminar as linhas desses utilizadores.",
      "Confirmar que já não ficam associados a grupos ativos."
    ],
    aliases: [
      "emails automáticos utilizadores inativos",
      "grupos tarefas utilizador",
      "business central envia emails a ex colaboradores",
      "remover utilizadores grupos tarefas",
      "parar emails automáticos"
    ]
  },
  {
    title: "Erro ao enviar pedido de amostras por código de departamento em falta",
    problem: "Ao enviar um pedido de amostras surge erro porque existem linhas sem o campo Código Departamento preenchido.",
    solution: "Preencher o Código Departamento em todas as linhas do pedido.",
    steps: [
      "Abrir o Pedido de Amostras com erro.",
      "Verificar as linhas do documento.",
      "Identificar as que têm o campo Código Departamento vazio.",
      "Preencher o valor correto em cada linha.",
      "Guardar as alterações.",
      "Voltar a tentar o envio do pedido."
    ],
    aliases: [
      "código departamento em falta",
      "pedido de amostras erro",
      "linha transferência código departamento",
      "não consigo enviar pedido de amostras",
      "departamento vazio"
    ]
  },
  {
    title: "Erro ao criar ordem de transferência por falta de gestor comercial no cliente",
    problem: "Ao criar uma ordem de transferência, o sistema indica que o valor de dimensão INDEFINIDO não existe porque o cliente não tem gestor comercial corretamente atribuído.",
    solution: "Atribuir o gestor comercial correto na ficha do cliente para que as dimensões sejam preenchidas automaticamente.",
    steps: [
      "Abrir a ficha do cliente.",
      "Verificar o campo Cód. Vendedor.",
      "Se estiver com GC-INDEFIN ou equivalente, alterar para o gestor comercial correto.",
      "Confirmar que o vendedor tem as dimensões associadas.",
      "Guardar a ficha.",
      "Voltar à ordem de transferência e atualizar.",
      "Confirmar que os campos de dimensão passam a ser preenchidos automaticamente."
    ],
    aliases: [
      "gc indefin",
      "valor dimensão indefinido",
      "ordem de transferência erro dimensão",
      "cliente sem gestor comercial",
      "mov combinação dimensão"
    ]
  },
  {
    title: "Configurar dimensões numa ordem de transferência",
    problem: "É necessário preencher manualmente as dimensões numa ordem de transferência quando não são herdadas automaticamente.",
    solution: "Configurar as dimensões no cabeçalho da ordem de transferência para que sejam aplicadas às linhas.",
    steps: [
      "Abrir a Ordem de Transferência.",
      "Ir ao menu Encomenda.",
      "Selecionar Dimensões.",
      "Criar ou editar linhas com o Código Dimensão necessário.",
      "Selecionar o Cód. Valor Dimensão correto.",
      "Guardar e fechar.",
      "Validar se as linhas herdam as dimensões."
    ],
    aliases: [
      "dimensões ordem de transferência",
      "cabeçalho transferência dimensões",
      "mov combinação dimensões",
      "como configurar dimensões transferência",
      "cód valor dimensão"
    ]
  },
  {
    title: "Atualização mensal de preços por importação de ficheiro de preços e margens",
    problem: "A atualização mensal de preços só pode ser carregada no Business Central se o ficheiro estiver no formato correto exigido pelo sistema.",
    solution: "Preparar o ficheiro em CSV delimitado por vírgulas, sem cabeçalhos e apenas com as colunas necessárias, e depois importar no módulo correto.",
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
    aliases: [
      "atualização mensal preços",
      "importação preços margens",
      "csv preços business central",
      "ficheiro glintt preços",
      "não aceita ficheiro preços"
    ]
  },
  {
    title: "Erro ao registar fatura antecipada por percentagem de pré-pagamento não preenchida",
    problem: "Ao tentar registar uma fatura antecipada, o sistema indica que não existem quantidades para faturar porque o campo % Pré-pagamento não está preenchido.",
    solution: "Reabrir a encomenda de venda e preencher manualmente o campo % Pré-pagamento.",
    steps: [
      "Abrir a Encomenda de Venda.",
      "Se estiver libertada, reabrir a encomenda.",
      "Localizar o campo % Pré-pagamento no cabeçalho.",
      "Preencher o valor pretendido, por exemplo 100%.",
      "Guardar a encomenda.",
      "Voltar a libertar ou aprovar, se aplicável.",
      "Registar a Fatura Antecipada."
    ],
    aliases: [
      "fatura antecipada",
      "pré pagamento",
      "não existem quantidades para faturar",
      "erro pré pagamento encomenda",
      "percentagem pré pagamento vazia"
    ]
  },
  {
    title: "Erro na atualização automática do estado das encomendas Parcel",
    problem: "Os estados das encomendas não são atualizados automaticamente porque a tarefa agendada de atualização falhou.",
    solution: "Executar manualmente a tarefa responsável pela atualização de estados na página Movimentos Filas Tarefas.",
    steps: [
      "Pesquisar por Movimentos Filas Tarefas.",
      "Localizar a tarefa relacionada com atualização de estados, como Get Status Ws ou Estados Parcel.",
      "Selecionar a tarefa.",
      "Executar 'Correr uma vez (em primeiro plano)'.",
      "Aguardar a execução.",
      "Voltar ao ecrã de origem e atualizar para confirmar a atualização dos estados."
    ],
    aliases: [
      "update order status",
      "parcel estados",
      "estados encomendas não atualizam",
      "movimentos filas tarefas",
      "get status ws",
      "the job update order status scheduled by"
    ]
  },
  {
    title: "Atualização de dados 2Logical",
    problem: "Falta enviar os dados à 2Logical, sendo que este envio deve ser realizado no início de cada mês.",
    solution: "Efetuar o envio dos dados através do servidor NAVAPP01 executando a aplicação da 2logical.",
    steps: [
      "Entrar no servidor NAVAPP01 via ligação ao ambiente de trabalho remoto.",
      "Aceder ao disco local C.",
      "Entrar na pasta 2Logical_AP ou 2Logical_MDS.",
      "Procurar a aplicação dentro da pasta.",
      "Executar a aplicação.",
      "Repetir o processo para uma ou ambas as empresas, se necessário."
    ],
    aliases: [
      "2logical",
      "envio 2logical",
      "atualizar 2logical",
      "dados 2logical",
      "envio mensal 2logical",
      "navapp01 2logical",
      "aplicação 2logical",
      "2logical ap mds",
      "como enviar dados 2logical",
      "não enviei 2logical",
      "processo 2logical mensal",
      "2logical não atualizado"
    ]
  }
];
