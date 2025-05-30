YourVote
YourVote é um sistema simples de votação online que permite aos usuários se registrarem, criarem votações e participarem delas. O projeto foi desenvolvido com foco em praticar conceitos básicos de desenvolvimento web utilizando apenas tecnologias front-end.

Funcionalidades
Cadastro de usuário com nome e ID de eleitor

Listagem de votações disponíveis

Votação simples em diferentes enquetes

Modal para votação sem redirecionamento de página

Interface responsiva e intuitiva

Footer informativo com informações do projeto

Carrossel automático de informações na página inicial

Estrutura de Pastas
css
Copiar código
YourVote/
YourVote/
├── index.html              Página inicial com carrossel e botão de cadastro
├── register.html           Página de cadastro do usuário
├── home.html               Página principal do usuário com votações e logout
├── vote.html               Página usada como base para o modal de votação
├── createVote.html         Página de criação de novas votações
├── css/
│   ├── style.css           Estilo base global (layout, navbar, footer)
│   ├── home.css            Estilo específico da home
│   ├── register.css        Estilo da tela de cadastro
│   ├── vote.css            Estilo da tela/modal de votação
│   ├── createVote.css      Estilo da página de criação de votação
│   └── carousel.css        Estilo do carrossel da página inicial
├── Js/
│   ├── register.js         Lógica de registro de usuário
│   ├── home.js             Gerenciamento de votações, logout e modal
│   ├── vote.js             Lógica de exibição e votação em enquetes
│   ├── createVote.js       Script de criação de votações
│   └── carousel.js         Script de animação automática do carrossel
└── README.md               Este arquivo
          Este arquivo
Tecnologias Utilizadas
HTML5 para estrutura das páginas

CSS3 para estilização com foco em responsividade e layout moderno

JavaScript (ES6) para lógica de interatividade, armazenamento local (localStorage) e manipulação de DOM

Flexbox para construção de layouts responsivos como navbar, rodapé e carrossel

Modal dinâmico com carregamento de conteúdo da página de votação

Observações
Este projeto não possui backend. Todos os dados são armazenados localmente no navegador utilizando localStorage.
O sistema foi projetado apenas para fins educativos e demonstração de conceitos básicos de front-end.

Autor
Desenvolvido por Domini Acco.
"Seu voto muda tudo."
