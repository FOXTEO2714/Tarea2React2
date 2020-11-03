const suma_infrastruture = require('../infrastructure/suma_infrastructure')

function obtenerSumaDeValores(vlr1,vlr2) {
    if (vlr1 !== null && vlr2 !== null ) {
        console.log(vlr1, vlr2);
        return suma_infrastruture.obtenerSumaDeValores(vlr1, vlr2);
    } else {
        return { error: 'No vienen valores correctos para sumar' }
    }
}

module.exports = {
    obtenerSumaDeValores
}
