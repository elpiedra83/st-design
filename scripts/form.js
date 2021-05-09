let contactForm = document.getElementById("contact-form");
let orderForm = document.getElementById("order-form");

async function handleContactSubmit(event) {
  event.preventDefault();
  let status = document.getElementById("contact-form-status");
  let data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      status.innerHTML = "Muchas gracias por escribirnos!";
      form.reset();
    })
    .catch((error) => {
      status.innerHTML = "Oops! Encontramos un problema al enviar tu consulta.";
    });
}
contactForm.addEventListener("submit", handleContactSubmit);
