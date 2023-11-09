const express = require("express");
const router = express.Router();

router.get("/", (req,res) => { 
    res.send("retorna todos los  autores")
});


router.get("/:idAutor", (req,res) => { 
    res.send(`retorna el autor con id ${req.params.idAutor}`)
});


router.post("/:idAutor", (req,res) => { 
    res.send(`Agrega un autor con id ${req.params.idAutor}`)
});

router.patch("/:idAutor", (req,res) => { 
    res.send(`Actualiza el Autor con id ${req.params.idAutor}`)
});


module.exports = router;