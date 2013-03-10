/*
	Sistemas Web
	Guardar informação da página no cliente de forma
	persistente através de Web Storage - localStorage.
*/

(function () {
	// quando a página carregar
	window.addEventListener('load', function () {
		// criar funcionalidade de gravar os dados
		document.getElementById('gravar').addEventListener('click', gravarNota);
	});

	function gravarNota() {
		// ir buscar o objecto que tem a informação
		var note = document.getElementById('nota');

		// guardar o texto que está dentro dele
		var text = note.value;

		// guardar localmente de forma persistente
		localStorage.setItem('onomequeeuquiser', text);
	}
})();