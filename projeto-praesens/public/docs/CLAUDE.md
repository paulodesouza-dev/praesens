# Praesens

Projeto Individual da Sprint 3 (SPTech): plataforma web de respiração guiada, diário de reflexão e dashboard. Usa a API web-data-viz (Node.js) para guardar os dados no banco MySQL, que roda numa VM Linux, com js, html e css. Os gráficos do dashboard usam Chart.js. Não use tecnologias fora disso. Vou apresentar em 10 minutos e preciso saber explicar cada trecho do código.

## Identidade visual
- NOITE DA FLORESTA (#0E1612): cor principal do background
- SÁLVIA (#A9CBA3): textos, ícones e gráficos
- LUZ (#DDAA4F): botões e destaques
- Fontes: Marcellus nos títulos e nunito nos textos

## Banco (3 tabelas)
- usuario (idUsuario, nome, email, senha, dtCadastro)
- pratica (idPratica, fkUsuario, dtHora, duracaoSegundos, ciclos)
- diario (idDiario, fkPratica UNIQUE, texto, dtHora)
- usuario 1:N pratica; pratica 1:1 diario (a reflexão é opcional)

## Como trabalhar
- Sou iniciante. Você pode implementar direto no código, mas SEMPRE me diga antes o que pretende fazer e espere meu OK.
- Depois de implementar, liste cada alteração em uma linha: o que foi feito e por quê.
- Sem comentários dentro do código (estritamente proibido). Só ficam os comentários originais do template web-data-viz.
- O caminho local absoluto do projeto é: C:\Users\Paulo\Documents\Aulas\P.I\Projeto-Individual\praesens

## Regras de código
- BÁSICO (padrão): HTML (div, span, input, button, br, id, class, onclick, style); CSS no <style>; JS com let, Number(), operadores, comparações, if/else, && || !, for, vetores (push, length, [i]), objetos simples, funções sem parâmetro chamadas por onclick, template string, length/includes/startsWith/endsWith, console.log, innerHTML.
- COM CAUTELA (só se simplificar de verdade e explicando o comando): while, break, continue, pop, splice, indexOf, join, Math.floor, Math.round, Math.random, toFixed, isNaN, trim, toUpperCase, toLowerCase.
- LIBERADOS PELO USUÁRIO (usar conforme necessário, explicando o comando na primeira vez): setInterval, clearInterval, setTimeout, fetch (com .then), sessionStorage (incluindo removeItem e clear).
- PROIBIDO (ainda não aprendi): querySelector, forEach/map/filter/reduce/sort, switch, localStorage e qualquer coisa fora das listas.
- Exceções: Chart.js e as fontes do projeto.
- Se precisar de algo fora das listas, diga qual comando seria, explique e proponha uma alternativa básica antes de usar.
- O web-data-viz exige coisas fora das listas (Express, consultas SQL). Quando surgirem, avise, explique e pergunte antes.
- nunca dê commits por conta própria

## Estilo
- O CSS usado por mais de uma página fica em public/css/estilo.css. O que é de uma página só fica em public/css/<nome-da-pagina>.css (pratica.css, reflexao.css, dashboard.css), ligado depois do estilo.css. As páginas não têm <style>. O <script> fica depois do </html>. O que for da API fica nos arquivos do web-data-viz.
- Acesso direto pelo id (ipt_nome.value, div_mensagem.innerHTML), com prefixos ipt_ e div_.
- Nomes de variáveis e funções em português. Inputs sempre type="text", convertidos com Number(); a senha usa type="password" e a reflexão usa <textarea>.
- Estrutura linear, poucas funções, a solução mais básica que funcione, ainda mais se forem curtas e funcionais.
- Validações só as do projeto: campos vazios, e-mail válido, senha com 8+ caracteres e reflexão não vazia.

## web-data-viz (resumo)
- Fluxo de um dado: `public/*.html` (fetch) → `src/routes` → `src/controllers` (validação) → `src/models` (SQL) → `src/database/config.js` (credenciais do `.env`). O `app.js` registra as rotas.
- Rodar: escolher o ambiente na linha 1 do `app.js`, preencher `.env` ou `.env.dev`, `npm i`, `npm start`.
- O template é do AquaTech: empresa, aquario, aviso e medida não fazem parte do Praesens. O `usuarioController` exige empresa e aquário e precisa ser adaptado ao schema do Praesens.
- Detalhes completos (padrão do front, mapa de rotas do Praesens, limitações do template): ler o doc do projeto `claude/web-data-viz.md` antes de qualquer trabalho no back-end.