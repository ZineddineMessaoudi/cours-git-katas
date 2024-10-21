function nombrePremier(nombre){
    if (nombre <= 1){
        return false ;
    }
    else {
        for (let i = 2; i <= Math.sqrt(nombre); i++) {
            if (nombre % i === 0) {
            return false;
            }
        }
    }
    return true ;
}

module.export = nombrePremier; 