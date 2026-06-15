

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Escolha seu Perfil - Cinematch</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/assets/css/escolha_ft.css">
</head>
<body>
    <!-- Header -->
    <header>
        <div class="logo">
            <img src="${pageContext.request.contextPath}/assets/img/logo.png" alt="Logo Cinematch" class="logo_header">
        </div>
        <div class="user-info">
            <img id="userAvatar" src="" alt="User Avatar" class="user-avatar">
        </div>
    </header>

    <!-- Main Content -->
    <div class="container">
        <button class="back-button" onclick="window.location.href=''">
            ? 
        </button>

        <h1 class="title">ESCOLHA O ÍCONE DO SEU PERFIL</h1>

        <!-- Categoria: Gatos -->
        <div class="category-section">
            <h2 class="category-title">AVATARES DISPONÍVEIS</h2>
            <form method="POST" action="" id="formAvatares">
                <div class="profiles-grid" id="gatosGrid">
                    
                        <div class="profile-card " 
                             onclick="selecionarAvatar('avatar-', '')">
                            <img src="" 
                                 alt="Avatar" 
                                 class="profile-image" 
                                 id="avatar-" 
                                 data-arquivo="">
                        </div>
                    
                </div>
                <input type="hidden" name="foto_selecionada" id="fotoSelecionada" value="">
            </form>

            
                <p style="text-align: center; color: #999;">Nenhuma foto disponível no momento.</p>
            
        </div>

        <!-- Botões de Ação -->
        <div class="footer-actions">
            <button class="btn btn-secondary" onclick="window.location.href=''">Cancelar</button>
            <button class="btn btn-primary" onclick="document.getElementById('formAvatares').submit()">Concluir</button>
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
        let avatarSelecionado = '';

        function selecionarAvatar(id, caminhoArquivo) {
            // Remove seleção anterior
            document.querySelectorAll('.profile-card').forEach(card => {
                card.classList.remove('selected');
            });

            // Adiciona seleção no card clicado
            const card = document.getElementById(id)?.parentElement;
            if (card) {
                card.classList.add('selected');
            }
            
            // Atualiza avatar selecionado
            avatarSelecionado = caminhoArquivo;
            document.getElementById('fotoSelecionada').value = caminhoArquivo;
            
            // Atualiza preview no header
            document.getElementById('userAvatar').src = caminhoArquivo;
            
            console.log('? Avatar selecionado:', avatarSelecionado);
        }

        function voltarPagina() {
            window.history.back();
        }
    </script>
</body>
</html>