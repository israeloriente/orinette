const { data } = require('./dataC02.js')
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const project = 'C02';

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ EX00 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
async function ex00() {
	const folder = 'ex00';
	const file = 'ft_strcpy';
	console.log('Testando ' + folder + '... 🕒');
	try {
		const { stdout, stderr } = await exec('gcc -o ' + file + ' main_' + file + '.c ' +
			data.nameUser
			+ '/' + folder + '/' + file + '.c');

		if (stdout) console.log('stdout:', stdout);
		if (stderr) console.log('stderr:', stderr);

		await data.paramsEx00.forEach(param => {
			exec('./' + file + ' ' + param.dest + ' ' + param.src,
				(error, stdout, stderr) => {
					// Tratando condicoes
					(stdout == param.src) ? console.log(param.dest + ' foi alterado para ' + stdout + ' ✅') : console.log(param.src + ' ❌ RETORNOU DIFERENTE...');
					if (error || stderr) console.log('❌ Encontrado erros com o parametro: ' + param.src);
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
	const file = 'ft_strncpy';
	console.log('Testando ' + folder + '... 🕒');
	try {
		const { stdout, stderr } = await exec('gcc -o ' + file + ' main_' + file + '.c ' +
			data.nameUser
			+ '/' + folder + '/' + file + '.c');

		if (stdout) console.log('stdout:', stdout);
		if (stderr) console.log('stderr:', stderr);

		await data.paramsEx01.forEach(param => {
			exec('./' + file + ' ' + param.dest + ' ' + param.src + ' ' + param.int,
				(error, stdout, stderr) => {
					let response = param.src.slice(0, param.int);
					// Tratando condicoes
					(stdout == response) ? console.log(param.dest + ' foi alterado para ' + stdout + ' ✅') : console.log(param.src + ' ❌ RETORNOU DIFERENTE... ' + stdout + '');
					if (error || stderr) console.log('❌ Encontrado erros com o parametro: ' + param.src);
				});
		});

	} catch (err) {
		console.log('❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌');
		console.error(err);
	};
};

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ EX02 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
async function ex02() {
	const folder = 'ex02';
	const file = 'ft_str_is_alpha';
	console.log('Testando ' + folder + '... 🕒');
	try {
		const { stdout, stderr } = await exec('gcc -o ' + file + ' main_' + file + '.c ' +
			data.nameUser
			+ '/' + folder + '/' + file + '.c');

		if (stdout) console.log('stdout:', stdout);
		if (stderr) console.log('stderr:', stderr);

		await data.paramsEx02.forEach(param => {
			exec('./' + file + ' ' + param,
				(error, stdout, stderr) => {

					const bool = /^[a-zA-Z()]+$/.test(param);

					// Tratando condicoes
					(stdout == bool) ? console.log(param + ' definido como ' + stdout + ' ✅') : console.log(param + ' DEFINIDO COMO ' + stdout + '... ❌');
					if (error || stderr) console.log('❌ Encontrado erros com o parametro: ' + param);
				});
		});

	} catch (err) {
		console.log('❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌');
		console.error(err);
	};
};

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ EX03 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
async function ex03() {
	const folder = 'ex03';
	const file = 'ft_str_is_numeric';
	console.log('Testando ' + folder + '... 🕒');
	try {
		const { stdout, stderr } = await exec('gcc -o ' + file + ' main_' + file + '.c ' +
			data.nameUser
			+ '/' + folder + '/' + file + '.c');

		if (stdout) console.log('stdout:', stdout);
		if (stderr) console.log('stderr:', stderr);

		await data.paramsEx03.forEach(param => {
			exec('./' + file + ' ' + param,
				(error, stdout, stderr) => {

					const bool = /^\d+$/.test(param);
					// Tratando condicoes
					(stdout == bool) ? console.log(param + ' definido como ' + stdout + ' ✅') : console.log(param + ' DEFINIDO COMO ' + stdout + '... ❌');
					if (error || stderr) console.log('❌ Encontrado erros com o parametro: ' + param, error);
				});
		});

	} catch (err) {
		console.log('❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌');
		console.error(err);
	};
};

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ EX04 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
async function ex04() {
	const folder = 'ex04';
	const file = 'ft_str_is_lowercase';
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

					const bool = /^[a-z()]+$/.test(param);
					// Tratando condicoes
					(stdout == bool) ? console.log(param + ' definido como ' + stdout + ' ✅') : console.log(param + ' DEFINIDO COMO ' + stdout + '... ❌');
					if (error || stderr) console.log('❌ Encontrado erros com o parametro: ' + param, error);
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
	const file = 'ft_str_is_uppercase';
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

					const bool = /^[A-Z()]+$/.test(param);
					// Tratando condicoes
					(stdout == bool) ? console.log(param + ' definido como ' + stdout + ' ✅') : console.log(param + ' DEFINIDO COMO '+stdout+'... ❌');
					if (error || stderr) console.log('❌ Encontrado erros com o parametro: ' + param, error);
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
	const file = 'ft_str_is_printable';
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

					let bool = /[\x00-\x08\x0E-\x1F\x80-\xFF]/.test(param);
					// Tratando condicoes
					(stdout == !bool) ? console.log(param + ' definido como ' + stdout + ' ✅') : console.log(param + ' DEFINIDO COMO '+stdout+'... ❌');
					if (error || stderr) console.log('❌ Encontrado erros com o parametro: ' + param, error);
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
	const file = 'ft_strupcase';
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

					let res = param.toUpperCase();

					// Tratando condicoes
					(stdout == res) ? console.log(param + ' definido como ' + stdout + ' ✅') : console.log(param + ' Diferente de '+stdout+' ❌');
					if (error || stderr) console.log('❌ Encontrado erros com o parametro: ' + param, error);
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
	const file = 'ft_strlowcase';
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

					let res = param.toLowerCase();
					// Tratando condicoes
					(stdout == res) ? console.log(param + ' definido como ' + stdout + ' ✅') : console.log(param + ' Diferente de '+stdout+' ❌');
					if (error || stderr) console.log('❌ Encontrado erros com o parametro: ' + param, error);
				});
		});
	} catch (err) {
		console.log('❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌');
		console.error(err);
	};
};

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ EX09 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
async function ex09() {
	const folder = 'ex09';
	const file = 'ft_strcapitalize';
	console.log('Testando ' + folder + '... 🕒');
	try {
		const { stdout, stderr } = await exec('gcc -o ' + file + ' main_' + file + '.c ' +
			data.nameUser
			+ '/' + folder + '/' + file + '.c');

		if (stdout) console.log('stdout:', stdout);
		if (stderr) console.log('stderr:', stderr);
		await data.paramsEx09.forEach(param => {
			exec('./' + file + ' ' + param,
				(error, stdout, stderr) => {

					let res = ex09ExtencionUppercase(param);

					// Tratando condicoes
					(stdout == res) ? console.log('"'+param + '" definido como "' + stdout + '" ✅') : console.log('"'+param + '" É DIFERENTE DE "'+stdout+'" ❌');
					if (error || stderr) console.log('❌ Encontrado erros com o parametro: ' + param, error);
				});
		});
	} catch (err) {
		console.log('❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌');
		console.error(err);
	};
};


console.log('INICIANDO ORINETE...');
console.log('Desenvolvedor: ' + data.nameUser);
ex09();
// setTimeout(async () => {
// 	space();
// 	ex00();
// 	setTimeout(async () => {
// 		space();
// 		ex01();
// 		setTimeout(async () => {
// 			space();
// 			ex02();
// 			setTimeout(async () => {
// 				space();
// 				ex03();
// 				setTimeout(async () => {
// 					space();
// 					ex04();
// 					setTimeout(async () => {
// 						space();
// 						ex05();
// 						setTimeout(async () => {
// 							space();
// 							ex06();
// 							setTimeout(async () => {
// 								space();
// 								ex07();
// 							}, 700);
// 						}, 700);
// 					}, 700);
// 				}, 700);
// 			}, 700);
// 		}, 700);
// 	}, 700);
// }, 700);


async function space() {
	console.log("\n");
	console.log('-----------------------------------------------');
	console.log("\n");
}

function ex09ExtencionUppercase(str) {
	var splitStr = str.toLowerCase().split(' ');
	for (var i = 0; i < splitStr.length; i++) {
		// You do not need to check if i is larger than splitStr length, as your for does that for you
		// Assign it back to the array
		splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
	}
	// Directly return the joined string
	return splitStr.join(' ');
 }
