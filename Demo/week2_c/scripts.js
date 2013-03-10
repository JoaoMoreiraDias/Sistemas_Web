/*
	Sistemas Web
	Script para somar dois números e apresentar o resultado.
*/

function printSoma() {
	// guardar o valor do primeiro INPUT
	var n1 = document.body.children[0].value;

	// guardar o valor do segundo INPUT
	var n2 = document.body.children[1].value;

	// somar os dois valores
	/* multiplicamos cada valor por 1 para forçar a ser número em
		vez de string.

		Como alternativa poderíamos ir buscar os valores acima com:

		parseInt(document.body.children[0].value);

		Finalmente também poderíamos ir buscar os valores acima com:

		document.body.children[0].valueAsNumber;

		Mas isto não é suportado no IE8/9.
	*/
	var soma = n1 + n2;

	// apresentar a soma
	alert(soma);
}