export const lazy = (heroina, eliminarNivel, nivel) => {
  console.log("lazy", heroina);

  if (heroina.inventario.tijeras) {
    console.log("Eliminaste a lazy violenta");
    heroina.belleza += 15;
    eliminarNivel(nivel);
  }
  else{
    heroina.belleza -= 10;
    heroina.vida -= 10;
  }
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
