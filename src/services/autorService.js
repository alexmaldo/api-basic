
const {v4 : generadorUid } = require("uuid");
const dbAutor = require("../database/Autor");


const getAllAutores = () => {
    const autores = dbAutor.getAllAutores();
    return autores;
};

const getOneAutor = ( idAutor) =>{
    const autor = dbAutor.getOneAutor(idAutor);

    return autor;
};

const createNewAutor = ( newAutor) =>{
    const autorToInsert = {
        ...newAutor,
        id : generadorUid(),
        fechaActualizacion: new Date().toLocaleString("en-US",{timeZone:"UTC"})
    }
    const createdAutor = dbAutor.createNewAutor(autorToInsert);
    return createdAutor;
};

const updateOneAutor = ( idAutor, changedAutor) => {

    const updatedAutor = dbAutor.updateOneAutor(idAutor,changedAutor);
    
    return updatedAutor;
};

module.exports = {
 getAllAutores ,
 getOneAutor,
 createNewAutor,
 updateOneAutor
}