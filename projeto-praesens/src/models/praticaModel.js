var database = require("../database/config");

function registrar(idUsuario, duracao, ciclos) {
    var instrucaoSql = `
        INSERT INTO pratica (fkUsuario, duracaoSegundos, ciclos) VALUES (${idUsuario}, ${duracao}, ${ciclos});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarResumo(idUsuario) {
    var instrucaoSql = `
        SELECT COUNT(*) AS totalPraticas,
               IFNULL(ROUND(SUM(duracaoSegundos) / 60, 1), 0) AS minutosTotais
        FROM pratica WHERE fkUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarSemana(idUsuario) {
    var instrucaoSql = `
        SELECT DATEDIFF(CURDATE(), DATE(dtHora)) AS diasAtras,
               ROUND(SUM(duracaoSegundos) / 60, 1) AS minutos
        FROM pratica
        WHERE fkUsuario = ${idUsuario} AND dtHora >= CURDATE() - INTERVAL 6 DAY
        GROUP BY diasAtras;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarPeriodo(idUsuario, inicio, fim) {
    var instrucaoSql = `
        SELECT COUNT(*) AS praticas,
               IFNULL(ROUND(SUM(duracaoSegundos) / 60, 1), 0) AS minutos
        FROM pratica
        WHERE fkUsuario = ${idUsuario}
          AND dtHora >= NOW() - INTERVAL ${inicio} DAY
          AND dtHora < NOW() - INTERVAL ${fim} DAY;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarHistorico(idUsuario) {
    var instrucaoSql = `
        SELECT DATE_FORMAT(pratica.dtHora, '%d/%m/%Y %H:%i') AS data,
               DATE(pratica.dtHora) = CURDATE() AS hoje,
               pratica.duracaoSegundos, pratica.ciclos, diario.texto
        FROM pratica
        LEFT JOIN diario ON diario.fkPratica = pratica.idPratica
        WHERE pratica.fkUsuario = ${idUsuario}
        ORDER BY pratica.dtHora DESC LIMIT 5;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    registrar,
    buscarResumo,
    buscarSemana,
    buscarPeriodo,
    buscarHistorico
};
