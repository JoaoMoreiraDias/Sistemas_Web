/*
	Sistemas Web
	Script para somar dois números e apresentar o resultado.
*/

// se a funcionalidade "addEventListener" existe
if (window.addEventListener) {
	// então usamo-la
	window.addEventListener('load', init);
} else {
	// senão vamos experimentar outra (<= IE 8)
	window.attachEvent('onload', init);
}

function init() {
	// usar também um event listener para quando o objecto BTN for
	// clicado, despoletar a função "printSoma".
	if (window.addEventListener) {
		// event handler para browsers que suportam o standard
		document.getElementById('btn').addEventListener('click', printSoma);
	} else {
		// event handler para browsers que não suportam o standard (<= IE 8)
		document.getElementById('btn').attachEvent('onclick', printSoma);
	}
}

function printSoma() {
	// guardar o valor dos INPUT
	var n1 = document.getElementById('n1').value;
	var n2 = document.getElementById('n2').value;
	var s = document.getElementById('s');

	// somar os dois valores
	var soma = n1 * 1 + n2 * 1;

	// apresentar a soma
	s.innerHTML = soma;
}