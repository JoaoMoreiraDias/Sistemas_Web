/*
	Sistemas Web
	Script para criar novos botões dinâmicos com um nome que
	começa por "hello".
*/

var count = 0;

window.addEventListener('load', spawn);

function spawn() {
	var novo = document.createElement('BUTTON');

	novo.innerHTML = 'hello ' + ++count;

	novo.onclick = spawn;
	this.onclick = undefined;

	document.body.appendChild(novo);
}