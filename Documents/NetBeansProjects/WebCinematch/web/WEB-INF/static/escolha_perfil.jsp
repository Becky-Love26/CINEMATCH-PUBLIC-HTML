
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cinematch - Perfis</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/assets/css/escolha_perfil.css">
</head>
<body>
    <header>
        <img src="${pageContext.request.contextPath}/assets/img/logo.png" alt="Logo Cinematch" class="logo_header">
    </header>

    <div class="container">
        <h1>PERFIS</h1>
        <p style="text-align: center; color: #fff; margin-bottom: 20px;">
            Bem-vindo(a), <strong></strong>!
        </p>
        <div class="perfis-grid" id="perfisGrid">
            
                <form method="POST" action="" style="display: inline;">
                    <input type="hidden" name="perfil_id" value="">
                    <div class="perfil-item" onclick="this.closest('form').submit();" style="cursor: pointer;">
                        <div class="perfil-avatar">
                            <img src="" 
                                 alt="">
                            
                                <span class="classificacao-badge">
                                    +
                                </span>
                            
                        </div>
                        <span class="perfil-nome">
                            
                        </span>
                    </div>
                </form>
            

            
                <div class="perfil-item add-perfil" onclick="adicionarPerfil()">
                    <div class="perfil-avatar add-avatar">
                        <svg class="plus-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                        </svg>
                    </div>
                    <span class="perfil-nome">Adicionar</span>
                </div>
            
        </div>
    </div>

    <footer class="footer">
        <div class="footer-top">
            <img src="${pageContext.request.contextPath}/assets/img/logo.png" alt="Logo Cinematch" class="footer-logo">
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
        function adicionarPerfil() {
            
                // Redirecionar para página de criar perfil
                window.location.href = 'criarperfil.htm';
            
                alert('Você já atingiu o limite máximo de  perfis!');
            
        }
    </script>
</body>
</html>