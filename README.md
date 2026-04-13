# BC Support App

Projeto React + Vite para base de conhecimento interna de apoio ao Business Central.

## O que já inclui

- Ecrã inicial com identificação:
  - Agente de Apoio
  - Utilizador
- Pesquisa por:
  - título
  - aliases
  - keywords
  - mensagens de erro
- Resposta diferente por perfil:
  - Utilizador -> simples e prática
  - Agente -> detalhada com diagnóstico, validação e escalamento
- Casos relacionados
- Botão para copiar resposta
- Estrutura pronta para crescer

## Estrutura

- `src/data/knowledgeBase.js` -> base de conhecimento
- `src/utils/search.js` -> lógica de matching
- `src/utils/storage.js` -> persistência do perfil e da última pesquisa
- `src/App.jsx` -> interface principal
- `src/styles.css` -> estilos

## Como arrancar localmente

```bash
npm install
npm run dev
```

## Como publicar no GitHub

### Opção recomendada: substituir tudo no repositório
1. Apaga os ficheiros atuais do repositório local.
2. Copia para lá todos os ficheiros desta pasta.
3. Corre:

```bash
npm install
npm run build
```

4. Se estiver tudo bem:

```bash
git add .
git commit -m "Rebuild completo do projeto BC Support"
git push
```

## Como adicionar mais casos

Abre `src/data/knowledgeBase.js` e duplica um objeto existente.

### Estrutura recomendada
```js
{
  id: "CAT-001",
  title: "Título do caso",
  category: "Categoria",
  aliases: [],
  keywords: [],
  errorPatterns: [],
  common: {
    problem: "",
    solution: "",
    steps: [],
    notes: []
  },
  agentOnly: {
    context: "",
    cause: "",
    diagnosis: [],
    validation: [],
    escalation: "",
    relatedCases: []
  }
}
```