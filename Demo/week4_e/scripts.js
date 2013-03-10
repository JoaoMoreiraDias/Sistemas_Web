/*
	Sistemas Web
	Quando a página é carregada, são criados os event listeners nos
	dois botões.

	Isto é uma opção de design: separar o carregamento da página onde
	são criados os event listeners (e outras coisas que veremos mais
	à frente), ir buscar os dados dos cursos e finalmente, a função
	de carregar os dados para o interface.

	Os dados são introduzidos pelo utilizador, tranformados em JSON
	para finalmente serem transformados novamente em dados.
*/

(function () {
	// dados introduzidos pelo utilizador
	var areas = [];

	// opções geradas através dos dados
	var options = [];

	// dados em formato JSON
	var resposta = '';

	window.addEventListener('load', init);

	function init() {
		document.getElementById('save').addEventListener('click', save);
		document.getElementById('fill').addEventListener('click', fill);
		document.getElementById('load').addEventListener('click', load);
	}

	function save() {
		// guardar dado introduzido
		areas.push(document.getElementById('area').value);

		// limpar caixa de texto
		document.getElementById('area').value = '';

		// activar botão para ir buscar os dados
		document.getElementById('fill').disabled = false;

		// transformar os dados gravados para o formato JSON
		resposta = JSON.stringify(areas);
	}

	function fill() {
		// limpar dados anteriormente introduzidos para não
		// haver repetições
		areas = [];

		options = JSON.parse(resposta);
		document.getElementById('load').disabled = false;
		this.disabled = true;
	}

	function load() {
		var cursos = document.getElementById('cursos');

		for (var i = 0, end = options.length; i < end; ++i) {
			var novo = document.createElement('OPTION');

			novo.text = options[i];

			cursos.appendChild(novo);
		}

		this.disabled = true;
	}
})();