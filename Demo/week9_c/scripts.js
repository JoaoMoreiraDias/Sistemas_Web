/*
	Sistemas Web
	Carregar informação da página no cliente de forma
	persistente através de Web Storage - localStorage
	automaticamente quando a página carrega.
*/

(function () {
	// quando a página carregar
	window.addEventListener('load', function () {
		// criar funcionalidade de gravar os dados
		document.getElementById('gravar').addEventListener('click', gravarNota);
		// criar funcionalidade de carregar os dados
		document.getElementById('carregar').addEventListener('click', carregarNota);

		// todo o código é exactamente igual à demonstração
		// anterior excepto a linha seguinte
		carregarNota();
	});

	function gravarNota() {
		// ir buscar o objecto que tem a informação
		var note = document.getElementById('nota');

		// guardar o texto que está dentro dele
		var text = note.value;

		// guardar localmente de forma persistente
		localStorage.setItem('onomequeeuquiser', text);
	}

	function carregarNota() {
		// ir buscar o objecto que irá conter a informação
		var note = document.getElementById('nota');

		// ir buscar o texto que está gravado localmente de
		// forma persistente
		var text = localStorage.getItem('onomequeeuquiser');

		// colocar texto no objecto
		note.value = text;
	}
})();