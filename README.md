oe-variabelen-dom-eventbasics
# Herhaling variabelen/DOM-elementen en Events Basics
## Werking
### Opstarten
* In txtId wordt de tekst 'txtNaam' ingevuld
* In txtCssSelector wordt de tekst 'label' ingevuld
* Bij een klik op 'btnVerbergElementMetId' wordt de function 'ToonVerbergElementViaId' uitgevoerd
* Bij een klik op 'btnVerbergElementMetSelector' wordt de function 'ToonVerbergElementViaSelector' uitgevoerd
### functie ToonVerbergElementViaId()
Via de input in gekozenId wordt afhankelijk van de zichtbaarheid van het element met het ingetikte id:
* indien zichtbaar: 
  * element wordt verborgen
  * in divFeedback verschijnt de tekst: 'Je hebt het volgende element verborgen: ' gevolgd door het verborgen element
  * de tekst in btnVerbergElementMetId wordt veranderd in 'Toon element met id'
* indien verborgen:
  * element wordt terug zichtbaar
  * in divFeedback verschijnt de tekst: 'Daar is ie weer: ' gevolgd door het zichtbaar gemaakte element
  * de tekst in btnVerbergElementMetId wordt veranderd in 'Verberg element met id'
### functie ToonVerbergElementViaSelector()
* Programmeer dezelfde functionaliteiten voor btnVerbergElementMetSelector via de input in txtCssSelector. 
* Hier wordt het te verbergen/tonen element via de css-selector geselecteerd.
> ### Info
>  * Denk na over de declaratie, invulling en scope van de variabelen
>  * Waar kun je eventueel constants gebruiken?
