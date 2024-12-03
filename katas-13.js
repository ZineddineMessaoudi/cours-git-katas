function genererMotDePasse(longueur) {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
    let motDePasse = '';

    for (let i = 0; i < longueur; i++) {
        const indexAleatoire = Math.floor(Math.random() * caracteres.length);
        motDePasse += caracteres[indexAleatoire];
    }

    return motDePasse;
}

// Exemple d'utilisation
console.log(genererMotDePasse(12)); // Génère un mot de passe de 12 caractères
