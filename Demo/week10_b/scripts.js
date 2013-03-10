/*
	Sistemas Web
	JavaScript em modo strict do ECMAScript 5. Basta incluir
	a seguinte instrução ou no topo do ficheiro ou de uma função
	'use strict';

	Usando em todo o ficheiro, todas as funções do ficheiro operam
	em modo strict. Atenção que isto causa problemas se quiserem
	concatenar vários scripts que operam em diferentes modos.

	Usando o module pattern isto já não ocorre.
*/

(function () {
	// todo o código dentro desta função opera em modo strict
	// incluindo as funções internas
	'use strict';

	// quando a página carregar
	window.addEventListener('load', function () {
		document.getElementById('strict').addEventListener('click', imnotstrict);
	});

	function imnotstrict() {
		// esta função vai lançar uma excepção
		// pois está a correr dentro de um
		// ficheiro que está em modo strict
		thisdoesnotwork = 'Hello, Strict Mode!';

		alert(thisdoesnotwork);
	}
})();