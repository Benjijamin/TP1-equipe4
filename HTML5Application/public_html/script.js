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
context.drawImage(img,0,0,900,600);    
};
img.src = "images/bg.jpg";

var spawnZone = canvas.style.height;

var images = new Array();
images[0] = document.getElementById("i1");
images[1] = document.getElementById("i2");
images[2] = document.getElementById("i3");
images[3] = document.getElementById("i4");

var stars = new Array();

function spawnEtoile(){
    
  // console.log('ben');
   
    var randomXPosition = Math.floor(Math.random() * (canvas.style.width - 100)) + 1;
    var randomYPosition = Math.floor(Math.random() * (canvas.style.height - 94)) + 1;
     
     var newStar = {
        xPosition: randomXPosition,
        yPosition: randomYPosition
    };
    
    stars.push(newStar);
    context.drawImage(images[3],0,0);
}
function resetReponse() {
    window.location.reload();
}

function showScore(){
    
    
    
}

function round(){
    
    
    
}
