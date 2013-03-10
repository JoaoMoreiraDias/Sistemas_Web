/*
	Sistemas Web
	Loosely typed language, undefined versus null.
	Console object, typeof. Variáveis globais ficam
	armazenadas no objecto Window (quando o Javascript
	é executado no contexto de um browser).
*/

function printType(v) {
	// mostra o conteúdo da variável v e o seu tipo na consola
	console.info('\nv tem o valor: ' + v + '\nque é do tipo: ' + typeof v + '\n');
}

// variável declarada mas não inicializada
var a;

// valor undefined tipo undefined
printType(a);

a = null;
// valor null tipo object
printType(a);

a = true;
// valor true tipo boolean
printType(a);

a = 5;
// valor 5 tipo number
printType(a);

a = 'Marta';
// valor Marta tipo string
printType(a);

a = {};
// valor [object Object] tipo object
printType(a);

a = [];
// valor  tipo object
printType(a);

a = function () { var test = 5; };
// valor function () { var test = 5; } tipo function
printType(a);

// as variáveis globais, ou seja: declaradas fora de
// qualquer função, ficam guardadas no objecto window
// que os browsers providenciam
a = 'encontra-me no objecto window!';