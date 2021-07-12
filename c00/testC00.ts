const { data } = require('./dataC00.js')
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const project = 'C00';

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ EX00 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
async function ex00() {
	const folder = 'ex00';
	const file = 'ft_putchar';
	console.log('Testando ' + folder + '... 🕒');
	try {
		const { stdout, stderr } = await exec('gcc -o ' + file + ' main_' + file + '.c ' +
			data.nameUser
			+ '/' + folder + '/' + file + '.c');

		if (stdout) console.log('stdout:', stdout);
		if (stderr) console.log('stderr:', stderr);

		await data.paramsEx00.forEach(param => {
			exec('./' + file + ' ' + param,
				(error, stdout, stderr) => {
					// Tratando condicoes
					(param == stdout) ? console.log(param + ' É UM PARAMETRO VÁLIDO ✅') : console.log(param + ' ❌ RETORNOU DIFERENTE...');
					if (error || stderr) console.log('❌ Encontrado erros com o parametro: ' + param);
				});
		});

	} catch (err) {
		console.log('❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌');
		console.error(err);
	};
};

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ EX01 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
async function ex01() {
	const folder = 'ex01';
	const file = 'ft_print_alphabet';
	console.log('Testando ' + folder + '... 🕒');
	try {
		const { stdout, stderr } = await exec('gcc -o ' + file + ' main_' + file + '.c ' +
			data.nameUser
			+ '/' + folder + '/' + file + '.c');

		if (stdout) console.log('stdout:', stdout);
		if (stderr) console.log('stderr:', stderr);

		exec('./' + file + ' ',
			(error, stdout, stderr) => {


				console.log("Tamanho do alfabeto: " + stdout.length);
				console.log('Começa com: ' + stdout[0]);
				console.log('Acaba com: ' + (stdout[stdout.length - 1]));

				// Tratando condicoes
				(stdout.length == 26 &&
					stdout[0] == 'a' &&
					stdout[stdout.length - 1] == 'z') ?
					console.log('C00 - ' + folder + ' - OK! ✅') : console.log('' + folder + ' - ERROR (Não contém AS REGRAS) ❗️');
				console.log("#Stdout: '" + stdout + "'");
				if (error || stderr) console.log('Encontrado erros: ' + stderr + ' ❌');
			});

	} catch (err) {
		console.log('❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌');
		console.error(err);
	};
};

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ EX02 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
async function ex02() {
	const folder = 'ex02';
	const file = 'ft_print_reverse_alphabet';
	console.log('Testando ' + folder + '... 🕒');
	try {
		const { stdout, stderr } = await exec('gcc -o ' + file + ' main_' + file + '.c ' +
			data.nameUser
			+ '/' + folder + '/' + file + '.c');

		if (stdout) console.log('stdout:', stdout);
		if (stderr) console.log('stderr:', stderr);

		exec('./' + file + ' ',
			(error, stdout, stderr) => {


				console.log("Tamanho do alfabeto: " + stdout.length);
				console.log('Começa com: ' + stdout[0]);
				console.log('Acaba com: ' + (stdout[stdout.length - 1]));

				// Tratando condicoes
				(stdout.length == 26 &&
					stdout[0] == 'z' &&
					stdout[stdout.length - 1] == 'a') ?
					console.log(project + ' - ' + folder + ' - OK! ✅') : console.log(project + ' ' + folder + ' - ERROR (Não contém AS REGRAS) ❗️');
				console.log("#Stdout: '" + stdout + "'");
				if (error || stderr) console.log('Encontrado erros: ' + stderr +' ❌');
			});

	} catch (err) {
		console.log('❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌');
		console.error(err);
	};
};

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ EX03 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
async function ex03() {
	const folder = 'ex03';
	const file = 'ft_print_numbers';
	console.log('Testando ' + folder + '... 🕒');
	try {
		const { stdout, stderr } = await exec('gcc -o ' + file + ' main_' + file + '.c ' +
			data.nameUser
			+ '/' + folder + '/' + file + '.c');

		if (stdout) console.log('stdout:', stdout);
		if (stderr) console.log('stderr:', stderr);

		exec('./' + file + ' ',
			(error, stdout, stderr) => {

				console.log("Tamanho do Array: " + stdout.length);
				console.log('Começa com: ' + stdout[0]);
				console.log('Acaba com: ' + (stdout[stdout.length - 1]));

				// Tratando condicoes
				(stdout.length == 10 &&
					stdout[0] == '0' &&
					stdout[stdout.length - 1] == '9') ?
					console.log(project + ' - ' + folder + ' - OK! ✅') : console.log(project + ' ' + folder + ' - ERROR (Não contém AS REGRAS) ❗️');
				console.log("#Stdout: '" + stdout + "'");
				if (error || stderr) console.log('Encontrado erros: ' + stderr +' ❌');
			});

	} catch (err) {
		console.log('❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌');
		console.error(err);
	};
};

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ EX04 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
async function ex04() {
	const folder = 'ex04';
	const file = 'ft_is_negative';
	console.log('Testando ' + folder + '... 🕒');
	try {
		const { stdout, stderr } = await exec('gcc -o ' + file + ' main_' + file + '.c ' +
			data.nameUser
			+ '/' + folder + '/' + file + '.c');

		if (stdout) console.log('stdout:', stdout);
		if (stderr) console.log('stderr:', stderr);

		await data.paramsEx04.forEach(param => {
			exec('./' + file + ' ' + param,
				(error, stdout, stderr) => {
					// Tratando condicoes

					if (param < 0 && stdout == 'N') console.log(param + " Está CORRETO ✅");
					else if (param >= 0 && stdout == 'P') console.log(param + " Está CORRETO ✅")
					else {
						console.log('❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌');
						console.log('@@@@@@@@@@@@@@@ VALOR INCORRETO @@@@@@@@@@@@@@@');
						console.log('❌ VALOR TESTADO: ' + param + ' VALOR DEFINIDO: ' + stdout);
					}
				});
		});

	} catch (err) {
		console.log('❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌');
		console.error(err);
	};
};

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ EX05 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
async function ex05() {
	const folder = 'ex05';
	const file = 'ft_print_comb';
	console.log('Testando ' + folder + '... 🕒');
	try {
		const { stdout, stderr } = await exec('gcc -o ' + file + ' main_' + file + '.c ' +
			data.nameUser
			+ '/' + folder + '/' + file + '.c');

		if (stdout) console.log('stdout:', stdout);
		if (stderr) console.log('stderr:', stderr);

		exec('./' + file,
		(error, stdout, stderr) => {

			console.log("Tamanho do Array: " + stdout.length);
			console.log('Começa com: ' + stdout[0],stdout[1],stdout[2]);
			console.log('Posicao 345: ' + stdout[345],stdout[346],stdout[347]);
			console.log('Acaba com: ' + stdout[595],stdout[596],stdout[597]);

			// Tratando condicoes
			(stdout.length == 598 &&
				stdout[0] == '0' &&
				stdout[stdout.length - 1] == '9' &&
				stdout[345] == '2') ?
				console.log(project + ' - ' + folder + ' - OK! ✅') : console.log(project + ' ' + folder + ' - ERROR (Não contém AS REGRAS) ❗️');
			console.log("----------------------------------------");
			console.log("#Stdout: '" + stdout + "'");
			if (error || stderr) console.log('Encontrado erros: ' + stderr +' ❌');
		});

	} catch (err) {
		console.log('❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌');
		console.error(err);
	};
};

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ EX06 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
async function ex06() {
	const folder = 'ex06';
	const file = 'ft_print_comb2';
	console.log('Testando ' + folder + '... 🕒');
	try {
		const { stdout, stderr } = await exec('gcc -o ' + file + ' main_' + file + '.c ' +
			data.nameUser
			+ '/' + folder + '/' + file + '.c');

		if (stdout) console.log('stdout:', stdout);
		if (stderr) console.log('stderr:', stderr);

		exec('./' + file,
		(error, stdout, stderr) => {

			console.log("Tamanho do Array: " + stdout.length);
			console.log('Começa com: ' + stdout[0],stdout[1],stdout[2],stdout[3],stdout[4]);
			console.log('Posicao 30000: ' + stdout[30000],stdout[30001],stdout[30002],);
			console.log('Acaba com: ' +
			stdout[stdout.length - 5],
			stdout[stdout.length - 4],
			stdout[stdout.length - 2],
			stdout[stdout.length - 1]
			);

			// Tratando condicoes
			(stdout.length == 34648 &&
				stdout[0] == '0' &&
				stdout[stdout.length - 1] == '9' &&
				stdout[30000] == ',') ?
				console.log(project + ' - ' + folder + ' - OK! ✅') : console.log(project + ' ' + folder + ' - ERROR (Não contém AS REGRAS) ❗️');
			console.log("----------------------------------------");
			// console.log("#Stdout: '" + stdout + "'");
			if (error || stderr) console.log('Encontrado erros: ' + stderr +' ❌');
		});

	} catch (err) {
		console.log('❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌');
		console.error(err);
	};
};

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ EX07 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
async function ex07() {
	const folder = 'ex07';
	const file = 'ft_putnbr';
	console.log('Testando ' + folder + '... 🕒');
	try {
		const { stdout, stderr } = await exec('gcc -o ' + file + ' main_' + file + '.c ' +
			data.nameUser
			+ '/' + folder + '/' + file + '.c');

		if (stdout) console.log('stdout:', stdout);
		if (stderr) console.log('stderr:', stderr);

		await data.paramsEx07.forEach(param => {
			exec('./' + file + ' ' + param,
				(error, stdout, stderr) => {
					// Tratando condicoes

					if (param == stdout) console.log(param + " Mostrou CORRETAMENTE ✅");
					else {
						console.log('❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌');
						console.log('@@@@@@@@@@@@@@@ VALOR INCORRETO @@@@@@@@@@@@@@@');
						console.log('❌ VALOR TESTADO: ' + param + ' VALOR DEFINIDO: ' + stdout);
					}
				});
		});
	} catch (err) {
		console.log('❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌');
		console.error(err);
	};
};

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ EX08 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
async function ex08() {
	const folder = 'ex08';
	const file = 'ft_print_combn';
	console.log('Testando ' + folder + '... 🕒');
	try {
		const { stdout, stderr } = await exec('gcc -o ' + file + ' main_' + file + '.c ' +
			data.nameUser
			+ '/' + folder + '/' + file + '.c');

		if (stdout) console.log('stdout:', stdout);
		if (stderr) console.log('stderr:', stderr);

		await data.paramsEx08.forEach(param => {
			exec('./' + file + ' ' + param,
				(error, stdout, stderr) => {
					// Tratando condicoes

					console.log("Comprimento " + stdout.length);
					console.log("Valor testado: " + param);

					switch (param) {
						case 1:
							stdout.length == 28 ? console.log(param + " Mostrou CORRETAMENTE ✅") : 
							console.log('❌ VALOR TESTADO: ' + param + ' VALOR DEFINIDO: ' + stdout + ' ❌');
							break;
						case 2:
							stdout.length == 178 ? console.log(param + " Mostrou CORRETAMENTE ✅") : 
							console.log('❌ VALOR TESTADO: ' + param + ' VALOR DEFINIDO: ' + stdout + ' ❌');
							break;
						case 4:
							stdout.length == 1258 ? console.log(param + " Mostrou CORRETAMENTE ✅") : 
							console.log('❌ VALOR TESTADO: ' + param + ' VALOR DEFINIDO: ' + stdout + ' ❌');
							break;
						case 6:
							stdout.length == 1678 ? console.log(param + " Mostrou CORRETAMENTE ✅") : 
							console.log('❌ VALOR TESTADO: ' + param + ' VALOR DEFINIDO: ' + stdout + ' ❌');
							break;
						case 8:
							stdout.length == 448 ? console.log(param + " Mostrou CORRETAMENTE ✅") : 
							console.log('❌ VALOR TESTADO: ' + param + ' VALOR DEFINIDO: ' + stdout + ' ❌');
							break;
						case 9:
							stdout.length == 108 ? console.log(param + " Mostrou CORRETAMENTE ✅") : 
							console.log('❌ VALOR TESTADO: ' + param + ' VALOR DEFINIDO: ' + stdout + ' ❌');
							break;
					
						default:
							break;
					}
					// 	console.log('❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌');
					// 	console.log('@@@@@@@@@@@@@@@ VALOR INCORRETO @@@@@@@@@@@@@@@');
					// 	console.log('❌ VALOR TESTADO: ' + param + ' VALOR DEFINIDO: ' + stdout);
				});
		});
	} catch (err) {
		console.log('❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌');
		console.error(err);
	};
};


console.log('INICIANDO ORINETE...');
console.log('Desenvolvedor: '+ data.nameUser);

setTimeout(async () => {
	space();
	ex00();
	setTimeout(async () => {
		space();
		ex01();
		setTimeout(async () => {
			space();
			ex02();
			setTimeout(async () => {
				space();
				ex03();
				setTimeout(async () => {
					space();
					ex04();
					setTimeout(async () => {
						space();
						ex05();
						setTimeout(async () => {
							space();
							ex06();
							setTimeout(async () => {
								space();
								ex07();
								setTimeout(async () => {
									space();
									ex08();
								}, 800);
							}, 800);
						}, 800);
					}, 800);
				}, 800);
			}, 800);
		}, 800);
	}, 800);
}, 800);






async function space() {
	console.log("\n");
	console.log('-----------------------------------------------');
	console.log("\n");
}
