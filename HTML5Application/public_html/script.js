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

function spawnEtoile(){
    
    var img =document.write('<img src="images/'+ Math.round((Math.random()*3)+1)+ '.png" id="img">'); 
    
     
}
function resetReponse() {
    window.location.reload();
}

function showScore(){
    
    
    
}

function round(){
    
    
    
}