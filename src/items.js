export const obtenerGlobo = (heroina) => {
    console.log("Obtuviste un Globo 🎈")
    heroina.inventario.globos = true;
};
export const obtenerEscudo = (heroina) => {
    heroina.inventario.escudo = true;
};
export const obtenerEspejo = (heroina) => {
    heroina.inventario.espejo = true;
};
export const obtenerEstaca = (heroina) => {
    heroina.inventario.estacas = true;
};
export const obtenerLinterna = (heroina) => {
    console.log("Obtuviste Linterna 🔦")
    heroina.inventario.linternas = true;
};
export const obtenerTijeras = (heroina) => {
    console.log("Obtuviste Tijeras ✂️")
    heroina.inventario.tijeras = true;
};
