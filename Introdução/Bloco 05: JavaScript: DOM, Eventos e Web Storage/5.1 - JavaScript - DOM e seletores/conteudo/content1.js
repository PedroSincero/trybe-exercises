//acessa o elemento do ID
console.log(document.getElementById('teste'));
console.log(document.getElementById('teste2'));
// acessa o conteudo da ID e returna TODO o conteudo
console.log(document.getElementById('teste2').innerHTML);
// acessa o conteudo da ID e returna APENAS o Texto
console.log(document.getElementById('teste').innerText);
// acessa o conteudo da ID e returna O STYLE 
console.log(document.getElementById('teste').style);
// acessa o conteudo da ID, APENAS TEXTO, e ALTERA O TEXTO
document.getElementById('teste').innerText = "Aprendizados da Aula de Hoje";