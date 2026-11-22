var express = require("express");
var router = express.Router();

var praticaController = require("../controllers/praticaController");

router.post("/registrar", function (req, res) {
    praticaController.registrar(req, res);
});

router.get("/resumo/:idUsuario", function (req, res) {
    praticaController.buscarResumo(req, res);
});

router.get("/semana/:idUsuario", function (req, res) {
    praticaController.buscarSemana(req, res);
});

router.get("/periodo/:idUsuario/:inicio/:fim", function (req, res) {
    praticaController.buscarPeriodo(req, res);
});

router.get("/historico/:idUsuario", function (req, res) {
    praticaController.buscarHistorico(req, res);
});

module.exports = router;
