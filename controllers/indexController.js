const productos = [
    {
    id:1,
    nombre:"Carpaccio fresco",
    descripcion:"Entrada Carpaccio de salmón con cítricos",
    precio: 2500,
    imagen:"Carpaccio-de-salmon.jpg"
},
{
    id:2,
    nombre:"Risotto de berenjena",
    descripcion:"Risotto de berenjena y queso de cabra",
    precio: 2000,
    imagen:"Risotto-berenjena-queso-cabra.jpg"
},
{
    id:3,
    nombre:"Mousse de arroz",
    descripcion:"Mousse de arroz con leche y aroma de azahar",
    precio: 1800,
    imagen:"Mousse-de-arroz-con-leche.jpg"
},
{
    id:4,
    nombre:"Espárragos blancos",
    descripcion:"Espárragos blancos con vinagreta de verduras y jamón ibérico",
    precio:  2550,
    imagen:"esparragos.png"
},

{
    id:5,
    nombre:"Asado con papas",
    descripcion:"",
    precio:  1500,
    imagen:""
}

]

const indexController = {
    home:(req,res)=> {
        res.render('home',{title:'Pimienta y Sal', productos});
    },

    detalle:(req,res)=> {
        const{id} = req.params;
        const producto = productos.find(producto => producto.id== id);
        res.render('detalle',{title:productos.nombre, producto});
    }

};

module.exports = indexController;
