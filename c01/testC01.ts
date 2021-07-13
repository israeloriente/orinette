const { data } = require('./dataC01.js')
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const project = 'C01';

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

	const { stdout, stderr } = await exec('cat ' + data.nameUser + '/' + folder + '/' + file + '.c | grep "void	ft_ultimate_ft"');

	var response = stdout.substring(stdout.indexOf("*"));
	let count = 0;
	for (let i = 0; i < response.length; i++) {
		if (response[i] == '*') count++;
	}

	console.log("Quantidade de asteristicos: " + count);

	// Tratando condicoes
	count == 9 ?
		console.log('' + project + ' - ' + folder + ' - OK! ✅') : console.log('' + folder + ' - ERROR (Não contém 9 caracteres) ❗️');
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
				(stdout == data.paramsEx02.b, data.paramsEx02.a) ? console.log(data.paramsEx02.a, data.paramsEx02.b + ' foi alterado para ' + stdout + ' ✅') : console.log(stdout + ' ❌ RETORNOU DIFERENTE...');
				if (error || stderr) console.log('Encontrado erros com o parametro: ' + stdout + ' ❌');
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
					console.log('Divisão: ' + Math.trunc(div).toString() + ', Resto: ' + Math.trunc(rest).toString() + ' ✅') :
					console.log(stdout + ' ❌ RETORNOU DIFERENTE...');
				if (error || stderr) console.log('Encontrado erros com o parametro: ' + stdout + ' ❌');
			});
	} catch (err) {
		console.log('❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌');
		console.error(err);
	};
};

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ EX04 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
async function ex04() {
	const folder = 'ex04';
	const file = 'ft_ultimate_div_mod';
	console.log('Testando ' + folder + '... 🕒');
	try {
		const { stdout, stderr } = await exec('gcc -o ' + file + ' main_' + file + '.c ' +
			data.nameUser
			+ '/' + folder + '/' + file + '.c');

		if (stdout) console.log('stdout:', stdout);
		if (stderr) console.log('stderr:', stderr);

		exec('./' + file + ' "' + data.paramsEx04.a + '" "' + data.paramsEx04.b + '"',
			(error, stdout, stderr) => {

				let div = data.paramsEx04.a / data.paramsEx04.b;
				let rest = data.paramsEx04.a % data.paramsEx03.b;
				var stdout = stdout.split(',');

				console.log("A = ", stdout[0]);
				console.log("B = ", stdout[1]);
				console.log("Divisao = ", div);
				console.log("Resto = ", rest);

				// Tratando condicoes
				((stdout[0] == (Math.trunc(div).toString())) && (stdout[1] == (Math.trunc(rest).toString()))) ?
					console.log('Divisão: ' + Math.trunc(div).toString() + ', Resto: ' + Math.trunc(rest).toString() + ' ✅') :
					console.log(stdout + ' ❌ RETORNOU DIFERENTE...');
				if (error || stderr) console.log('Encontrado erros com o parametro: ' + stdout + ' ❌');
			});
	} catch (err) {
		console.log('❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌');
		console.error(err);
	};
};

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ EX05 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
async function ex05() {
	const folder = 'ex05';
	const file = 'ft_putstr';
	console.log('Testando ' + folder + '... 🕒');
	try {
		const { stdout, stderr } = await exec('gcc -o ' + file + ' main_' + file + '.c ' +
			data.nameUser
			+ '/' + folder + '/' + file + '.c');

		if (stdout) console.log('stdout:', stdout);
		if (stderr) console.log('stderr:', stderr);

		await data.paramsEx05.forEach(param => {
			exec('./' + file + ' ' + param,
				(error, stdout, stderr) => {
					// Tratando condicoes
					(stdout == param) ? console.log(param + ' é igual à ' + stdout + ' ✅') : console.log(param + ' ❌ RETORNOU DIFERENTE...');
					if (error || stderr) console.log('❌ Encontrado erros com o parametro: ' + param);
				});
		});
	} catch (err) {
		console.log('❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌');
		console.error(err);
	};
};

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ EX06 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
async function ex06() {
	const folder = 'ex06';
	const file = 'ft_strlen';
	console.log('Testando ' + folder + '... 🕒');
	try {
		const { stdout, stderr } = await exec('gcc -o ' + file + ' main_' + file + '.c ' +
			data.nameUser
			+ '/' + folder + '/' + file + '.c');

		if (stdout) console.log('stdout:', stdout);
		if (stderr) console.log('stderr:', stderr);

		await data.paramsEx06.forEach(param => {

			exec('./' + file + ' ' + param,
				(error, stdout, stderr) => {
					// Tratando condicoes
					(stdout == param.length) ? console.log(param + ' tem ' + stdout + ' caracteres ✅') :
					console.log(param + ' RETORNOU '+stdout+' caracteres DIFERENTE... ❌');
					if (error || stderr) console.log('❌ Encontrado erros com o parametro: ' + param);
				});
		});
	} catch (err) {
		console.log('❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌');
		console.error(err);
	};
};

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ EX07 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
async function ex07() {
	const folder = 'ex07';
	const file = 'ft_rev_int_tab';
	console.log('Testando ' + folder + '... 🕒');
	try {
		const { stdout, stderr } = await exec('gcc -o ' + file + ' main_' + file + '.c ' +
			data.nameUser
			+ '/' + folder + '/' + file + '.c');

			if (stdout) console.log('stdout:', stdout);
			if (stderr) console.log('stderr:', stderr);

			exec('./' + file + ' ',
				(error, stdout, stderr) => {

					if (error) console.log('error:', error);
					if (stderr) console.log('stderr:', stderr);

					console.log(stdout);

					// Tratando condicoes
					(stdout == '98364752') ? console.log('Array alterado de  25743689 para '+stdout+' ✅') :
					console.log('Ordem está DIFERENTE... ❌');
					if (error || stderr) console.log('❌ Encontrado erros com o parametro: ' + stdout);
			});
	} catch (err) {
		console.log('❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌');
		console.error(err);
	};
};

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ EX08 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
async function ex08() {
	const folder = 'ex08';
	const file = 'ft_sort_int_tab';
	console.log('Testando ' + folder + '... 🕒');
	try {
		const { stdout, stderr } = await exec('gcc -o ' + file + ' main_' + file + '.c ' +
			data.nameUser
			+ '/' + folder + '/' + file + '.c');

			if (stdout) console.log('stdout:', stdout);
			if (stderr) console.log('stderr:', stderr);

			exec('./' + file + ' ',
				(error, stdout, stderr) => {

					if (error) console.log('error:', error);
					if (stderr) console.log('stderr:', stderr);

					console.log(stdout);

					// Tratando condicoes
					(stdout == '24578936') ? console.log('Array alterado de  24578936 para '+stdout+' ✅') :
					console.log('Ordem está DIFERENTE... ❌');
					if (error || stderr) console.log('❌ Encontrado erros com o parametro: ' + stdout);
			});
	} catch (err) {
		console.log('❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌');
		console.error(err);
	};
};


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
									setTimeout(async () => {
										space();
										checkNorminete();
									}, 700);
								}, 700);
							}, 700);
						}, 700);
					}, 700);
				}, 700);
			}, 700);
		}, 700);
	}, 700);
}, 700);





async function space() {
	console.log("\n");
	console.log('-----------------------------------------------');
	console.log("\n");
}

async function checkNorminete() {
	space();
	console.log("Checking Norminete");
	try {
		const { stdout, stderr } = await exec('norminette -R CheckForbiddenSourceHeader '+data.nameUser);
		if (stdout) console.log('stdout:', stdout);
		if (stderr) console.log('stderr:', stderr);
	} catch (err) {
		console.log('❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌');
		if (err.code == 1) {
			console.log("⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️");
			console.log("ARQUIVO ESTA EM FALTA... 🧐");
			console.log("🆙 🆙 🆙 🆙 🆙 🆙 🆙 🆙 🆙");
		} else console.error(err);
	};
	space();
}
