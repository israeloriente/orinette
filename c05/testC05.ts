const { data } = require('./dataC05.js')
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const project = 'C05';

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ EX00 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
async function ex00() {
	const folder = 'ex00';
	const file = 'ft_iterative_factorial';
	const question = '"Escreva uma função iterativa que retorne um número. Esse número deve ser o'+
	'resultado da operação fatorial a partir do número passado como parâmetro.'+
	'\n• Se o argumento não for válido, a função deve retornar 0.'+
	'\n• Não se deve gerar "int overflow", o retorno da função será indefinido.:"';
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
					const result = factorial(param);
					console.log('Parametro: "'+param+'"');
					// Tratando condicoes
					(stdout == result) ? console.log('"'+stdout + '" é igual à "' + result + '" ✅ \n') : console.log(result + ' RETORNOU DIFERENTE... "'+stdout+'" ❌\n');
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
	const file = 'ft_recursive_factorial';
	const question = '"Escreva uma função recursiva que retorne o fatorial do número passado como parâmetro:"';
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
					// console.log(stdout);
					const result = factorial(param);
					console.log('Parametro: "'+param+'"');
					// Tratando condicoes
					(stdout == result) ? console.log('"'+stdout + '" é igual à "' + result + '" ✅ \n') : console.log(result + ' RETORNOU DIFERENTE... "'+stdout+'" ❌\n');
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
	const file = 'ft_iterative_power';
	const question = '"Escreva uma função iterativa que retorne uma potência de um número. Uma potência inferior a 0 retornará 0:"';
	console.log('Testando ' + folder + '... 🕒');
	try {
		const { stdout, stderr } = await exec('gcc -o ' + file + ' main_' + file + '.c ' +
			data.nameUser
			+ '/' + folder + '/' + file + '.c');

		if (stdout) console.log('stdout:', stdout);
		if (stderr) console.log('stderr:', stderr);
		console.log(question+' \n');

		await data.paramsEx02.forEach(param => {
			exec('./' + file + ' ' + param.num+ ' '+ param.pw,
				(error, stdout, stderr) => {
					const result =  potencia(param.num, param.pw);
					console.log('Parametro: "'+param.num+' na potencia '+param.pw+'"');
					// Tratando condicoes
					(stdout == result) ? console.log('"'+stdout + '" é igual à "' + result + '" ✅ \n') : console.log(result + ' RETORNOU DIFERENTE... "'+stdout+'" ❌\n');
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

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ EX03 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
async function ex03() {
	const folder = 'ex03';
	const file = 'ft_recursive_power';
	const question = '" Escreva uma função recursiva que retorne uma potência de um número:"';
	console.log('Testando ' + folder + '... 🕒');
	try {
		const { stdout, stderr } = await exec('gcc -o ' + file + ' main_' + file + '.c ' +
			data.nameUser
			+ '/' + folder + '/' + file + '.c');

		if (stdout) console.log('stdout:', stdout);
		if (stderr) console.log('stderr:', stderr);
		console.log(question+' \n');

		await data.paramsEx03.forEach(param => {
			exec('./' + file + ' ' + param.num+ ' '+ param.pw,
				(error, stdout, stderr) => {
					const result =  potencia(param.num, param.pw);
					console.log('Parametro: "'+param.num+' na potencia '+param.pw+'"');
					// Tratando condicoes
					(stdout == result) ? console.log('"'+stdout + '" é igual à "' + result + '" ✅ \n') : console.log(result + ' RETORNOU DIFERENTE... "'+stdout+'" ❌\n');
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
			setTimeout(async () => {
				space();
				ex03();
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
			}, 750);
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


function factorial(num) {
    if (num == 0) {
        return 1;
    }
	if (num < 0) {
        return 0;
    }
    if (num <= 1) {
        return 1;
    }
    return num * factorial(num - 1);
}
function potencia(num, pw)
{
	if (pw<0) return 0;
	if (pw==0) return 1;
	let resultado = 1;
	for (var i = 0; i < pw; i++){
		resultado *= num;
	}
	return resultado;
}
