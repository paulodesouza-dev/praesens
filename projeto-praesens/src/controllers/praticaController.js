var praticaModel = require("../models/praticaModel");

function registrar(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    var duracao = req.body.duracaoServer;
    var ciclos = req.body.ciclosServer;

    if (idUsuario == undefined) {
        res.status(400).send("O id do usuário está undefined!");
    } else if (duracao == undefined) {
        res.status(400).send("A duração está undefined!");
    } else if (ciclos == undefined) {
        res.status(400).send("Os ciclos estão undefined!");
    } else {
        praticaModel.registrar(idUsuario, duracao, ciclos)
            .then(function (resultado) {
                res.json({ idPratica: resultado.insertId });
            })
            .catch(function (erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function buscarResumo(req, res) {
    var idUsuario = req.params.idUsuario;

    praticaModel.buscarResumo(idUsuario)
        .then(function (resultado) {
            res.json(resultado[0]);
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function buscarSemana(req, res) {
    var idUsuario = req.params.idUsuario;

    praticaModel.buscarSemana(idUsuario)
        .then(function (resultado) {
            res.json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function buscarPeriodo(req, res) {
    var idUsuario = req.params.idUsuario;
    var inicio = req.params.inicio;
    var fim = req.params.fim;

    praticaModel.buscarPeriodo(idUsuario, inicio, fim)
        .then(function (resultado) {
            res.json(resultado[0]);
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function buscarHistorico(req, res) {
    var idUsuario = req.params.idUsuario;

    praticaModel.buscarHistorico(idUsuario)
        .then(function (resultado) {
            res.json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    registrar,
    buscarResumo,
    buscarSemana,
    buscarPeriodo,
    buscarHistorico
};
