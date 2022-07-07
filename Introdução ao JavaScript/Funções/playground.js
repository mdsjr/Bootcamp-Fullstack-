const alunos = [
	{
		nome: 'Junior',
		nota: 10,
		turma: '1B',
	},
	{
		nome: 'Jefferson',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Daniele',
		nota: 3,
		turma: '2C',
	},
];

function alunosAprovados(alunos, media) {
	let aprovados = [];

	for (let i = 0; i < alunos.length; i++) {
		let { nota, nome } = alunos[i];

		if (nota >= media) {
			aprovados.push(nome);
		}
	}

	return aprovados;
}

console.log(alunosAprovados(alunos, 5));