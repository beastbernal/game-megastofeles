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
export const unitornio = (heroina) => {
  console.log("unitornio", heroina);
};
export const megastofeles = (heroina) => {
  console.log("megastofeles", heroina);
};
export const zombie = (heroina) => {
  console.log("zombie", heroina);
};
export const burlon = (heroina) => {
  console.log("burlon ", heroina);
};
export const abrirCofre = (heroina, eliminarNivel, nivel) => {
  console.log("abrirCofre ", heroina);
};
