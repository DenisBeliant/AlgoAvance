var heure;
var heureAjout;
var tableauPlusPetits = 0;
var tableauTrie = [];
var maxNb = 9;
var size = 10;
let tableau = [];
let tableauInit = [];

tableauInit = randomMoi(tableauInit, size, maxNb);

// console.log(tableauInit);
//tableau = [3, 9, 7, 1, 6, 2, 8, 4, 5];
// afficheTab(tableau);
// affiche('\n');
// console.log(tableau);

// // tableauPlusPetits = plusPetits(tableau, 2);
// // affiche(tableauPlusPetits + '\n');

heure = creerHeure(12, 59, 59);
heureAjout = creerHeure(0, 0, 20);

// // afficheHeure(heure);
// // afficheHeure(secondeApres(heure));

// // afficheHeure(secondeChoisie(heure, 68000));
// // afficheHeure(additionHeure(heure, heureAjout));

tableau = tableauInit.slice();

console.log(tableau);
affiche("Tri selectif : \n");
affiche("Non trié :");
afficheTab(tableau);
affiche('\n');
console.time("Tri selectif");
afficheTab(triSelectif(tableau));
console.timeEnd("Tri selectif");
affiche('\n');
affiche(testSorted(tableau) ? "Pass" : "Fail");

// tableau = randomMoi(tableau, size, maxNb);
tableau = tableauInit.slice();

affiche('\n');
affiche("Tri par bulles : \n");
affiche("Non trié :");
afficheTab(tableau);
affiche('\n');
console.time("Tri bulles");
afficheTab(triBulles(tableau));
console.timeEnd("Tri bulles");
affiche('\n');
affiche(testSorted(tableau) ? "Pass" : "Fail");

// console.log(tableauInit);
// tableau = randomMoi(tableau, size, maxNb);
tableau = tableauInit.slice();

affiche('\n');
affiche("Tri par insertion : \n");
affiche("Non trié :");
afficheTab(tableau);
affiche('\n');
console.time("Tri insertion");
tableau = triInsertion(tableau);
console.timeEnd("Tri insertion");
afficheTab(tableau);
affiche('\n');
affiche(testSorted(tableau) ? "Pass" : "Fail");

// affiche(fibonacci(300));
additionHeureRec(heure, 3424);

afficheHeure(heure);

affiche("4! = " + fact(4));

affiche("Fibonacci de 8 : " + fibonacci(8));
affiche('\n');

affiche("Syracuse de 15 : " + syracuse(15));

affiche("PGCD de 21 et 72 : " + pgcd(21, 72));

affiche("Nombre de O dans coucou : " + occurence("ezfdedzkfrzllfpdfooffzefergth", 'e'));

affiche("Palyndrome ? " + (palyndrome("cookc") ? 'oui' : 'non'));

affiche('\n');

affiche("Chiffre MMXX : " + rom("MMXX"));

tableau = tableauInit.slice();
affiche('\n');

tableau = triShell(tableau);

console.time("Tri shell");
affiche("Tri shell : " + tableau);
console.timeEnd("Tri shell");

affiche(testSorted(tableau) ? "Pass" : "Fail");

tableau = tableauInit.slice();

triComptage(tableau);

tableau = tableauInit.slice();

console.log(triFusion(tableau));

tableau = tableauInit.slice();

console.log('\n \n \n');
console.log(tableau);

console.log("Tri rapide : " + triRapide(tableau));
// console.log(tableau);