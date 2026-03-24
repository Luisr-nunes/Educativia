# ══════════════════════════════════════════════════
# EDUCΛTIVIΛ — Gerenciador Nativo Windows (PowerShell)
# ══════════════════════════════════════════════════
# Use este script se você não tiver o comando 'make' instalado.
# Uso: .\manage.ps1 [comando]

$action = $args[0]

if ($null -eq $action -or $action -eq "help") {
    Write-Host "`nUso: .\manage.ps1 [comando]" -ForegroundColor Yellow
    Write-Host "Comandos disponíveis:"
    Write-Host "  install    - Cria venv e instala dependências (Backend + Frontend)"
    Write-Host "  dev        - Sobe a aplicação completa com Docker Compose"
    Write-Host "  stop       - Para os containers do Docker"
    Write-Host "  seed       - Popula o banco de dados (Docker precisa estar rodando)"
    Write-Host "  db-reset   - Limpa o banco de dados e recria tudo do zero"
    Write-Host "  test       - Executa todos os testes automatizados"
    Write-Host "  help       - Mostra esta mensagem de ajuda`n"
    exit
}

switch ($action) {
    "install" {
        Write-Host "--> Criando ambiente virtual..." -ForegroundColor Cyan
        python -m venv backend/venv
        Write-Host "--> Instalando dependências do backend..." -ForegroundColor Cyan
        .\backend\venv\Scripts\pip.exe install -r backend/requirements.txt
        Write-Host "--> Instalando dependências do frontend..." -ForegroundColor Cyan
        npm install --prefix frontend
    }
    "dev" {
        Write-Host "--> Subindo containers com Docker Compose..." -ForegroundColor Cyan
        docker compose up --build
    }
    "stop" {
        Write-Host "--> Parando containers..." -ForegroundColor Cyan
        docker compose down
    }
    "seed" {
        Write-Host "--> Populando banco de dados..." -ForegroundColor Cyan
        docker exec -it educativia-backend-1 python -m seeds.seed
    }
    "db-reset" {
        Write-Host "--> Resetando banco de dados..." -ForegroundColor Cyan
        docker compose down
        if (Test-Path "instance") {
            Remove-Item -Path "instance" -Recurse -Force
        }
        docker compose up -d
        Write-Host "--> Aguardando banco iniciar (5s)..." -ForegroundColor Cyan
        Start-Sleep -Seconds 5
        docker exec -it educativia-backend-1 python -m seeds.seed
    }
    "test" {
        Write-Host "--> Executando testes..." -ForegroundColor Cyan
        .\backend\venv\Scripts\python.exe -m pytest tests/ -v
    }
}