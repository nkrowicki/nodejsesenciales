const express = require("express");
const app = express();

require("./route")(app);

console.log("Iniciando Express.js");
app.listen(3001, ()=>{
    console.log("Express ha iniciado correctamente!");
});