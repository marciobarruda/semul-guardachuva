# Arquivo: run.ps1 no seu projeto
$port = 5500
$url = "http://localhost:$port/index.html"

# 1. Verifica se o servidor já está rodando
if (-not (Get-NetTCPConnection -LocalPort $port -ErrorAction SilentlyContinue)) {
    Write-Host "Subindo servidor..."
    # Inicia o servidor Python escondido em segundo plano
    Start-Process python -ArgumentList "-m http.server $port" -WindowStyle Hidden
    Start-Sleep -Seconds 1
}

# 2. Abre o Edge "desconectado" do VS Code
# Isso evita o erro "Unable to attach"
Start-Process "msedge" $url