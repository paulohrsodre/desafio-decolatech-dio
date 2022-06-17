const alunos = [
    {
        nome: 'Paulo',
        nota: 10,
        turma: '1A'
    },
    {
        nome: 'Maria',
        nota: 7,
        turma: '1B'
    },
    {
        nome: 'João',
        nota: 9,
        turma: '3C'
    },
    {
        nome: 'Pedro',
        nota: 5,
        turma: '2B'
    },
    {
        nome: 'Márcia',
        nota: 8,
        turma: '3A'
    },
    {
        nome: 'Janete',
        nota: 4,
        turma: '1C'
    },
    {
        nome: 'Sofia',
        nota: 10,
        turma: '3B'
    }
];

function alunosAprovados(array, media) {
    let aprovados = []

    for(let i = 0; i < array.length; i++) {
        const { nota, nome } = array[i];

        if(nota >= media) {
            aprovados.push(nome);
        }
    }

    return aprovados;
}

console.log(alunosAprovados(alunos, 7));