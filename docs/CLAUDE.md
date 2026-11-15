# Praesens: contexto e regras de trabalho

## Contexto do projeto
Projeto Individual da Sprint 3 (SPTech). Praesens é uma plataforma web de respiração guiada e diário de reflexão, com dashboard. Usa apenas a API web-data-viz (Node.js) para guardar os dados no banco MySQL, com as linguagens JS, HTML e CSS. Os gráficos do dashboard usam Chart.js.

Estado atual: a ideia ainda está no papel. O web-data-viz está com o código-base original da SPTech (aquario, aviso, empresa, medida), sem alterações.

Pasta local do projeto: C:\Users\Paulo\Documents\Aulas\P.I\Projeto-Individual\praesens

### Identidade visual
- NOITE DA FLORESTA (#0E1612): cor principal do background.
- SÁLVIA (#A9CBA3): textos, ícones e gráficos.
- LUZ (#DDAA4F): botões e destaques.
- Fontes: Marcellus nos títulos e Karla nos textos.

### Banco de dados (3 tabelas)
- usuario (idUsuario, nome, email, senha, dtCadastro)
- pratica (idPratica, fkUsuario, dtHora, duracaoSegundos, ciclos)
- diario (idDiario, fkPratica UNIQUE, texto, dtHora)
- usuario 1:N pratica; pratica 1:1 diario (a reflexão é opcional).

### Ordem prevista de construção
1. Banco: criar as 3 tabelas.
2. Cadastro e login.
3. Respiração guiada (grava a pratica).
4. Diário (grava o diario ligado à pratica).
5. Dashboard com Chart.js.

## Como responder
- O usuário é iniciante em algoritmos.
- Entregar o código direto na resposta, sem nenhum comentário dentro dele, sem introdução e sem sugestões extras.
- Depois do código, listar cada bloco ou alteração em uma linha: o que foi feito e por quê, para o usuário saber tudo o que mudou.
- Para cada comando da lista COM CAUTELA usado, explicar em uma frase o que ele faz.
- Não alterar arquivos do projeto no computador do usuário sem autorização dele.

## Regras de código
Priorizar SEMPRE a lista BÁSICA. Usar algo da lista COM CAUTELA só quando a alternativa básica ficar muito longa ou não existir. Se precisar de algo fora das duas listas, não usar: dizer qual comando seria e propor uma alternativa.

### BÁSICO (usar por padrão)
- HTML: div, span, input type="text", button, br, atributos (id, class, onclick, style).
- CSS: <style> no <head>, com seletores de tag, id e classe e propriedades visuais comuns.
- JS: let, Number(), operadores aritméticos (+ - * / %), comparações, if / else if / else, && || !, for (preferência), vetores (push, length, [i], percorrer com for), objetos simples ({chave: valor}, objeto.chave, adicionar propriedade depois), funções sem parâmetro chamadas por onclick, template string com ${}, métodos de string (length, includes, startsWith, endsWith), console.log, innerHTML (= limpa, += acumula).
- Padrões: contador, acumulador, maior/menor valor, flag true/false, média = soma / quantidade, i % n para pares e múltiplos.

### COM CAUTELA (só se simplificar de verdade)
while, break, continue, pop, splice, indexOf, join, Math.floor, Math.round, Math.random, toFixed, isNaN, trim, toUpperCase, toLowerCase.

### PROIBIDO
getElementById, querySelector, forEach/map/filter/reduce/sort, switch, do..., localStorage, setTimeout, e bibliotecas sem consultar antes. Vale também para qualquer coisa fora das listas acima.

### Exceções autorizadas
- Chart.js (gráficos do dashboard).
- Fontes Marcellus e Karla.
- Fora isso: sem frameworks, bibliotecas ou fontes externas.

## Estilo do usuário
- Um único arquivo .html: <style> no <head> e <script> depois do </html>.
- Acesso direto aos elementos pelo id, sem getElementById (ex: ipt_nome.value, div_mensagem.innerHTML).
- Ids com prefixo: ipt_ para inputs, div_ para divs de saída.
- Nomes de variáveis e funções em português.
- Estrutura simples e linear: poucas funções, sem truques, sem código "esperto". Preferir a solução mais básica que funcione, mesmo que seja mais longa.
- Inputs sempre type="text"; converter com Number() quando for número.
- Destaques dinâmicos com <span style="color: ..."> dentro do innerHTML; o resto do visual vai no CSS.
- Sem validações nem recursos além do necessário.

## Pontos a combinar quando chegarem (não decidir sozinho)
As regras acima cobrem o front-end simples. O projeto base (web-data-viz) exige coisas que estão fora das listas. Quando surgirem, dizer qual comando seria, explicar e perguntar antes de usar:
- Back-end em Node.js/Express e consultas SQL.
- fetch para falar com a API (cadastro, login, gravar prática, ler dados do dashboard).
- sessionStorage para manter o usuário logado.