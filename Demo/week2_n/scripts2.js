/*
	Sistemas Web
	Script para criar novos botões dinâmicos com um nome que
	começa por "Outro". Como ambos os scripts estão dentro de um
	"módulo" não há colisões.

	Conseguimos que os dois módulos possam comunicar se declararmos
	uma variável fora do módulo.
*/

(function () {
	var count = 0;

	window.addEventListener('load', spawn);

	function spawn() {
		var novo = document.createElement('BUTTON');

		novo.innerHTML = 'Outro ' + ++count;

		novo.onclick = spawn;
		this.onclick = undefined;

		document.body.appendChild(novo);

		// depois de criar um novo botão actualizar o total
		// de botões recorrendo às variáveis declaradas fora
		document.getElementById('total').innerHTML = total1() + total2();
	}

	// modificar a variável declarada fora para ser uma
	// função (anónima) que retorne um nº de botões "Outro"
	total2 = function () {
		return count;
	}
})();