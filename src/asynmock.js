
const misProductos=[
    {id:"1", nombre: "Black Opium", precio: 100500, img:"../public/img/femeninas/black-opium-illicit-green-edp-75ml-.webp",idCat:"femeninas", detalle: "Black Opium Illicit Green eau de parfum nace de una colaboración única y audaz entre la maestra perfumista Nathalie Lorson y la mixóloga parisina de talla internacional Margot Lecarpentier. Juntas, le dieron una vuelta de rosca al icónico café adictivo de Black Opium con la super esencia del jugo de mandarina verde y un acorde delicioso de higos cremosos. El resultado es, simplemente, un adictivo shot de adrenalina."},
    {id:"2", nombre: "La Vie Est Belle", precio:180000, img:"../public/img/femeninas/laVieEstBella.webp",idCat:"femeninas", detalle: "Comparte tu felicidad con esta majestuosa reinterpretación de una fragancia que captura la luminosidad de la esencia de magnolia. Haz tu vida incluso más hermosa con la fragancia femenina de Lancôme, La Vie est Belle."},
    {id:"3", nombre: "CK Everyone", precio:120000, img:"../public/img/masculinas/ck-everyone-edt-200ml_1.webp",idCat:"masculinas", detalle: "La fragancia Calvin Klein CK Everyone Eau de Toilette es intensa y energética. Una esencia vegana, cítrica y amaderada. Está elaborado con alcohol de origen natural y notas de naranja orgánica fresca mexicana. El corazón de té negro de Sri Lanka y la base sensual y amaderada de vetiver de Haití que se obtienen siguiendo una cadena de valor responsable que además, forman parte de un programa que retribuye a las comunidades locales. El frasco de cristal es reciclable una vez que se retira el surtidor."},
    {id:"4", nombre: "Invictus", precio:105000, img:"../public/img/masculinas/invictus-edt-100ml_1_1.webp",idCat:"masculinas", detalle: "Una fragancia que hace sentir la esencia de la victoria, dos fuerzas inesperadas al unísono: éxtasis y adicción. Su frescura y sensualidad son el alma de la virilidad contemporánea. Es un choque inesperado de dos mundos, fuerzas, valores y emociones. El hombre Invictus sólo tiene una meta: la victoria. Nadie puede competir contra él."},
    {id:"5", nombre: "One Million", precio:107000, img:"../public/img/masculinas/one-million-elixir-parfum-intense-50ml_1.webp",idCat:"masculinas", detalle: "Sus ingredientes cuidadosamente seleccionados, la rosa de Damasco, el osmanthus y las habas tonkas salvajes, hacen destacar esta composición magistral por la calidad inigualable de sus materias primas. Profundamente sensuales, la nota licorosa de davana vibra con la fuerza de la suave madera y las semillas de vainilla negra. La sensualidad suprema se combina con la energía del duradero absoluto de vainilla."},
    {id:"6", nombre: "Cars", precio:10555, img:"../public/img/niños-niñas/Cars.webp",idCat:"infantiles", detalle: "Viaja más rápido con el perfume de CARS. Regalo ideal para los niños o fanáticos del rayo Mcqueen y todos sus personajes! Perfume infantil con atomizador en frasco de vidrio."},
    {id:"7", nombre: "Pepa Pig", precio:10000, img:"../public/img/niños-niñas/peppa-pig-edc-45ml.webp",idCat:"infantiles", detalle: "Perfume infantil de Peppa Pig de Disney viene con un olor suave y dulce para las niñas de la casa. La caja ofrece un diseño increíble perfectos para regalo, especialmente para las niñas que aman a Peppa."},
    {id:"8", nombre: "Star Wars", precio:15550, img:"../public/img/niños-niñas/star-wars-baby-yoda-body-splash-125ml.webp",idCat:"infantiles", detalle: "Es una opción fresca y suave para que ell@s se sientan encantad@s, con su agradable aroma."},
   
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 100)
    })
}


//

export const getUnProducto = (id) => {
    return new Promise (resolve =>{
        setTimeout(()=>{
            const producto = misProductos.find(item => item.id === id)
            resolve(producto)
        }, 100)
    })

}


export const getProductosPorCategorias = (idCategoria) => {
    return new Promise(resolve =>{
        setTimeout(() => {
            const producto = misProductos.filter(item => item.idCat === idCategoria)
            resolve(producto)
        }, 100);

    })

}