// Get the modal
let modal = document.getElementById("Modal");
// Get the button that opens the modal
let btn = document.getElementById("order");
// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
  buildForm();
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

const buildForm = () => {
  const form = document.querySelector("#order-form");
  form.innerHTML = "";

  const h3 = document.createElement("h2");
  h3.innerText = "Información del pedido";
  form.append(h3);

  const numberOfColors = document.createElement("span");
  const numberOfRainbows = document.querySelector(
    "input[name='rainbow-color-number']:checked"
  );
  numberOfColors.setAttribute("id", "colorsCount");
  numberOfColors.setAttribute("name", "cantidad");
  numberOfColors.innerHTML =
    "Usted seleccionó <strong>" + numberOfRainbows.value + "</strong> colores";
  form.append(numberOfColors);

  let div = document.createElement("div");
  div.setAttribute("class", "colors__wrapper");
  const color_selected_1 = document.createElement("input");
  color_selected_1.setAttribute("type", "text");
  color_selected_1.setAttribute("class", "color-picker-wrapper");
  const color_picker_1 = document.querySelector("#color1");
  color_selected_1.style.backgroundColor = color_picker_1.value;
  color_selected_1.setAttribute("name", `color_1:${color_picker_1.value}`);
  div.append(color_selected_1);
  const color_selected_2 = document.createElement("input");
  color_selected_2.setAttribute("type", "text");
  color_selected_2.setAttribute("class", "color-picker-wrapper");
  color_selected_2.setAttribute("name", "color_2");
  const color_picker_2 = document.querySelector("#color2");
  color_selected_2.style.backgroundColor = color_picker_2.value;
  color_selected_2.setAttribute("name", `color_2:${color_picker_2.value}`);
  div.append(color_selected_2);
  const color_selected_3 = document.createElement("input");
  color_selected_3.setAttribute("type", "text");
  color_selected_3.setAttribute("class", "color-picker-wrapper");
  color_selected_3.setAttribute("name", "color_3");
  const color_picker_3 = document.querySelector("#color3");
  color_selected_3.style.backgroundColor = color_picker_3.value;
  color_selected_3.setAttribute("name", `color_3:${color_picker_3.value}`);
  div.append(color_selected_3);
  const color_selected_4 = document.createElement("input");
  color_selected_4.setAttribute("type", "text");
  color_selected_4.setAttribute("class", "color-picker-wrapper");
  color_selected_4.setAttribute("name", "color_4");
  const color_picker_4 = document.querySelector("#color4");
  color_selected_4.style.backgroundColor = color_picker_4.value;
  color_selected_4.setAttribute("name", `color_4:${color_picker_4.value}`);
  div.append(color_selected_4);
  const color_selected_5 = document.createElement("input");
  color_selected_5.setAttribute("type", "text");
  color_selected_5.setAttribute("class", "color-picker-wrapper");
  color_selected_5.setAttribute("name", "color_5");
  const color_picker_5 = document.querySelector("#color5");
  color_selected_5.style.backgroundColor = color_picker_5.value;
  color_selected_5.setAttribute("name", `color_5:${color_picker_5.value}`);
  div.append(color_selected_5);
  if (numberOfRainbows.value >= 6) {
    const color_selected_6 = document.createElement("input");
    color_selected_6.setAttribute("type", "text");
    color_selected_6.setAttribute("class", "color-picker-wrapper");
    color_selected_6.setAttribute("name", "color_6");
    const color_picker_6 = document.querySelector("#color6");
    color_selected_6.style.backgroundColor = color_picker_6.value;
    color_selected_6.setAttribute("name", `color_6:${color_picker_6.value}`);
    div.append(color_selected_6);
    if (numberOfRainbows.value == 7) {
      const color_selected_7 = document.createElement("input");
      color_selected_7.setAttribute("type", "text");
      color_selected_7.setAttribute("class", "color-picker-wrapper");
      color_selected_7.setAttribute("name", "color_7");
      const color_picker_7 = document.querySelector("#color7");
      color_selected_7.style.backgroundColor = color_picker_7.value;
      color_selected_7.setAttribute("name", `color_7:${color_picker_7.value}`);
      div.append(color_selected_7);
    }
  }
  // p.append(div);
  form.append(div);
  //FORM ORDER INI

  //NOMBRE ARCOIRIS
  let label = document.createElement("span");
  label.setAttribute("for", "rainbowName");
  label.innerText = "Nombre en el arcoiris";
  form.append(label);
  let input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("id", "rainbowName");
  input.setAttribute("name", "nombre");
  input.setAttribute("placeholder", "ingrese nombre para el arcoiris");
  input.required = true;
  form.append(input);
  //NOMBRE CONTACTO
  label = document.createElement("span");
  label.setAttribute("for", "contactName");
  label.innerText = "Nombre contacto";
  form.append(label);
  input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("id", "contactName");
  input.setAttribute("name", "contacto");
  input.setAttribute("placeholder", "ingrese su nombre");
  input.required = true;
  form.append(input);
  //CELULAR
  label = document.createElement("span");
  label.setAttribute("for", "contactPhone");
  label.innerText = "Celular contacto";
  form.append(label);
  input = document.createElement("input");
  input.setAttribute("type", "number");
  input.setAttribute("id", "contactPhone");
  input.setAttribute("name", "celular");
  input.setAttribute("placeholder", "ingrese su celular");
  input.required = true;
  form.append(input);
  //EMAIL
  label = document.createElement("span");
  label.setAttribute("for", "contactEmail");
  label.innerText = "Correo contacto";
  form.append(label);
  input = document.createElement("input");
  input.setAttribute("type", "email");
  input.setAttribute("id", "contactEmail");
  input.setAttribute("name", "email");
  input.setAttribute("placeholder", "ingrese su correo");
  input.required = true;
  form.append(input);

  //FORM ORDER FIN

  label = document.createElement("span");
  form.append(label);
  p = document.createElement("p");
  p.setAttribute("name", "precio");
  p.setAttribute("id", "price");
  let price = calcRainbowPrice(numberOfRainbows.value);
  p.innerText = `$ ${price}`;
  form.append(p);

  const button = document.createElement("button");
  button.setAttribute("id", "modal-form-button");
  button.setAttribute("class", "btn");
  button.innerText = "Pedir";
  form.append(button);

  p = document.createElement("p");
  p.setAttribute("id", "order-form-status");
  form.append(p);
};

const calcRainbowPrice = (rainbowColors) => {
  const unitPrice = 850;
  if (rainbowColors == 6) return unitPrice + 100;
  if (rainbowColors == 7) return unitPrice + 250;
  return unitPrice;
};
