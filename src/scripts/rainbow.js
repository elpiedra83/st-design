const color_picker_1 = document.querySelector("#color1");
const color_picker_2 = document.querySelector("#color2");
const color_picker_3 = document.querySelector("#color3");
const color_picker_4 = document.querySelector("#color4");
const color_picker_5 = document.querySelector("#color5");
const color_picker_6 = document.querySelector("#color6");
const color_picker_7 = document.querySelector("#color7");
const boxShadow = "0px 0px 1.5vw";

function updateColor(picker, selector) {
  document.querySelector(selector).style.borderColor = picker;
  document.querySelector(selector).style.boxShadow = `${boxShadow} ${picker}`;
}
// triggers 'onInput' and 'onChange' on all color pickers when they are ready
// jscolor.trigger("input change");

function reset() {
  document.querySelector("input[name='rainbow-color-number']").checked = true;
}

function setRainbow(numberOfColors) {
  let ul = document.querySelector("#rainbowBase");
  color_picker_6.style.display = "none";
  color_picker_7.style.display = "none";
  ul.innerHTML = "";
  for (let i = 1; i <= numberOfColors; i++) {
    let li = document.createElement("li");
    let color = "";
    switch (i) {
      case 1:
        li.setAttribute("id", "firstColor");
        color = color_picker_1.dataset.currentColor;
        li.style.borderColor = color;
        li.style.boxShadow = boxShadow + color;
        break;
      case 2:
        li.setAttribute("id", "secondColor");
        color = color_picker_2.dataset.currentColor;
        li.style.borderColor = color;
        li.style.boxShadow = boxShadow + color;
        break;
      case 3:
        li.setAttribute("id", "thirdColor");
        color = color_picker_3.dataset.currentColor;
        li.style.borderColor = color;
        li.style.boxShadow = boxShadow + color;
        break;
      case 4:
        li.setAttribute("id", "fourthColor");
        color = color_picker_4.dataset.currentColor;
        li.style.borderColor = color;
        li.style.boxShadow = boxShadow + color;
        break;
      case 5:
        li.setAttribute("id", "fifthColor");
        color = color_picker_5.dataset.currentColor;
        li.style.borderColor = color;
        li.style.boxShadow = boxShadow + color;
        break;
      case 6:
        li.setAttribute("id", "sixthColor");
        color = color_picker_6.dataset.currentColor;
        li.style.borderColor = color;
        li.style.boxShadow = boxShadow + color;
        color_picker_6.style.display = "block";
        break;
      case 7:
        li.setAttribute("id", "seventhColor");
        color = color_picker_7.dataset.currentColor;
        li.style.borderColor = color;
        li.style.boxShadow = boxShadow + color;
        color_picker_7.style.display = "block";
        break;
    }
    ul.append(li);
  }
}
document
  .querySelectorAll("input[name='rainbow-color-number']")
  .forEach((input) => {
    input.addEventListener("change", (e) => {
      setRainbow(e.target.value);
    });
  });
