# Lista de Tarefas com React

Este projeto é uma aplicação simples de gerenciamento de tarefas desenvolvida utilizando **React** com **Vite** e **react-router-dom**. A aplicação possui duas páginas principais: uma para exibir a lista de tarefas e outra para adicionar novas tarefas. As tarefas são salvas no `localStorage` do navegador.

---

## Descrição do Projeto

A aplicação simula uma interface de **To-Do List** onde o usuário pode:
- **Visualizar** as tarefas salvas.
- **Adicionar** novas tarefas por meio de um formulário.
- **Marcar** tarefas como concluídas ou desmarcá-las.
- **Excluir** tarefas da lista.

Cada tarefa contém:
- Um **ID único** para identificação.
- Um **título**.
- Uma **descrição**.
- Um status de **conclusão** (true/false).

---

## Funcionalidades

- **Página Inicial** (`/`):
  - Exibe a lista de tarefas salvas.
  - Permite marcar tarefas como concluídas ou desmarcá-las.
  - Permite excluir tarefas da lista.
  - Oferece um link para a página de adição de tarefas.

- **Página de Adicionar Tarefa** (`/add`):
  - Formulário para inserir o título e a descrição da nova tarefa.
  - Ao salvar, a nova tarefa é adicionada ao `localStorage` e o usuário é redirecionado para a página inicial.

---

## Tecnologias Utilizadas

- **React** – Biblioteca JavaScript para construção de interfaces.
- **Vite** – Ferramenta de bundling e desenvolvimento rápido para projetos React.
- **React Router DOM** – Biblioteca para navegação entre as páginas.
- **LocalStorage** – API do navegador para armazenamento persistente de dados.

---

## Pré-requisitos

Antes de iniciar, certifique-se de ter instalado em seu ambiente:
- **Node.js** (versão 12 ou superior)
- **npm** (gerenciador de pacotes do Node.js)

---

## Instalação e Configuração

Siga os passos abaixo para clonar, instalar e rodar a aplicação em seu ambiente local:

1. **Clone o repositório (ou crie a estrutura de pastas):**

   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd meu-app


   npm install
   npm run dev
meu-app/
├── public/
├── src/
│   ├── components/
│   │   ├── TaskList.jsx        // Componente para exibir a lista de tarefas
│   │   └── AddTask.jsx         // Componente para adicionar uma tarefa
│   ├── pages/
│   │   ├── Home.jsx            // Página inicial (Lista de Tarefas)
│   │   └── Add.jsx             // Página para adicionar uma nova tarefa
│   ├── App.jsx                 // Configuração das rotas e navegação
│   ├── main.jsx                // Ponto de entrada da aplicação
│   └── index.css               // Arquivo de estilização global
├── package.json                // Dependências e scripts do projeto
└── vite.config.js              // Configuração do Vite
