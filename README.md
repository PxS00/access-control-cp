# 🔐 Sistema de Controle de Acesso

<div align="center">
  
  <p><strong>Sistema moderno de autenticação e gerenciamento de usuários</strong></p>
  
  [![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
  [![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.13-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
  [![Zod](https://img.shields.io/badge/Zod-4.1.11-3E67B1?style=for-the-badge&logo=zod&logoColor=white)](https://zod.dev/)
</div>

---

## 📋 Sobre o Projeto

Sistema de Controle de Acesso desenvolvido com React e TypeScript, implementando funcionalidades completas de autenticação, cadastro e gerenciamento de usuários. O projeto utiliza as mais modernas tecnologias do ecossistema React para garantir performance, escalabilidade e uma excelente experiência do usuário.

### ✨ Destaques

- 🎯 **Validação Moderna**: Utiliza Zod v4 com validações robustas
- 🔒 **Segurança**: Implementação de boas práticas de autenticação
- 🎨 **UI/UX**: Interface clean e responsiva com TailwindCSS
- ⚡ **Performance**: Build otimizado com Vite
- 📝 **Formulários**: Gerenciamento inteligente com React Hook Form

---

## 🎯 Principais Funcionalidades

- **⚙️ Sistema de Cadastro**: Registro de novos usuários com validação completa
  - Validação de nome (3-100 caracteres, apenas letras)
  - Username único (3-20 caracteres, alfanumérico)
  - Email com validação Zod v4 (normalização automática)

- **🔐 Sistema de Login**: Autenticação segura de usuários
  - Login com username ou email
  - Validações em tempo real
  - Feedback visual de erros

- **📱 Design Responsivo**: Interface adaptável para todos os dispositivos
  - Mobile First approach
  - Breakpoints otimizados
  - Componentes reutilizáveis

- **🎨 Componentes Modulares**: Arquitetura bem estruturada
  - Header com navegação
  - Footer informativo
  - Formulários validados
  - Componentes de input customizados

---

## 🚀 Tecnologias Utilizadas

### Frontend Core

- **React 19.1.1**: Biblioteca principal para criação da interface
- **TypeScript 5.8.3**: Linguagem com tipagem estática forte
- **Vite 7.1.7**: Build tool ultrarrápido e servidor de desenvolvimento
- **React Router DOM 7.9.3**: Gerenciamento de rotas SPA

### Estilização

- **TailwindCSS 4.1.13**: Framework CSS utilitário moderno
- **@tailwindcss/vite 4.1.13**: Integração otimizada com Vite
- **React Icons 5.5.0**: Biblioteca completa de ícones

### Formulários e Validação

- **React Hook Form 7.63.0**: Gerenciamento performático de formulários
- **@hookform/resolvers 5.2.2**: Resolvers para integração com validadores
- **Zod 4.1.11**: Schema validation TypeScript-first

### Backend Simulado

- **JSON Server 1.0.0-beta.3**: API REST mock para desenvolvimento

### Qualidade de Código

- **ESLint 9.36.0**: Linter para qualidade e consistência
- **Prettier 3.3.3**: Formatador automático de código
- **TypeScript ESLint 8.44.0**: Integração ESLint com TypeScript

---

## 👥 Integrantes da Equipe

| Nome                           | RM     | GitHub                                        | LinkedIn                                                                |
| ------------------------------ | ------ | --------------------------------------------- | ----------------------------------------------------------------------- |
| Alexander Dennis Isidro Mamani | 565554 | [alex-isidro](https://github.com/alex-isidro) | [LinkedIn](https://www.linkedin.com/in/alexander-dennis-a3b48824b/)     |
| Kelson Zhang                   | 563748 | [KelsonZh0](https://github.com/KelsonZh0)     | [LinkedIn](https://www.linkedin.com/in/kelson-zhang-211456323/)         |
| Lucas Rossoni Dieder           | 563770 | [PxS00](https://github.com/PxS00)             | [LinkedIn](https://www.linkedin.com/in/lucas-rossoni-dieder-32242a353/) |

---

## ⚙️ Estrutura do Projeto

```
access-control-cp/
├── 📁 public/                          # Arquivos públicos estáticos
│   └── 📁 img/                         # Imagens do projeto
│       └── bg.png                      # Background da aplicação
├── 📁 src/                             # Código fonte principal
│   ├── 📁 components/                  # Componentes reutilizáveis
│   │   ├── 📁 Footer/                  # Componente de rodapé
│   │   │   └── Footer.tsx              # Footer da aplicação
│   │   ├── 📁 Form/                    # Componentes de formulário
│   │   │   ├── Button.tsx              # Botão estilizado
│   │   │   ├── Input.tsx               # Input com validação
│   │   │   └── LayoutForm.tsx          # Layout padrão de forms
│   │   └── 📁 Header/                  # Componente de cabeçalho
│   │       └── Header.tsx              # Header com navegação
│   ├── 📁 routes/                      # Páginas da aplicação
│   │   ├── 📁 Cadastro/                # Página de registro
│   │   │   └── index.tsx               # Form de cadastro
│   │   ├── 📁 Error/                   # Página de erro
│   │   │   └── index.tsx               # Error 404
│   │   ├── 📁 Home/                    # Página inicial
│   │   │   └── index.tsx               # Landing page
│   │   └── 📁 Login/                   # Página de login
│   │       └── index.tsx               # Form de autenticação
│   ├── 📁 types/                       # Definições TypeScript
│   │   ├── inputProps.ts               # Props de inputs
│   │   └── schema.ts                   # Schemas Zod
│   ├── App.tsx                         # Componente raiz
│   ├── main.tsx                        # Ponto de entrada
│   └── index.css                       # Estilos globais TailwindCSS
├── 📄 db.json                          # Banco de dados JSON Server
├── 📄 .prettierrc                      # Configuração Prettier
└── 📄 README.md                        # Documentação
```

### 🏗️ Arquitetura de Componentes

#### 🧱 Componentes Base

- **Header**: Navegação principal da aplicação
- **Footer**: Informações e links do rodapé
- **Button**: Botão estilizado e acessível
- **Input**: Campo de entrada com validação integrada
- **LayoutForm**: Container padrão para formulários

## 🛠️ Instalação e Configuração

### 📋 Pré-requisitos

- **Node.js** (versão 18 ou superior)
- **npm** ou **pnpm** (recomendado)

### 🚀 Instalação

1. **Clone o repositório**

   ```bash
   git clone https://github.com/PxS00/access-control-cp.git
   cd access-control-cp
   ```

2. **Instale as dependências**

   ```bash
   # Usando npm
   npm install

   # Usando pnpm (recomendado)
   pnpm install
   ```

3. **Inicie o servidor de desenvolvimento**

   ```bash
   # Terminal 1: Inicia o Vite
   pnpm dev

   # Terminal 2: Inicia o JSON Server (API mock)
   pnpm api
   ```

4. **Acesse a aplicação**
   ```
   Frontend: http://localhost:5173
   API Mock: http://localhost:3001
   ```

### 🏗️ Scripts Disponíveis

```bash
# Desenvolvimento
pnpm dev              # Inicia servidor Vite (porta 5173)
pnpm api              # Inicia JSON Server (porta 3001)
pnpm build            # Gera build de produção
pnpm preview          # Visualiza build localmente

# Qualidade de Código
pnpm lint             # Executa ESLint
pnpm format           # Formata código com Prettier
pnpm format:check     # Verifica formatação
```

---

## 🔐 Validações Implementadas

### Cadastro de Usuário

#### 📝 Nome Completo

- ✅ Mínimo 3 caracteres
- ✅ Máximo 100 caracteres
- ✅ Apenas letras e espaços (incluindo acentuação)
- ❌ Não aceita números ou caracteres especiais

#### 👤 Nome de Usuário

- ✅ Mínimo 3 caracteres
- ✅ Máximo 20 caracteres
- ✅ Apenas letras, números e underscore
- ✅ Conversão automática para lowercase
- ❌ Não aceita espaços ou caracteres especiais

#### ✉️ Email

- ✅ Validação com Zod v4 (padrão moderno)
- ✅ Trim automático (remove espaços)
- ✅ Conversão automática para lowercase
- ✅ Suporta subdomínios e caracteres especiais válidos
- ❌ Não aceita emails inválidos ou mal formatados

### Login de Usuário

#### Campos Obrigatórios

- ✅ Nome de usuário (3+ caracteres)
- ✅ Email (validação completa)
- ✅ Normalização automática

---

## 🌟 Funcionalidades Detalhadas

### 🔐 Sistema de Autenticação

#### Cadastro

1. Usuário preenche o formulário
2. Validação em tempo real com Zod
3. Feedback visual de erros
4. Submissão para JSON Server
5. Redirecionamento após sucesso

#### Login

1. Usuário insere credenciais
2. Validação de formato
3. Consulta ao banco de dados
4. Autenticação e criação de sessão
5. Redirecionamento para área logada

### 📱 Responsividade

- **Mobile First**: Design otimizado para mobile
- **Breakpoints Inteligentes**: Ajustes automáticos
- **Imagens Otimizadas**: Carregamento eficiente

---

## 🧪 Estrutura de Dados (db.json)

```json
{
  "users": [
    {
      "id": 1dfd,
      "nome": "João Silva",
      "nomeUsuario": "joaosilva",
      "email": "joao@email.com"
    }
  ]
}
```

---

## 🔗 Links Importantes

### 📂 Repositório GitHub

**🔗 [access-control-cp](https://github.com/PxS00/access-control-cp)**

> Repositório oficial do projeto contendo todo o código fonte, documentação técnica e histórico de desenvolvimento.

### 📚 Documentação das Tecnologias

- [React](https://react.dev/) - Biblioteca UI
- [TypeScript](https://www.typescriptlang.org/) - Linguagem
- [Vite](https://vitejs.dev/) - Build tool
- [TailwindCSS](https://tailwindcss.com/) - Framework CSS
- [Zod](https://zod.dev/) - Schema validation
- [React Hook Form](https://react-hook-form.com/) - Form management
- [React Router](https://reactrouter.com/) - Roteamento

---

## 📄 Licença

Este projeto foi desenvolvido para fins acadêmicos como parte do programa da FIAP. Todos os direitos reservados à equipe de desenvolvimento.

---


## 📧 Contato

Para dúvidas ou sugestões, entre em contato com a equipe através do GitHub ou LinkedIn.

---

<div align="center">
  <p><strong>Desenvolvido com ❤️ pela equipe UsGuri do Dev</strong></p>
  <p><em>FIAP - Análise e Desenvolvimento de Sistemas - 2025</em></p>
</div>
