export const KNOWLEDGE_BASE = [
  {
    id: "APR-001",
    title: "Delegação de aprovações bloqueadas",
    category: "Aprovações",
    aliases: [
      "não consigo aprovar",
      "aprovação bloqueada",
      "delegar aprovação",
      "pedido pendente",
      "aprovação em férias"
    ],
    keywords: ["aprovação", "delegar", "workflow", "substituto"],
    errorPatterns: [],
    common: {
      problem:
        "Uma encomenda fica pendente porque o aprovador não consegue aceder ou está ausente.",
      solution:
        "Delegar temporariamente a aprovação para outro utilizador.",
      steps: [
        "Abrir a encomenda.",
        "Ir a Aprovações > Delegar.",
        "Selecionar o novo aprovador.",
        "Confirmar que foi criada nova linha de aprovação.",
        "Atualizar a página."
      ],
      notes: [
        "Deve existir sempre um substituto definido para evitar bloqueios."
      ]
    },
    agentOnly: {
      context:
        "Situação comum quando o aprovador está sem acesso ou ausente.",
      cause:
        "Não existe substituto definido ou não foi feita delegação manual.",
      diagnosis: [
        "Confirmar quem é o aprovador pendente.",
        "Validar se existe substituto configurado.",
        "Confirmar se a delegação gera nova linha."
      ],
      validation: [
        "Nova linha de aprovação criada.",
        "Documento deixa de estar bloqueado."
      ],
      escalation:
        "Escalar para administrador de aprovações se não for possível delegar.",
      relatedCases: []
    }
  },

  {
    id: "FIN-001",
    title: "Erro ao registar recibo no diário de cobranças",
    category: "Financeiro",
    aliases: [
      "erro recibo",
      "não consigo registar recibo",
      "diário de cobranças erro"
    ],
    keywords: ["recibo", "cliente", "pagamentos"],
    errorPatterns: [
      "Nºs Recibo tem de ter um valor em Configuração Vendas & Cobranças"
    ],
    common: {
      problem:
        "Ao registar um recibo, o sistema indica que não existe numeração configurada.",
      solution:
        "Ativar a opção Emitir Recibo na ficha do cliente.",
      steps: [
        "Abrir a ficha do cliente.",
        "Ir ao separador Pagamentos.",
        "Ativar a opção Emitir Recibo.",
        "Guardar.",
        "Voltar a registar o recibo."
      ],
      notes: [
        "Sem esta opção ativa, o sistema não consegue gerar o número automaticamente."
      ]
    },
    agentOnly: {
      context:
        "Erro típico ao registar documentos no diário de cobranças.",
      cause:
        "Cliente não configurado para emissão de recibo.",
      diagnosis: [
        "Abrir ficha do cliente.",
        "Validar campo Emitir Recibo."
      ],
      validation: [
        "Recibo passa a ser registado.",
        "Número é gerado automaticamente."
      ],
      escalation:
        "Se persistir, validar séries de numeração.",
      relatedCases: []
    }
  },

  {
    id: "DIM-001",
    title: "Erro ao criar pedido de amostra por dimensão em falta",
    category: "Dimensões",
    aliases: [
      "dimensão padrão não existe",
      "erro amostra",
      "area gestão produto"
    ],
    keywords: ["dimensão", "produto", "amostra"],
    errorPatterns: ["Dimensão Padrão não existe"],
    common: {
      problem:
        "O sistema bloqueia a criação do pedido de amostra por falta de dimensão.",
      solution:
        "Preencher a dimensão na ficha do produto.",
      steps: [
        "Abrir ficha do produto.",
        "Ir a Dimensões.",
        "Preencher Área Gestão Produto.",
        "Guardar.",
        "Repetir operação."
      ],
      notes: [
        "Dimensões são obrigatórias para vários processos."
      ]
    },
    agentOnly: {
      context:
        "Produtos criados sem parametrização completa.",
      cause:
        "Dimensão obrigatória não definida.",
      diagnosis: [
        "Abrir produto.",
        "Verificar dimensões padrão."
      ],
      validation: [
        "Documento deixa de gerar erro."
      ],
      escalation:
        "Validar outras dimensões obrigatórias.",
      relatedCases: []
    }
  },

  {
    id: "OCR-001",
    title: "Erro OCR 2Logical - leitura duplicada (original + duplicado)",
    category: "OCR / Continia",
    aliases: [
      "ocr lê duplicado",
      "duas páginas duplicadas",
      "contínia duplica valores",
      "2logical duplicado",
      "ocr segunda página",
      "valores duplicados fatura"
    ],
    keywords: ["ocr", "contínia", "2logical", "duplicado", "fatura"],
    errorPatterns: [],
    common: {
      problem:
        "O OCR está a ler duas páginas (original e duplicado), o que provoca duplicação de valores ou leitura incorreta.",
      solution:
        "Configurar o template para ignorar a segunda página ou limitar a leitura à primeira.",
      steps: [
        "Abrir o template no Continia.",
        "Ir à configuração de reconhecimento.",
        "Definir regras para ignorar páginas duplicadas.",
        "Limitar leitura à primeira página (se aplicável).",
        "Testar novamente o OCR."
      ],
      notes: [
        "Este problema é comum em documentos com 'Original' e 'Duplicado'."
      ]
    },
    agentOnly: {
      context:
        "Ficheiros OCR com múltiplas páginas onde o fornecedor inclui duplicados do documento.",
      cause:
        "O OCR não distingue entre página original e duplicada.",
      diagnosis: [
        "Verificar número de páginas do documento.",
        "Confirmar se a segunda página é duplicado.",
        "Validar campos capturados duplicados."
      ],
      validation: [
        "OCR passa a capturar apenas uma página.",
        "Valores deixam de duplicar."
      ],
      escalation:
        "Se persistir, ajustar regras avançadas do template ou contactar suporte Continia.",
      relatedCases: []
    }
  }
];
