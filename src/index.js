const express = require("express");
const v1LibrosRouter =  require("./V1/routes/libro.js");
const v1AutorRouter =  require("./V1/routes/autor.js");

const app = express();
const PORT = process.env.PORT || 1234;

app.use(express.json()); //En generarl uando se hace una petición esta pasa por todos los use por eso el ultimo use debe ser el de las rutas

app.use("/api/v1/libros", v1LibrosRouter);
app.use("/api/v1/autores", v1AutorRouter);


app.listen(PORT, () => {console.log(`Servidor escuchando en puerto ${PORT}`)  });