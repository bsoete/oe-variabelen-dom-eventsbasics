"use strict";
window.addEventListener('load', Initieer);

// Globale Variabelen
let txtId,txtNaam,divFeedback;

// StartUP
function Initieer() {
  // Lokale variabelen
  let btnVerbergElementMetID;
  // Inlezen DOM-elementen
  btnVerbergElementMetID = document.querySelector('#btnVerbergElementMetId');
  divFeedback = document.querySelector('#divFeedback');
  txtNaam = document.querySelector('#txtNaam');
  txtId = document.querySelector('#txtId');
  // Toevoegen Event-Listeners
  btnVerbergElementMetID.addEventListener('click',ToonVerbergElementViaId);

  // Toevoegen van de laad-invulvelden
  txtNaam.value = 'Bart';
  txtId.value = 'txtNaam';
  divFeedback.style.color = 'red';
}

function ToonVerbergElementViaId() {
  let Naam, gekozenId;
  Naam = txtNaam.value;
  gekozenId = txtId.value;

  divFeedback.innerHTML += `${Naam} heeft id ${gekozenId} gekozen`;
}

function ToonVerbergElementViaSelector() {

}


