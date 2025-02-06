document.getElementById('whatsapp-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Previne o envio padrão do formulário

    const name = document.getElementById('name').value.trim();
    const region = document.getElementById('region').value;
    const message = document.getElementById('message').value.trim();

    // Números de WhatsApp para cada região (substitua pelos números reais)
    const contacts = {
      'bh': '5531991233078',         // Número para Belo Horizonte
      'grande-bh': '553197417966',  // Número para Grande BH
      'sete-lagoas': '5531988630036' // Número para Sete Lagoas
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