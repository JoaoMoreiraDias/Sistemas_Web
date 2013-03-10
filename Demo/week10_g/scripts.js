/*
	Sistemas Web
	Quando a página carrega são criadas linhas de uma tabela com os
	dados dos produtos incluindo a imagem, nome e preço. Em cada
	produto é colocado um botão para adicionar o produto ao carrinho
	de compras.

	Infelizmente não funciona porque quando a função de comprar o
	produto é executada é usado o valor de i nessa altura (que é 9)
	logo é uma posição fora do array, logo é undefined.
*/

(function () {
	// a colecção de produtos poderia ser preenchida por um pedido Ajax
	var produtos = [
		{
			"id" : 1,
			"img" : "http://www.mhr.pt/fotos/produtos/th_28051_g.jpg",
			"nome" : "UX31A-R5008V ZENBOOK",
			"preco" : 1266.90
		},
		{
			"id" : 2,
			"img" : "http://www.mhr.pt/fotos/produtos/th_30390_g.jpg",
			"nome" : "UX31A-R4003H ZENBOOK",
			"preco" : 1329.00
		},
		{
			"id" : 3,
			"img" : "http://www.mhr.pt/fotos/produtos/th_30389_g.jpg",
			"nome" : "UX31A-R4005H ZENBOOK",
			"preco" : 1181.00
		},
		{
			"id" : 4,
			"img" : "http://www.mhr.pt/fotos/produtos/th_30327_g.jpg",
			"nome" : "UX32A-R3009V ZENBOOK",
			"preco" : 822.90
		},
		{
			"id" : 5,
			"img" : "http://www.mhr.pt/fotos/produtos/th_30326_g.jpg",
			"nome" : "UX31A-R4002V ZENBOOK",
			"preco" : 1184.90
		},
		{
			"id" : 6,
			"img" : "http://www.mhr.pt/fotos/produtos/th_30323_g.jpg",
			"nome" : "U32U-RX080V",
			"preco" : 499.90
		},
		{
			"id" : 7,
			"img" : "http://www.mhr.pt/fotos/produtos/th_30161_g.jpg",
			"nome" : "UX32A-R3001V ZENBOOK",
			"preco" : 731.90
		},
		{
			"id" : 8,
			"img" : "http://www.mhr.pt/fotos/produtos/th_29512_g.jpg",
			"nome" : "UX31A-R5013X ZENBOOK",
			"preco" : 1077.90
		},
		{
			"id" : 9,
			"img" : "http://www.mhr.pt/fotos/produtos/th_29511_g.jpg",
			"nome" : "U36SG-RX204V",
			"preco" : 694.90
		}
	];

	// quando a página carregar criar a tabela de produtos
	// cada linha da tabela tem: imagem, nome, preço e botão
	window.addEventListener('load', function () {
		var i, end, cellImg, cellName, cellPrice, cellBtn, row, img, btn, target = document.getElementById('produtos');

		for (i = 0, end = produtos.length; i < end; ++i) {
			// criar os elementos
			row			= document.createElement('tr');
			cellImg		= document.createElement('td');
			cellName	= document.createElement('td');
			cellPrice	= document.createElement('td');
			cellBtn		= document.createElement('td');
			img			= document.createElement('img');
			btn			= document.createElement('button');

			// colocar URL da imagem
			img.src = produtos[i].img;

			// colocar texto no botão
			btn.textContent = 'comprar';

			// criar event handler para comprar
			btn.addEventListener('click', function () {
				// isto não funciona correctamente!
				alert('Está a comprar o produto ' + produtos[i] + '!');
			});

			// adicionar a imagem à célula da imagem
			cellImg.appendChild(img);
			// colocar texto na célula do nome
			cellName.innerHTML = produtos[i].nome;
			// colocar preço na célula do preço
			cellPrice.innerHTML = produtos[i].preco + ' €';
			// adicionar botão à célula do botão
			cellBtn.appendChild(btn);

			// adicionar as quatro células à linha
			row.appendChild(cellImg);
			row.appendChild(cellName);
			row.appendChild(cellPrice);
			row.appendChild(cellBtn);

			// adicionar a linha à tabela
			target.appendChild(row);
		}
	});
})();