/*
	Sistemas Web
	Script para criar novos botões dinâmicos.
*/

// contador de botões
var count = 0;

// função recebe botão clicado (quem chamou a função) e cria um
// novo botão imediatamente a seguir.
function spawn(btn) {
	// criar um elemento (não fica automaticamente na página!)
	var novo = document.createElement('BUTTON');

	// ao novo botão colocar conteúdo
	novo.innerHTML = 'hello ' + ++count;

	// ao novo botão criar um event handler igual ao do botão
	// que foi clicado agora
	novo.onclick = btn.onclick;

	// ao botão que foi clicado agora, retirar o event handler
	// para não poder criar mais botões
	btn.onclick = undefined;

	// finalmente, adicionar o novo botão imediatamente a seguir
	// ao botão que foi clicado agora
	btn.parentNode.appendChild(novo);
}