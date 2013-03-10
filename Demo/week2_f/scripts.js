/*
	Sistemas Web
	Script para somar dois números e apresentar o resultado.
*/

// adicionar um event listener para quando a página carregar toda
// ser executada a função "init". Desta forma não existe código
// "solto" logo não é executado quando a página está a carregar.
// Infelizmente "addEventListener" não funciona no IE8. :(
window.addEventListener('load', init);

function init() {
	// usar também um event listener para quando o objecto BTN for
	// clicado, despoletar a função "printSoma".
	// é equivalente ao código da versão anterior desta demonstração
	//
	//document.getElementById('btn').onclick = printSoma;
	//
	document.getElementById('btn').addEventListener('click', printSoma);
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