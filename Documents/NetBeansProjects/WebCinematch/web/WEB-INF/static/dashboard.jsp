<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard - Cinematch</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.${pageContext.request.contextPath}/assets/css/">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/assets/css/dashboard.css">
</head>
<body>
    <header>
        <div class="logo">
            <img src="${pageContext.request.contextPath}/assets/img//logo.png" class="logo-desktop" alt="Cinematch Logo">
        </div>

        <!-- MENU DESKTOP -->
        <nav class="nav-desktop">
            <a href="dashboard.htm" id="selecionado">DASHBOARD</a>
            <a href="adm_usuario.htm" >USUÁRIOS</a>
            <a href="adm_filmes.htm">FILMES</a>

            
        </nav>
    </header>

    <main>
        <div class="metrics-grid">
            <div class="metric-card1">
                <div class="metric-header">
                    <span class="metric-title">Engajamento</span>
                </div>
                <div class="metric-value" id="engajamento">-</div>
                <div class="metric-subtitle" id="engajamento-sub">Carregando...</div>
            </div>

            <div class="metric-card2">
                <div class="metric-header">
                    <span class="metric-title">Sucesso</span>
                </div>
                <div class="metric-value" id="avaliacoes">-</div>
                <div class="metric-subtitle" id="avaliacoes-sub">Carregando...</div>
            </div>

            <div class="metric-card1">
                <div class="metric-header">
                    <span class="metric-title">Contratos mensais</span>
                </div>
                <div class="metric-value" id="assinaturas">-</div>
                <div class="metric-subtitle" id="assinaturas-sub">Carregando...</div>
            </div>

            <div class="metric-card2">
                <div class="metric-header">
                    <span class="metric-title">Lucro mensal</span>
                </div>
                <div class="metric-value" id="receita">-</div>
                <div class="metric-subtitle" id="receita-sub">Carregando...</div>
            </div>
        </div>

        <div class="charts-grid">
            <div class="chart-card">
                <h3 class="chart-title">Engajamento</h3>
                <div class="chart-container">
                    <canvas id="lineChart"></canvas>
                </div>
            </div>

            <div class="chart-card">
                <h3 class="chart-title">Planos</h3>
                <div class="chart-container">
                    <canvas id="pieChart"></canvas>
                </div>
            </div>

            <div class="chart-card">
                <h3 class="chart-title">Felicidade do Cliente</h3>
                <div class="chart-container">
                    <canvas id="gaugeChart"></canvas>
                </div>
            </div>

            <div class="chart-card1" style="grid-column: 0.5 / -1;">
                <h3 class="chart-title">Acessos</h3>
                <div class="chart-container">
                    <canvas id="barChart"></canvas>
                </div>
            </div>

            <div class="chart-card1">
                <h3 class="chart-title">Vendas</h3>
                <div class="chart-container">
                    <canvas id="accessChart"></canvas>
                </div>
            </div>

            <div class="chart-card1">
                <h3 class="chart-title">Visualização de Filmes</h3>
                <div class="chart-container">
                    <canvas id="viewsChart"></canvas>
                </div>
            </div>
        </div>
    </main>

    <footer class="footer">
        <div class="footer-top">
            <img src="${pageContext.request.contextPath}/assets/img//logo.png" alt="Logo Cinematch" class="footer-logo">
        </div>
    
        <div class="footer-links">
            <a href="#">ENVIE UM COMENTÁRIO</a>
            <a href="#">HELP</a>
            <a href="#">TERMOS DE PRIVACIDADE</a>
        </div>
    
        <div class="footer-info">
            <p>CineMatch Serviços de avaliações do Brasil Ltda. | CNPJ 00.000.000/0001-03</p>
            <p>
                <a href="#">Condições de Uso</a> |
                <a href="#">Notificação de Privacidade</a> |
                <a href="#">Cookies</a>
            </p>
            <p>© 2025 Cinematch.com</p>
        </div>
    </footer>

    <script>
        // Menu mobile toggle
        const menuToggle = document.getElementById("menuToggle");
        const mobileMenu = document.getElementById("mobileMenu");

        if (menuToggle && mobileMenu) {
            menuToggle.addEventListener("click", () => {
                mobileMenu.classList.toggle("active");
                menuToggle.classList.toggle("active");
            });
        }

        Chart.defaults.font.family = "'Segoe UI', sans-serif";
        Chart.defaults.color = '#7f8c8d';

        let lineChart, pieChart, gaugeChart, barChart, accessChart, viewsChart;

        function formatNumber(num) {
            const n = parseFloat(num);
            if (n >= 1000) {
                return (n / 1000).toFixed(1).replace('.', ',') + ' mil';
            }
            return n.toString().replace('.', ',');
        }

        async function carregarMetricas() {
            try {
                const response = await // fetch removido;
                const data = await response.json();
                
                document.getElementById('engajamento').textContent = formatNumber(data.engajamento);
                document.getElementById('engajamento-sub').textContent = `${data.perfis_ativos} usuários ativos`;
                
                document.getElementById('avaliacoes').textContent = formatNumber(data.avaliacoes);
                document.getElementById('avaliacoes-sub').textContent = `Média: ${data.media_estrelas.toFixed(1)} estrelas`;
                
                document.getElementById('assinaturas').textContent = data.assinaturas_ativas;
                document.getElementById('assinaturas-sub').textContent = `${data.total_usuarios} usuários`;
                
                document.getElementById('receita').textContent = `R$ ${formatNumber(data.receita_mensal.toFixed(2))}`;
                document.getElementById('receita-sub').textContent = `R$ ${formatNumber(data.receita_anual.toFixed(0))} anual`;
            } catch (error) {
                console.error('Erro:', error);
            }
        }

        async function carregarGraficoLinha() {
            try {
                const response = await // fetch removido;
                const data = await response.json();
                
                const lineCtx = document.getElementById('lineChart').getContext('2d');
                lineChart = new Chart(lineCtx, {
                    type: 'line',
                    data: {
                        labels: data.meses,
                        datasets: [{
                            label: 'Engajamento',
                            data: data.visualizacoes,
                            borderColor: '#3498db',
                            backgroundColor: 'rgba(52, 152, 219, 0.1)',
                            tension: 0.4,
                            fill: true
                        }, {
                            label: 'Quantidade de avaliações',
                            data: data.avaliacoes,
                            borderColor: '#e74c3c',
                            backgroundColor: 'rgba(231, 76, 60, 0.1)',
                            tension: 0.4,
                            fill: true
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: { legend: { display: true, position: 'top' } },
                        scales: { y: { beginAtZero: true } }
                    }
                });
            } catch (error) {
                console.error('Erro:', error);
            }
        }

        async function carregarGraficoPizza() {
            try {
                const response = await // fetch removido;
                const data = await response.json();
                
                const pieCtx = document.getElementById('pieChart').getContext('2d');
                pieChart = new Chart(pieCtx, {
                    type: 'doughnut',
                    data: {
                        labels: data.planos,
                        datasets: [{
                            data: data.quantidades,
                            backgroundColor: ['#f1c40f', '#3498db', '#9b59b6'],
                            borderWidth: 0
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: { legend: { position: 'bottom' } }
                    }
                });
            } catch (error) {
                console.error('Erro:', error);
            }
        }

        async function carregarGauge() {
            try {
                const response = await // fetch removido;
                const data = await response.json();
                
                const gaugeCtx = document.getElementById('gaugeChart').getContext('2d');
                gaugeChart = new Chart(gaugeCtx, {
                    type: 'doughnut',
                    data: {
                        datasets: [{
                            data: [data.satisfacao, 100 - data.satisfacao],
                            backgroundColor: ['#e91e63', '#ecf0f1'],
                            borderWidth: 0,
                            circumference: 180,
                            rotation: 270
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: { legend: { display: false }, tooltip: { enabled: false } }
                    }
                });
            } catch (error) {
                console.error('Erro:', error);
            }
        }

        async function carregarGraficoBarras() {
            try {
                const response = await // fetch removido;
                const data = await response.json();
                
                const barCtx = document.getElementById('barChart').getContext('2d');
                barChart = new Chart(barCtx, {
                    type: 'bar',
                    data: {
                        labels: data.meses,
                        datasets: [{
                            label: 'Visualizações',
                            data: data.visualizacoes,
                            backgroundColor: ['#e74c3c', '#3498db', '#2ecc71', '#f39c12', '#9b59b6', '#1abc9c'],
                            borderRadius: 8
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: { legend: { display: false } },
                        scales: { y: { beginAtZero: true } }
                    }
                });
            } catch (error) {
                console.error('Erro:', error);
            }
        }

        async function carregarGraficoAcessos() {
            try {
                const response = await // fetch removido;
                const data = await response.json();
                
                const accessCtx = document.getElementById('accessChart').getContext('2d');
                accessChart = new Chart(accessCtx, {
                    type: 'bar',
                    data: {
                        labels: data.datas,
                        datasets: [{
                            label: 'Acessos',
                            data: data.quantidades,
                            backgroundColor: '#00bcd4',
                            borderRadius: 6
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: { legend: { display: false } },
                        scales: { y: { beginAtZero: true } }
                    }
                });
            } catch (error) {
                console.error('Erro:', error);
            }
        }

        async function carregarVisualizacoesGenero() {
            try {
                const response = await // fetch removido;
                const data = await response.json();
                
                const viewsCtx = document.getElementById('viewsChart').getContext('2d');
                viewsChart = new Chart(viewsCtx, {
                    type: 'line',
                    data: {
                        labels: data.meses,
                        datasets: data.datasets
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: { legend: { display: true, position: 'top' } },
                        scales: { y: { beginAtZero: true } }
                    }
                });
            } catch (error) {
                console.error('Erro:', error);
            }
        }

        window.addEventListener('DOMContentLoaded', () => {
            carregarMetricas();
            carregarGraficoLinha();
            carregarGraficoPizza();
            carregarGauge();
            carregarGraficoBarras();
            carregarGraficoAcessos();
            carregarVisualizacoesGenero();
        });
    </script>
</body>
</html>