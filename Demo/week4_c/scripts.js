/*
	Sistemas Web
	Quando a página é carregada, são criados os event listeners nos
	dois botões.

	Isto é uma opção de design: separar o carregamento da página onde
	são criados os event listeners (e outras coisas que veremos mais
	à frente), ir buscar os dados dos cursos e finalmente, a função
	de carregar os dados para o interface.
*/

(function () {
	// array vazio para armazenar os nomes de cursos
	var options = [];

	// quando a página estiver carregada
	window.addEventListener('load', init);

	function init() {
		// quando os botões forem clicados
		document.getElementById('fill').addEventListener('click', fill);
		document.getElementById('load').addEventListener('click', load);
	}

	function fill() {
		// preencher o array com os dados
		options = ['informática', 'direito', 'história', 'economia', 'gestão'];

		// agora que já existem cursos podemos activar o botão para
		// criar as opções
		document.getElementById('load').disabled = false;

		// mas convém inactivar o objecto (botão) que chamou esta
		// função para que não haja duplicação no array!
		this.disabled = true;
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

		// colocar a propriedade "disabled" a true ao objecto que
		// chamou esta função. O único objecto que chama esta
		// função é o botão com id "load". Deste maneira já não
		// se manifesta o problema da repetição de opções da
		// versão anterior desta demonstração.
		this.disabled = true;
	}
})();