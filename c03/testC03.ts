const { data } = require('./dataC03.js')
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const project = 'C03';

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ EX00 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
async function ex00() {
	const folder = 'ex00';
	const file = 'ft_strcmp';
	console.log('Testando ' + folder + '... 🕒');
	try {
		const { stdout, stderr } = await exec('gcc -o ' + file + ' main_' + file + '.c ' +
			data.nameUser
			+ '/' + folder + '/' + file + '.c');

		if (stdout) console.log('stdout:', stdout);
		if (stderr) console.log('stderr:', stderr);

		await data.paramsEx00.forEach(param => {
			exec('./' + file + ' ' + param.s1 + ' ' + param.s2,
				(error, stdout, stderr) => {

					const result = strcmp(param.s1, param.s2);
					console.log('Primeiro parametro: "'+param.s1+'"');
					console.log('Segundo parametro: "'+param.s2+'"');

					// Tratando condicoes
					(stdout == result) ? console.log('"'+result + '" é igual que "' + stdout + '" ✅') : console.log(param.s1 + ' ❌ RETORNOU DIFERENTE...');
					if (error || stderr) console.log('Encontrado erros com o parametro: ' + param.s1 + ' ❌');
				});
		});

	} catch (err) {
		console.log('❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌');
		if (err.code == 1) {
			console.log("⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️");
			console.log("ARQUIVO ESTA EM FALTA... 🧐");
			console.log("🆙 🆙 🆙 🆙 🆙 🆙 🆙 🆙 🆙");
		} else console.error(err);
	};
};


console.log('INICIANDO ORINETE...\n');
console.log('Desenvolvedor: ' + data.nameUser + '\n');
ex00();
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
// 					}, 450);
// 				}, 450);
// 			}, 450);
// 		}, 450);
// 	}, 450);
// }, 450);


async function space() {
	console.log("\n");
	console.log('-----------------------------------------------');
	console.log("\n");
}

async function checkNorminete() {
	space();
	console.log("Checking Norminete");
	try {
		const { stdout, stderr } = await exec('norminette -R CheckForbiddenSourceHeader ' + data.nameUser);
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


function strcmp(str1, str2) {
	let maior = (str1.length >= str2.length) ? str1 : str2;
	for (let i = 0; i < maior.length; i++) {
		if ((str1[i] ? str1[i].charCodeAt(0) : 0) != (str2[i] ? str2[i].charCodeAt(0) : 0)) {
			return (str1[i] ? str1[i].charCodeAt(0) : 0) - (str2[i] ? str2[i].charCodeAt(0) : 0);
		}
	}
	return 0;
}
