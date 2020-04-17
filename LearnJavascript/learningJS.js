'use strict' // Important Ce truc !!!
function alertTest(){
    alert("Ceci est afficher en Javascript");
}
function variables(){
    var x = 25;

    x = x + 5;
    var x = 100;

    var prenom = "Jojo" , nom = 'LaDouille', dpt = 06;
    
    var age;
    age = 25;

    var ville = "";
    ville = "Nice";

    var homme = true;
}

function typeVaraibles(){
    var x = 25;
    var xprime = "25";
    var y = -75;
    var z = 3.14;

    var prenom = "Jojo";
    var nom = "LaDOuille";
    var sexe = "Je suis un homme";

    var dpt = "Je vis dans le \"83\"";
    var dpt2 =  'Je vis dans le "83"';

    var ville = 'J\'habite à Toulon';
    var ville2 = "J'habite à Toulon";

    var a = true, b = false;
    var c = "true";

    var n = null;
    var u = undefined;
    var nn = NaN;   // Valeur n'est pas un nombre //

    x = "quatre";

    // Pour tester le type d'une variable on utilise typeof()
    // \n : Retour a la ligne
    alert   ("Variable x :  " + typeof(x) + 
            "\nVariable y : " + typeof(y) +
            "\nVariable a : " + typeof(a) +
            "\nVariable n : " + typeof(n) +
            "\nVariable u : " + typeof(u) +
            "\nVariable nn :" + typeof(nn ));
}

function operationVar(){
    var x = 5, y = 10, z = -2;

    x += 1; // 6
    x -= 2; // 4
    y *= 2; // 20

    var mult = x * y; // 4 * 20 = 80
    var divi = y / z; // 20 / -2 = -10

    // Modulo le reste de la division d'un nombre par un nombre //
    var mod = 13 % 3; // = 1
    var priorite =  x + y / ( 4 + z ) % 3; // = 7
    
    alert   ("Variable muli  : " + mult +
            "\nVariable divi : " + divi +
            "\nVariable mod  : " + mod  );

    y /= 2;
    y %= x;
}

function concatenation(){
    var prenom = 'Jojo', espace = ' ', nom = 'LaDOuille';
    var moi = prenom + espace + nom;
    var toi = 'Victor' + ' ' +'Durand';

    var sport = 'courir';
    var hobbie = "J'aime " + sport;
    alert("Contenu de la variable moi : " + moi +
            "\nContenu de la variable toi : " + toi +
            "\nContenu de la variable hobbie : " + hobbie);

    var x = 4 + 2 + "1";
    var y = "1" + 2 + 4;
    var z = 2 + "un" + 4;
    alert("Variable x :" + x + 
            "\nVariable y : " + y + 
            "\nVariable z :" + z );
}

function condition(){
    var x = 7, y = 14;
    var vrai = x < y; // true
    var faux = 14 <= 7; //false

    var egalval = 4 == "4"; //true
    var egalvaltype = 4 === "4"; //false

    var difval = 4 != "4"; //false
    var difvaltype = 4 !== "4"; //true
    alert("Vrai stocke : " + vrai + 
        "\nFaux stocke : " + faux + 
        "\negalVal stock : " + egalval + 
        "\negalvaltype stocke : " + egalvaltype + 
        "\ndifval stocke : " + difval + 
        "\ndifvaltype stocke : " + difvaltype);
}
function condition1(){
    var heure = 15;
    if(heure <= 18){
        alert("True");
    }else{
        alert("False");
    }
}

function operateurLogique(){
    var heure = 9;
    if(heure >= 0 && heure < 12){
        alert("C'est le matin");
    }else if(heure === 12){
        alert("il est midi pile");
    }else if(heure > 12 && heure <= 24){
        alert("C'est l'aprem midi ou le soir");
    }else{
        alert("La valeur entrée ne semble pas valide");
    }

    if(heure < 0 || heure > 24){
        alert("L'heure est invalide");
    }else{
        alert("L'heure semble valide");
    }

    if(!(heure <= 16)){     // Si on obtient true sa donne false  // !(true) = false
        alert("Il est plus de 16h");
    }else{
        alert("Il est moin de 16h");
    }
}

function structureTernaire(){
    var heure = 19, bon = "";
    // Tres utile 
    // Test = (si heure <= 18) si bon "Bonjour" sinon "bonsoir";
    bon = (heure <= 18) ? "Bonjour" : "Bonsoir";
}

function switchLearn(){
    var heure = 10;
    switch(heure){
        case 8 : alert("Il est 8h");break;
        case 9 : alert("Il est 9h");break;
        case 10 : alert("Il est 10h");break;
        default : alert("Pas d'heure"); break;
    }
}

function objet(){
    var primitive = "Je suis une valeur primitive";
    // Objet JS // 
    var moi = {
        prenom : "Jojo",
        nom : "Di",
        age : 18, 
        identite : function(){
            return 'Prenom :' + this.prenom + 
                "\nNom : " + this.nom + 
                "\nAge : " + this.age;
        }};
    alert(moi.identite());
}

function vMoN(){
    // String //
    var primitive = "Je suis une valeur primitive";
    var type_prim = typeof(primitive);
    var longueur_prim = primitive.length;
    var paj_prim = primitive.toUpperCase();

    // Objet //
    var chaine = new String("Je suis un objet");
    var type_chaine = typeof(chaine);
}

function createObjet(){
    // Objet moyen conseiller //
    var chaine = new String("Je suis un objet");

    // Objet moyen conseiller //
    var moi = {
        prenom : "Jojo",
        nom : "Di",
        age : 18, 
        id : function(){
            return this.prenom + ' ' + this.nom;
        }
    };
    alert(moi.id());
    // -> Suite function Identite -> 
}
// Objet Tres Conseiller
function Identite(prenom, nom, age){
    this.prenom = prenom;
    this.nom = nom;
    this.age = age;
}
// Utilise Identite(prenom, nom, age) //
function useIdentite(){
    var jojo = new Identite("Jojo", "DUDU", 18);
    var victor = new Identite("aa","aab", 100);
    victor.prenom = "Jojo du 06";
    alert("Prenom de jojo : " + jojo.prenom +
            "\nPrenom de victor : " + victor.prenom);
}


function methodeString(){
    var texte = "J'apprend le JS ";
    var texteMin = texte.toLowerCase();
    var texteMax = texte.toUpperCase();
    alert("Texte de base : " + texte + 
        "\nTexteMin : " + texteMin + 
        "\nTexteMax : " + texteMax);

    // Récupere le premier caractére // Commence a 0 //
    var pos0 = texte.charAt(0);
    var pos3 = texte.charAt(3);
    var pos11 = texte.charAt(11);

    // Recupere la position du caractére qui ne sont pas en majuscule //
    // ...indexOf('<nomVar>', <debutRecherche>)
    var premiere = texte.indexOf('p',0);
    var derniere = texte.lastIndexOf('p',0);
    var sequence = texte.indexOf('le',0);

    // Remplace 
    alert(texte.replace("JS", "PHP"));
    // Du Debut
    alert(texte.slice(0, 10));
    // De la fin
    alert(texte.slice(-11, -1));
    //Supprimer les espaces inutiles
    var textS = "          Bonjour à tous           ";
    var textGood = textS.trim();
    alert('' + textGood);
}

function arrayLearn(){
    ////var prenom = ['Jojo', 'a', 'b', 'c'], p = '';
    //LE MEILLIEUR //
    var prenoms = {
        prenom1: 'Jojo',
        prenom2: 'a',
        prenom3: 'b',
        prenom4: 'c'
    }, p = '';
    for(var clefs in prenoms){
        p += clefs + ' : ' + prenoms[clefs] + '\n';
    }
    alert(p);
}
function arrayMethodLearn(){
    var prenom = ['Jojo', 'a', 'b', 'c'], p = '', s= '', a = '', suppri = '';

    //Ajouter un élement // taille : Recupere la taille du tableau
    var taille = prenom.push('f','hh');
    for(var i = 0; i < prenom.length; i++){
        p += 'prenom n ' + (i+1) + ' : ' + prenom[i] + '\n';
    }
    alert(p);

    // Supprimer un élement du tableau commence du dernier
    var suppr = prenom.pop();
    for(var i = 0; i < prenom.length; i++){
        s += 'prenom n ' + (i+1) + ' : ' + prenom[i] + '\n';
    }
    alert(s + '\nNous avons supprimé ' +suppr+ ' du tableau');

    //Ajouter un a des élement au debut d'un tableau //
    var ajouter = prenom.unshift('FLorian', 'Chloé');
    for(var i = 0; i < prenom.length; i++){
        a += 'prenom n ' + (i+1) + ' : ' + prenom[i] + '\n';
    }
    alert(a + '\nNous avons ajouter ' +ajouter+ ' du tableau');

    // Pour supprimer un a des element du tableau dés le debut //
    var supprimer = prenom.shift();
    for(var i = 0; i < prenom.length; i++){
        suppri += 'prenom n ' + (i+1) + ' : ' + prenom[i] + '\n';
    }
    alert(suppri + '\nNous avons supprimer ' +supprimer+ ' du tableau');

    // Ajouter un élement ou l'on veut //
    //prenom.splice (<ajouterAPartirDeLIndice>,<supprimerNombreElement>, <élement>)
    prenom.splice(1, 0, 'FLorian', 'chloe');
    //On supprime 3 élements à partir de l'element 1 . //
    prenom.slice(1,3)

    // Classer les élement à partir de l'ordre alpabetique de leur valeur les MAJ sont prioritaire //
    prenom.sort();

    // L'ordre inverse de .sort() //
    prenom.reverse()

    // On ajoute quelque chose entre les élements n'est pas compris dans le tableau en lui meme, c'est un ajout //
    var chaineAjout = prenom.join('/');

    // On extrait les élements de 0 a 2 ici par exemple dans un nouveau tableau en gros //
    // prenom.slice(<debutElement>, <finElement>);
    var couper = prenom.slice(0,2);

    // Fusionner des tableaux et donc crée un nouveau tableau //
    //  -> tableau.concat(<nomTableauVar> : peut avoir plusieur variables)
    var test1 = ['a', 'b', 'c'];
    var test2 = ['h', 'j'];
    var test3 =['dd', 'jj'];
    var test1_2 = test1.concat(test2);
    var test2_1 = test2.concat(test1);
    var fusion = test1.concat(test2, test3);
}

function dateLearn(){
    // Commence en 1970
    var datelit = Date();   // Date litérale
    var datems = Date.now();    // Date en milleseconde * 1000 = seconde

    var d = new Date();
    var d = new Date("Mars 29, 2019 09:00:00");

    var d1 = new Date(2015,6,15,12,30,20,110);  // Tous est remplie
    var d2 = new Date(2015,6,15); //L'heure va s'automatiquement être rentré

    // A savoir : Format de Date() :
    var disol1 = new Date("2015-06-15");
    var disol2 = new Date("2015-06-15T12:00:00");

    var dcourte = new Date("06/15/2015");
    var dlongue = new Date("March 25 2015 09:00:00");

    var dcomp = new Date("Sun jav 25 2015 09:00:00 GMT+0100");
}

function dateMethodLearn(){
    var d = new Date(); // Date actuelle

    // Les guetteurs
    var dms = d.getTime();
    var dy = d.getFullYear();
    var dmo = d.getMonth(); // Pour bien l'initialiser
    var ddate = d.getDate();
    var dday = d.getDay();

    var dh = d.getHours()
    var dmi = d.getMinutes();
    var ds = d.getSeconds();
    var dMs = d.getMilliseconds();

    // Les setteurs
    d.setFullYear(2015,5,15); //Annee, Mois, Jour
    d.setHours(12);
    d.setMinutes(30);
    d.setSeconds(15);

    // Formatter une Date
    var mois = ['Janvier', 'Fevrier', 'Mars', 'avril', 'mai', 'juin', 'jullet', 'aout', 'septembre', 'octobre', 'novembre', 'decembre'];
    var jour= ['Dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
    
    alert('Le ' + jour[dday] + ' ' +ddate + ' ' +mois[dmo] + ' ' + dy + ' ' +
    '.\nIL est : ' +dh + 'h ' + dmi + 'mn et ' +ds + 's. ' );
}

function mathsLearn(){
    var x = Math.random(); // Compris entre 0 et 1
    var y = Math.random() * 1000; // Compris entre 1 et 1000
    var z = Math.round(y); // Arrondir a l'entier
    var inf = Math.floor(y); // Arrondir au inférieur
    var sup = Math.ceil(y); //Arrondir au supérieur

    var min = Math.min(0, -10, 200, 75, 25);
    var max = Math.max(0, -10, 200, 75, 25);

    var a = 2, b = -10;
    var absx = Math.abs(a), absy = Math.abs(b); // Valeur absolue
        // Math.pow(x,y);       // Expodentielle
        // Math.sqrt(x);        // Racine Carre
        // Math.cos(x);         // Cosinus
        // Math.sin(x);         // Sinus
        // Mathi.PI             // PI

}

function anonymes(){
    // Fonction Anonymes //
    var carre = function (x){
        alert('Carre de ' + x + ' = ' + x*x);
    }
    //Récupere ce que l'utilisateur rentre
    var y = prompt ('Entrez un nombre');
    carre(y);
}
//Fonction Auto Invoqué //
(function(x){
    x = prompt("Entrez un nombre");
    alert('Carre de ' + x + ' = ' + x*x);
})();


function compteur(){
    var i = 0;
    return function(){
        return i++;
    }
}
function closureLearn(){
    //Il va se rappeler de la valeur 
    var plusUn = compteur();
    alert('Premier tour : ' + plusUn() +
    '\nDeuxieme tour : ' + plusUn() + 
    '\nTroisieme tour : ' + plusUn());
}

function accederElementHtml(){
    var titre = document.getElementById('titre-h1');        // Recupere un element avec un id 
    var paragraphe = document.getElementsByTagName('p');    // Recupere un element avec le tagName
    var classe = document.getElementsByClassName(para);     //Recupere un element avec une class
    alert(paragraphe.length);

    var lien = document.querySelector('p');             //Recupere un element avec un selecteur de CSS
    var lienP = document.querySelectorAll('.para');     //Recupere un element avec un selecteur de CSS

    // .innerHtml   : Recupere le contenu html
    var recupTitre = document.getElementById('titre-h1').innerHTML;
    // .textContent :Permet de récuperer juste le pagraphe et non la totalité
    var recupQueParagraphe = document.querySelector('.para').textContent;
    alert(recupTitre);

    var titre_page = document.title;    // Recupere le titre
    var page = document.body;           // Recupere le body
    var lien = document.links;          // Recupere les links
}
function modifierElementHtml(){
    var titre = document.getElementById('titre-h1');
    var texteTitre = titre.innerHTML;
    var textePara = document.querySelector('.para').textContent;

    // Modifier
        //document.getElementById('titre-h1').innerHTML = 'Titre modifié';
    // Modifier et ajouter
    document.getElementById('titre-h1').innerHTML += ' <mark>Titre modifié</mark>';

    document.querySelector('a').href = 'http://wikipedia.org';
    document.querySelector('.para').className = 'para1';
    document.getElementById('titre-h1').style.color = 'orange';
}
function ajouterInsererElement(){
    // Inserer un element comme dernier enfant //
    var newPara = document.createElement('p');
    newPara.id = 'nouveau';

    var texte = document.createTextNode('Insére');
    // Pour inserer un élement
    newPara.appendChild(texte);
    var para1 = document.querySelector('.para');
    //Avant ce que l'on veut
    document.body.insertBefore(newPara, para1);
    // Apre ce met en dernier enfant
    document.body.appendChild(newPara);
}
function modifierSupprimerElement(){
    var titre= document.getElementById('titre-h1');
    var parent = document.body;
    // Supprimer un élement
    parent.remove(titre);

    var nouveauTitre = document.createElement('h2');
    nouveauTitre.id = 'titre_moyen';
    nouveauTitre.innerHTML = 'Titre modifie en Js';
    parent.replaceChild(nouveauTitre, titre);
}

function naviguerDOM(){
    var p = document.querySelector('.para');
    //Acceder a une div
    var divAcceder = p.parentNode;

    // Acceder à un enfant
    var b = document.body;
    var div = b.childNodes[3];
    var pi = div.childNodes[1];
    var texte = pi.childNodes[0].nodeValue;
    alert(texte);
}

// Evenement JS //
var p1 = document.querySelector('p');
p1.onclick = eventLearn;
function eventLearn(){
    /* Dans le html mais on ne l'utilse plus --
        onclick="alert('Bravo');"
        onclick="this.textContent= 'Merci';"
        DONC :
    */
    this.innerHTML = '<strong>Bravo ! </strong>';
    this.style.color = 'orange';
}
function eventMethodeLearn(){
    var p1 = document.querySelector('p');
    // Si on clique
    p1.addEventListener('click',changeTexte);
    function changeTexte(){
        this.innerHTML = '<strong>Bravo !</strong>';
        this.style.color = 'orange';
    }

    // Si on passe dessus avec la souris
    p1.addEventListener('mouseover', Fonction1);
    // Si on sort avec la souris
    p1.addEventListener('mouseout', Reset1);
    // Si on reste appuye 
    p1.addEventListener('mousedown',Fonction2);
    // Si on appuye plus
    p1.addEventListener('mouseup', Reset2);

    function Fonction1(){
        this.innerHTML = 'Cliquer moi maintenat';
        this.style.backgroundColor = 'orange';
    }
    function Reset1(){
        this.innerHTML = 'Passez sur moi';
        this.style.backgroundColor = '';
    }
    function Fonction2(){
        this.innerHTML = 'Bravo';
        this.style.color = '#26C';
        this.style.fontWeight = 'bold';
        this.style.fontSize = '24px';
    }
    function Reset2(){
        this.innerHTML = 'Passer sur moi';
        this.style.color = '';
        this.style.fontWeight = '';
        this.style.fontSize = '';
    }
}
function propagationEvents(){
    
}
function objetEvent(){

}