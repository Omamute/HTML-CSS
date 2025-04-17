// Mensagem de boas-vindas ao usuário
window.addEventListener('load', function () {
    alert("Bem-vindo à Imobiliária GCF!");
  });
  
  // Rolagem suave ao clicar nos links do menu
  document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const destino = document.querySelector(this.getAttribute('href'));
      if (destino) {
        destino.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // Exemplo de filtro de imóveis por tipo (quando quiser usar)
  /*
  HTML sugerido para os botões:
  <button onclick="filtrarImoveis('casa')">Casas</button>
  <button onclick="filtrarImoveis('apartamento')">Apartamentos</button>
  <button onclick="filtrarImoveis('todos')">Todos</button>
  
  Cada imóvel teria uma classe, tipo:
  <div class="card-imovel casa">...</div>
  */
  
  function filtrarImoveis(tipo) {
    const imoveis = document.querySelectorAll('.card-imovel');
    imoveis.forEach(imovel => {
      if (tipo === 'todos' || imovel.classList.contains(tipo)) {
        imovel.style.display = 'block';
      } else {
        imovel.style.display = 'none';
      }
    });
  }
  
  // Código para menu responsivo (caso futuramente adicione hambúrguer)
  function toggleMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('ativo');
  }
  