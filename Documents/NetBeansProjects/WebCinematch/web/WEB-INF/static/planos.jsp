<!DOCTYPE html>
<html lang="pt-BR">
<head> 
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cinematch - Planos</title>
  <link rel="stylesheet" href="${pageContext.request.contextPath}/assets/css/planos.css">
  <!-- Importando a fonte Poppins do Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <div class="fundo"></div>
    <header>
      <a href="index.htm">
        <img src="${pageContext.request.contextPath}/assets/img/logo.png" alt="Logo Cinematch" class="logo">
      </a>
    </header>
  
    <main class="main-content">
  <!-- BOTÃO DE VOLTAR -->
  <a href="index.htm" class="back-btn">
    <img src="${pageContext.request.contextPath}/assets/img/voltar.png" alt="Voltar">
  </a>
  
  <div class="plans-container">
    <!-- Plano Básico -->
    <div class="plan basic">
      <h2>PLANO BÁSICO</h2>
      <p class="price">R$ 19,90/MÊS</p>
      <p class="description">IDEAL PARA QUEM QUER COMEÇAR A DESCOBRIR NOVOS FILMES!</p>
      <ul>
        <li>Acesso a uma seleção limitada de títulos</li>
        <li>Acesso às recomendações personalizadas básicas</li>
        <li>Assista às recomendações personalizadas com interrupções ocasionais de anúncios curtos</li>
      </ul>
      <button onclick="openModal('basico')">ASSINAR</button>
    </div>

    <!-- Plano Família -->
    <div class="plan family">
      <h2>PLANO FAMÍLIA</h2>
      <p class="price">R$ 59,90/MÊS</p>
      <p class="description">1 MÊS GRÁTIS PARA ATÉ 4 PERFIS + DESCONTO DE 25% NA ASSINATURA TRIMESTRAL</p>
      <ul>
        <li>Recomendações personalizadas para cada membro da família</li>
        <li>Perfis separados para crianças, adolescentes e adultos</li>
        <li>Conteúdo exclusivo para famílias</li>
      </ul>
      <button onclick="openModal('familia')">ASSINAR</button>
    </div>

    <!-- Plano Premium -->
    <div class="plan premium">
      <h2>PLANO PREMIUM</h2>
      <p class="price">R$ 49,90/MÊS</p>
      <p class="description">GANHE 1 MÊS GRÁTIS AO ASSINAR 3 MESES CONSECUTIVOS!</p>
      <ul>
        <li>Liberdade para curtir filmes e séries sem interrupções por um ano inteiro</li>
        <li>Presenteie amigos e familiares com perfis adicionais (opcional)</li>
        <li>Cancelamento simples e fácil a qualquer momento após o período mínimo</li>
      </ul>
      <button onclick="openModal('premium')">ASSINAR</button>
    </div>
  </div>
</main>

    <!-- MODAL -->
    <div id="modal" class="modal">
      <div class="modal-content">
        <button class="close-btn" onclick="closeModal()">&times;</button>
        
        <h2 id="modal-title">PLANO BÁSICO</h2>
        
        <div class="modal-price">
          <span id="modal-price">R$ 19,90</span>
          <span class="modal-period">POR MÊS</span>
        </div>
        
        <ul id="modal-benefits" class="modal-benefits">
          <!-- Benefícios serão inseridos via JavaScript -->
        </ul>
        
        <div class="payment-section">
          <h3>FORMA DE PAGAMENTO:</h3>
          <div class="payment-icons">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard">
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg" alt="American Express">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png" alt="PayPal">
          </div>
        </div>
        
        <button class="confirm-btn" onclick="confirmarAssinatura()">CONFIRMAR ASSINATURA</button>
      </div>
    </div>

    <footer class="footer">
      <div class="footer-top">
        <img src="i${pageContext.request.contextPath}/assets/img/logo.png" alt="Logo Cinematch" class="footer-logo">
      </div>
    
      <div class="footer-links">
        <a href="#">ENVIE UM COMENTÁRIO</a>
        <a href="#">HELP</a>
        <a href="#">TERMOS DE PRIVACIDADE</a>
      </div>
    
      <div class="footer-info">
        <p>
          CineMatch Serviços de avaliações do Brasil Ltda. | CNPJ 00.000.000/0001-03
        </p>
        <p>
          <a href="#">Condições de Uso</a> |
          <a href="#">Notificação de Privacidade</a> |
          <a href="#">Cookies</a>
        </p>
        <p>© 2025 Cinematch.com</p>
      </div>
    </footer>

  <script>
    const plansData = {
      basico: {
        title: 'PLANO BÁSICO',
        price: 'R$ 19,90',
        id_plano: 1,
        benefits: [
          'Acesso a uma seleção limitada de títulos',
          'Acesso às recomendações personalizadas básicas',
          'Assista às recomendações personalizadas com interrupções ocasionais de anúncios curtos',
          'Cancele quando quiser'
        ]
      },
      familia: {
        title: 'PLANO FAMÍLIA',
        price: 'R$ 59,90',
        id_plano: 2,
        benefits: [
          'Recomendações personalizadas para cada membro da família',
          'Perfis separados para crianças, adolescentes e adultos',
          'Conteúdo exclusivo para famílias',
          '1 MÊS GRÁTIS para até 4 perfis',
          'Desconto de 25% na assinatura trimestral'
        ]
      },
      premium: {
        title: 'PLANO PREMIUM',
        price: 'R$ 49,90',
        id_plano: 3,
        benefits: [
          'Liberdade para curtir filmes e séries sem interrupções por um ano inteiro',
          'Presenteie amigos e familiares com perfis adicionais (opcional)',
          'Cancelamento simples e fácil a qualquer momento após o período mínimo',
          'GANHE 1 MÊS GRÁTIS ao assinar 3 meses consecutivos'
        ]
      }
    };

    let planoSelecionado = null;

    function openModal(planType) {
      const plan = plansData[planType];
      const modal = document.getElementById('modal');
      
      // Armazena o plano selecionado
      planoSelecionado = plan;
      
      // Atualiza o conteúdo do modal
      document.getElementById('modal-title').textContent = plan.title;
      document.getElementById('modal-price').textContent = plan.price;
      
      // Atualiza os benefícios
      const benefitsList = document.getElementById('modal-benefits');
      benefitsList.innerHTML = '';
      plan.benefits.forEach(benefit => {
        const li = document.createElement('li');
        li.textContent = benefit;
        benefitsList.appendChild(li);
      });
      
      // Mostra o modal
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden'; // Previne scroll da página
    }

    function closeModal() {
      const modal = document.getElementById('modal');
      modal.style.display = 'none';
      document.body.style.overflow = 'auto'; // Restaura scroll da página
      planoSelecionado = null;
    }

    function confirmarAssinatura() {
      if (!planoSelecionado) {
        alert('Erro: nenhum plano selecionado');
        return;
      }

      // Armazena o ID do plano na sessão usando sessionStorage
      sessionStorage.setItem('plano_selecionado', planoSelecionado.id_plano);
      
      // Redireciona para a página de criação de conta
      window.location.href = 'criarConta.htm';
    }

    // Fecha o modal ao clicar fora dele
    window.onclick = function(event) {
      const modal = document.getElementById('modal');
      if (event.target === modal) {
        closeModal();
      }
    }
  </script>
  
</body>
</html>