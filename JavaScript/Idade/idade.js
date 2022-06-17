const pessoa1 = {
    nome: 'Paulo',
    idade: 35
}

const pessoa2 = {
    nome: 'Carla',
    idade: 21
}

const pessoa3 = {
    nome: 'Sandra',
    idade: 40
}

const pessoa4 = {
    nome: 'Isaac',
    idade: 25
}

function calulaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

console.log(calulaIdade.call(pessoa2, 30));

console.log(calulaIdade.apply(pessoa1, [20]));