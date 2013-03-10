/*
	Sistemas Web
	Script para somar dois números e apresentar o resultado usando
	funções anónimas.

	Podemos usar funções anónima, literalmente funções sem nome,
	quando a nossa função é chamada apenas de um único local do
	código (pode ser chamada várias vezes).
*/

// a função "init" era apenas chamada de um só sítio
//
//addEvent(window, 'load', init);

// a função "printSoma" era apenas chamada de um só sítio
//
//addEvent(document.getElementById('btn'), 'click', printSoma);

// então em ambos os casos substituimos o nome da função pela
// própria declaração da função mas sem nome
// ou seja, se tivermos a seguinte declaração:
//
//function nomeDaFuncao() { ... }
//
// ficaria
//
//function () { ... }
//
// e seria colocada no local onde o nome "nomeDaFuncao"
// estava a ser usado.

addEvent(window, 'load',
	function () {
		addEvent(document.getElementById('btn'), 'click',
			function () {
				// guardar o valor dos INPUT
				var n1 = document.getElementById('n1').value;
				var n2 = document.getElementById('n2').value;
				var s = document.getElementById('s');

				// somar os dois valores
				var soma = n1 * 1 + n2 * 1;

				// apresentar a soma
				s.innerHTML = soma;
			}
		);
	}
);