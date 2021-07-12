const { data } = require('./dataC01.js')
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const project = 'C01';
const fs = require('fs')

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ EX00 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
async function ex00() {
	const folder = 'ex00';
	const file = 'ft_ft';
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
					(stdout == 42) ? console.log(param + ' foi alterado para ' + stdout + ' ✅') : console.log(param + ' ❌ RETORNOU DIFERENTE...');
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
	const file = 'ft_ultimate_ft';
	console.log('Testando ' + folder + '... 🕒');

	const { stdout, stderr } = await exec('cat '+data.nameUser+'/'+folder+'/'+file+'.c | grep "void	ft_ultimate_ft"');

	var response = stdout.substring(stdout.indexOf("*"));
	let count = 0;
	for (let i = 0; i < response.length; i++) {
		if (response[i] == '*') count++;
	}

	console.log("Quantidade de asteristicos: " + count);

	// Tratando condicoes
	count == 9 ?
		console.log(''+project+' - ' + folder + ' - OK! ✅') : console.log('' + folder + ' - ERROR (Não contém 9 caracteres) ❗️');
	console.log("#Stdout: '" + stdout + "'");
	if (stderr) console.log('Encontrado erros: ' + stderr + ' ❌');
};

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ EX02 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
async function ex02() {
	const folder = 'ex02';
	const file = 'ft_swap';
	console.log('Testando ' + folder + '... 🕒');
	try {
		const { stdout, stderr } = await exec('gcc -o ' + file + ' main_' + file + '.c ' +
			data.nameUser
			+ '/' + folder + '/' + file + '.c');

		if (stdout) console.log('stdout:', stdout);
		if (stderr) console.log('stderr:', stderr);

		exec('./' + file + ' "' + data.paramsEx02.a + '" "' + data.paramsEx02.b + '"',
		(error, stdout, stderr) => {

			// Tratando condicoes
			(stdout == data.paramsEx02.b,data.paramsEx02.a) ? console.log(data.paramsEx02.a,data.paramsEx02.b + ' foi alterado para ' + stdout + ' ✅') : console.log(stdout + ' ❌ RETORNOU DIFERENTE...');
			if (error || stderr) console.log('Encontrado erros com o parametro: ' + stdout +' ❌');
		});
	} catch (err) {
		console.log('❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌');
		console.error(err);
	};
};

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ EX03 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
async function ex03() {
	const folder = 'ex03';
	const file = 'ft_div_mod';
	console.log('Testando ' + folder + '... 🕒');
	try {
		const { stdout, stderr } = await exec('gcc -o ' + file + ' main_' + file + '.c ' +
			data.nameUser
			+ '/' + folder + '/' + file + '.c');

		if (stdout) console.log('stdout:', stdout);
		if (stderr) console.log('stderr:', stderr);

		exec('./' + file + ' "' + data.paramsEx03.a + '" "' + data.paramsEx03.b + '"',
		(error, stdout, stderr) => {

			let div = data.paramsEx03.a / data.paramsEx03.b;
			let rest = data.paramsEx03.a % data.paramsEx03.b;
			var stdout = stdout.split(',');
			// Tratando condicoes
			((stdout[0] == (Math.trunc(div).toString())) && (stdout[1] == (Math.trunc(rest).toString()))) ?
			console.log( 'Divisão: ' + Math.trunc(div).toString() + ', Resto: '+Math.trunc(rest).toString()+' ✅') :
			console.log(stdout + ' ❌ RETORNOU DIFERENTE...');
			if (error || stderr) console.log('Encontrado erros com o parametro: ' + stdout +' ❌');
		});
	} catch (err) {
		console.log('❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌');
		console.error(err);
	};
};

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ EX01 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// async function ex01() {
// 	const folder = 'ex01';
// 	const file = 'ft_print_alphabet';
// 	console.log('Testando ' + folder + '... 🕒');
// 	try {
// 		const { stdout, stderr } = await exec('gcc -o ' + file + ' main_' + file + '.c ' +
// 			data.nameUser
// 			+ '/' + folder + '/' + file + '.c');

// 		if (stdout) console.log('stdout:', stdout);
// 		if (stderr) console.log('stderr:', stderr);

// 		exec('./' + file + ' ',
// 			(error, stdout, stderr) => {


// 				console.log("Tamanho do alfabeto: " + stdout.length);
// 				console.log('Começa com: ' + stdout[0]);
// 				console.log('Acaba com: ' + (stdout[stdout.length - 1]));

// 				// Tratando condicoes
// 				(stdout.length == 26 &&
// 					stdout[0] == 'a' &&
// 					stdout[stdout.length - 1] == 'z') ?
// 					console.log('C00 - ' + folder + ' - OK! ✅') : console.log('' + folder + ' - ERROR (Não contém AS REGRAS) ❗️');
// 				console.log("#Stdout: '" + stdout + "'");
// 				if (error || stderr) console.log('Encontrado erros: ' + stderr + ' ❌');
// 			});

// 	} catch (err) {
// 		console.log('❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌');
// 		console.error(err);
// 	};
// };


console.log('INICIANDO ORINETE...');
console.log('Desenvolvedor: ' + data.nameUser);

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
			}, 800);
		}, 800);
	}, 800);
}, 800);





async function space() {
	console.log("\n");
	console.log('-----------------------------------------------');
	console.log("\n");
}
