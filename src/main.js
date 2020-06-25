import {
    obtenerObjeto
} from './items';

import {
    // lazy,
    // unitornio,
    // megastofeles,
    // zombie,
    // burlon,
    mounstruo
} from './niveles';

let numeroNivel = 0,
    carisma,
    fuerza,
    inteligencia,
    belleza,
    vida,
    tijeras,
    globos,
    linternas,
    estacas,
    espejo,
    escudo;

const abrirCofre = () => {
    console.log('Encontraste un cofre... 🎁🛍');
    const items = [
        "globos" ,
        "escudo",
        "espejo",
        "estacas",
        "linternas",
        "tijeras",
    ];
    const item = items[Math.floor(Math.random() * items.length)];
    const resultado = obtenerObjeto(heroina, item);
    if (resultado) {
        console.log(' con un ' + resultado + '!');
        //resultado(heroina)
    } else {
        console.log(' pero estaba vacio! 💩');
    }
};

const niveles = ["lazy", "unitornio", "megastofeles", "zombie", "burlon", "abrirCofre"];

let heroina = {
    vida: 100,
    carisma : 25,
    fuerza : 25,
    inteligencia : 25,
    belleza : 25,
    inventario: {
        tijeras: false,
        globos: false,
        linternas: false,
        estacas: false,
        escudo: false,
        espejo: false
    }
}

const eliminarNivel = (nivel) => {
    let foundedPosition = niveles.indexOf(nivel)

    if(foundedPosition !== -1){
        niveles.splice(foundedPosition, 1)
    }
    console.log('Niveles', niveles)
}

const verifyLifeLevel = (heroina) =>{
    if(heroina.vida <= 0){
        console.log("GAME OVER !!!!!!! 💀")
        return false;
    }
    return true;
}

const jugarNivel = () => {
    const nombre = niveles[0];
    // const nivel = niveles[Math.floor(Math.random() * niveles.length)];
    numeroNivel++;
    setTimeout(() => {
        console.log('Entrando al nivel ' + numeroNivel + '...');
    }, 1000);
    setTimeout(() => {
        if(verifyLifeLevel(heroina)) {
            mounstruo(nombre ,heroina, eliminarNivel, numeroNivel);
            // nivel(heroina, eliminarNivel, nivel);
        }
    }, 2500);
    setTimeout(() => {
        console.log(`
          - RESULTADOS DESPUES DEL NIVEL ${numeroNivel} -`);
    }, 3000);
    setTimeout(() => {
        console.log(`
          - ESTADISTICAS DE VIDA -
          carisma: ${heroina.carisma}
          fuerza: ${heroina.fuerza}
          inteligencia: ${heroina.inteligencia}
          belleza: ${heroina.belleza}
          vida total: ${heroina.vida}
          `);
    }, 5000);
    setTimeout(() => {
        console.log(`
          - INVENTARIO -
          tijeras: ${heroina.inventario.tijeras}
          globos: ${heroina.inventario.globos}
          linternas: ${heroina.inventario.linternas}
          estacas: ${heroina.inventario.estacas}
          espejo: ${heroina.inventario.espejo}
          escudo activado? ${heroina.inventario.escudo ? 'Si.' : 'No.'}
          `);
    }, 7000);
};

window.jugarNivel = jugarNivel
jugarNivel();