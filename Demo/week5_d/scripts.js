/*
	Sistemas Web
	Carregar XML por ajax para dentro de um elemento mais complexo.
*/

(function () {
	// onde será instanciado o nosso objecto de pedidos HTTP
	// declarado aqui para ficar disponível a todas funções
	// que necessitem dele (há formas melhores)
	var xhr;

	window.addEventListener('load', function () {
		document.getElementById('ola').addEventListener('click', fazerPedido);
	});

	function fazerPedido() {
		// criar objecto para fazer pedidos HTTP
		// Não funciona no IE8 ou inferior
		xhr = new XMLHttpRequest();

		// quando o pedido mudar de estado...
		// 		"feito" para "em progresso"
		// 		"em progresso" para "terminado"
		// 		etc. (exemplos)
		// ...despoletar a função com o nome "colocarTexto"
		xhr.onreadystatechange = colocarTexto;

		// abrir ligação HTTP através de GET para a página/ficheiro
		// "hello.txt" localizado relativo ao HTML onde este script
		// está a correr
		xhr.open('GET', 'menu.xml');

		// fazer pedido HTTP. Como é feito por GET o parâmetro
		// desta função é "null"
		xhr.send(null);
	}

	function colocarTexto() {
		var xmlDoc, i, end, items, linha, item, texto, nome, preco, desc, cal;

		// esta função é despoletada sempre que o estado do pedido
		// muda mas apenas nos interessa quando o estado é
		// "terminado" e o código de resposta do servidor for "OK"
		//
		// Atenção: a condição "|| xhr.status === 0" foi colocada
		// porque o FILESYSTEM não é um WEBSERVER logo status é
		// sempre 0 em vez de 200, 300, etc. Esta condição deverá
		// ser retirada em software de produção.
		if (xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 0)) {
			// colocar o que foi recebido numa variável
			xmlDoc = xhr.responseXML;

			// ir buscar todos os items
			items = xmlDoc.documentElement.getElementsByTagName('food');

			// para cada item
			for (i = 0, end = items.length; i < end; ++i) {
				nome	= items[i].children[0].textContent;
				preco	= items[i].children[1].textContent;
				desc	= items[i].children[2].textContent;
				cal		= items[i].children[3].textContent;

				// construir a linha da tabela
				linha = document.createElement('TR');

				// criar e adicionar colunas à linha
				item = document.createElement('TD');
				item.textContent = nome;
				linha.appendChild(item);

				item = document.createElement('TD');
				item.textContent = desc;
				linha.appendChild(item);

				item = document.createElement('TD');
				item.textContent = preco;
				linha.appendChild(item);

				item = document.createElement('TD');
				item.textContent = cal;
				linha.appendChild(item);

				// adicionar a linha à tabela
				document.getElementById('output').appendChild(linha);
			}
		}
	}
})();