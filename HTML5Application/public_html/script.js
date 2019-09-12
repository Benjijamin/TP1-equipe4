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

var images = new Array();
image1 = new Image();
image1.onload = function() {
    images[0] = createImageBitmap(image1)
}
image1.src = 'images/1.png';

image2 = new Image();
image2.onload = function() {
    images[1] = createImageBitmap(image2)
}
image2.src = 'images/2.png';

image3 = new Image();
image3.onload = function() {
    images[2] = createImageBitmap(image3)
}
image3.src = 'images/3.png';

image4 = new Image();
image4.onload = function() {
    images[3] = createImageBitmap(image4)
}
image4.src = 'images/4.png';

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
    context.drawImage(images[Math.random()*4],0,0)
}
function resetReponse() {
    window.location.reload();
}

function showScore(){
    
    
    
}

function round(){
    
    
    
}
