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

  <!-- HEADER -->
  <header>
    <img src="${pageContext.request.contextPath}/assets/img//logo.png" alt="Logo Cinematch" class="logo">
  </header>

  <!-- CONTEÚDO PRINCIPAL -->
  <main class="main-content">
    <div class="container">
      <!-- BOTÃO DE VOLTAR -->
      <a href="planos.htm" class="back-btn">
        <img src="${pageContext.request.contextPath}/assets/img//voltar.png" alt="Voltar">
      </a>

      <h1>Cinematch</h1>

      <form>
        <div class="form-group">
          <label for="nome">Nome e Sobrenome</label>
          <input type="text" id="nome" placeholder="Seu nome" required>
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" placeholder="seuemail@gmail.com" required>
        </div>

        <div class="form-group">
          <label for="senha">Escreva uma senha</label>
          <input type="password" id="senha" placeholder="******" required>
        </div>

        <div class="form-group">
          <label for="nascimento">Data de Nascimento</label>
          <input type="date" id="nascimento" required>
        </div>

       <button type="button" class="btn" id="continuarBtn">Continuar</button>
       
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
  document.getElementById('continuarBtn').addEventListener('click', function() {
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();
    const nascimento = document.getElementById('nascimento').value;

    // Verificações básicas
    if (!nome) {
      alert("Por favor, preencha seu nome e sobrenome.");
      return;
    }
    if (!email) {
      alert("Por favor, insira seu email.");
      return;
    }
    if (!senha) {
      alert("Por favor, crie uma senha.");
      return;
    }
    if (!nascimento) {
      alert("Por favor, informe sua data de nascimento.");
      return;
    }

    // Pega o ID do plano selecionado do sessionStorage
    const planoSelecionado = sessionStorage.getItem('plano_selecionado');

    // Envia dados para o PHP incluindo o plano
    let bodyData = `etapa=1&nome=${encodeURIComponent(nome)}&email=${encodeURIComponent(email)}&senha=${encodeURIComponent(senha)}&nascimento=${encodeURIComponent(nascimento)}`;
    
    if (planoSelecionado) {
      bodyData += `&id_plano=${encodeURIComponent(planoSelecionado)}`;
    }

    // fetch removido; {
        // Redireciona para a próxima página
        window.location.href = "criarConta2.htm";
      } else {
        alert(data.message || "Erro ao processar dados.");
      }
    })
    .catch(error => {
      console.error('Erro:', error);
      alert("Erro ao conectar com o servidor.");
    });
  });
  </script>
  
</body>
</html>


//CRIAR CONTA 2
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cinematch - Criar Conta</title>

  <!-- Fonte Poppins -->
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="criarConta.${pageContext.request.contextPath}/assets/css/">
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
