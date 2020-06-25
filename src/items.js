export const obtenerObjeto = (heroina, propiedad ) => {
    const icon = {  
        globos:" 🎈" ,
        escudo:" 🛡️",
        espejo:" 👩",
        estacas:" 🧛",
        linternas:" 🔦",
        tijeras:" ✂️ "
    };
    console.log("obtuviste " + propiedad + icon[propiedad] )
    heroina.inventario[propiedad] = true;
}