const { data } = require('./dataC04.js')
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const project = 'C04';

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ EX00 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
async function ex00() {
	const folder = 'ex00';
	const file = 'ft_strlen';
	const question = '"Escreva uma função que contenha o número de caracteres em uma cadeia de caracteres e que retorne o número encontrado:"';
	console.log('Testando ' + folder + '... 🕒');
	try {
		const { stdout, stderr } = await exec('gcc -o ' + file + ' main_' + file + '.c ' +
			data.nameUser
			+ '/' + folder + '/' + file + '.c');

		if (stdout) console.log('stdout:', stdout);
		if (stderr) console.log('stderr:', stderr);
		console.log(question+' \n');

		await data.paramsEx00.forEach(param => {
			exec('./' + file + ' ' + param,
				(error, stdout, stderr) => {
					const result = param.length;
					console.log('Parametro: "'+param+'"');
					// Tratando condicoes
					(stdout == result) ? console.log('"'+param + '" é tem o tamanho "' + stdout + '" ✅ \n') : console.log(param + ' RETORNOU DIFERENTE... "'+stdout+'" ❌\n');
					if (error || stderr) console.log('Encontrado erros com o parametro: ' + param + ' ❌');
				});
		});
	} catch (err) {
		console.log('❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌');
		console.error(err);
		if (err.code == 1) {
			console.log("⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️");
			console.log("ARQUIVO ESTA EM FALTA... 🧐");
			console.log("🆙 🆙 🆙 🆙 🆙 🆙 🆙 🆙 🆙");
		} else console.error(err);
	};
};

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ EX01 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
async function ex01() {
	const folder = 'ex01';
	const file = 'ft_putstr';
	const question = '"Escreva uma função que mostre um a um os caracteres de uma string na tela.'+
	'•O endereço do primeiro caractere da cadeia está contido no ponteiro passado como parâmetro na função:"';
	console.log('Testando ' + folder + '... 🕒');
	try {
		const { stdout, stderr } = await exec('gcc -o ' + file + ' main_' + file + '.c ' +
			data.nameUser
			+ '/' + folder + '/' + file + '.c');

		if (stdout) console.log('stdout:', stdout);
		if (stderr) console.log('stderr:', stderr);
		console.log(question+' \n');

		await data.paramsEx01.forEach(param => {
			exec('./' + file + ' ' + param,
				(error, stdout, stderr) => {
					console.log('Parametro: "'+param+'"');
					// Tratando condicoes
					(stdout == param) ? console.log('"'+param + '" é exatamente igual a "' + stdout + '" ✅ \n') : console.log(param + ' RETORNOU DIFERENTE... "'+stdout+'" ❌\n');
					if (error || stderr) console.log('Encontrado erros com o parametro: ' + param + ' ❌');
				});
		});
	} catch (err) {
		console.log('❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌');
		console.error(err);
		if (err.code == 1) {
			console.log("⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️");
			console.log("ARQUIVO ESTA EM FALTA... 🧐");
			console.log("🆙 🆙 🆙 🆙 🆙 🆙 🆙 🆙 🆙");
		} else console.error(err);
	};
};

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ EX02 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
async function ex02() {
	const folder = 'ex02';
	const file = 'ft_putnbr';
	const question = '"Escreva uma função que mostre um número passado como parâmetro. A função'+
	'deverá ser capaz de mostrar a totalidade dos valores possíveis em uma variável de tipo int:"';
	console.log('Testando ' + folder + '... 🕒');
	try {
		const { stdout, stderr } = await exec('gcc -o ' + file + ' main_' + file + '.c ' +
			data.nameUser
			+ '/' + folder + '/' + file + '.c');

		if (stdout) console.log('stdout:', stdout);
		if (stderr) console.log('stderr:', stderr);
		console.log(question+' \n');

		await data.paramsEx02.forEach(param => {
			exec('./' + file + ' ' + param,
				(error, stdout, stderr) => {
					console.log('Parametro: "'+param+'"');
					// Tratando condicoes
					(stdout == param) ? console.log('"'+param + '" é exatamente igual a "' + stdout + '" ✅ \n') : console.log(param + ' RETORNOU DIFERENTE... "'+stdout+'" ❌\n');
					if (error || stderr) console.log('Encontrado erros com o parametro: ' + param + ' ❌');
				});
		});
	} catch (err) {
		console.log('❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌');
		console.error(err);
		if (err.code == 1) {
			console.log("⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️");
			console.log("ARQUIVO ESTA EM FALTA... 🧐");
			console.log("🆙 🆙 🆙 🆙 🆙 🆙 🆙 🆙 🆙");
		} else console.error(err);
	};
};

console.log('INICIANDO ORINETE...\n');
console.log('Desenvolvedor: ' + data.nameUser + '\n');

setTimeout(async () => {
	space();
	ex00();
	setTimeout(async () => {
		space();
		ex01();
		setTimeout(async () => {
			space();
			ex02();
	// 		setTimeout(async () => {
	// 			space();
	// 			ex03();
	// 			setTimeout(async () => {
	// 				space();
	// 				ex04();
	// 				setTimeout(async () => {
	// 					space();
	// 					ex05();
						setTimeout(async () => {
							space();
							checkNorminete();
						}, 750);
	// 				}, 750);
	// 			}, 750);
	// 		}, 750);
		}, 750);
	}, 750);
}, 750);

async function space() {
	console.log("\n");
	console.log('-----------------------------------------------');
	console.log("\n");
}

async function checkNorminete() {
	space();
	console.log("🧠 Checking Norminete 🧠");
	try {
		const { stdout, stderr } = await exec('norminette -R CheckForbiddenSourceHeader ' + data.nameUser);
		if (stdout) console.log('stdout:', stdout);
		if (stderr) console.log('stderr:', stderr);
	} catch (err) {
		console.log('❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌');
		console.error(err.stdout);
	};
	space();
}


function strcmp(str1, str2) {
	let maior = (str1.length >= str2.length) ? str1 : str2;
	for (let i = 0; i < maior.length; i++) {
		if ((str1[i] ? str1[i].charCodeAt(0) : 0) != (str2[i] ? str2[i].charCodeAt(0) : 0)) {
			return (str1[i] ? str1[i].charCodeAt(0) : 0) - (str2[i] ? str2[i].charCodeAt(0) : 0);
		}
	}
	return 0;
}

function strncmp(str1, str2, int) {
	let maior = (str1.length >= str2.length) ? str1 : str2;
	for (let i = 0; i < int; i++) {
		if ((str1[i] ? str1[i].charCodeAt(0) : 0) != (str2[i] ? str2[i].charCodeAt(0) : 0)) {
			return (str1[i] ? str1[i].charCodeAt(0) : 0) - (str2[i] ? str2[i].charCodeAt(0) : 0);
		}
	}
	return 0;
}

function strcat(str1, str2) {
	return str1 + str2;
}
function strncat(str1, str2, int) {
	if (int >= str2.length) return str1 + str2;
	else {
		for (let i = 0; i < int; i++) {
			str1 += (str2[i]);
		}
		return str1;
	}
}
function strstr(str1, to_find) {
	let position = str1.indexOf(to_find);
	if (position >= 0) {
		return str1.slice(position);
	} else return "(null)";
}
