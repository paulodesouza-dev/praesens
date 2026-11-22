var diarioModel = require("../models/diarioModel");

function registrar(req, res) {
    var idPratica = req.body.idPraticaServer;
    var texto = req.body.textoServer;

    if (idPratica == undefined) {
        res.status(400).send("O id da prática está undefined!");
    } else if (texto == undefined) {
        res.status(400).send("O texto está undefined!");
    } else {
        diarioModel.registrar(idPratica, texto)
            .then(function (resultado) {
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

module.exports = {
    registrar
};
