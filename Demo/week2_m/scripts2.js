/*
	Sistemas Web
	Script para criar novos botões dinâmicos com um nome que
	começa por "Outro". Como ambos os scripts estão dentro de um
	"módulo" não há colisões.

	O padrão módulo necessita que todo o código de um ficheiro fique
	dentro de uma função anónima auto-executada. Nenhum código fora
	desta função tem acesso a variáveis ou funções declaradas dentro.

	Um a função anónima auto-executada tem o seguinte formato:

		( function () { ... } ) ();

	Porquê?
	-------

	1) Uma declaração de função, anónima ou com nome, nunca é
	automaticamente executada: tal como noutras linguagens a
	função apenas é executada quando for chamada.

	2) Em Javascript, os parênteses curvos "()" servem para
	executar o que quer que esteja imediatamente atrás, logo:

		function () { ... } ();

	3) O problema está que entre o } e o ( é colocada uma quebra
	automaticamente pela linguagem. Então envolvemos com outro
	par de parênteses curvos a declaração da função e ficamos
	com:

		( function () { ... } ) ();
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
	}
})();