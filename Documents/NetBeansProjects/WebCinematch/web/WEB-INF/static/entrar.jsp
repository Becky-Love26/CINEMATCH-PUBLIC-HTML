
<!DOCTYPE html>
<html lang="pt-BR">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login - Streaming</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="${pageContext.request.contextPath}/assets/css/entrar.css">
</head>

<body>
  <div class="fundo"></div>

  <header>
    <img src="${pageContext.request.contextPath}/assets/img/logo.png" alt="Logo Cinematch" class="logo_header">
  </header>

  <div class="main-container">
    <div class="login-container">
      <!-- BOTÃO VOLTAR COM IMAGEM -->
      <a href="index.htm" class="back-btn">
        <img src="${pageContext.request.contextPath}/assets/img/voltar.png" alt="Voltar">
     </a>

      <div class="logo">
        <img src="${pageContext.request.contextPath}/assets/img/logo_simbolo.png" alt="Logo Simbolo">
      </div>

      <h3>LOGIN</h3>

      
        <div class="erro-mensagem" style="color: #ff4444; background: #ffe0e0; padding: 10px; border-radius: 5px; margin-bottom: 15px; text-align: center;">
          ?? 
        </div>
      

      <form method="POST" action="">
        <div class="form-group">
          <label for="email">EMAIL</label>
          <input type="email" id="email" name="email" placeholder="exemplo@gmail.com" 
                 value="" required>
        </div>

        <div class="form-group">
          <label for="password">SENHA</label>
          <div class="password-input">
            <input type="password" id="password" name="password" placeholder="Digite sua senha" required>
          </div>
        </div>

        <button class="continue-button" onclick="window.location.href="escolha_perfil.htm">Continuar</button>
      </form>
    </div>
  </div>
s
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
</body>

</html>