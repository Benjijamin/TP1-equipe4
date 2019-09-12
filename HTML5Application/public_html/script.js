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

var etoiles = new Array();
etoiles[0] = new Image();
etoiles[0].src = 'images/1.png';
etoiles[1] = new Image();
etoiles[1].src = 'images/2.png';
etoiles[2] = new Image();
etoiles[2].src = 'images/3.png';
etoiles[3] = new Image();
etoiles[3].src = 'images/4.png';
 


var stageWidth = 300;
var stageHeight = 150;
var starWidth = 10;
var starHeight = 15;


function spawnEtoile(){
    
  // console.log('ben');
   
    var randomXPosition = Math.floor(Math.random() * (stageWidth - starWidth)) + 1;
    var randomYPosition = Math.floor(Math.random() * (stageHeight - starHeight)) + 1;
     
     var newStar = {
        xPosition: randomXPosition,
        yPosition: randomYPosition
    };
    
    etoiles.push(newStar);

}
function resetReponse() {
    window.location.reload();
}

function showScore(){
    
    
    
}

function round(){
    
    
    
}