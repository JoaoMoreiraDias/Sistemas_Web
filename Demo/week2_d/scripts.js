/*
	Sistemas Web
	Script para somar dois números e apresentar o resultado.
*/

function printSoma() {
	// guardar o valor dos INPUT
	var n1 = document.getElementById('n1').value;
	var n2 = document.getElementById('n2').value;
	var s = document.getElementById('s');

	// somar os dois valores
	var soma = n1 * 1 + n2 * 1;

	// apresentar a soma no interior do SPAN
	s.innerHTML = soma;
}