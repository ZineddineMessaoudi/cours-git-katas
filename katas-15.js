function aplatirTableau(tableau) {
    let resultat = [];

    for (let i = 0; i < tableau.length; i++) {
        if (Array.isArray(tableau[i])) {
            // Si l'élément est un sous-tableau, concaténer ses éléments
            resultat = resultat.concat(tableau[i]);
        } else {
            // Sinon, ajouter directement l'élément
            resultat.push(tableau[i]);
        }
    }

    return resultat;
}

// Exemple d'utilisation
console.log(aplatirTableau([1, [2, 3], 4, [5, 6], 7])); 
// Résultat: [1, 2, 3, 4, 5, 6, 7]
