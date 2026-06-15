<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cinematch - Criar Conta</title>

  <!-- Fonte Poppins -->
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="${pageContext.request.contextPath}/assets/css/criarConta.css">
</head>
<body>
  <div class="fundo"></div>

  <header>
   <a href="criarConta.htm"> <img src="${pageContext.request.contextPath}/assets/img//logo.png" alt="Logo Cinematch" class="logo"></a>
  </header>

  <main class="main-content">
    <div class="container">

      <!-- BOTÃO DE VOLTAR -->
      <a href="planos.htm" class="back-btn">
        <img src="${pageContext.request.contextPath}/assets/img//voltar.png" alt="Voltar">
      </a>

      <h1>Cinematch</h1>
      <p style="text-align: center; margin-bottom: 30px;">Crie sua conta e comece a explorar!</p>

      <form onsubmit="handleRegister(event)">
        <div class="form-group">
          <label for="senha">Confirmar senha</label>
          <input type="password" id="senha" placeholder="******" required>
        </div>

        <div class="form-group">
          <label for="cpf">CPF</label>
          <input type="text" id="cpf" placeholder="000.000.000-00" required>
        </div>

        <div class="form-group">
          <label for="telefone">Telefone</label>
          <input type="text" id="telefone" placeholder="(00) 00000-0000" required>
        </div>

        <div class="form-group">
          <label for="sexo">Sexo</label>
          <select id="sexo" required>
            <option value="M">Masculino</option>
            <option value="F">Feminino</option>
            <option value="O">Outro</option>
          </select>
        </div>

        <button type="submit" class="btn">Continuar</button>
      </form>
    </div>
  </main>

  <!-- FOOTER -->
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
    function handleRegister(event) {
      event.preventDefault();
      
      // Pega os valores dos inputs
      const senha = document.getElementById('senha').value;
      const cpf = document.getElementById('cpf').value;
      const telefone = document.getElementById('telefone').value;
      const sexo = document.getElementById('sexo').value;

      // Validação simples para garantir que todos os campos estão preenchidos
      if (!senha || !cpf || !telefone || !sexo) {
        alert("Por favor, preencha todos os campos!");
        return;
      }

      // Envia dados para o PHP
      // fetch removido;
          // Redireciona para a página de login
          window.location.href = "index.htm";
        } else {
          alert(`{data.message}`);
        }
      })
      .catch(error => {
        console.error('Erro:', error);
        alert("erro ao conectar com o servidor.");
      });
    }
  </script>
</body>
</html>


