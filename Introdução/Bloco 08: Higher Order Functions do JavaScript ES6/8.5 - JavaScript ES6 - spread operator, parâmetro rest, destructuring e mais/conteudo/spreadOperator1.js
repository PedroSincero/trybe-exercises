const carros = ['gol', 'hb20', 'focus'];
const motos = ['biz', 'r1'];
//spread operator é definido pelos 3 pontos
// ...
const veiculos = ['f40',...carros,'uno', ...motos];
// [...array, ...array2];
// [array[0], array[1], array2[0], array2[1], array2[2]];
// espalha os valores dentro do array
console.log(veiculos);