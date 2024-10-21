function deuxiemePlusGrand(tableau) {
    if (tableau.length < 2) {
        return false; 
    }

    let premier = tableau[0]; 
    let second = -1; 

    for (let i = 1; i < tableau.length; i++) { 
        let nombre = tableau[i];

        if (nombre > premier) {
            second = premier; 
            premier = nombre; 
        } else if (nombre > second && nombre < premier) {
            second = nombre; 
        }
    }

    return second === -1 ? false : second;
}

module.exports = deuxiemePlusGrand();