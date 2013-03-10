/*
	Sistemas Web
	Variable hoisting. Embora a variável b apenas seja
	declarada dentro do bloco if, esta declaração é
	movida pelo browser para o topo da função. É por isto
	que não há erro em utilizar a variável b "antes de
	ser declarada" e também porque é possível aceder à
	variável b mesmo depois do bloco onde esta foi
	declarada.

	Por causa desta propriedade, e para evitar confusões,
	todas as variáveis declaradas dentro de uma função
	devem ser declaradas no topo. Ou seja, fazer o
	variable hoisting manualmente.
*/

function declarar() {
	var a = 5;

	// usar uma variável "antes de ser declarada"
	b = 'teste';

	if (a == 5) {
		var b = 'Marta';
	}

	alert(b);
}

declarar();

// para evitar confusões a função deveria ficar:
function declarar2() {
	// declarar no topo todas as variáveis usadas
	// dentro da função
	var a = 5, b = 'teste';

	if (a == 5) {
		b = 'Marta';
	}

	alert(b);
}