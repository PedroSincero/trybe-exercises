# Exercício 1(ex1.js)

Crie uma função de primeira classe que retorna um objeto ```{ nomeCompleto, email }``` de uma nova pessoa contratada. Passe sua função como parâmetro da HOF ```newEmployees``` para criar cada pessoa contratada em seu respctivo ```id``` . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato ```nome_da_pessoa@trybe.com``` .

# Exercício 2(ex2.js)

Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

# Exercício 3(ex3.js)

Crie uma HOF utilizando o conceito de ```currying``` . Passe como parâmetros a resposta correta (Ex: Gabarito) para uma pergunta e uma resposta a ser validada (Ex: Resposta de uma pessoa). Sua HOF deve checar se a resposta enviada pela pessoa usuária é correta. Se for, a função retorna ```true``` , se não for, a função retorna ```false``` .

* A validação da resposta não deve ser case sensitive.
* Deve ser possível chamar a HOF criada de forma encadeada (Ex: checarResposta('Gabarito')('Teste'))

# Exercício 4(ex4.js)

Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem checadas (Respostas da pessoa estudante) e o terceiro é uma função que checa se a resposta está correta e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.

* Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.
