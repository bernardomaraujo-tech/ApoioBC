/*
 * Base de conhecimento inicial para o assistente Business Central.
 * Cada registo contém título, descrição do problema, solução, passos e aliases.
 * Este ficheiro pode ser gerado automaticamente a partir do DOCX de suporte.
 */

const data = [
  {
    title: "Delegação de aprovações bloqueadas",
    problem:
      "Colaboradora sem acesso ao computador e rede, impossibilitada de aprovar encomenda urgente.",
    solution:
      "Delegar aprovação temporariamente para outro utilizador e configurar substituto nas definições do aprovador.",
    steps: [
      "Aceder à encomenda no Business Central.",
      "Ir ao separador Aprovações e selecionar Delegar.",
      "Indicar o utilizador que irá assumir a aprovação.",
      "Verificar se a nova linha de aprovação foi criada e atualizar a encomenda.",
      "Configurar previamente substituto no utilizador aprovador para evitar bloqueios em ausências."
    ],
    aliases: ["delegar aprovação", "aprovação bloqueada", "substituto"]
  },
  {
    title: "Erro tipo lista de preços e descontos",
    problem:
      "Ao criar lista de preços para instituições, surge erro: 'Tipo lista Preços e Descontos não pode ser utilizado'.",
    solution:
      "Criar nova lista de preços com a configuração correta: apenas preços (sem descontos) antes de inserir linhas.",
    steps: [
      "Criar a lista de preços no Business Central.",
      "Definir 'Ver coluna para' apenas com preços (sem desconto) antes de inserir dados.",
      "Importar ou inserir as linhas com número de produto, quantidade mínima e preço.",
      "Validar linhas e ativar a lista de preços.",
      "Apagar listas antigas para evitar erros."
    ],
    aliases: ["lista preços", "preço e desconto", "erro lista preços"]
  },
  {
    title: "Faturar Encomenda – Data de Registo desatualizada",
    problem:
      "Erro ao faturar encomenda de venda porque a data de registo do utilizador não está atualizada.",
    solution:
      "Atualizar a Data de Registo nas configurações do utilizador para a data atual antes de faturar.",
    steps: [
      "Aceder à Configuração do Utilizador.",
      "Verificar o campo Data de Registo.",
      "Se a data for diferente do dia atual, atualizar para hoje e guardar."
    ],
    aliases: ["erro data de registo", "faturar encomenda data"]
  },
  {
    title: "Faturar Encomenda – Envio direto não associado a encomenda de compra",
    problem:
      "Erro ao faturar: 'A linha está marcada como envio direto e ainda não está associada a uma encomenda de compra.'",
    solution:
      "Preencher os campos 'Nº Encomenda Compra' e 'Nº Linha Enc. Compra' na linha da encomenda de venda.",
    steps: [
      "Abrir a encomenda de venda e localizar a linha mencionada no erro.",
      "Introduzir o número da encomenda de compra correspondente.",
      "Introduzir o número da linha da encomenda de compra.",
      "Guardar e tentar faturar novamente."
    ],
    aliases: ["envio direto", "associar encomenda compra", "erro faturar encomenda"]
  },
  {
    title: "Consulta de Vendas por Cliente e Produto",
    problem:
      "Necessidade de consultar as vendas de um produto específico para um cliente durante o ano corrente.",
    solution:
      "Utilizar as linhas de Fatura de Venda e Nota de Crédito registadas com filtros por cliente, produto e data.",
    steps: [
      "Abrir a lista de Linhas Fatura Venda Registadas.",
      "Filtrar por Venda-a Nr. Cliente (ex: 3655) e Nº do Produto (ex: H2361).",
      "Opcional: Filtrar pela Data de Registo do ano em curso.",
      "Repetir o processo na lista de Linhas Nota de Crédito Registadas.",
      "Subtrair eventuais notas de crédito ao total de faturas para obter vendas líquidas."
    ],
    aliases: ["consultar vendas por produto", "linhas fatura venda", "notas de crédito"]
  },
  {
    title: "Erro ao puxar envio na mobilidade – falta de email no vendedor/comprador",
    problem:
      "Ao puxar dados dos envios na mobilidade aparece o erro: 'E-mail tem que ter um valor em Vendedor. Código igual a GC-HC não pode ser igual a zero nem estar vazio.'",
    solution:
      "Preencher o campo E-mail no registo do vendedor/comprador com o código indicado.",
    steps: [
      "Pesquisar por Vendedores/Compradores no Business Central.",
      "Abrir o registo com o código mencionado no erro (ex: GC-HC).",
      "Inserir o endereço de email no campo E-mail.",
      "Guardar o registo e voltar a puxar os dados."
    ],
    aliases: ["erro email vendedor", "mobilidade envio email", "GC-HC email"]
  }
];