/*
Name: Paula Quintero Celis
ID: 132202219
Date: 13 april 2022
*/

function begin() {
  let hidden = document.querySelector("#options-hiring");
  let showContactBtn = document.querySelector("#contact");

  showContactBtn.addEventListener("click", function () {
    window.open("#contactmeform", "_self");
  });

  hidden.addEventListener("click", hiddenOption);
}
window.onload = begin();

let form = document.querySelector("#contact-");
let submitButton = document.querySelector("#submit");
let resetButton = document.querySelector("#reset");

submitButton.onclick = (event) => {
  form.classList.add("was-validated");
};

resetButton.onclick = (event) => {
  form.classList.remove("was-validated");
};

form["postal-code"].oninput = (event) => {
  let postalCode = form["postal-code"].value;
  let r = /^[A-Za-z]\d[A-Za-z][\s-]?\d[A-Za-z]\d$/;
  if (r.test(postalCode)) form["postal-code"].setCustomValidity("");
  else
    form["postal-code"].setCustomValidity(
      "Fill this box with a Canadian postal code"
    );
};

function hiddenOption() {
  let salary1 = document.querySelector(".wage1");
  let salary2 = document.querySelector(".wage2");
  salary1.style.visibility = "visible";
  salary2.style.visibility = "visible";
}
