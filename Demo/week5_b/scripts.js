/*
	Sistemas Web
	Os dados são carregados através de JSON por AJAX.
*/

(function () {
	var options = [];

	window.addEventListener('load', init);

	function init() {
		document.getElementById('fill').addEventListener('click', fill);
		document.getElementById('load').addEventListener('click', load);
	}

	function fill() {
		var xhr = new XMLHttpRequest();

		// se a função despoletada não é chamada de mais nenhum lada
		// podemos usar uma função anónima
		xhr.onreadystatechange = function () {
			// condição "|| xhr.status === 0" porque o FILESYSTEM
			// não é um WEBSERVER logo status é sempre 0
			if (xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 0)) {
				// preencher o array com a conversão JSON que foi recebido
				var resposta = xhr.responseText;

				// o resto desta função é igual à versão anterior desta
				// demonstração
				options = JSON.parse(resposta);
				document.getElementById('load').disabled = false;
				this.disabled = true;
			}
		};

		xhr.open('GET', 'cursos.json');
		xhr.send(null);
	}

	// esta função mantém-se igual porque o design da aplicação
	// foi feito de raiz a separar as fases de ir buscar os dados
	// e carregar esses dados
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