/*
	Sistemas Web
	Script para criar novos botões dinâmicos com um nome que
	começa por "hello".
*/

// variáveis declarada fora dos módulos, para poderem ser
// acedidas e modificadas por ambos os módulos.
var total1, total2;

(function () {
	var count = 0;

	window.addEventListener('load', spawn);

	function spawn() {
		var novo = document.createElement('BUTTON');

		novo.innerHTML = 'hello ' + ++count;

		novo.onclick = spawn;
		this.onclick = undefined;

		document.body.appendChild(novo);

		// depois de criar um novo botão actualizar o total
		// de botões recorrendo às variáveis declaradas fora
		document.getElementById('total').innerHTML = total1() + total2();
	}

	// modificar a variável declarada fora para ser uma
	// função (anónima) que retorne um nº de botões "hello"
	total1 = function () {
		return count;
	}
})();