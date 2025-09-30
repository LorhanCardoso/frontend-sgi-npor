# Sistema de Administração de Usuários

![React](https://img.shields.io/badge/React-18-blue?logo=react) ![Styled Components](https://img.shields.io/badge/Styled--Components-5.3.11-DB7093?logo=styled-components) ![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript)

---

## Tabela de Conteúdos

* [Descrição](#descrição)
* [Funcionalidades](#funcionalidades)
* [Tecnologias Utilizadas](#tecnologias-utilizadas)
* [Estrutura do Projeto](#estrutura-do-projeto)
* [Componentes Principais](#componentes-principais)
* [Como Usar](#como-usar)
* [Observações](#observações)

---

## Descrição

Este projeto é uma aplicação **React** voltada para **administração de usuários** e gerenciamento de dados de instrutores e alunos.

Permite **visualizar, cadastrar, editar e remover usuários**, além de **gerenciar fotos de perfil** de cada aluno ou instrutor.

A aplicação utiliza **componentes modulares**, **styled-components**, e manipulação de formulários com **React Hooks** (`useState`, `useMemo`, `useCallback`).

---

## Funcionalidades

1. **Visualização de dados**

   * Exibe listas de alunos e instrutores.
   * Modal com detalhes do usuário ao clicar na linha da tabela.

2. **Cadastro e edição**

   * Criação e edição de usuários.
   * Campos de formulário:

     * Posto/Graduação
     * Nome completo
     * Nome de guerra
     * Função
     * Designação
     * Nível de acesso
     * Usuário e senha

3. **Gerenciamento de fotos**

   * Upload de foto de perfil.
   * Botões:

     * `Escolher Foto` / `Escolher Nova Foto`
     * `Remover Foto de Perfil`
   * Fotos exibidas no modal em **CircleIcon**.

4. **Modais**

   * Formulários de cadastro, edição e visualização.
   * Controle via `modalState` no React.

5. **Filtros e busca**

   * Pesquisa por posto/graduação.
   * Atualização dinâmica da lista de usuários.

6. **Responsividade**

   * Componentes se adaptam conforme a largura da tela.
   * Exibição condicional de componentes em telas menores.

---

## Tecnologias Utilizadas

* **React** (Hooks: `useState`, `useCallback`, `useMemo`, `useRef`)
* **Styled-components**
* **React-icons** (`FcDecision`, `FcDataConfiguration`, `FcContacts`, `FcPrivacy`)
* **React-Select**
* **JavaScript ES6+**
* **CSS-in-JS**

---

## Estrutura do Projeto

```
src/
├── components/
│   ├── Administrador/
│   │   ├── index.jsx          # Componente principal de administração
│   │   ├── style.js           # Estilos específicos
│   │   ├── Alunos/
│   │   │   └── index.jsx      # Tela de alunos
│   │   └── Instrutores/
│   │       └── index.jsx      # Tela de instrutores
│   ├── InputField.jsx         # Componente genérico de input
├── shared/
│   ├── styles.js              # BoxContainer, Botao, Input, etc.
├── assets/
│   └── imagens/               # Fotos de perfil e ícones adicionais
```

---

## Componentes Principais

* **Administrador**: Componente principal que gerencia cadastro, edição e visualização de usuários.
* **TelaAlunos**: Lista de alunos com modais para cadastro, edição e visualização.
* **TelaInstrutores**: Lista de instrutores com modais para cadastro, edição e visualização.
* **InputField**: Componente reutilizável para inputs de formulário.
* **CircleIcon**: Componente para exibir foto de perfil ou ícone padrão.

---

## Como Usar

1. **Clonar o repositório**

```bash
git clone <URL_DO_REPOSITORIO>
cd <NOME_DO_PROJETO>
npm install
```

2. **Executar em desenvolvimento**

```bash
npm start
```

3. **Navegação e uso**

   * Clique no botão **Alunos** ou **Eqp Instr** para alternar telas.
   * Clique em uma linha da tabela para abrir modal com detalhes do usuário.
   * Clique em **Escolher Foto / Escolher Nova Foto** para alterar foto de perfil.
   * Clique em **Remover Foto de Perfil** para remover imagem.

---

## Observações

* Cada usuário possui **foto de perfil independente**.
* O sistema é **responsivo**, mas alguns componentes (como `boxModular`) ainda estão em implementação completa.
* Senhas são gerenciadas de forma simplificada; para produção, recomenda-se implementar **hash seguro**.
