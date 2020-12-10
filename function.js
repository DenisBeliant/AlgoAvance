function triSelectif(tableau) {
    var indexMin = 0;
    var taille = tableau.length;

    for(var j = 0; j < taille; j++) {
        // Recherche min :
        indexMin = findPetit(tableau, j);

        if(indexMin != false) permute(tableau, j, indexMin);
    }
    
    return tableau;

}

function triBulles(tableau) {
    var taille = tableau.length;

    for(var j = 0; j < taille; j++) {
        for(var i = 0; i < taille; i++) {
            if(tableau[i] > tableau[i + 1]) tableau = permute(tableau, i + 1, i);
        }
    }
    
    return tableau;
}

// function triInsertion(tableau) {
//     let res = []
//     tableau.forEach( el => {
//       if (res.length > 0) {
//         if (el < res[0]) res.unshift(el)
//         else if (el > res[res.length-1]) res.push(el)
//         else {
//           res.forEach((rel, ri) => {
//             if(el > rel && el < res[ri+1]) res.splice(ri+1,0,el)
//           })
//         }
//       }
//       else {
//         res[0] = el; 
//       }
//     })
//     return res;
// }

function triInsertion(tab) {
    for(let i = 1; i < tab.length; i++) {
        let temp = tab[i];
        let j = i;

        while(i > 0 && temp < tab[j - 1]) {
            tab[j] = tab[j - 1];
            j--;
        }
        tab[j] = temp;
    }

    return tab;
}

function triShell(tab) {

    let gap = 0;
    tab.forEach((el, i) => {
        if(el - tab[i + 1] > gap) gap = el - tab[i +1];
    })

    while(gap > 0) {
        for(let i = gap; i < tab.length; i++) {

            if(tab[i] < tab[i - gap]) tab = permute(tab, i, i - gap);
        }
        gap--;
    }
    // console.log(res);
    return tab;
}


// function fibonacci(val) {

//     var res = 1;

//     if(val == 0) return 0;
//     else if(val == 1) return 1;
//     else if(val > 1) {
//         for(var i = val; i > 0; i--){
//             res += i * res;
//         }
//     }

//     return res;
// }

function onTableau(tableau, val) {
    for(var i = 0; i < tableau.length; i++) {
        if(tableau[i] == val) return true;
    }
    return false;
}

function findPetit(tableau, indexDepart) {
    var taille = tableau.length;
    var min = tableau[indexDepart];
    var indexMin = indexDepart;

    for(var i = indexDepart; i < taille; i++) {
        if(tableau[i] < min) {
            min = tableau[i];
            indexMin = i;
        }
    }
    if(indexMin != indexDepart) return indexMin;
    else return false;
}

function plusPetits(tab, petit) {
    var taille = tab.length
    var nb = 0;

    for(var i = 0; i < taille; i++) {
        if(tab[i] < petit) nb++;
    }
    return nb;
}

function permute(tableau, un, deux) {
    var buf = tableau[un];
    tableau[un] = tableau[deux];
    tableau[deux] = buf;

    return tableau;
}

function affiche(str) {
    document.getElementById("tableau").innerText += str;
}

function afficheTab(tableau) {
    var taille = tableau.length;

    for(var i = 0; i < taille; i++) {
        affiche(tableau[i]);
        affiche(":");
    }
}

function randomMoi(tableau, taille, max) {
    for(var i = 0; i < taille; i++) {
        tableau[i] = Math.floor(Math.random() * Math.floor(max));
    }
    return tableau;
}

function afficheHeure(heure) {
    affiche(heure['h'] + ":");
    affiche(heure['m'] + ":");
    affiche(heure['s'] + '\n');
}

function testSorted(tableau) {
    var taille = tableau.length;

    for(var i = 0; i < taille; i++) {
        if(tableau[i + 1] < tableau[i]) return false;
    }

    return true;
}

function posTableau(temp, val) {
    // console.log(tab.length);

    for(let i = 0; i < temp.length; i++) {
        if(temp[i] == val) return i;
    }
    return -1;
}


function triComptage(tab) {
    let temp = [];
    let occur = [];
    let res = [];
    let min = tab[0];
    let max = 0;

    //Trouver le plus petit et le plus grand :
    for(let i = 0; i < tab.length; i++) {
        if(tab[i] < min) min = tab[i];
        else if (tab[i] > max) max = tab[i];
    }

    console.log(min);
    console.log(max);

    //Remplir le tableau temp et occurence :
    for(let i = 0; i <= max; i++) {
        temp[i] = i;
        occur[i] = 0;
    }

    //Remplir le tableau d'occurence :
    for(let i = 0; i < tab.length; i++) { 
        occur[tab[i]]++;
    }

    console.log(tab);
    console.log(temp);
    console.log(occur);
    console.log(temp.length == occur.length ? "Yes" : "No");

    // Remplir le résultat :
    for(let i = 0; i < occur.length; i++) {
        for(let j = 0; j < occur[i]; j++) {
                res.push(temp[i]);
        }
    }

    return res;
}