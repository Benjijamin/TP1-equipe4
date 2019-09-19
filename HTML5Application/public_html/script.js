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
/* global transition */

var stars = new Array();

var scene = new Array();
// toutes les positions dans la scene et sont-ils vides(z)?
scene[0] = {x:710,y:710,z:0};
for(i = 0; i < 8; i++){
    for(j = 0; j < 8; j++){
        scene.push({x:100 * i + 10,y:100 * j + 10,z:0});
    }    
};

var score = 0;
var rep = document.getElementById("q");


var images = new Array();
images[0] = "images/1.png";
images[1] = "images/2.png";
images[2] = "images/3.png";
images[3] = "images/4.png";

var stars = new Array();
showScore();

function spawnEtoile(){
    //reset les class pour chaque etoile
    if(stars !== null){
        for (i = 0; i<stars.length; i++ ){
            stars[i].classList = "etoiles";
        }
    }
    
    var etoile = document.createElement("img");
  
    //prends une image au hasard
    etoile.src = images[Math.floor(Math.random()*4)]; 
    //identifie l'etoile comme la derniere creee
    etoile.classList = "etoiles gg";
    
    
    //position random dans la scene, pas a cote d'une autre etoile
    var n = Math.floor(Math.random()*64);
   
    
    while(scene[n].z === 1)
    {
    n = Math.floor(Math.random()*64);
    };
  
    var pos = scene[n];
     var top = pos.y;
    var left = pos.x;
    scene[n].z = 1;
    
    etoile.style.top = top+'px';
    etoile.style.left = left+'px';
    
    
    
    
    stars.push(etoile);
    document.body.appendChild(etoile);
}

function resetReponse() {
    window.location.reload();
}

function showScore(){   
 rep.style.color="white";
 rep.innerHTML = "Votre scOre est : " + score; 
}

function clicEtoile() {
    var x = document.getElementById('xyz');
    x.style.animation = 'none';
    //update l'element pour restarter l'animation
    x.offsetHeight;
    x.style.animation = null;

}