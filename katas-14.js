function calculerAireCercle(rayon) {
    if (rayon <= 0) {
        return "Le rayon doit être supérieur à 0";
    }
    return Math.PI * Math.pow(rayon, 2);
}

// Exemple d'utilisation
console.log(calculerAireCercle(5)); // Aire du cercle avec un rayon de 5
