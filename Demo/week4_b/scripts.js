/*
	Sistemas Web
	Quando a página é carregada, é criado um event listener no botão
	para carregar a caixa de opções.

	Isto é uma opção de design: separar o carregamento da página onde
	são criados os event listeners (e outras coisas que veremos mais
	à frente) e a função de carregar os dados para o interface.
*/

(function () {
	// array com nomes de cursos
	var options = ['informática', 'direito', 'história', 'economia', 'gestão'];

	// quando a página estiver carregada
	window.addEventListener('load', init);

	function init() {
		// quando o botão for clicado
		document.getElementById('load').addEventListener('click', load);
	}

	function load() {
		var i, end, novo, cursos = document.getElementById('cursos');

		// para cada curso do array, criar uma opção
		for (i = 0, end = options.length; i < end; ++i) {
			novo = document.createElement('OPTION');

			// colocar o nome do curso como texto da opção
			novo.text = options[i];

			// adicionar a nova opção à caixa de opções
			cursos.appendChild(novo);
		}
	}
})();