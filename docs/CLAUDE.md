O projeto Praesens é uma plataforma web de respiração guiada e diário de reflexão. Utilizazndo apenas a API web-data-viz (Node.js) para guardar os dados no banco MySQL, com as linguagens js, html e css. Os gráficos do dashboard usam Chart.js.

Lembre que as cores do site são: NOITE DA FLORESTA (
#0E1612) usada como cor principal do background SÁLVIA (
#A9CBA3) usada em textos, ícones e gráficos LUZ (
#DDAA4F) usada em itens como botões e destaques Fontes: Marcellus nos títulos e Karla nos textos.

O banco tem 3 tabelas: usuario (idUsuario, nome, email, senha, dtCadastro), pratica (idPratica, fkUsuario, dtHora, duracaoSegundos, ciclos) e diario (idDiario, fkPratica UNIQUE, texto, dtHora). usuario 1:N pratica e pratica 1:1 diario (a reflexão é opcional).

Preciso que você aja como um professor, não quero que você mexa no código diretamente, mas sim que você me explique detalhadamente o passo a passo sobre o que fazer e como para chegar ao resultado esperar.