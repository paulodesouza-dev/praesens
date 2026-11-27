# Diário de Prompts — Praesens

Registro de como usei assistentes de IA no projeto: o que pedi, o que usei e o que mudei.

**Assistente(s) utilizado(s):** Claude (Anthropic)

| Data | Assistente | O que pedi | informações adicionais |
|---|---|---|---|
| 03/11/2026 | Claude | Enviei o contexto-base do Praesens e o PDF da Aula 09 e pedi um alinhamento do escopo |  | 
| 03/11/2026 | Claude | Pedi uma reorganização do Trello com cards, checklists, prazos e descrições |  | 
| 03/11/2026 | Claude | Pedi ajuda para criar o repositório, o README e a estrutura de pastas |  | 
| 03/11/2026 | Claude | Pedi correções no README (nome do autor, sem detalhes de identidade visual) e enviei referências visuais para o design |  | 
| 03/11/2026 | Claude | Pedi para remover a estrutura de pastas do README e enviei o diagrama técnico de outro trabalho como referência de arquitetura |  | 
| 06/11/2026 | Claude | Pedi para escrever uma versão sumarizada do README em língua inglesa para possíveis leitores internacionais |  | 
| 09/11/2026 | Claude | Pedi auxílio para entender melhor como seria a regra de negócio entre a entidade usuário e pática| Mudei a relação de n:n para 1:n entre a tabela usuário e prática |  
| 10/11/2026 | Claude | Ajustes finais na cardinalidade entere as entidades "prática" e "diário", envolvendo mais as perguntas: "como essas tabelas se relacionam e por quê?" |
| 11/11/2026 | Claude | Pedi para o claude me auxíliar na estruturação e formatação da documentação do projeto | Criação de deesenhos e polimento de explicações mais técnicas do projeto, além de estruturação adequada no storytelling da contextualização do projeto |
| 15/11/2026 | Claude | Pedi um laço for simples para validar algo no login e no cadastro | A primeira versão usava true/false e ficou difícil de explicar. Pedi para refazer com contadores (ex.: contar os espaços da senha), que é o que aprendi em aula |
| 15/11/2026 | Claude | Pedi para fazer o cadastro e o login funcionarem com o banco da VM, com um passo a passo para eu fazer à mão | Fiz as mudanças no model, no controller e no fetch seguindo o passo a passo, e testei no MySQL Workbench se os usuários estavam sendo gravados |
| 16/11/2026 | Claude | Perguntei o que era preciso para o usuário ir do login/cadastro para a prática e depois para a reflexão | A IA me guiou no primeiro passo. Depois pedi para ela montar o HTML e o CSS da página de prática, porque o CSS que eu tinha estava igual ao do login |
| 17/11/2026 | Claude | Com o prazo curto, pedi para a IA gerar de uma vez as telas de prática, reflexão e dashboard, além das rotas, controllers e models de prática e diário | Usei o código gerado como base. Eu passei as consultas SQL que queria (COUNT, SUM, AVG, últimos 7 dias, últimas 5 práticas) e as regras: código sem comentários, só comandos que aprendi, contador com setInterval no lugar de animação, textarea na reflexão e input password na senha. Depois estudei cada parte fazendo perguntas linha a linha |
| 17/11/2026 | Claude | Pedi ajuda com um erro ao salvar a prática | O erro era que a tabela pratica da VM não tinha as colunas duracaoSegundos e ciclos. Eu mesmo rodei o ALTER TABLE no banco para corrigir |
| 17/11/2026 | Claude | Questionei por que o banco salvava a reflexão se o usuário nunca mais via o que escreveu, e pedi para mostrar as reflexões no histórico da dashboard | A consulta do histórico passou a usar LEFT JOIN com a tabela diario |
| 19/11/2026 | Claude | Pedi para o gráfico de barras com Chart.js funcionar e enviei um mockup feito no Stitch como referência para a dashboard (KPIs com comparação semanal e gráfico dos últimos 7 dias) | Como eu não tinha práticas gravadas em semanas anteriores, pedi um script de dados de teste (dados-teste.sql) com práticas em datas passadas, só para conseguir testar e demonstrar a comparação entre semanas. Esses dados não são práticas reais |
| 19/11/2026 | Claude | Perguntei por que o gráfico aparecia vazio e como o Chart.js funcionava sem uma pasta própria no projeto | Entendi que o servidor precisava ser reiniciado depois de mudar o back-end e que o Chart.js é carregado por um link (CDN), por isso precisa de internet |
| 20/11/2026 | Claude | Pedi ajuda com mensagens de commit, com um erro de caminho no git add e perguntei o que era um package-lock.json vazio na raiz | Fiz os commits manualmente e apaguei o arquivo vazio |
| 20/11/2026 | Claude | Perguntei por que não é possível copiar a senha e colar no campo de confirmação | Entendi que o navegador bloqueia copiar de campos do tipo password |
| 20/11/2026 | Claude | Pedi para a senha exigir pelo menos uma letra maiúscula e uma minúscula, com aviso em tempo real usando oninput | Perguntei por que existia uma função separada para entrar e para verificar a senha, para conseguir explicar a diferença entre oninput e onclick |
| 21/11/2026 | Claude | Pedi para separar o CSS em um arquivo comum (estilo.css) e um arquivo para cada página | Pedi explicação das classes novas (requisito-ok e requisito-falta) |
| 21/11/2026 | Claude | Achei o indicador de tempo médio inútil e pedi para removê-lo | A IA removeu as comparações semanais por engano e eu corrigi: pedi para manter as comparações e tirar só o tempo médio. Depois pedi para voltar a mostrar a diferença de minutos em relação à semana passada |
| 21/11/2026 | Claude | Fiz várias perguntas para entender o dashboard: por que a página para de funcionar quando apago o span do nome, como funciona o sinal de "+" na comparação, como o sistema sabe o que é "semana passada", onde a API executa as consultas, como aparece a data de uma prática de ontem e para que serve o for dos dias da semana | Usei as respostas para me preparar para a apresentação |
| 22/11/2026 | Claude | Sugeri trocar a respiração da prática pelo suspiro fisiológico, que considero mais eficaz | A IA adaptou o contador para usar dois vetores (fases e tempos). Depois eu mesmo ajustei os tempos de cada fase |
| 22/11/2026 | Claude | Pedi várias versões da seção de contexto da home (lista, blocos, cards com imagem e texto) até chegar no visual que eu queria | Enviei um site de outro trabalho como inspiração. Testei colocar a minha história pessoal no site, mas decidi deixar isso só nos slides. Eu escrevi parte dos textos e escolhi as imagens dos cards |
| 23/11/2026 | Claude | Enviei a documentação e pedi para comparar com o projeto pronto e apontar o que estava desatualizado | Atualizei no Word as partes de validações, padrão de respiração, indicadores e consultas SQL, que tinham mudado durante o desenvolvimento |
| 23/11/2026 | Claude | Pedi para atualizar este diário de prompts com tudo o que usei de IA desde 15/11 | As datas entre 15/11 e 23/11 são aproximadas, porque fiz muitos pedidos seguidos nesse período |
