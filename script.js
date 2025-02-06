document.getElementById('whatsapp-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Previne o envio padrão do formulário

    const name = document.getElementById('name').value.trim();
    const region = document.getElementById('region').value;
    const message = document.getElementById('message').value.trim();

    // Números de WhatsApp para cada região (substitua pelos números reais)
    const contacts = {
      'bh': '5531991233078',         // Número para Belo Horizonte
      'grande-bh': '553197417966',  // Número para Grande BH
      'sete-lagoas': '5531971560648' // Número para Sete Lagoas
    };

    if (region && contacts[region]) {
      const phoneNumber = contacts[region];
      const fullMessage = `Olá, meu nome é ${name}. ${message}`;

      // Cria o link do WhatsApp com a mensagem formatada
      const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(fullMessage)}`;

      // Redireciona para o WhatsApp
      window.open(whatsappLink, '_blank');
    } else {
      alert('Por favor, selecione sua região.');
    }
  });



  document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".header");
    const navbar = document.querySelector(".navbar");
    const menuItems = document.querySelectorAll(".navbar a");
    let lastScrollY = window.scrollY;
    
    // Função para esconder/mostrar o menu ao rolar a página
    window.addEventListener("scroll", function () {
        if (window.scrollY > lastScrollY) {
            header.style.top = "-100px";
        } else {
            header.style.top = "0";
        }
        lastScrollY = window.scrollY;
    });

    // Fecha o menu ao clicar em um item
    menuItems.forEach(item => {
        item.addEventListener("click", function () {
            navbar.classList.remove("active");
        });
    });
    
    // Fecha o menu ao clicar fora dele
    document.addEventListener("click", function (e) {
        if (!navbar.contains(e.target) && !header.contains(e.target)) {
            navbar.classList.remove("active");
        }
    });

    // Responsividade
    const menuToggle = document.createElement("div");
    menuToggle.classList.add("menu-toggle");
    menuToggle.innerHTML = "&#9776;";
    header.appendChild(menuToggle);
    
    menuToggle.addEventListener("click", function () {
        navbar.classList.toggle("active");
    });
});

/* CSS para tornar o menu responsivo e alinhado corretamente */
const style = document.createElement("style");
style.innerHTML = `
    .header {
        
        width: 100%;
        top: 0;
        left: 0;
        background: #004aad;
        transition: top 0.3s;
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 20px;
    }
    
    .logo {
        display: flex;
        align-items: center;
    }

    .icons {
        display: flex;
        align-items: center;
        gap: 15px;
    }
    
    .menu-toggle {
        display: none;
        font-size: 30px;
        cursor: pointer;
        color: red;
    }
    
    @media (max-width: 768px) {
        main {
          top: -100px;
        }
        .navbar {
            display: none;
            position: absolute;
            top: 150px;
            right: 0;
            width: 100%;
            background: #004aad;
            flex-direction: column;
            text-align: end;
            gap:1.1rem;  
                  
        }
        header section {
          display: flex;
          justify-content: space-between;
          margin: 0;
          gap:2rem;         
        }
        .logo {
        margin-left: -20px;
        }
        .icons {
          margin-left: 30px;
        }
        .navbar.active {
            display: flex;
        }
        
        .menu-toggle {
            display: block;
            margin-left: auto;
        }

    }
`;
document.head.appendChild(style);
