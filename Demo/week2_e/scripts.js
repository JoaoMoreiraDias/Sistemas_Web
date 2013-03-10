/*
	Sistemas Web
	Script para somar dois números e apresentar o resultado.
*/

// despoletar o event handler quando o botão é clicado.
// esta linha dá erro se o código Javascript estiver a ser
// executado no HEAD pois o resto da página ainda não foi
// carregada logo o elemento com id BTN não existe.
// isto leva muitos a colocar o bloco SCRIPT no final da
// página HTML. Isso não é uma boa solução em termos de design
// e causa outros problemas.
document.getElementById('btn').onclick = printSoma;

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