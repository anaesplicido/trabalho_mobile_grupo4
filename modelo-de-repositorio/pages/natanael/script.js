// Botão Voltar ao Topo
const backToTopButton = document.getElementById('back-to-top');

// Mostrar/Ocultar botão baseado na rolagem
window.addEventListener('scroll', function() {
  if (window.pageYOffset > 300) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

// Rolagem suave ao clicar no botão
backToTopButton.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Destacar link ativo na navbar
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
window.addEventListener('scroll', function() {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});

// Adicionar evento de clique suave para links da navbar
document.querySelectorAll('.navbar-nav .nav-link').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    if (this.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        // Atualiza a URL sem recarregar (SPA)
history.pushState(null, null, targetId);
// Garante que o link ativo seja destacado
updateActiveLink();
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: 'smooth'
        });
      }
    }
  });
});
// Corrige a navegação quando a página é carregada com hash (ex: site.com/#turismo)
window.addEventListener('load', () => {
  if (window.location.hash) {
    const targetElement = document.querySelector(window.location.hash);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: 'auto'
      });
    }
  }
});

// Corrige o botão voltar/avançar do navegador
window.addEventListener('hashchange', () => {
  if (window.location.hash) {
    const targetElement = document.querySelector(window.location.hash);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  }
});