/CRIAR PERFIL


<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CineMatch - Criar Perfil</title>
    <link rel="stylesheet" href="criarperfil.${pageContext.request.contextPath}/assets/css/">
</head>
<body>
    <header>
        <img src="${pageContext.request.contextPath}/assets/img//logo.png" alt="Logo Cinematch" class="logo_header">
    </header>

    <div class="back-button">
        <a href="escolha_perfil.htm" class="back-arrow">
            <img src="${pageContext.request.contextPath}/assets/img//voltar.png" alt="Voltar">
        </a>
    </div>

    <div class="container">
        
            <div class="success-message" style="background: #4CAF50; color: white; padding: 15px; margin: 15px 0; border-radius: 8px; text-align: center; font-weight: bold;">
                
                <br><small>Redirecionando...</small>
            </div>
        
        
        
            <div class="error-message" style="background: #f44336; color: white; padding: 15px; margin: 15px 0; border-radius: 8px; text-align: center; font-weight: bold;">
                
            </div>
        
        
        <div class="profile-section">
            <div class="avatar-wrapper">
                <img src="" alt="Foto Perfil" class="avatar" id="avatarImg">
                <a href="escolha_ft.htm?origem=criar" class="edit-icon">
                    <img src="${pageContext.request.contextPath}/assets/img//lapis.png" alt="lapis editar" class="lapis" id="lapisid">
                </a>
            </div>
        </div>

        <form method="POST" action="">
            <div class="form-section">
                <div class="form-group">
                    <label class="form-label">Nome do Perfil</label>
                    <input type="text" class="form-input" name="nome_perfil" 
                           value="" 
                           placeholder="Digite o nome do perfil"
                           id="userName" maxlength="30" required>
                </div>

                <div class="form-group">
                    <label class="form-label">Classificação do Perfil</label>
                    <select class="form-select" name="classificacao" id="classification">
                        <option value="18" selected>+18</option>
                        <option value="16">+16</option>
                        <option value="14">+14</option>
                        <option value="12">+12</option>
                        <option value="10">+10</option>
                        <option value="0">Livre</option>
                    </select>
                </div>
            </div>

            <div class="button-group">
                <button type="button" class="btn btn-cancel" id="cancelBtn" onclick="history.back()">Cancelar</button>
                <button type="submit" name="salvar" class="btn btn-save" id="saveBtn">Salvar</button>
            </div>
        </form>
    </div>

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
</body>

</html>