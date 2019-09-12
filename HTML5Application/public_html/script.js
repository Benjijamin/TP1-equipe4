/* 
 *Yo voici les règles
 *clicker sur la nouvelle étoile qui est apparu
 *si vous clickez sur la mauvaise vous perdez lol
 *vous allez gagner des point en fonction du niveau que vous etes
 *Bonne chance!! :) <><
 *
 *Structure / objet : un tableau d'étoiles
 *
 *cas de test : 
 *test si l'utilisateur fait une erreur
 *test bonne réponse
 *test refresh page
 *test score
 *test score mid game
 *test si bonne transition entre level
 *test si y click sur autre qu'un etoile
 *test transition fin
 *test fonctionnement des boutons
 */

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");



var spawnZone = canvas.style.height;

var etoiles = [];
spawnEtoile();


var stageWidth = 300;
var stageHeight = 150;
var starWidth = 10;
var starHeight = 15;

var stars = [];


function spawnEtoile(){
    var length = 10;
    context.translate(15,20);
    context.rotate((Math.PI * 1 / 10));
    for (var i = 5; i--;) {
    context.lineTo(0, length);
    // move origin to current same location as pen
    context.translate(0, length);
    // rotate the drawing board
    context.rotate((Math.PI * 2 / 10));
    // draw line down
    context.lineTo(0, -length);
    // again, move origin to pen...
    context.translate(0, -length);
    // ...and rotate, ready for next arm
    context.rotate(-(Math.PI * 6 / 10));
    }
    context.lineTo(0, length);
    context.closePath();
// stroke the path, you could also .fill()
    context.stroke();
    
  // console.log('ben');
   
    var randomXPosition = Math.floor(Math.random() * (stageWidth - starWidth)) + 1;
    var randomYPosition = Math.floor(Math.random() * (stageHeight - starHeight)) + 1;
     
     var newStar = {
        xPosition: randomXPosition,
        yPosition: randomYPosition
    };
    
    stars.push(newStar);

}
function resetReponse() {
    window.location.reload();
}

function showScore(){
    
    
    
}

function round(){
    
    
    
}