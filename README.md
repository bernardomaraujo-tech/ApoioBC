# ApoioBC

Esta pasta contém uma implementação de exemplo de uma plataforma de suporte ao Business Central em formato de chatbot. O objetivo é fornecer uma resposta rápida a dúvidas recorrentes baseando-se numa base de conhecimento estruturada em ficheiro JSON.

## Estrutura do projeto

- `index.html` – página principal com a estrutura do chatbot. Carrega a imagem do avatar, o campo de pergunta e injeta os scripts.
- `styles.css` – folha de estilos responsável pelo layout e cores do chatbot.
- `app.js` – lógica principal que inicializa o motor de fuzzy search (Fuse.js), processa perguntas, decide se apresenta uma resposta ou sugestões e atualiza a interface.
- `data.js` – base de conhecimento em formato JavaScript. Cada registo contém campos `title`, `problem`, `solution`, `steps` e `aliases`. Este ficheiro pode ser gerado automaticamente a partir de um DOCX de apoio.
- `assets/alberto.png` – imagem usada como avatar no topo da página.

## Como usar localmente

1. Certifica-te de que tens um servidor local ou basta abrir o `index.html` no navegador (por questões de permissões, pode ser necessário servir via HTTP para carregar ficheiros locais em alguns navegadores).
2. Abre o ficheiro no browser. Verás a imagem do avatar e um campo para inserires perguntas.
3. Escreve uma questão relacionada com Business Central e clica em **Perguntar** ou pressiona *Enter*.
4. O sistema procura na base de conhecimento por coincidências aproximadas utilizando Fuse.js. Se encontrar uma correspondência com confiança alta ou média, apresenta a resposta estruturada; caso contrário, sugere até três tópicos semelhantes ou indica que não encontrou resultados.
5. Clica em **Limpar** para regressar ao estado inicial e fazer uma nova pesquisa.

## Atualizar a base de conhecimento

Para adicionar ou atualizar registos da base de conhecimento:

1. Gera ou edita o ficheiro `data.js` adicionando novos objetos ao array `data`. Cada registo deve ter pelo menos os campos `title`, `problem`, `solution`, `steps` (array) e `aliases` (array de strings). Podes adicionar campos adicionais conforme necessário.
2. Se o ficheiro de origem for um DOCX, recomenda-se criar um script em Python utilizando `python-docx` para extrair os campos e gerar o `data.js` ou um `data.json`. Este script não está incluído no repositório mas a estrutura proposta encontra-se documentada na especificação técnica.
3. Substitui o ficheiro `data.js` pelo novo, valida se carrega corretamente e faz commit no repositório.

## Publicação no GitHub Pages

Para publicar a aplicação estática no GitHub Pages:

1. Cria ou utiliza um repositório no GitHub e coloca os ficheiros do projeto na raiz ou numa pasta (ex.: `/docs`).
2. Nas definições do repositório, ativa o GitHub Pages e define a branch/folder onde os ficheiros se encontram.
3. Após algum tempo, a página estará disponível em `https://<utilizador>.github.io/<repositório>/`.

## Próximos passos

Esta versão é um MVP. Sugestões para evoluir:

- **Melhorar o motor de pesquisa** usando opções mais avançadas do Fuse.js (token search) ou integrando embeddings/RAG num backend.
- **Persistir histórico** e recolher feedback (“isto ajudou?”) para melhorar o conteúdo.
- **Autenticação e privacidade**: se a base de conhecimento contiver dados sensíveis, considera migrar para uma arquitetura com backend onde a base é privada.
- **Integrações**: no futuro, a aplicação pode evoluir para puxar dados diretamente do Business Central via APIs, mediante autenticação.