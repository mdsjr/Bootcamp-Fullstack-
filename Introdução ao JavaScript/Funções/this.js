function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
	nome: 'Maria',
	idade: 23,
};

const pessoa2 = {
	nome: '11',
	idade: 11,
};

const pessoa3 = {
	nome: 'John',
	idade: 20,
};

console.log(calculaIdade.call(pessoa3, 40));
//console.log(calculaIdade.apply(pessoa2, [24]));