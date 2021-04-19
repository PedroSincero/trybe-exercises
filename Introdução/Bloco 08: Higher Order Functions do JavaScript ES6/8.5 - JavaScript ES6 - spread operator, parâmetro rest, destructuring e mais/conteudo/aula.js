const teste = ['pedrinho','matador'];

console.log(...teste);

// rest 
// rest é colocar os ... dentro de uma function para ela ser uma funcionar sem limite, cria um array sem limite de tamanho
const sun = (...numbers) => {
    console.log(numbers);
}