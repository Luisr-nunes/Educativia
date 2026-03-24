<p align="center">
  <img src="docs/images/logo.png" alt="EDUCΛTIVIΛ Logo" width="280"/>
</p>

<h1 align="center">EDUCΛTIVIΛ</h1>

<p align="center">
  <em>Planejamento ágil de aulas com Inteligência Artificial</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Frontend-React%20+%20TypeScript-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React"/>
  <img src="https://img.shields.io/badge/Build-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite"/>
  <img src="https://img.shields.io/badge/Backend-Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python"/>
  <img src="https://img.shields.io/badge/ODS-04%20Educação%20de%20Qualidade-C5192D?style=for-the-badge" alt="ODS 4"/>
  <img src="https://img.shields.io/badge/Status-MVP%20em%20Desenvolvimento-blueviolet?style=for-the-badge" alt="Status"/>
</p>

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [O Problema](#-o-problema)
- [ODS 4 — Educação de Qualidade](#-ods-4--educação-de-qualidade)
- [Funcionalidades do MVP](#-funcionalidades-do-mvp)
- [Arquitetura](#-arquitetura)
- [Mockup do Dashboard](#-mockup-do-dashboard)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [Tech Stack](#-tech-stack)
- [Como Rodar Localmente](#-como-rodar-localmente)
- [Roadmap do MVP](#-roadmap-do-mvp)
- [Análise de Concorrentes](#-análise-de-concorrentes)
- [Referências](#-referências)
- [Equipe](#-equipe)
- [Documentação](#-documentação)
- [Licença](#-licença)

---

## 🎯 Sobre o Projeto

**EDUCΛTIVIΛ** é uma plataforma integrada de planejamento pedagógico que utiliza Inteligência Artificial para otimizar o tempo dos professores e melhorar a qualidade das aulas. Nosso foco é oferecer uma ferramenta de **planejamento ágil** com um banco de **metodologias ativas** fáceis de aplicar, tornando as aulas mais dinâmicas **sem aumentar a carga de trabalho docente**.

O projeto está alinhado ao **ODS 4 — Educação de Qualidade** da ONU.

---

## 🔥 O Problema

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   ⏱️  Para cada aula de 50 min → ~3 horas de preparo        │
│                                                             │
│   📊  Professores brasileiros gastam 22% mais horas         │
│       em tarefas fora da sala de aula (OCDE, 2015)          │
│                                                             │
│   🚨  20% do tempo de aula é gasto na manutenção            │
│       da ordem em sala (TALIS/INEP, 2013)                   │
│                                                             │
│   😩  Sobrecarga + múltiplas turmas + cronogramas distintos │
│       = professor exausto e metodologia sacrificada         │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

A pesquisa aponta para um cenário de **exaustão docente**. A sobrecarga e a intensificação do trabalho (Viegas, 2022) são agravadas pelo alto volume de tarefas que extrapolam a sala de aula (Moriconi et al., 2021). Esse cenário consome o tempo que o professor dedicaria à **inovação pedagógica** — como resultado, a metodologia é sacrificada e o docente recorre a aulas expositivas por falta de energia para planejar dinâmicas.

**Nossa proposta:** uma ferramenta de planejamento ágil que otimiza o tempo e oferece um banco de metodologias ativas fáceis de aplicar.

---

## 🌍 ODS 4 — Educação de Qualidade

| Meta | Foco Principal |
|------|---------------|
| **4.1** | Ensino primário e secundário gratuito, equitativo e de qualidade |
| **4.2** | Desenvolvimento integral na primeira infância |
| **4.3** | Equidade de acesso à educação profissional e superior |
| **4.4** | Competências técnicas e profissionais para emprego |
| **4.5** | Eliminar disparidades de gênero e garantir acesso aos vulneráveis |
| **4.c** | Formação de professores qualificados |

A **IA** é uma ferramenta estratégica vital para alcançar o ODS 4 ao automatizar tarefas administrativas exaustivas, liberando tempo docente para o foco pedagógico e a interação humana.

---

## ✨ Funcionalidades do MVP

O MVP foca nas funcionalidades essenciais que entregam valor imediato ao professor:

```
 ┌──────────────────────────────────────────────────────────────────┐
 │                    MVP — EDUCΛTIVIΛ v1.0                         │
 │                                                                  │
 │  ┌──────────────────┐  ┌──────────────────┐  ┌────────────────┐ │
 │  │  📝 Planos de    │  │  📅 Calendário   │  │  🤖 Assistente │ │
 │  │     Ensino       │  │     Escolar      │  │     IA         │ │
 │  │                  │  │                  │  │                │ │
 │  │ • Criar planos   │  │ • Visualizar     │  │ • Sugerir      │ │
 │  │ • Templates      │  │   agenda         │  │   metodologias │ │
 │  │ • Editar/salvar  │  │ • Organizar      │  │ • Banco de     │ │
 │  │ • Vincular à     │  │   aulas          │  │   atividades   │ │
 │  │   grade          │  │ • Alertas        │  │ • Dicas         │ │
 │  └──────────────────┘  └──────────────────┘  └────────────────┘ │
 │                                                                  │
 │  ┌──────────────────┐  ┌──────────────────┐                     │
 │  │  👤 Autenticação │  │  📊 Dashboard    │                     │
 │  │                  │  │                  │                     │
 │  │ • Login/Registro │  │ • Visão geral    │                     │
 │  │ • Perfil         │  │ • Progresso      │                     │
 │  │ • Sessões        │  │ • Próximas aulas │                     │
 │  └──────────────────┘  └──────────────────┘                     │
 └──────────────────────────────────────────────────────────────────┘
```

### Detalhamento

| # | Feature | Descrição | Prioridade |
|---|---------|-----------|:----------:|
| 1 | **Autenticação** | Login, registro e gerenciamento de sessão | 🔴 Alta |
| 2 | **CRUD Planos de Ensino** | Criar, editar, visualizar e excluir planos de aula | 🔴 Alta |
| 3 | **Templates Prontos** | Modelos pré-configurados por disciplina e série | 🔴 Alta |
| 4 | **Calendário Interativo** | Organizar aulas por dias, horários e temas | 🟡 Média |
| 5 | **Assistente IA** | Sugestões de metodologias ativas via API de IA | 🟡 Média |
| 6 | **Dashboard** | Painel com visão geral dos planos e próximas aulas | 🟡 Média |
| 7 | **Exportar Planos** | Exportar planos em PDF | 🟢 Baixa |

---

## 🏗️ Arquitetura

<p align="center">
  <img src="docs/images/arquitetura.png" alt="Diagrama de Arquitetura" width="500"/>
</p>

```
┌─────────────────────────────────────────────────────────────────┐
│                    FRONTEND (React + TypeScript)                  │
│                                                                  │
│   React 19 + TypeScript + Vite                                   │
│   • SPA com React Router (rotas protegidas)                      │
│   • Axios com interceptors JWT                                   │
│   • Context API para estado global                               │
│   • Design System com CSS Tokens                                 │
│                                                                  │
│                         ▼  REST API  ▲                           │
│                                                                  │
│─────────────────────────────────────────────────────────────────│
│                        BACKEND (Python)                          │
│                                                                  │
│   Flask / FastAPI                                                │
│   • Rotas REST para CRUD de planos                               │
│   • Autenticação JWT                                             │
│   • Integração com API de IA (OpenAI / Gemini)                   │
│   • Lógica de negócios e validações                              │
│                                                                  │
│                         ▼  ORM  ▲                                │
│                                                                  │
│─────────────────────────────────────────────────────────────────│
│                        BANCO DE DADOS                            │
│                                                                  │
│   SQLite (dev) → PostgreSQL (produção)                           │
│   • Usuários, Planos, Disciplinas, Templates, Calendário         │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🖥️ Mockup do Dashboard

<p align="center">
  <img src="docs/images/dashboard_mockup.png" alt="Mockup do Dashboard" width="600"/>
</p>

---

## 📂 Estrutura de Pastas — Arquitetura Modular Enterprise

> 💡 Arquitetura **modular por feature** com **Repository Pattern**, **App Factory**, e **camadas desacopladas**.
> Cada módulo é auto-contido: tem seus próprios models, routes, services, schemas e repository.

```
Educativia/
│
│  ╔══════════════════════════════════════════════════════════════════════╗
│  ║  📌 RAIZ — Config global, automação e documentação                 ║
│  ╚══════════════════════════════════════════════════════════════════════╝
│
├── 📄 README.md                        # Documentação principal
├── 🚫 .gitignore                       # Arquivos ignorados pelo Git
├── 🔐 .env.example                     # Template de variáveis de ambiente
├── ⚙️  Makefile                         # Comandos automatizados (make install,
│                                       #   make run-backend, make test, etc.)
│
│  ╔══════════════════════════════════════════════════════════════════════╗
│  ║  🎨 FRONTEND — SPA modular (React + TypeScript + Vite)             ║
│  ║                                                                     ║
│  ║  Padrão: core/ → modules/ → shared/ → layouts/ → styles/           ║
│  ║  Cada módulo espelha um módulo do backend                           ║
│  ╚══════════════════════════════════════════════════════════════════════╝
│
├── frontend/
│   ├── index.html                      # 🏠 Ponto de entrada HTML (Vite)
│   ├── package.json                    # 📋 Dependências e scripts NPM
│   ├── vite.config.ts                  # ⚡ Config Vite (aliases, proxy)
│   ├── tsconfig.json                   # 📐 Config TypeScript (strict mode)
│   ├── eslint.config.js                # 🔍 Linter config
│   │
│   └── src/
│       ├── main.tsx                    # 🚀 Entry point (ReactDOM + Providers)
│       ├── App.tsx                     # 🛣️  Router principal (rotas pub/priv)
│       │
│       ├── core/                       # ⚡ NÚCLEO — infraestrutura
│       │   ├── api/
│       │   │   └── api-client.ts       #    Axios com interceptors JWT, retry
│       │   ├── auth/
│       │   │   └── auth.context.tsx    #    AuthContext + useAuth hook
│       │   ├── router/
│       │   │   └── PrivateRoute.tsx    #    Guard de rotas autenticadas
│       │   ├── store/
│       │   │   └── app.context.tsx     #    Estado global (Context API)
│       │   └── constants.ts            #    API_URL, breakpoints, configs
│       │
│       ├── modules/                    # 📦 MÓDULOS — features isoladas
│       │   ├── auth/                   #    ┌─── Autenticação ───┐
│       │   │   ├── pages/
│       │   │   │   ├── LoginPage.tsx   #    │ Tela de login      │
│       │   │   │   └── RegistroPage.tsx#    │ Tela de cadastro   │
│       │   │   └── services/
│       │   │       └── auth.service.ts #    │ Chamadas API auth  │
│       │   │                           #    └────────────────────┘
│       │   ├── dashboard/              #    ┌─── Dashboard ──────┐
│       │   │   └── pages/
│       │   │       └── DashboardPage.tsx#   │ Visão geral        │
│       │   │                           #    └────────────────────┘
│       │   ├── planos/                 #    ┌─── Planos ─────────┐
│       │   │   ├── pages/
│       │   │   │   ├── PlanosListPage.tsx#   │ Listagem          │
│       │   │   │   └── PlanoEditorPage.tsx#  │ Criação/edição    │
│       │   │   ├── components/
│       │   │   │   └── PlanoCard.tsx   #    │ Card reutilizável  │
│       │   │   └── services/
│       │   │       └── planos.service.ts#   │ Chamadas API       │
│       │   │                           #    └────────────────────┘
│       │   ├── calendario/             #    ┌─── Calendário ─────┐
│       │   │   ├── pages/
│       │   │   │   └── CalendarioPage.tsx#   │ Agenda interativa │
│       │   │   └── services/
│       │   │       └── calendario.service.ts# │ Chamadas API     │
│       │   │                           #    └────────────────────┘
│       │   └── ia/                     #    ┌─── Assistente IA ──┐
│       │       ├── components/
│       │       │   └── IAChat.tsx      #    │ Widget de chat     │
│       │       └── services/
│       │           └── ia.service.ts   #    │ Chamadas API       │
│       │                               #    └────────────────────┘
│       │
│       ├── shared/                     # 🧩 COMPARTILHADOS
│       │   ├── components/             #    Componentes React genéricos
│       │   │   ├── Sidebar.tsx         #    Menu lateral
│       │   │   ├── Header.tsx          #    Barra superior
│       │   │   ├── Modal.tsx           #    Diálogo modal
│       │   │   ├── Toast.tsx           #    Notificações (Context+hook)
│       │   │   ├── Loading.tsx         #    Spinner
│       │   │   └── EmptyState.tsx      #    Estado vazio
│       │   └── utils/                  #    Funções utilitárias
│       │       ├── date.ts             #    Formatação de datas
│       │       └── validators.ts       #    Validação de forms
│       │
│       ├── layouts/                    # 🖼️  LAYOUTS
│       │   ├── AppLayout.tsx           #    Autenticado (sidebar+header+main)
│       │   └── AuthLayout.tsx          #    Público (login/registro)
│       │
│       └── styles/                     # 🎨 CSS — Design System
│           ├── variables.css           #    Design tokens (cores, espaçamentos)
│           ├── reset.css               #    CSS reset/normalize
│           ├── typography.css          #    Fontes e escala tipográfica
│           ├── layout.css              #    Grid, flex, utilities
│           ├── components.css          #    Estilos dos componentes
│           └── responsive.css          #    Breakpoints responsivos
│
│  ╔══════════════════════════════════════════════════════════════════════╗
│  ║  🐍 BACKEND — API REST modular (Python + Flask)                    ║
│  ║                                                                     ║
│  ║  Padrão Enterprise:                                                 ║
│  ║                                                                     ║
│  ║  ┌────────┐   ┌─────────┐   ┌──────────┐   ┌────────────┐          ║
│  ║  │ Routes │──▶│ Schemas │──▶│ Services │──▶│ Repository │──▶ DB    ║
│  ║  │ (HTTP) │   │ (Valid.)│   │ (Lógica) │   │ (Data Acc.)│          ║
│  ║  └────────┘   └─────────┘   └──────────┘   └────────────┘          ║
│  ║                                    │                                ║
│  ║                              ┌─────┴─────┐                         ║
│  ║                              │  Models   │                          ║
│  ║                              │  (ORM)    │                          ║
│  ║                              └───────────┘                          ║
│  ╚══════════════════════════════════════════════════════════════════════╝
│
├── backend/
│   │
│   │  ┌─────────────────────────────────────────────────────────┐
│   │  │  🏭 APP FACTORY + CONFIG — inicialização centralizada   │
│   │  └─────────────────────────────────────────────────────────┘
│   │
│   ├── app.py                          # 🏭 App Factory — create_app()
│   │                                   #    Registra módulos, middleware, extensions
│   ├── config.py                       # ⚙️  Settings com validação de env vars
│   ├── wsgi.py                         # 🌐 Entry point para produção (Gunicorn)
│   ├── requirements.txt                # 📋 Dependências Python
│   │
│   │  ┌─────────────────────────────────────────────────────────┐
│   │  │  � CORE — Camada transversal (cross-cutting concerns) │
│   │  │  Código usado por TODOS os módulos                      │
│   │  └─────────────────────────────────────────────────────────┘
│   │
│   ├── core/
│   │   ├── __init__.py
│   │   ├── database.py                 #    Engine, Session, Base declarativa
│   │   ├── security.py                 #    JWT encode/decode, hash senhas,
│   │   │                               #    decorators @auth_required
│   │   ├── exceptions.py               #    Hierarquia de exceções customizadas
│   │   │                               #    AppError → NotFound, Unauthorized,
│   │   │                               #    ValidationError, Forbidden
│   │   ├── middleware.py                #    CORS, logging, rate limiting,
│   │   │                               #    error handler global
│   │   └── extensions.py               #    Inicializa extensions do Flask
│   │                                   #    (SQLAlchemy, Migrate, CORS)
│   │
│   │  ┌─────────────────────────────────────────────────────────┐
│   │  │  � MODULES — Features auto-contidas                    │
│   │  │  Cada módulo = models + routes + services + schemas     │
│   │  │  + repository (5 camadas por feature)                   │
│   │  └─────────────────────────────────────────────────────────┘
│   │
│   ├── modules/
│   │   ├── __init__.py                 #    Registra blueprints de todos módulos
│   │   │
│   │   ├── auth/                       #    ╔═══ MÓDULO AUTENTICAÇÃO ═══╗
│   │   │   ├── __init__.py
│   │   │   ├── models.py               #    User (id, nome, email, senha_hash)
│   │   │   ├── schemas.py              #    LoginSchema, RegisterSchema, UserDTO
│   │   │   ├── routes.py               #    POST /auth/register, /auth/login
│   │   │   ├── services.py             #    Lógica: hash, JWT, validação
│   │   │   └── repository.py           #    find_by_email(), create_user()
│   │   │
│   │   ├── planos/                     #    ╔═══ MÓDULO PLANOS ═════════╗
│   │   │   ├── __init__.py
│   │   │   ├── models.py               #    Plano, Disciplina, Template
│   │   │   ├── schemas.py              #    PlanoCreateSchema, PlanoUpdateSchema
│   │   │   ├── routes.py               #    CRUD /api/planos, /api/templates
│   │   │   ├── services.py             #    Regras de negócio de planos
│   │   │   └── repository.py           #    Queries complexas, paginação
│   │   │
│   │   ├── calendario/                 #    ╔═══ MÓDULO CALENDÁRIO ═════╗
│   │   │   ├── __init__.py
│   │   │   ├── models.py               #    Evento (titulo, data, plano_id)
│   │   │   ├── schemas.py              #    EventoSchema
│   │   │   ├── routes.py               #    CRUD /api/eventos
│   │   │   ├── services.py             #    Conflito de horários, notificações
│   │   │   └── repository.py           #    Queries por período, por plano
│   │   │
│   │   └── ia/                         #    ╔═══ MÓDULO IA ═════════════╗
│   │       ├── __init__.py
│   │       ├── schemas.py              #    SugestaoRequest, SugestaoResponse
│   │       ├── routes.py               #    POST /api/ia/sugestao
│   │       ├── services.py             #    Orquestra chamada à API de IA
│   │       └── prompts.py              #    Templates de prompt por contexto
│   │
│   │  ┌─────────────────────────────────────────────────────────┐
│   │  │  🔗 SHARED — Utilitários reutilizáveis entre módulos   │
│   │  └─────────────────────────────────────────────────────────┘
│   │
│   ├── shared/
│   │   ├── __init__.py
│   │   ├── utils.py                    #    Funções utilitárias genéricas
│   │   ├── validators.py               #    Validadores reutilizáveis
│   │   ├── pagination.py               #    Helper de paginação (cursor/offset)
│   │   └── responses.py                #    Respostas padronizadas da API
│   │                                   #    success(), error(), paginated()
│   │
│   │  ┌─────────────────────────────────────────────────────────┐
│   │  │  🌱 SEEDS + MIGRATIONS                                  │
│   │  └─────────────────────────────────────────────────────────┘
│   │
│   ├── seeds/
│   │   ├── __init__.py
│   │   └── seed_templates.py           #    Popula templates e dados iniciais
│   │
│   └── migrations/                     #    Alembic — versionamento do schema
│       └── .gitkeep
│
│  ╔══════════════════════════════════════════════════════════════════════╗
│  ║  🧪 TESTS — Pirâmide de testes (unit → integration → e2e)         ║
│  ╚══════════════════════════════════════════════════════════════════════╝
│
├── tests/
│   ├── __init__.py
│   ├── conftest.py                     # Fixtures globais (app, client, db)
│   ├── unit/                           # Testa services isolados (sem HTTP/DB)
│   │   ├── __init__.py
│   │   ├── test_auth_service.py
│   │   ├── test_plano_service.py
│   │   └── test_ia_service.py
│   ├── integration/                    # Testa rotas com banco real
│   │   ├── __init__.py
│   │   ├── test_auth_routes.py
│   │   ├── test_plano_routes.py
│   │   └── test_calendario_routes.py
│   └── e2e/                            # Testes ponta a ponta
│       └── .gitkeep
│
│  ╔══════════════════════════════════════════════════════════════════════╗
│  ║  📊 DOCS — Documentação técnica adicional                          ║
│  ╚══════════════════════════════════════════════════════════════════════╝
│
└── docs/
    ├── images/                         # Logo, mockups, screenshots
    ├── api.md                          # Documentação completa da API REST
    └── setup.md                        # Guia detalhado de setup
```

### 🏗️ Padrões Enterprise Aplicados

| Padrão | Onde | Por quê |
|--------|------|---------|
| **App Factory** | `backend/app.py` | Permite criar múltiplas instâncias da app (dev, test, prod) |
| **Repository Pattern** | `modules/*/repository.py` | Isola queries SQL — service nunca fala direto com o DB |
| **Schemas (DTO)** | `modules/*/schemas.py` | Valida entrada/saída — protege contra dados inválidos |
| **Feature Modules** | `modules/auth/`, `planos/`, etc. | Cada feature é auto-contida e pode ser desenvolvida em paralelo |
| **Context API** | `frontend/src/core/auth/`, `store/` | Estado global tipado — React Contexts com hooks customizados |
| **Private Routes** | `frontend/src/core/router/PrivateRoute.tsx` | Guard de rotas que redireciona se não autenticado |
| **Axios Interceptors** | `frontend/src/core/api/api-client.ts` | JWT automático, retry, redirect 401 — centralizado |
| **Path Aliases** | `tsconfig.app.json` + `vite.config.ts` | `@core/`, `@modules/`, `@shared/` — imports limpos |
| **Layouts** | `frontend/src/layouts/` | Estruturas de página reutilizáveis (auth vs app) |
| **Test Pyramid** | `tests/unit/`, `integration/`, `e2e/` | Mais testes unitários, menos e2e — rápido e confiável |
| **Naming Convention** | `*Page.tsx`, `*Service.ts`, `*.context.tsx` | Tipo do arquivo no nome — fácil de encontrar |

### 🔄 Fluxo Enterprise de uma Requisição

```
   Usuário clica "Criar Plano"
            │
            ▼
   ┌──────────────────────────┐
   │  PlanoEditorPage.tsx      │  ← React: captura dados do formulário
   └──────────┬───────────────┘
              │
              ▼
   ┌──────────────────────────┐
   │  planos.service.ts        │  ← Module: service tipado chama API
   └──────────┬───────────────┘
              │
              ▼
   ┌──────────────────────────┐
   │  api-client.ts (Axios)    │  ← Core: interceptor injeta JWT
   └──────────┬───────────────┘
              │ HTTP POST /api/planos
              ▼
   ┌──────────────────────────┐
   │  planos/routes.py         │  ← Backend: recebe request
   └──────────┬───────────────┘
              │
              ▼
   ┌──────────────────────────┐
   │  planos/schemas.py        │  ← Backend: valida dados de entrada
   └──────────┬───────────────┘
              │
              ▼
   ┌──────────────────────────┐
   │  planos/services.py       │  ← Backend: aplica regras de negócio
   └──────────┬───────────────┘
              │
              ▼
   ┌──────────────────────────┐
   │  planos/repository.py     │  ← Backend: abstrai acesso ao banco
   └──────────┬───────────────┘
              │
              ▼
   ┌──────────────────────────┐
   │  planos/models.py         │  ← Backend: ORM grava no banco
   └──────────┬───────────────┘
              │ INSERT INTO planos...
              ▼
   ┌──────────────────────────┐
   │  core/database.py         │  ← Core: SQLAlchemy persiste
   └──────────────────────────┘
```

---

## 🛠️ Tech Stack

| Camada | Tecnologia | Justificativa |
|--------|-----------|---------------|
| **Frontend** | React 19 + TypeScript | Tipagem estática, componentização, ecossistema robusto |
| **Build Tool** | Vite | HMR instantâneo, build rápido, proxy de API integrado |
| **Roteamento** | React Router v7 | Rotas protegidas, layouts aninhados, SPA profissional |
| **HTTP Client** | Axios | Interceptors para JWT, retry, tratamento global de erros |
| **Backend** | Python + Flask | Framework leve, rápido para prototipagem, grande ecossistema |
| **Banco de Dados** | SQLite (dev) / PostgreSQL (prod) | SQLite para agilidade no dev; Postgres para escalabilidade |
| **ORM** | SQLAlchemy | Abstração do banco, migrações fáceis |
| **Autenticação** | JWT (PyJWT) | Stateless, ideal para SPA |
| **IA** | API OpenAI / Google Gemini | Sugestões de metodologias e planejamento inteligente |
| **Versionamento** | Git + GitHub | Controle de versão distribuído |

---

## 🚀 Como Rodar Localmente

### Pré-requisitos

- **Python 3.10+** instalado
- **Node.js 18+** instalado
- **Git**

### 1. Clonar o repositório

```bash
git clone https://github.com/caua-rego/Educativ.ia.git
cd Educativ.ia
```

### 2. Configurar o Backend

```bash
cd backend

# Criar ambiente virtual
python -m venv venv
source venv/bin/activate   # Linux/Mac
# venv\Scripts\activate    # Windows

# Instalar dependências
pip install -r requirements.txt

# Configurar variáveis de ambiente
cp .env.example .env
# Editar .env com suas chaves (API de IA, secret key, etc.)

# Iniciar o servidor
python app.py
```

O backend estará rodando em `http://localhost:5000`

### 3. Configurar o Frontend

```bash
cd frontend

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

O frontend estará acessível em `http://localhost:3000` (com proxy para o backend)

---

## 🗺️ Roadmap do MVP

> 📅 Estrutura em **4 Sprints** de **1 semana** cada — entrega incremental e funcional a cada etapa.

```
 Semana 1          Semana 2          Semana 3          Semana 4
┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐
│ 🟢 PLAN  │───▶│ 🔵 BACK  │───▶│ 🟣 FRONT │───▶│ 🟠 FINAL │
│ Arquitet.│    │ APIs +DB │    │ UI+Integ.│    │ Polish   │
└──────────┘    └──────────┘    └──────────┘    └──────────┘
  Decisões        Backend         Produto          Produto
  tomadas        funcional       utilizável      apresentável
```

---

### 🟢 Sprint 1 — Planejamento Técnico

> **Objetivo:** Definir as bases do projeto — nenhuma linha de código de produção.

| O que fazer | Entregável |
|-------------|------------|
| Definir arquitetura do sistema | Documento de arquitetura (`docs/`) |
| Modelar banco de dados (ER, fluxos) | Diagrama ER + modelos ORM |
| Escolher e validar a stack tecnológica | README com stack justificada ✅ |
| Montar estrutura inicial do repositório | Estrutura de pastas criada ✅ |
| Configurar ambiente de desenvolvimento | `.env.example`, `Makefile`, `requirements.txt` ✅ |

✅ **Resultado esperado:** Base técnica clara e decisões estruturais tomadas.

---

### 🔵 Sprint 2 — Backend

> **Objetivo:** Construir a base funcional — o sistema funciona sem interface.

| O que fazer | Entregável |
|-------------|------------|
| Criar banco de dados com SQLAlchemy | Modelos em `backend/modules/*/models.py` |
| Implementar autenticação (JWT) | `modules/auth/` completo |
| Desenvolver API CRUD de planos | `modules/planos/` completo |
| Criar integração com IA (Gemini) | `modules/ia/` com prompts |
| Escrever testes básicos | `tests/unit/` e `tests/integration/` |
| Documentar endpoints | `docs/api.md` |

✅ **Resultado esperado:** Backend funcional com endpoints testados, mesmo que sem interface.

---

### 🟣 Sprint 3 — Frontend + Integração

> **Objetivo:** Conectar a interface ao backend — o produto fica utilizável.

| O que fazer | Entregável |
|-------------|------------|
| Construir telas de login e registro | `frontend/modules/auth/` |
| Desenvolver dashboard | `frontend/modules/dashboard/` |
| Criar editor de planos | `frontend/modules/planos/` |
| Implementar calendário interativo | `frontend/modules/calendario/` |
| Integrar chat IA | `frontend/modules/ia/` |
| Consumir APIs e tratar erros | `frontend/core/api-client.js` |

✅ **Resultado esperado:** Produto utilizável com fluxo ponta-a-ponta funcionando.

---

### 🟠 Sprint 4 — Refinamento + Pitch

> **Objetivo:** Melhorar qualidade e preparar apresentação final.

| O que fazer | Entregável |
|-------------|------------|
| Corrigir bugs encontrados | Issues fechadas no GitHub |
| Ajustar UX/UI (responsividade, animações) | `frontend/styles/` polido |
| Melhorar performance | Otimizações de queries e loading |
| Exportar planos em PDF | Feature no editor de planos |
| Preparar demo e storytelling | Slides / demo funcional |
| Deploy (se aplicável) | URL pública (Render / Railway) |

✅ **Resultado esperado:** Produto apresentável e estável para a banca.

---

### 📊 Metodologia Ágil

O cronograma segue um princípio fundamental do desenvolvimento ágil:

```
                    ┌────────────────────────────────────┐
                    │  ENTREGA INCREMENTAL E FUNCIONAL   │
                    │         A CADA SPRINT              │
                    └────────────────────────────────────┘

    ❌ NÃO fazemos                    ✅ Fazemos
    ─────────────                     ──────────
    Deixar integração pro final       Integrar na Sprint 3
    Semanas sem nada funcionando      Algo funcional toda semana
    Todo o risco na última semana     Risco distribuído
    Código sem testes                 Testes desde a Sprint 2
```

| Prática Ágil | Como aplicamos |
|-------------|----------------|
| **Scrum** | Sprints semanais com entregas definidas |
| **MVP evolutivo** | Cada sprint adiciona uma camada funcional |
| **Integração contínua** | Frontend integra com backend na Sprint 3 (não no final) |
| **Kanban** | GitHub Projects para rastrear tarefas (To Do → In Progress → Done) |
| **Code Review** | Tech Lead revisa PRs antes do merge |

## 🔍 Análise de Concorrentes

### Concorrentes Diretos (Planos de Ensino com IA)

| Plataforma | URL | Diferencial Educativia |
|------------|-----|----------------------|
| **Teachy** | [teachy.com.br](https://www.teachy.com.br) | Banco de metodologias ativas contextualizadas |
| **Profy** | [profy.com.br](https://profy.com.br/pt/) | Calendário integrado ao plano de ensino |
| **Flint** | [flintk12.com](https://www.flintk12.com/) | Foco no professor brasileiro e ODS 4 |
| **Eduaide** | [eduaide.ai](https://www.eduaide.ai/) | Interface simplificada, menor curva de aprendizado |
| **Plurall** | [plurall.net](https://www.plurall.net/ia.html) | Plataforma independente, sem lock-in editorial |

### Parceiros Estratégicos (SIS/ERP Escolar — canal B2B)

| Plataforma | URL |
|------------|-----|
| **E-SAGE** | [esage.net.br](https://esage.net.br/) |
| **Kaits** | [kaits.com.br](https://kaits.com.br/) |
| **Atlas** | [atlasedu.com.br](https://atlasedu.com.br/) |
| **Lyceum** | [lyceum.com.br](https://www.lyceum.com.br/) |

> ⚠️ Os SIS/ERPs acima focam na administração da instituição (matrículas, finanças, notas). Não são concorrentes diretos — são **canais de distribuição B2B** potenciais para integração futura.

---

## 📚 Referências

- VIEGAS, M. F. Trabalhando todo o tempo: sobrecarga e intensificação no trabalho de professoras da educação básica. **Educação e Pesquisa**, São Paulo, v. 48, e244193, 2022. Disponível em: https://doi.org/10.1590/S1678-4634202248244193

- MORICONI, G. M.; GIMENES, N. A. S.; LEME, L. F. **Volume de trabalho dos professores dos anos finais do ensino fundamental**: uma análise comparativa entre Brasil, Estados Unidos, França e Japão. Ribeirão Preto: D3E, 2021.

- IPEA. **ODS 4: Educação de Qualidade**. Brasília: IPEA, [s.d.]. Disponível em: https://www.ipea.gov.br/ods/ods4.html

- LIYANAGE, S. et al. **Artificial Intelligence in Higher Education: A Systematic Review of Contributions to SDG 4 and SDG 10**. 2024. Disponível em: https://www.researchgate.net/publication/396811377

- SINPRO-DF. 6 atividades que mais tomam tempo do professor e como minimizá-las. 2023. Disponível em: https://www.sinprodf.org.br/6-atividades-que-mais-tomam-tempo-do-professor-e-como-minimiza-las/

- GEEKIE. Tempo do professor: como a tecnologia otimiza a rotina docente? 2022. Disponível em: https://www.geekie.com.br/tempo-do-professor/

---

## 👥 Equipe

Este projeto é desenvolvido por **8 integrantes** como parte de um trabalho acadêmico.

### 🏆 Tech Lead

| Nome | Papel | O que faz |
|------|-------|-----------|
| **Cauã Rego** | 🚀 Tech Lead (Full-Stack) | Arquitetura técnica, core do backend e frontend, módulo de IA completo, integrações API (Gemini), code review |

### 👨‍💻 Time de Desenvolvimento

| # | Nome | Papel | O que faz no dia a dia |
|---|------|-------|------------------------|
| 1 | Gabriel Brito | 🎯 Product Manager / PO | Define prioridades do backlog, organiza sprints, faz a ponte entre time técnico e stakeholders |
| 2 | Matheus Larre | 🐍 Backend — Auth & Segurança | Login, registro, JWT, middleware de autenticação, controle de sessão |
| 3 | Fernando Andrade | 🐍 Backend — Planos & Calendário | CRUD de planos de ensino, eventos do calendário, regras de negócio, schemas de validação |
| 4 | Luís Nunes | 🎨 Frontend — UI/UX & Design System | Identidade visual, CSS Design Tokens, layouts, shared components (Sidebar, Header, Modal, Toast) |
| 5 | João Pedro | 🎨 Frontend — Planos, Dashboard & Calendário | Telas de listagem, edição de planos, dashboard com KPIs, calendário interativo |
| 6 | Renato Chong | 🗄️ Full-Stack — Database, DevOps & QA | Banco de dados (SQLAlchemy, seeds, migrations), deploy, testes unitários e de integração |
| 7 | Micaella | 📄 Documentação, QA & Conteúdo Pedagógico | README, docs técnicos, testes de usabilidade, validação de qualidade, templates de planos, pesquisa de metodologias de ensino |

### 📁 Quem mexe em quê? — Mapa de Pastas por Papel

```
Educativia/
│
├── 🚀 Tech Lead (Cauã Rego) ─── ACESSO A TUDO (review + arquitetura)
│
├── frontend/src/
│   ├── core/                          ← 🚀 Tech Lead (infra, api-client, contexts)
│   ├── styles/                        ← 🎨 #4 (UI/UX & Design System)
│   ├── layouts/                       ← 🎨 #4 (UI/UX & Design System)
│   ├── shared/components/             ← 🎨 #4 (UI/UX & Design System)
│   ├── shared/utils/                  ← 🚀 Tech Lead
│   ├── modules/auth/                  ← 🎨 #4 (UI/UX & Design System)
│   ├── modules/planos/                ← 🎨 #5 (Planos, Dashboard & Calendário)
│   ├── modules/dashboard/             ← 🎨 #5 (Planos, Dashboard & Calendário)
│   ├── modules/calendario/            ← 🎨 #5 (Planos, Dashboard & Calendário)
│   └── modules/ia/                    ← 🚀 Tech Lead (IA completo)
│
├── backend/
│   ├── core/                          ← 🚀 Tech Lead (infra, database, security)
│   ├── shared/                        ← 🚀 Tech Lead
│   ├── modules/auth/                  ← 🐍 #2 (Auth & Segurança)
│   ├── modules/planos/                ← 🐍 #3 (Planos & Calendário)
│   ├── modules/calendario/            ← 🐍 #3 (Planos & Calendário)
│   ├── modules/ia/                    ← 🚀 Tech Lead (IA + integrações API)
│   ├── seeds/                         ← 🗄️ #6 (Database, DevOps & QA)
│   └── migrations/                    ← 🗄️ #6 (Database, DevOps & QA)
│
├── tests/
│   ├── unit/                          ← 🗄️ #6 (Database, DevOps & QA)
│   ├── integration/                   ← 🗄️ #6 (Database, DevOps & QA)
│   └── e2e/                           ← 🗄️ #6 (Database, DevOps & QA)
│
├── docs/                              ← 📄 #7 (Documentação, QA & Conteúdo)
├── README.md                          ← 📄 #7 (Documentação, QA & Conteúdo)
├── Makefile                           ← 🗄️ #6 (Database, DevOps & QA)
└── .env.example                       ← 🗄️ #6 (Database, DevOps & QA)
```

> 💡 **Dica para o time:** Usem o GitHub Projects para organizar tasks e o modelo Kanban (To Do → In Progress → Done) para acompanhar o progresso de cada sprint.

---

## 🤝 Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/minha-feature`)
3. Commit suas mudanças (`git commit -m 'feat: adiciona nova feature'`)
4. Push para a branch (`git push origin feature/minha-feature`)
5. Abra um Pull Request

### Padrão de Commits

```
feat:     Nova funcionalidade
fix:      Correção de bug
docs:     Documentação
style:    Formatação (sem alteração de código)
refactor: Refatoração de código
test:     Adição/correção de testes
chore:    Tarefas de manutenção
```

---

## 📖 Documentação

| Documento | Descrição |
|-----------|----------|
| [📋 PRD — Product Requirements Document](docs/PRD.md) | Visão do produto, personas, features detalhadas com user stories e critérios de aceite, métricas de sucesso e riscos |
| [🏗️ Arquitetura Walkthrough](docs/arquitetura-walkthrough.md) | Walkthrough completo da arquitetura enterprise: padrões, camadas e decisões técnicas |
| [📋 Task Board por Sprint](docs/tasks.md) | 43 tasks distribuídas em 4 sprints com instruções detalhadas por pessoa |
| [📡 API Reference](docs/api.md) | Documentação dos endpoints REST (em construção) |
| [⚙️ Setup Guide](docs/setup.md) | Guia detalhado de instalação e configuração (em construção) |

---

## 📄 Licença

Este projeto é desenvolvido para fins acadêmicos.

---

<p align="center">
  Feito com carinho e amor pela equipe <strong>EDUCΛTIVIΛ</strong>
</p>
