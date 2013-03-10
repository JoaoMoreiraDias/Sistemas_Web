/*
	Sistemas Web
	Script para criar novos botões dinâmicos com um nome que
	começa por "Outro".

	Como é o segundo script a ser carregado e tem os mesmos nomes
	para o contador de botões e a função de criar novos botões
	que o primeiro script tem, vai escrever por cima deles.
*/

var count = 0;

window.addEventListener('load', spawn);

function spawn() {
	var novo = document.createElement('BUTTON');

	novo.innerHTML = 'Outro ' + ++count;

	novo.onclick = spawn;
	this.onclick = undefined;

	document.body.appendChild(novo);
}