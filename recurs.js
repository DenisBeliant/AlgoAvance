function additionHeureRec(heure, s) {
    if(s > 0) {
        secondeApres(heure);
        additionHeureRec(heure, s - 1);
    }
}

function fact(n) {

    if(n > 0) {
        return n * fact(n - 1);
   } else return 1;

}

function fibonacci(n, res = 0) {
    if(n < 2) return n;
    else {
        return fibonacci(n - 1, fibonacci(n - 2));
    }
}

function syracuse(n, i = 0) {
    affiche(n + '\n');
    
    if(n == 1) return affiche('[' + i + ']\n');
    if(n % 2 == 0) {
        syracuse(n / 2, i + 1);
    }
    else {
        syracuse(3 * n + 1, i + 1);
    }
}

function pgcd(a, b) {
    if(b == 0) return a;
    else return pgcd(b, a % b);
}

function occurence(str, c, i = 0, cpt = 0) {
    if(i >= str.length) return cpt;
    else if(str[i] == c) return occurence(str, c, i + 1, cpt + 1);
    return occurence(str, c, i + 1, cpt);
}

function palyndrome(str, i = 0, j = str.length - 1) {

    if(i >= j) return true;
    else if(str[i] != str[j]) return false;
    else {
        return palyndrome(str, i + 1, j - 1);
    }
}

let alphaRom = {M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1};

function rom(str, i = str.length - 1, res = alphaRom[str[i]]) {

    if(i == 0) return res;

    if(alphaRom[str[i - 1]] < alphaRom[str[i]]) return rom(str, i - 1, res - alphaRom[str[i - 1]]);
    else if(alphaRom[str[i - 1]] >= alphaRom[str[i]]) return rom(str, i - 1, res + alphaRom[str[i - 1]]);

}

function triFusion(tab) {
    if(tab.length <= 1) {
       return tab;
    } else return fusion(triFusion(tab.slice(0, tab.length / 2)), triFusion(tab.slice(tab.length / 2, tab.length))); 
}

function fusion(tabA, tabB) {
    console.log("tab A : " + tabA);
    console.log("tab B : " + tabB);
    if(tabA.length == 0) return tabB;
    if(tabB.length == 0) return tabA;
    if(tabA[0] <= tabB[0]) return [tabA[0]].concat(fusion(tabA.slice(1, tabA.length), tabB));
    else return [tabB[0]].concat(fusion(tabA, tabB.slice(1, tabB.length)));
}

function triRapide(tab) {
    let pivot = tab[tab.length - 1];
    let change = false;
    console.log(pivot);
    console.log(tab);
    let tabA = [];
    let tabB = [];

    //Parcourt du tableau
    for(let i = 0; i < tab.length; i++) {
        if(tab[i] < pivot) {
            tabA.push(tab[i])
        } 
        else if(tab[i] > pivot) tabB.push(tab[i]);
    }
    tabA.push(pivot);

    console.log("Tab A : " + tabA);
    console.log("Tab B : " + tabB);
    console.log("Concat : " + tabA.concat(tabB));

    if(pivot != tabB[length - 1]) return triRapide(tabA.concat(tabB));
    else return tabB;
}


function triRapide_v2(tab, gauche = 0, droite = array.length -1){
    if(gauche < droite){
        let pivot = gauche;
        for (let i = gauche; i < droite; i++){
            if(tab[i] < tab[droite]){
                permute(tab, i, pivot);
                pivot ++;
            }
        }
        permute(tab, pivot, droite);
        triRapide_v2(tab, gauche, pivot -1);
        triRapide_v2(tab, pivot + 1, droite);
    }
    return tab;
}
