/*
	Sistemas Web
	Definimos o que é um aluno através da função Aluno
	que faz o papel da classe e construtor no Java.
	Cada aluno tem um nome e número bem como dois métodos.

	Declaramos um array para armazenar todos os nossos
	alunos. Criamos e adicionamos três alunos ao array e
	finalmente imprimimos os detalhes de cada um deles.
*/

// definir o que é um objecto Aluno
function Aluno(s, n) {
    return {
        nome: s,
        num: n,
        getNum: function () {
            return this.num;
        },
        toString : function () {
        	return this.nome + ' (' + this.getNum() + ')';
        }
    };
}

// array vazio para armazenar alunos
var alunos = [];

// criar e guardar dois alunos com o método push
// que todos os arrays têm
alunos.push(Aluno('Marta', 100));
alunos.push(Aluno('António', 290));

// criar e guardar manualmente um novo aluno
// na posição 99 do array. Isto quer dizer que
// alunos.length ficará igual a 100
alunos[99] = Aluno('Pedro', 6787);

// embora apenas sejam usadas no ciclo for abaixo as
// variáveis foram declaradas fora do ciclo porque
// devido ao variable hoisting isto é o que realmente
// acontece
var i, end;

// iterar sobre o array imprimindo para a consola
// a informação de cada um dos alunos
for (i = 0, end = alunos.length; i < end; ++i) {
    // para usarmos o length como sentinela do array
    // temos que testar se a posição do array foi
    // alguma vez inicializada porque length não
    // é a quantidade de elementos!!!
    //
    // usamos !== em vez de != para não ocorrer
    // type coerciveness
    if (alunos[i] !== undefined) {
	   console.info(alunos[i].toString());
    }
}