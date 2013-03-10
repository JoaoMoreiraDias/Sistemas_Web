/*
	Sistemas Web
	Quando a página é carregada, a caixa de opções HTML que começa
	apenas com a opção "nenhum" é preenchida com as opções
	correspondentes aos cursos definidos num array.
*/

(function () {
	// array com nomes de cursos
	var options = ['informática', 'direito', 'história', 'economia', 'gestão'];

	// quando a página estiver carregada
	window.addEventListener('load', init);

	function init() {
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