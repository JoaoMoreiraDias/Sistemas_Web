/*
	Sistemas Web
	Carregar texto por ajax para dentro de um elemento.
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
		xhr.open('GET', 'hello.txt');

		// fazer pedido HTTP. Como é feito por GET o parâmetro
		// desta função é "null"
		xhr.send(null);
	}

	function colocarTexto() {
		// esta função é despoletada sempre que o estado do pedido
		// muda mas apenas nos interessa quando o estado é
		// "terminado" e o código de resposta do servidor for "OK"
		//
		// Atenção: a condição "|| xhr.status === 0" foi colocada
		// porque o FILESYSTEM não é um WEBSERVER logo status é
		// sempre 0 em vez de 200, 300, etc. Esta condição deverá
		// ser retirada em software de produção.
		if (xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 0)) {
			// colocar o que foi recebido dentro do elemento
			document.getElementById('output').innerHTML = xhr.responseText;
		}
	}
})();