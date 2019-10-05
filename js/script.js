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
  let Naam, gekozenId, gekozenElement;
  Naam = txtNaam.value;
  gekozenId = txtId.value;

  gekozenElement = document.getElementById(gekozenId);
    
  if(gekozenElement.style.display == ''){
    gekozenElement.style.display = 'none';
  } 
  else if(gekozenElement.style.display == 'none'){
    gekozenElement.style.display = 'inline';
  }
  else if(gekozenElement.style.display == 'inline'){
    gekozenElement.style.display = 'none';
  }
  
  divFeedback.innerHTML += `${Naam} heeft id ${gekozenId} gewijzigd <br/>`;
}

function ToonVerbergElementViaSelector() {

}


