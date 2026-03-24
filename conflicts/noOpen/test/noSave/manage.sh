#!/bin/bash
# ══════════════════════════════════════════════════
# EDUCΛTIVIΛ — Gerenciador Nativo Unix (Bash)
# ══════════════════════════════════════════════════
# Use este script se você não quiser usar o comando 'make'.
# Uso: ./manage.sh [comando]

ACTION=$1

if [ -z "$ACTION" ] || [ "$ACTION" == "help" ]; then
    echo -e "\nUso: ./manage.sh [comando]"
    echo "Comandos disponíveis:"
    echo "  install    - Cria venv e instala dependências (Backend + Frontend)"
    echo "  dev        - Sobe a aplicação completa com Docker Compose"
    echo "  stop       - Para os containers do Docker"
    echo "  seed       - Popula o banco de dados (Docker precisa estar rodando)"
    echo "  db-reset   - Limpa o banco de dados e recria tudo do zero"
    echo "  test       - Executa todos os testes automatizados"
    echo "  help       - Mostra esta mensagem de ajuda\n"
    exit 0
fi

case $ACTION in
    "install")
        echo "--> Criando ambiente virtual..."
        python3 -m venv backend/venv
        echo "--> Instalando dependências do backend..."
        ./backend/venv/bin/pip install -r backend/requirements.txt
        echo "--> Instalando dependências do frontend..."
        npm install --prefix frontend
        ;;
    "dev")
        echo "--> Subindo containers com Docker Compose..."
        docker compose up --build
        ;;
    "stop")
        echo "--> Parando containers..."
        docker compose down
        ;;
    "seed")
        echo "--> Populando banco de dados..."
        docker exec -it educativia-backend-1 python3 -m seeds.seed
        ;;
    "db-reset")
        echo "--> Resetando banco de dados..."
        docker compose down
        rm -rf instance
        docker compose up -d
        echo "--> Aguardando banco iniciar (5s)..."
        sleep 5
        docker exec -it educativia-backend-1 python3 -m seeds.seed
        ;;
    "test")
        echo "--> Executando testes..."
        ./backend/venv/bin/python3 -m pytest tests/ -v
        ;;
    *)
        echo "Comando desconhecido: $ACTION"
        exit 1
        ;;
esac