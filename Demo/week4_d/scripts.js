/*
	Sistemas Web
	Quando a página é carregada, são criados os event listeners nos
	dois botões.

	Isto é uma opção de design: separar o carregamento da página onde
	são criados os event listeners (e outras coisas que veremos mais
	à frente), ir buscar os dados dos cursos e finalmente, a função
	de carregar os dados para o interface.

	Os dados são carregados através de JSON.
*/

(function () {
	var options = [];

	window.addEventListener('load', init);

	function init() {
		document.getElementById('fill').addEventListener('click', fill);
		document.getElementById('load').addEventListener('click', load);
	}

	function fill() {
		// variável com os dados em formato JSON (string).
		// Este formato está especificado em: http://www.json.org/
		var resposta = '["informática", "matemática", "direito", "história", "economia", "gestão"]';

		// preencher o array com a conversão JSON da variável
		options = JSON.parse(resposta);

		// o resto desta função é igual à versão anterior desta
		//demonstração
		document.getElementById('load').disabled = false;
		this.disabled = true;
	}

	function load() {
		var i, end, novo, cursos = document.getElementById('cursos');

		for (i = 0, end = options.length; i < end; ++i) {
			novo = document.createElement('OPTION');

			novo.text = options[i];

			cursos.appendChild(novo);
		}

		this.disabled = true;
	}
})();