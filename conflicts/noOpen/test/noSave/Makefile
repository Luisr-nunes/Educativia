# ══════════════════════════════════════════════════
# EDUCΛTIVIΛ — Makefile (Cross-Platform)
# ══════════════════════════════════════════════════
# Este Makefile é compatível com Windows, macOS e Linux.

# --- Variáveis de Configuração ---
# Detecta o SO e define os comandos apropriados.
ifeq ($(OS),Windows_NT)
    PY := python
    # Em Windows, os executáveis ficam em /Scripts e têm sufixo .exe.
    # Chamá-los diretamente pelo caminho completo é mais robusto do que "ativar" o ambiente.
    PYTHON_EXEC := backend/venv/Scripts/python.exe
    PIP_EXEC := backend/venv/Scripts/pip.exe
    RM_DIR := rd /s /q
    SLEEP := timeout /t
else
    PY := python3
    # Em Unix (macOS/Linux), os executáveis ficam em /bin.
    PYTHON_EXEC := backend/venv/bin/python
    PIP_EXEC := backend/venv/bin/pip
    RM_DIR := rm -rf
    SLEEP := sleep
endif

# Alvos que não são nomes de arquivos, para evitar conflitos.
.PHONY: help install dev dev-backend dev-frontend stop seed seed-local db-reset test test-integration clean check-venv

# Comando padrão a ser executado se apenas 'make' for digitado.
.DEFAULT_GOAL := help


# --- Comandos Principais ---

help:  ## Mostra esta ajuda com todos os comandos disponíveis.
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  [36m%-20s[0m %s\n", $$1, $$2}'

install: ## Cria o ambiente virtual e instala todas as dependências.
	@echo "--> Criando ambiente virtual em 'backend/venv'..."
	$(PY) -m venv backend/venv
	@echo "--> Instalando dependências do backend com pip..."
	$(PIP_EXEC) install -r backend/requirements.txt
	@echo "--> Instalando dependências do frontend com npm..."
	npm install --prefix frontend
	@echo "--> Instalação concluída!"

dev:  ## Roda a aplicação completa com Docker Compose (Recomendado).
	@echo "--> Subindo containers com Docker Compose..."
	docker compose up --build

stop:  ## Para os containers do Docker Compose.
	@echo "--> Parando containers Docker..."
	docker compose down

dev-backend: check-venv ## Roda apenas o backend localmente (porta 5000).
	@echo "--> Iniciando backend em modo de desenvolvimento..."
	$(PYTHON_EXEC) backend/app.py

dev-frontend: ## Roda apenas o frontend localmente.
	@echo "--> Iniciando frontend em modo de desenvolvimento..."
	npm run dev --prefix frontend

seed: ## Popula o banco de dados via Docker (Recomendado).
	@echo "--> Populando o banco de dados dentro do container..."
	docker exec -it educativia-backend-1 python -m seeds.seed

seed-local: check-venv ## Popula o banco de dados localmente (sem Docker).
	@echo "--> Populando o banco de dados local..."
	$(PYTHON_EXEC) backend/seeds/seed.py

db-reset: ## Apaga o banco de dados e roda o seed novamente (Docker).
	@echo "--> Resetando banco de dados..."
	docker compose down
	-$(RM_DIR) instance
	docker compose up -d
	@echo "--> Aguardando banco iniciar..."
	$(SLEEP) 5
	$(MAKE) seed

test: check-venv ## Roda todos os testes automatizados no ambiente local.
	@echo "--> Executando todos os testes..."
	$(PYTHON_EXEC) -m pytest tests/ -v

test-integration: check-venv ## Roda apenas os testes de integração.
	@echo "--> Executando testes de integração..."
	$(PYTHON_EXEC) -m pytest tests/integration/ -v

clean:  ## Remove o ambiente virtual, node_modules e outros artefatos.
	@echo "--> Limpando o projeto..."
	-$(RM_DIR) backend/venv
	-$(RM_DIR) frontend/node_modules
	-$(RM_DIR) frontend/dist
	@echo "--> Limpeza concluída."


# --- Comando Interno de Verificação ---
check-venv: ## (Uso interno) Verifica se o ambiente virtual existe antes de usá-lo.
ifeq ($(OS),Windows_NT)
	@if not exist "$(subst /,\,$(PYTHON_EXEC))" (echo "!!! Ambiente virtual nao encontrado. Rode 'make install' primeiro." && exit 1)
else
	@if [ ! -f "$(PYTHON_EXEC)" ]; then echo "!!! Ambiente virtual não encontrado. Rode 'make install' primeiro."; exit 1; fi
endif
