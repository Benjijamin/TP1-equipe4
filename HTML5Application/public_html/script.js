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


//objet scene sert a determiner les positions des etoiles dans l'ecran et si ils sont deja occupes
class Scene 
{
    tab;

    constructor(h, l) 
    {
        this.tab = new Array();
        this.build(h, l);
    }

    build(h, l) 
    {
        for (this.i = 0; this.i < h; this.i++) 
        {
            for (this.j = 0; this.j < l; this.j++) 
            {
                this.tab.push({x: 100 * this.j + 10, y: 100 * this.i + 10, z: 0});
            }
        }
        ;
        this.tab[0] = {x: l * 100 - 90, y: h * 100 - 90, z: 0};
    }
}

var level = 1;
const sc = document.getElementById("score");
const blackout = document.getElementById('blackout');
var scene = new Scene(8, 8);

var images = new Array();
images[0] = "images/1.png";
images[1] = "images/2.png";
images[2] = "images/3.png";
images[3] = "images/4.png";
images[4] = "images/5.png";
images[5] = "images/6.png";

var score = 0;
var stars = new Array();


showScore();
spawnEtoile();

function spawnEtoile() 
{
    //reset les class pour chaque etoile
    if (stars !== null) 
    {
        for (i = 0; i < stars.length; i++) 
        {
            stars[i].classList = "etoiles";
            stars[i].id = i;
        }
    }

    var etoile = document.createElement("img");

    //prends une image au hasard
    etoile.src = images[Math.floor(Math.random() * 6)];
    //identifie l'etoile comme la derniere creee
    etoile.classList = "etoiles last";
    etoile.id = stars.length ;
    etoile.setAttribute("onClick", "clicEtoile(this)");


    //position random dans la scene, pas a cote d'une autre etoile
    var n = Math.floor(Math.random() * 64);
    while (scene.tab[n].z === 1)
    {
        n = Math.floor(Math.random() * 64);
    }
    scene.tab[n].z = 1;
    var pos = scene.tab[n];
    var top = pos.y;
    var left = pos.x;
    etoile.style.top = top + 'px';
    etoile.style.left = left + 'px';

    //level 2
    if(level === 2){
        let rand = Math.floor(Math.random()* stars.length);
        document.getElementById(rand).remove();
        stars.splice(rand,1);
    }
    
    stars.push(etoile);
    
    
    document.body.appendChild(etoile);
    
    //si par miracle quelqu'un se rends jusqu'a la fin
    if (stars.length === 64) 
    {
        alert("good job ben");
    }
    
    //check level
    if (stars.length >= 10){
        level = 2;
    }
    
    if (stars.length >= 20){
        level = 3;
    }
}

function resetReponse() 
{
    window.location.reload();
}

function showScore() 
{
    sc.style.color = "white";
    sc.innerHTML = "Votre score est : " + score;
}

function clicEtoile(element) 
{
    //failcheck
    if (element.className !== "etoiles last") 
    {
        alert("Vous avez Perdu");
        resetReponse();
    }


    blackOut();
    spawnEtoile();
    score++;
    showScore();
}

function sleep(time){
    return new Promise(resolve => setTimeout(resolve, time));
}

function blackOut() 
{
    blackout.style.animation = 'none';
    //update l'element pour restarter l'animation
    blackout.offsetHeight;
    blackout.style.animation = null;
    blackout.style.zIndex = "0";
    
}
