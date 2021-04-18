const enviarEmail = (pessoaAprovada) => {
  const parte1 = `${pessoaAprovada.email}: Parabéns ${pessoaAprovada.nome}`;
  const mensagem = `${parte1} sua nota foi ${pessoaAprovada.nota}`;
  console.log(mensagem);
}

const listaDePessoasAprovadas = [
  { nome: 'Jerry Mors', email: 'jerry@example.com', nota: 51},
  { nome: 'Rabbit Jessica', email: 'jessica@example.com', nota: 101 },
  { nome: 'Ada Lovelace', email: 'ada.lovelace@example.com', nota: 150 },
  { nome: 'Bruno Gomes', email: 'bruno@example.com', nota: 0 },
  { nome: 'Augustina Vega', email: 'augustina@example.com', nota: 101 },
  { nome: 'Daniel Soto', email: 'daniel@example.com', nota: 50 },
  { nome: 'Emiliano Domingues', email: 'emiliano@example.com', nota: 150 },
  { nome: 'Carla Neta', email: 'carla@example.com', nota: 100 },
];
// Filtra as pessoas aprovadas dentro de cada array
// Filter espera que você passe uma função aonde será o proprio elemento que será verificado. Criamos uma condição aonde irá verificar se, pessoa.nome for maior ou igual a 100.
// o Filter irá retornar todos os Objetos que contenha este resultado
// o Filter também contem 3 parametros
const pessoasFiltradas = listaDePessoasAprovadas.filter((pessoa, index, array) => pessoa.nota >= 100);


// utilizamos o for each para filtrar dentro do objeto e retonar a msg inserida no enviarEmail
pessoasFiltradas.forEach((pessoa) => enviarEmail(pessoa));