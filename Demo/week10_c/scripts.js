/*
	Sistemas Web
	O evento onload apenas é despoletado depois de toda a página
	ser carregada, incluindo todas as imagens, etc. enquanto que
	o DOMContentLoaded é despoletado mal o browser complete o
	parsing do HTML e tenha construido o DOM.

	Atenção que o IE8 não suporta DOMContentLoaded e não há uma maneira
	fácil de fazer feature detection. Sem fazer browser sniffing descubra
	uma maneira de usar DOMContentLoaded ou onLoad se o primeiro não
	for suportado.
*/

(function () {
	// isto vai servir para medir quanto tempo
	// cada evento demora a ser despoletado
	var benchmark = new Date();

	// quando a página carregar
	window.addEventListener('load', function () {
		document.getElementById('duracaoonload').innerHTML = (new Date() - benchmark);
	});

	// quando o DOM estiver construido
	window.addEventListener('DOMContentLoaded', function () {
		document.getElementById('duracaoDOMContentLoaded').innerHTML = (new Date() - benchmark);
	});
})();