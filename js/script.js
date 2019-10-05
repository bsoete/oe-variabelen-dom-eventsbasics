"use strict";
window.addEventListener('load', Initieer);

// Globale Variabelen
let txtId,txtNaam,txtCssSelector,divFeedback;

// StartUP
function Initieer() {
  // Lokale variabelen
  let btnVerbergElementMetID, btnVerbergElementMetSelector;
  // Inlezen DOM-elementen
  btnVerbergElementMetID = document.querySelector('#btnVerbergElementMetId');
  btnVerbergElementMetSelector = document.querySelector('#btnVerbergElementMetSelector');
  divFeedback = document.querySelector('#divFeedback');
  txtNaam = document.querySelector('#txtNaam');
  txtId = document.querySelector('#txtId');
  txtCssSelector = document.querySelector('#txtCssSelector');
  // Toevoegen Event-Listeners
  btnVerbergElementMetID.addEventListener('click',ToonVerbergElementViaId);
  btnVerbergElementMetSelector.addEventListener('click',ToonVerbergElementViaSelector);
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
  let Naam, gekozenSelector, gekozenElement;
  Naam = txtNaam.value;
  gekozenSelector = txtCssSelector.value;
  gekozenElement = document.querySelector(gekozenSelector);

  if(gekozenElement.style.display == ''){
    gekozenElement.style.display = 'none';
  } 
  else if(gekozenElement.style.display == 'none'){
    gekozenElement.style.display = 'inline';
  }
  else if(gekozenElement.style.display == 'inline'){
    gekozenElement.style.display = 'none';
  }
  
  divFeedback.innerHTML += `${Naam} heeft id ${gekozenSelector} gewijzigd <br/>`;
}


