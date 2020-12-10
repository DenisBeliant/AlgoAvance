function creerHeure(h = 0, m = 0, s = 0) {
    return {'h': h, 'm': m, 's': s};
}

function secondeApres(dico) {

    if(dico['s'] < 59) dico['s']++;
    else if(dico['m'] < 59) {
        dico['s'] = 0;
        dico['m']++;
    }
    else if (dico['h'] < 23){
        dico['s'] = 0;
        dico['m'] = 0;
        dico['h']++;
    }
    else {
        dico['s'] = 0;
        dico['m'] = 0;
        dico['h'] = 0;
    }

    return dico;
}

// function secondeChoisie(dico, sec) {
//     if(sec > 3600) {
//         dico['h']+= Math.floor(sec / 3600);
//         if(dico['h'] > 23) dico['h'] -= 24;
//         sec %= 3600;
//     }
//     if(sec > 60) {
//         dico['m'] += Math.floor(sec / 60);
//         sec %= 60;
//     }
//     dico['s'] = sec;

//     return dico;
// }


function secondeChoisie(dico, sec) {
    for(var i = 0; i < sec; i++) {
        secondeApres(dico);
    }
    return dico;
}

function additionHeure(heure, ajout) {
    
    var sec = ajout['h'] * 3600;
    sec += ajout['m'] * 60;
    sec += ajout['s'];

    return secondeChoisie(heure, sec);

}
