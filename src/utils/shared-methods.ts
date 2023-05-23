export function getRanHex(size: number): string {
	let result = [];
	let hexRef = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
	for (let n = 0; n < size; n++) {
		result.push(hexRef[Math.floor(Math.random() * 16)]);
	}
	return result.join('');
}

export function sleep(ms: number) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

export function verifyCuit(cuit) {
	if (cuit.length !== 11) {
		return false;
	}

	let acumulado = 0;
	let digitos = cuit.split('');
	let digito = parseInt(digitos.pop());

	for (let i = 0; i < digitos.length; i++) {
		acumulado += digitos[9 - i] * (2 + (i % 6));
	}

	let verif = 11 - (acumulado % 11);
	if (verif === 11) {
		verif = 0;
	} else if (verif === 10) {
		verif = 9;
	}

	return digito === verif;
};

export function useAuth() {
	const token = localStorage.getItem('token') ? localStorage.getItem('token') : '';
	return (token !== '')
}
