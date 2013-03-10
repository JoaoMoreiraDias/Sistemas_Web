/*
	Sistemas Web
	Aplicação constroi combox apartir de JSON usando a
	framework jQuery. Ver documentação das frameworks respectivas.
*/

// usamos o module pattern para não haver conflitos com o
// código das frameworks
(function () {
	// em vez de fazermos
	//
	// window.addEventListener('load', init)
	//
	// e também funciona no IE8
	$().ready(init);

	function init() {
		// fazer pedido Ajax e quando estiver pronto
		// depoletar função loadTypes. Funciona no IE8.
		$.ajax('data/types.json').done(loadTypes);

		// adicionar funcionalidade de ir buscar e carregar
		// unidades quando se clicar no botão com id "loadUnits"
		$('#loadUnits').click(loadUnits);

		// adicionar funcionalidade para converter
		// quando se clicar no botão com id "convert"
		$('#convert').click(converter);
	}

	function loadTypes(reply) {
		// recebido o JSON na variável reply
		// (ver documentação do jQuery)
		// criar as opções da combobox
		reply = JSON.parse(reply);

		// em vez de usar um ciclo for, podemos usar o
		// método each aplicada ao array (vindo de JSON)
		$(reply).each(
			// para cada elemento do array executamos a
			// seguinte função
			function () {
				// criar o elemento option
				var opt = document.createElement('OPTION');

				// colocar como texto o corrente elemento do array
				// atenção que o IE8 não suporta isto, será melhor
				// substituir por:
				//
				// opt.innerText = this;
				opt.text = this;

				// adicionar o elemento option à combobox
				document.getElementById('types').appendChild(opt);
			}
		);
	}

	function loadUnits() {
		// ir buscar o JSON cujo nome de ficheiro é igual ao texto
		// da opção dos tipos seleccionada. Atenção que ir buscar
		// o valor seleccionado de uma combo box da seguinte maneira
		// não é suportado pelo IE8. Será melhor substituir aqui (e
		// também em baixo) por:
		//
		// var optText = document.getElementById('types').options[0].innerText;
		var optText = document.getElementById('types').value;

		$.ajax('data/' + optText + '.json').done(
			function (reply) {
				reply = JSON.parse(reply);

				// de igual forma, para cada unidade do array
				// de unidades enviadas por JSON:
				$(reply).each(
					function () {
						var opt = document.createElement('OPTION');

						// Não esquecer para IE8
						// opt.innerText = this.nome;
						opt.text = this.nome;
						opt.value = this.value;

						// adicionar opção à combo unidades origem
						document.getElementById('unitSrc').appendChild(opt);

						// clonar o option para adicionar à combo unidades
						// destino. É preciso clonar senão apenas é adicionado
						// a uma das combo. Substituir pelo seguinte para
						// verificar este problema:
						// document.getElementById('unitOut').appendChild(opt);
						document.getElementById('unitOut').appendChild($.clone(opt));
					}
				);
			}
		);
	}

	function converter() {
		// saber o que foi seleccionado e introduzido. Não
		// esquecer que para IE8 nas três combos teremos que usar:
		// ... document.getElementById( XPTO ).options[0].innerText;
		var type = document.getElementById('types').value,
			src = document.getElementById('unitSrc').value,
			out = document.getElementById('unitOut').value,
			val = document.getElementById('val').value;

		// em vez de janela alert, fazer as contas com
		// validações, etc. e apresentar o resultado na
		// própria página.
		// Também as regras de conversão podem existir
		// em ficheiros JSON no servidor
		alert(type + ': converter ' + val + ' de ' + src + ' para ' + out);
	}
})();