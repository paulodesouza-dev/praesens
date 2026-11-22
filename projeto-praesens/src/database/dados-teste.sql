USE praesens;

INSERT INTO pratica (fkUsuario, dtHora, duracaoSegundos, ciclos) VALUES
(1, NOW() - INTERVAL 1 DAY, 480, 40),
(1, NOW() - INTERVAL 2 DAY, 360, 30),
(1, NOW() - INTERVAL 3 DAY, 600, 50),
(1, NOW() - INTERVAL 4 DAY, 240, 20),
(1, NOW() - INTERVAL 5 DAY, 420, 35),
(1, NOW() - INTERVAL 5 DAY, 180, 15),
(1, NOW() - INTERVAL 6 DAY, 540, 45),
(1, NOW() - INTERVAL 8 DAY, 300, 25),
(1, NOW() - INTERVAL 9 DAY, 240, 20),
(1, NOW() - INTERVAL 11 DAY, 360, 30),
(1, NOW() - INTERVAL 12 DAY, 180, 15),
(1, NOW() - INTERVAL 13 DAY, 300, 25);

SELECT * FROM pratica WHERE fkUsuario = 1 ORDER BY dtHora;
