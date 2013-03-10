/*
	Sistemas Web
	JavaScript em modo strict do ECMAScript 5. Basta incluir
	a seguinte instrução ou no topo do ficheiro ou de uma função
	'use strict';
*/

(function () {
	// quando a página carregar
	window.addEventListener('load', function () {
		document.getElementById('strict').addEventListener('click', imstrict);
		document.getElementById('evil').addEventListener('click', imnotstrict);
	});

	function imstrict() {
		// como esta função está em modo strict
		// é lançada uma excepção quando uma
		// variável é usada sem ser explicitamente
		// declarada
		'use strict';

		thisdoesnotwork = 'Hello, Strict Mode!';

		alert(thisdoesnotwork);
	}

	function imnotstrict() {
		// em JavaScript normal uma variável
		// que não é explicitamente declarada
		// torna-se global e fica acessível
		// a todo o código
		thisworks = 'Hello, normal Mode!';

		alert(thisworks);
	}
})();