(function () {
	var options = [];

	window.addEventListener('load', init);

	function init() {
		document.getElementById('fill').addEventListener('click', fill);
		document.getElementById('load').addEventListener('click', load);
	}

	function fill() {
		var resposta = '[ "entradas", "bebidas", "pratos", "sobremesas" ]';

		options = JSON.parse(resposta);

		document.getElementById('load').disabled = false;
		this.disabled = true;
	}

	function load(){

		var i, end, novo, cursos = document.getElementById('cats');

		for (i = 0, end = options.length; i < end; ++i) {
			novo = document.createElement('OPTION');

			novo.text = options[i];

			cursos.appendChild(novo);
			document.getElementById('load').disabled = true;
			document.getElementById('loadinfo').disabled = false;
		}
	}

	function loadinfo(){
		var items = '{"entradas" : [ { "manteiga" : null },	{ "pão" : 0.2 }	], "bebidas" : [{ "coke" : 1.4 },	{ "pepsi" : 1.35 },		{ "water" : 0.8 } ],	"pratos" : [	{ "hamburger" : 4.05 },	{ "pizza" : 6.8 }	],	"sobremesas" : [	{ "café" : 0.65 },	{ "gelado" : 1.5 }	]	}'
		info = JSON.parse(items);
		for (var i = items.length - 1; i >= 0; i--) {
			Things[i]
		};
	}
})();