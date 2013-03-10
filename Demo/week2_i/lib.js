/*
	Sistemas Web
	A nossa primeira library/framework.
*/

function addEvent(obj, eventName, handler) {
/*
	Adiciona um event listener ao objecto independentemente do browser.
	obj:		qual objecto a adicionar o event listener.
	eventName:	nome do evento que despoletará o handler (sem 'on').
	handler:	nome da função para tratar o evento despoletado.
*/
	if (obj.addEventListener) {
		obj.addEventListener(eventName, handler);
	} else {
		obj.attachEvent('on' + eventName, handler);
	}
}