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
var img = new Image();
img.onload = function(){
context.drawImage(img,0,0,300,150);    
};
img.src = "images/bg.jpg";

var spawnZone = canvas.style.height;

var etoiles = [];


var stageWidth = 300;
var stageHeight = 150;
var starWidth = 10;
var starHeight = 15;

var stars = [];


function spawnEtoile(){
    
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