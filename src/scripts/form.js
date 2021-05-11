let contactForm = document.getElementById("contact-form");

async function handleContactSubmit(event) {
  event.preventDefault();
  let status = document.getElementById("contact-form-status");
  let data = new FormData(event.target);
  fetch(event.target.action, {
    method: contactForm.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      status.innerHTML = "Muchas gracias por escribirnos!";
      contactForm.reset();
    })
    .catch((error) => {
      status.innerHTML = "Oops! Encontramos un problema al enviar tu consulta.";
    });
}
contactForm.addEventListener("submit", handleContactSubmit);

let orderForm = document.getElementById("order-form");
async function handleOrderSubmit(event) {
  event.preventDefault();
  let status = document.getElementById("order-form-status");
  let data = new FormData(event.target);
  fetch(event.target.action, {
    method: orderForm.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      status.innerHTML = "Pedido confirmado!";
      orderForm.reset();
    })
    .catch((error) => {
      status.innerHTML = "Oops! Encontramos un problema al enviar tu pedido.";
    });
}
orderForm.addEventListener("submit", handleOrderSubmit);
