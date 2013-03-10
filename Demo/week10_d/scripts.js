/*
	Sistemas Web
	Demonstração de JavaScript normal, antes de ser minificado.
*/

(function () {
	var categorias = ['carne', 'peixe', 'fruta', 'legumes', 'doces', 'condimentos'];

	// quando a página carregar
	window.addEventListener('load', function () {
		var i, end, opt, catSelect = document.getElementById('categorias');

		for (i = 0, end = categorias.length; i < end; ++i) {
			opt = document.createElement('option');

			opt.textContent = categorias[i];

			catSelect.appendChild(opt);
		}
	});
})();