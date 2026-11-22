var database = require("../database/config");

function registrar(idPratica, texto) {
    var instrucaoSql = `
        INSERT INTO diario (fkPratica, texto) VALUES (${idPratica}, '${texto}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    registrar
};
