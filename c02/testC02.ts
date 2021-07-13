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
			exec('./' + file + ' ' + param.dest +' '+param.src,
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
			exec('./' + file + ' ' + param.dest +' '+param.src + ' '+ param.int,
				(error, stdout, stderr) => {
				let response = param.src.slice(0, param.int);
					// Tratando condicoes
					(stdout == response) ? console.log(param.dest + ' foi alterado para ' + stdout + ' ✅') : console.log(param.src + ' ❌ RETORNOU DIFERENTE... '+stdout+'');
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
					(stdout == bool) ? console.log(param + ' definido como ' + stdout + ' ✅') : console.log(param + ' DEFINIDO COMO '+stdout+'... ❌');
					if (error || stderr) console.log('❌ Encontrado erros com o parametro: ' + param);
			});
		});

	} catch (err) {
		console.log('❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌');
		console.error(err);
	};
};


console.log('INICIANDO ORINETE...');
console.log('Desenvolvedor: ' + data.nameUser);


ex02();


async function space() {
	console.log("\n");
	console.log('-----------------------------------------------');
	console.log("\n");
}
