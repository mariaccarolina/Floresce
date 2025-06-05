document
  .getElementById("form-pedido")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // impede o envio padrão

    // Captura os valores dos campos
    const nome = document.querySelector('input[name="nome"]').value;
    const whats = document.querySelector('input[name="whats"]').value;
    const kit = document.querySelector('input[name="kit"]').value;
    const horario = document.querySelector('input[name="horario"]').value;
    const destinatario = document.querySelector(
      'input[name="destinatario"]'
    ).value;
    const mensagem = document.querySelector('textarea[name="mensagem"]').value;

    // Monta o texto da mensagem
    const texto = `Olá! Quero fazer um pedido com os seguintes dados:
    
👤 Nome: ${nome}
📱 WhatsApp: ${whats}
🎁 Kit escolhido: ${kit}
⏰ Horário da retirada: ${horario || "Não informado"}
📦 Destinatário: ${destinatario}
💌 Mensagem para o cartão: ${mensagem || "Sem mensagem"}`;

    // Codifica o texto para usar na URL
    const textoCodificado = encodeURIComponent(texto);

    // Número do WhatsApp do dono do site
    const numero = "5581975051500";

    // Redireciona para o link do WhatsApp com a mensagem
    window.open(`https://wa.me/${numero}?text=${textoCodificado}`, "_blank");
  });
