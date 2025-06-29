# 📝 To-do List CLI com Node.js

Este é um mini-projeto de lista de tarefas (To-do List) para terminal, criado com Node.js usando o padrão de **CLI (Command Line Interface)**. O objetivo é praticar manipulação de arquivos, leitura de argumentos, modularização e interação com o terminal.

---

## 🚀 Como usar

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/todo-cli.git
cd todo-cli

### 2. Instalar dependências
npm install

### 3. Executar comandos
node index.js add "Estudar Node.js"
node index.js list
node index.js complete 1
node index.js remove 1


### 4. Comandos disponíveis
| Comando         | Descrição                       |
| --------------- | ------------------------------- |
| `add "tarefa"`  | Adiciona uma nova tarefa        |
| `list`          | Lista todas as tarefas          |
| `complete <id>` | Marca uma tarefa como concluída |
| `remove <id>`   | Remove uma tarefa da lista      |

### 5. Comandos disponíveis
todo-cli/
├── index.js        # Arquivo principal CLI
├── todo.js         # Lógica de manipulação de tarefas
├── data.json       # Banco de dados local (JSON)
├── package.json
└── README.md

### 6. Comandos disponíveis
Node.js
Módulo fs (nativo)
chalk para estilizar o terminal

### 7. Melhorias planejadas
| Etapa | Funcionalidade       | Descrição                                                      |
| ----- | -------------------- | -------------------------------------------------------------- |
| ✅ 1   | CLI funcional básica | Adicionar, listar, concluir e remover tarefas                  |
| 🔜 2  | Datas                | Associar datas de criação e vencimento às tarefas              |
| 🔜 3  | Prioridades          | Permitir definir prioridade (baixa, média, alta)               |
| 🔜 4  | Categorias           | Agrupar tarefas por categorias (ex: estudo, pessoal, trabalho) |
| 🔜 5  | Menu interativo      | Usar `inquirer` para menus e seleção por terminal              |
| 🔜 6  | Exportação de dados  | Exportar para CSV ou JSON externo                              |


### 8. Objetivo do Projeto
Este projeto foi criado como parte de um cronograma de estudos em Node.js com o propósito de reforçar:
Entrada de dados via terminal
Manipulação de arquivos com JSON
Estruturação de um projeto modular em Node.js

Autor: Marcos Liberato
