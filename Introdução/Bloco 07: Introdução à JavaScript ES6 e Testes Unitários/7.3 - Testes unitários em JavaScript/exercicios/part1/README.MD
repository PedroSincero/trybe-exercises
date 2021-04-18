# Praticando a implementação de testes - Parte 1

Você vai implementar vários testes em contextos diferentes a fim de consolidar a mecânica e também a forma de pensar em testes.

1. A função ```sum(a, b)``` retorna a soma do parâmetro ```a``` com o ```b```.

  * Teste se o retorno de ```sum(4, 5)``` é ```9```.
  * Teste se o retorno de ```sum(0, 0)``` é ```0```.
  * Teste se a função ```sum``` lança um erro quando os parâmetros são ```4``` e ```"5"``` (string 5).
  * Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada ```sum(4, "5")```.

2. A função ```myRemove(arr, item)``` recebe um array ```arr``` e retorna uma cópia desse array sem o elemento ```item``` caso ele exista no array.

  * Verifique se a chamada ```myRemove([1, 2, 3, 4], 3)``` retorna o array esperado.
  * Verifique se a chamada ```myRemove([1, 2, 3, 4], 3)``` **não** retorna o array ```[1, 2, 3, 4]```.
  * Verifique se o array passado por parâmetro **não** sofreu alterações.
  * Verifique se a chamada ```myRemove([1, 2, 3, 4], 5)``` retorna o array esperado.

3. A função ```myRemoveWithoutCopy(arr, item)``` recebe um array ```arr``` e retorna o próprio array sem o elemento ```item``` caso ele exista no array

  * Verifique se a chamada ```myRemoveWithoutCopy([1, 2, 3, 4], 3)``` retorna o array esperado.
  * Verifique se a chamada ```myRemoveWithoutCopy([1, 2, 3, 4], 3)``` **não** retorna o array ```[1, 2, 3, 4]```.
  * Faça uma chamada para a função ```myRemoveWithoutCopy``` e verifique se o array passado por parâmetro sofreu alterações.
  * Verifique se a chamada ```myRemoveWithoutCopy([1, 2, 3, 4], 5)``` retorna o array esperado.

4. 
