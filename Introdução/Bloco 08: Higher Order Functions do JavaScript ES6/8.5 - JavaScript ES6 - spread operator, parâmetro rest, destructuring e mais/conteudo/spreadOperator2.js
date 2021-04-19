const conhecimentosTrybe = {
    softSkills: true,
    hardSkills: true,
    trabalho: true,
}

const pessoa = {
    nome: 'nádia',
    idade: '28',
    cidade: 'bh'
}

const pessoaTryber = {
    ...pessoa,
    ...conhecimentosTrybe,
    esporte: 'Corrida',
}

console.log(pessoaTryber);