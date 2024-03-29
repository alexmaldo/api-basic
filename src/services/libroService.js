
const {v4 : generadorUid } = require("uuid");
const dbLibro = require("../database/Libro");


const getAllLibros = () => {
    const libros = dbLibro.getAllLibros();
    return libros;
};

const getOneLibro = ( idLibro) =>{
    const libro = dbLibro.getOneLibro(idLibro);

    return libro;
};

const createNewLibro = ( newLibro) =>{
    const libroToInsert = {
        ...newLibro,
        id : generadorUid(),
        fechaRegistro: new Date().toLocaleString("en-US",{timeZone:"UTC"}),
        fechaActualizacion: new Date().toLocaleString("en-US",{timeZone:"UTC"})
    }
    const createdLibro = dbLibro.createNewLibro(libroToInsert);
    return createdLibro;
};

const updateOneLibro = ( idLibro, changedLibro) => {

    const updatedLibro = dbLibro.updateOneLibro(idLibro,changedLibro);
    console.log("servicio: ", updatedLibro);
    return updatedLibro;
};

module.exports = {
 getAllLibros ,
 getOneLibro,
 createNewLibro,
 updateOneLibro
}