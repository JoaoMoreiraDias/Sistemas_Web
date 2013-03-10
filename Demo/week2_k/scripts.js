/*
	Sistemas Web
	Script para criar novos botões dinâmicos.

	Ao contrário da versão anterior desta demonstração a função
	"spawn" já não precisa de receber parâmetros. A keyword this
	dentro desta função refere-se automaticamente ao objecto que
	a chamou.
*/

// contador de botões
var count = 0;

// quando a página carregar toda, criar um botão
window.addEventListener('load', spawn);

// função que cria novos botões
function spawn() {
	// criar um elemento (não fica automaticamente na página!)
	var novo = document.createElement('BUTTON');

	// ao novo botão colocar conteúdo
	novo.innerHTML = 'hello ' + ++count;

	// ao novo botão criar um event handler como esta função
	novo.onclick = spawn;

	// ao objecto que foi clicado e chamou esta função, retirar o
	// event handler para não poder criar mais botões
	this.onclick = undefined;

	// adicionar o novo botão à página
	document.body.appendChild(novo);
}