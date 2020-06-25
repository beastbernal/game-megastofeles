// export const lazy = (heroina, eliminarNivel, nivel) => {
//   console.log("lazy", heroina);

//   if (heroina.inventario.tijeras) {
//     console.log("Eliminaste a lazy violenta");
//     heroina.belleza += 15;
//     eliminarNivel(nivel);
//   }
//   else{
//     heroina.belleza -= 10;
//     heroina.vida -= 10;
//   }
// };
export const mounstruo = (nombreMounstro ,heroina, eliminarNivel, numeroNivel ) => {
  console.log(nombreMounstro, heroina);
  const bichosesos = {  
    lazy:{
      debilidad: {
        nombre: "tijeras",
        valor: 15,
      },
      golpes: {
        nombre: "belleza",
        valor: 10,
      }
    },
    unitornio:{
      debilidad: {
        nombre: "globos",
        valor: 10,
      },
      golpes: {
        nombre: "inteligencia",
        valor: 10,
      }
    },
    megastofeles:{
      debilidad: {
        nombre: "espejo",
        valor: ,
      },
      golpes: {
        nombre: "",
        valor: ,
      }
    },
    zombie:{
      debilidad: {
        nombre: "estacas",
        valor: 10,
      },
      golpes: {
        nombre: "fuerza",
        valor: 10,
      }
    },
    burlon:{
      debilidad: {
        nombre: "linterna",
        valor: 15,
      },
      golpes: {
        nombre: "carisma",
        valor: 10,
      }
    },
  };

  let detalleMounstruo = bichosesos[nombreMounstro]
  if (heroina.inventario[detalleMounstruo.debilidad.nombre]) {
      console.log("eliminaste a " + nombreMounstro );
      heroina.inventario[detalleMounstruo.golpes.nombre] += detalleMounstruo.debilidad.valor;
      eliminarNivel(numeroNivel);
  }
  else{
      heroina[detalleMounstruo.golpes.nombre] -= detalleMounstruo.golpes.valor;
      heroina.vida -= detalleMounstruo.golpes.valor;
  }
  // if (heroina.inventario[debilidad]) {
  //   console.log("Eliminaste a" + nombre);
  //   heroina.atributo += 15;
  //   eliminarNivel(nivel);
  // }
  // else{
  //   heroina.belleza -= 10;
  //   heroina.vida -= 10;
  // }
};
export const unitornio = (heroina, eliminarNivel, nivel) => {
  console.log("unitornio", heroina);
  if (heroina.inventario.globos) {
    console.log("Eliminaste a unitornio");
    heroina.inteligencia += 10;
    eliminarNivel(nivel);
  }
  else{
    heroina.inteligencia -= 10;
    heroina.vida -= 10;
  }
};
export const megastofeles = (heroina, eliminarNivel, nivel) => {
  console.log("megastofeles", heroina);
  if (heroina.inventario.espejo) {
    console.log("Esquivaste a megastofeles");
    eliminarNivel(nivel);
  }
  else{
    heroina.inteligencia -= 10;
    heroina.belleza -= 10;
    heroina.carisma -= 10;
    heroina.fuerza -= 10;
    heroina.vida -= 40;
  }
};
export const zombie = (heroina, eliminarNivel, nivel) => {
  console.log("zombie", heroina);
  if (heroina.inventario.estacas) {
    console.log("Eliminaste a zombie");
    heroina.fuerza += 10;
    eliminarNivel(nivel);
  }
  else{
    heroina.fuerza -= 10;
    heroina.vida -= 10;
  }
};
export const burlon = (heroina, eliminarNivel, nivel) => {
  console.log("burlon ", heroina);
  if (heroina.inventario.linterna) {
    console.log("Eliminaste a burlon");
    heroina.carisma += 15;
    eliminarNivel(nivel);
  }
  else{
    heroina.carisma -= 10;
    heroina.vida -= 10;
  }
};
export const abrirCofre = (heroina) => {
  console.log("abrirCofre ", heroina);
};

