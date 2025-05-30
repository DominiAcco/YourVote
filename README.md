YourVote
YourVote é um sistema simples de votação online onde os usuários podem se cadastrar, criar votações e participar delas de forma rápida e prática. O projeto é totalmente baseado em tecnologias front-end e usa armazenamento local (localStorage) para gerenciar os dados dos usuários e das votações.

O sistema permite que os usuários se registrem fornecendo um nome e um ID de eleitor. Após o registro, é possível criar novas votações, visualizar votações disponíveis e votar diretamente em um modal, sem sair da página principal. A página inicial também apresenta um carrossel automático com informações sobre o funcionamento do site. O layout é responsivo, com um footer fixado ao final da página contendo informações organizadas à esquerda, centro e direita.

Estrutura de Pastas e Arquivos
css
Copiar código
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
Tecnologias Utilizadas
HTML5: Estrutura das páginas e elementos semânticos

CSS3: Estilização visual, responsividade com Flexbox e design moderno

JavaScript (ES6): Manipulação de DOM, lógica de cadastro, votações, modais e carrossel

localStorage: Armazenamento local dos dados dos usuários e das votações sem uso de banco de dados externo

Observações
Este sistema é uma aplicação totalmente client-side, ou seja, não possui backend nem banco de dados real. Todas as informações são armazenadas no navegador do usuário por meio do localStorage. O projeto é ideal para fins didáticos, testes e desenvolvimento de habilidades em front-end.

Autor
Desenvolvido por Domini Acco
Frase do projeto: "Seu voto muda tudo."
