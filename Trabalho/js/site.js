(function () {
    //Declaração de variaveis iniciais.
    var i, end, options, linha, item, Tempo, Total, Primário, Secundário, Terciário, Ignorado, xhr;
    //Declarar as multiplas bases de dados que vou usar.
    var bd1 = 'json/ofertasdeempregoporactividadeeconmica.json';
    var bd2 = 'json/portipodedesemprego.json';
    var bd3 = 'json/taxadedesempregoporgrupoetrio.json';
    var bd4 = 'json/taxadedesempregopornveldeescolaridadecompleto.json';
    var bd5 = 'xml/taxadedesempregoporsexo.xml';

    //Esta função serve como interface para adicionar eventos com compatibilidade. Para bowsers W3C e IE, sem fazer sniffing.
    function addEvent(elem, evnt, func) {
        if (elem.addEventListener) { // W3C DOM
            elem.addEventListener(evnt, func);
        } else if (elem.attachEvent) { // IE DOM
            elem.attachEvent("on" + evnt, func);
        };
    };

//Esta função grava a ultima sessão para Local Storage.
function gravarLS(bd) {
    localStorage.setItem('ultimasessao', bd);
};

//Esta função carrega a ultima sessão se existir uma. Para o utilizador continuar de onde deixou.
function carregarLS() {
    if (localStorage.getItem('ultimasessao') !== null) {
        carregarbd(localStorage.getItem('ultimasessao'));
        if (localStorage.getItem('ultimasessao') ==='json/ofertasdeempregoporactividadeeconmica.json') {
            document.getElementById('btnbd1').checked = true;
        };
        if (localStorage.getItem('ultimasessao') ==='json/portipodedesemprego.json') {
            document.getElementById('btnbd2').checked = true;
        };
        if (localStorage.getItem('ultimasessao') ==='json/taxadedesempregoporgrupoetrio.json') {
            document.getElementById('btnbd3').checked = true;
        };
        if (localStorage.getItem('ultimasessao') ==='json/taxadedesempregopornveldeescolaridadecompleto.json') {
            document.getElementById('btnbd4').checked = true;
        };
        if (localStorage.getItem('ultimasessao') ==='xml/taxadedesempregoporsexo.xml') {
            document.getElementById('btnbd5').checked = true;
        };
    };
};

    //Esta função vai ser executada mal a página é carregada. Basicamente adiciona os eventos aos radio buttons e trata de outros elementos
    //a ser disputados
    function init() {
        //Esta linha verifica se há alguma sessãoa antiga memorizada em Local Storage. Se há resume a mesma.
        carregarLS();


        rss();

        var agora = new Date(); //Data atual
        var ultimadata = new Date(); //Data da ultima visita
        //A seguinte linha vai construir o contiudo do cookie.
        var cookieText = "username=" + ";path=/;expires=" + agora.setMonth(agora.getMonth() + 2).toLocaleString() + ";lastVisit=" + ultimadata.toDateString();
        document.cookie = cookieText;//O contiudo do cookie é escrito para um cookie.
        var lastVisit = cookieText .split("="); //Cookie é lido
        if (null != lastVisit) {
        document.getElementById("tempo").innerHTML = lastVisit[4]; //Data é escrita na página.
    }

        //Eventos de controlar os radio buttons. "Quando o botao X for clicado carregar a base de dados Y".
        addEvent(document.getElementById('btnbd1'), 'click', function () {
            carregarbd(bd1);
        });
        addEvent(document.getElementById('btnbd2'), 'click', function () {
            carregarbd(bd2);
        });
        addEvent(document.getElementById('btnbd3'), 'click', function () {
            carregarbd(bd3);
        });
        addEvent(document.getElementById('btnbd4'), 'click', function () {
            carregarbd(bd4);
        });
        addEvent(document.getElementById('btnbd5'), 'click', function () {
            carregarbd(bd5);
        });
    };

    //Mal a página fica completamente carregada, inicializa a função principal.
    addEvent(window, 'load', init);

    //Subestitui o 'DOMContentLoaded', e adiciona suporte ao IE.
    function carregarXHR() {
        $(document).ready(function () {
            if (window.XMLHttpRequest) {
                xhr = new XMLHttpRequest();
            } else {
                xhr = new ActiveXObject('Microsoft.XMLHTTP');
            }
        })
    };

//Esta função é a segunda mais importante, precore a base de dados relativa a escolha do utilizador e carrega os valores.
function carregarbd(bd) {
    carregarXHR();

    xhr.onreadystatechange = function () {
            //Este caso é especial porque é XML e não JSON a ser tratado.
            if ((bd === bd5) && (xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 0))) {
                var resultado = [];
                var xmlDoc = xhr.responseXML;
                items = xmlDoc.documentElement.getElementsByTagName('element');
                for (i = 0, end = items.length; i < end; ++i) {
                    resultado.push(items[i]);
                }
                construirTabela(resultado, bd);
                 //JSON normal a ser tratado.
             } else if (xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 0)) {
                var resultado = [];
                var items = JSON.parse(xhr.responseText);
                var i, iend;
                for (i = 0, iend = items.length; i < iend; ++i) {
                    resultado.push(items[i]);
                };
                construirTabela(resultado, bd);
            };
        };
        xhr.open('GET', bd);
        xhr.send(null);
    };

//Esta função é a mais importante porque é a função que desenha as tabelas com a informação das bases de dados. Cada If é uma base de dados diferente a ser desenhada.
function construirTabela(resultado, bd) {
    if (bd === bd1) {
        document.getElementById('divTabela').innerHTML = "<table id='inf' class='table'></table>";
        var cabecalho, linha, content, corpo, Tempo, Total, Primário, Secundário, Terciário, Ignorado;

        cabecalho = document.createElement('THEAD');
        linha = document.createElement('TR');
        cabecalho.appendChild(linha);

        content = document.createElement('TD');
        content.textContent = 'Tempo';
        linha.appendChild(content);

        content = document.createElement('TD');
        content.textContent = 'Total';
        linha.appendChild(content);

        content = document.createElement('TD');
        content.textContent = 'Primário';
        linha.appendChild(content);

        content = document.createElement('TD');
        content.textContent = 'Secundário';
        linha.appendChild(content);

        content = document.createElement('TD');
        content.textContent = 'Terciário';
        linha.appendChild(content);

        content = document.createElement('TD');
        content.textContent = 'Ignorado';
        linha.appendChild(content);

        document.getElementById('inf').appendChild(cabecalho);

        corpo = document.createElement('TBODY');

        for (i = 0, end = resultado.length; i < end; ++i) {
            Tempo = resultado[i].Tempo;
            Total = resultado[i].Total;
            Primário = resultado[i].Primário;
            Secundário = resultado[i].Secundário;
            Terciário = resultado[i].Terciário;
            Ignorado = resultado[i].Ignorado;

            linha = document.createElement('TR');
            corpo.appendChild(linha);

            item = document.createElement('TD');
            item.textContent = Tempo;
            linha.appendChild(item);

            item = document.createElement('TD');
            item.textContent = Total;
            linha.appendChild(item);

            item = document.createElement('TD');
            item.textContent = Primário;
            linha.appendChild(item);

            item = document.createElement('TD');
            item.textContent = Secundário;
            linha.appendChild(item);

            item = document.createElement('TD');
            item.textContent = Terciário;
            linha.appendChild(item);

            item = document.createElement('TD');
            item.textContent = Ignorado;
            linha.appendChild(item);
        };
        document.getElementById('inf').appendChild(corpo);
            //Como para todos os casos, no final a sessão é gravada para Local Storage.
            gravarLS(bd);
            googlegraphs(bd);
        };
        if (bd === bd2) {
            document.getElementById('divTabela').innerHTML = "<table id='inf' class='table'></table>";
            var cabecalho, linha, content, corpo, Tempo, Total, À_procura_do_1º_emprego, À_procura_de_novo_emprego;

            cabecalho = document.createElement('THEAD');
            linha = document.createElement('TR');
            cabecalho.appendChild(linha);

            content = document.createElement('TD');
            content.textContent = 'Tempo';
            linha.appendChild(content);

            content = document.createElement('TD');
            content.textContent = 'Total';
            linha.appendChild(content);

            content = document.createElement('TD');
            content.textContent = 'À procura do 1º emprego';
            linha.appendChild(content);

            content = document.createElement('TD');
            content.textContent = 'À procura de novo emprego';
            linha.appendChild(content);

            document.getElementById('inf').appendChild(cabecalho);

            corpo = document.createElement('TBODY');

            for (i = 0, end = resultado.length; i < end; ++i) {
                Tempo = resultado[i].tempo;
                Total = resultado[i].Total
                primeiroEmp = resultado[i].primeiro;
                novoEmp = resultado[i].novo;

                linha = document.createElement('TR');
                corpo.appendChild(linha);

                item = document.createElement('TD');
                item.textContent = Tempo;
                linha.appendChild(item);

                item = document.createElement('TD');
                item.textContent = Total;
                linha.appendChild(item);

                item = document.createElement('TD');
                item.textContent = primeiroEmp;
                linha.appendChild(item);

                item = document.createElement('TD');
                item.textContent = novoEmp;
                linha.appendChild(item);
            };
            document.getElementById('inf').appendChild(corpo);
            gravarLS(bd);
            googlegraphs(bd);
        };
        if (bd === bd3) {
            document.getElementById('divTabela').innerHTML = "<table id='inf' class='table'></table>";
            var cabecalho, linha, content, corpo, Tempo, Total, menorDOISCINCO, DOISCINVOaCINCOQUATRO, CINCOCINCOaSEISQUATRO;

            cabecalho = document.createElement('THEAD');
            linha = document.createElement('TR');
            cabecalho.appendChild(linha);

            content = document.createElement('TD');
            content.textContent = 'Tempo';
            linha.appendChild(content);

            content = document.createElement('TD');
            content.textContent = 'Total';
            linha.appendChild(content);

            content = document.createElement('TD');
            content.textContent = '<25';
            linha.appendChild(content);

            content = document.createElement('TD');
            content.textContent = '25-54';
            linha.appendChild(content);

            content = document.createElement('TD');
            content.textContent = '55-64';
            linha.appendChild(content);

            document.getElementById('inf').appendChild(cabecalho);

            corpo = document.createElement('TBODY');

            for (i = 0, end = resultado.length; i < end; ++i) {
                Tempo = resultado[i].Tempo;
                Total = resultado[i].Total;
                menorDOISCINCO = resultado[i].menosdoiscinco;
                DOISCINVOaCINCOQUATRO = resultado[i].entre25e54;
                CINCOCINCOaSEISQUATRO = resultado[i].entre55e64;

                linha = document.createElement('TR');
                corpo.appendChild(linha);

                item = document.createElement('TD');
                item.textContent = Tempo;
                linha.appendChild(item);

                item = document.createElement('TD');
                item.textContent = Total;
                linha.appendChild(item);

                item = document.createElement('TD');
                item.textContent = menorDOISCINCO;
                linha.appendChild(item);

                item = document.createElement('TD');
                item.textContent = DOISCINVOaCINCOQUATRO;
                linha.appendChild(item);

                item = document.createElement('TD');
                item.textContent = CINCOCINCOaSEISQUATRO;
                linha.appendChild(item);
            };
            document.getElementById('inf').appendChild(corpo);
            gravarLS(bd);
            googlegraphs(bd);
        };
        if (bd === bd4) {
            document.getElementById('divTabela').innerHTML = "<table id='inf' class='table'></table>";
            var cabecalho, linha, content, corpo, Tempo, Total, Nenhum, Básico, Secundário_e_pós_secundário, Superior;

            cabecalho = document.createElement('THEAD');
            linha = document.createElement('TR');
            cabecalho.appendChild(linha);

            content = document.createElement('TD');
            content.textContent = 'Tempo';
            linha.appendChild(content);

            content = document.createElement('TD');
            content.textContent = 'Total';
            linha.appendChild(content);

            content = document.createElement('TD');
            content.textContent = 'Nenhum';
            linha.appendChild(content);

            content = document.createElement('TD');
            content.textContent = 'Básico';
            linha.appendChild(content);

            content = document.createElement('TD');
            content.textContent = 'Secundário e pós secundário';
            linha.appendChild(content);

            content = document.createElement('TD');
            content.textContent = 'Superior'
            linha.appendChild(content);

            document.getElementById('inf').appendChild(cabecalho);

            corpo = document.createElement('TBODY');

            for (i = 0, end = resultado.length; i < end; ++i) {
                Tempo = resultado[i].Tempo;
                Total = resultado[i].Total;
                Nenhum = resultado[i].Nenhum;
                basico = resultado[i].Basico;
                secepos = resultado[i].secepossec;
                Superior = resultado[i].Superior;

                linha = document.createElement('TR');
                corpo.appendChild(linha);

                item = document.createElement('TD');
                item.textContent = Tempo;
                linha.appendChild(item);

                item = document.createElement('TD');
                item.textContent = Total;
                linha.appendChild(item);

                item = document.createElement('TD');
                item.textContent = Nenhum;
                linha.appendChild(item);

                item = document.createElement('TD');
                item.textContent = basico;
                linha.appendChild(item);

                item = document.createElement('TD');
                item.textContent = secepos;
                linha.appendChild(item);

                item = document.createElement('TD');
                item.textContent = Superior;
                linha.appendChild(item);
            };
            document.getElementById('inf').appendChild(corpo);
            gravarLS(bd);
            googlegraphs(bd);
        };
        if (bd === bd5) {
            document.getElementById('divTabela').innerHTML = "<table id='inf' class='table'></table>";
            var cabecalho, linha, content, corpo, Feminino, Masculino, Tempo, Total;

            cabecalho = document.createElement('THEAD');
            linha = document.createElement('TR');
            cabecalho.appendChild(linha);

            content = document.createElement('TD');
            content.textContent = 'Feminino';
            linha.appendChild(content);

            content = document.createElement('TD');
            content.textContent = 'Masculino';
            linha.appendChild(content);

            content = document.createElement('TD');
            content.textContent = 'Tempo';
            linha.appendChild(content);

            content = document.createElement('TD');
            content.textContent = 'Total';
            linha.appendChild(content);

            document.getElementById('inf').appendChild(cabecalho);
            corpo = document.createElement('TBODY');

            for (j = 0, end = resultado.length; j < end; ++j) {
                Feminino = resultado[j].children[0].textContent;
                Masculino = resultado[j].children[1].textContent;
                Tempo = resultado[j].children[2].textContent;
                Total = resultado[j].children[3].textContent;

                linha = document.createElement('TR');
                corpo.appendChild(linha);

                item = document.createElement('TD');
                item.textContent = Feminino;
                linha.appendChild(item);

                item = document.createElement('TD');
                item.textContent = Masculino;
                linha.appendChild(item);

                item = document.createElement('TD');
                item.textContent = Tempo;
                linha.appendChild(item);

                item = document.createElement('TD');
                item.textContent = Total;
                linha.appendChild(item);

            };
            document.getElementById('inf').appendChild(corpo);
            gravarLS(bd);
            googlegraphs(bd);
        };
    };
    
//Esta função desenha no HTML o resultado de um web service que contorna o SOP. Subestituindo o plano de usar o Google News.
function rss() {
    var rssxhr;
    if (window.XMLHttpRequest) {
        rssxhr = new XMLHttpRequest();
    } else {
        rssxhr = new ActiveXObject('Microsoft.XMLHTTP');
    };

    rssxhr.onreadystatechange = function () {
        if (rssxhr.readyState === 4 && (rssxhr.status === 200 || rssxhr.status === 0)) {
            var resultado = [];
            var xmlDoc = rssxhr.responseXML;
            var a;
            items = (xmlDoc.documentElement.getElementsByTagName('channel')).getElementsByTagName('item');
            

            document.getElementById('rss').innerHTML = "<div class = 'pan1'>";
            var item, title, link, source, pubDate, description;

            xmlDoc.documentElement.getElementsByTagName('channel');
            for (c = 0, end = items.length; c < end; ++c) 
            {
               itemsTemp=items[a].getElementsByTagName('item');
               for (j = 0, end = itemsTemp.length; j < end; ++j) 
               {
                title = itemsTemp[j].children[0].textContent;
                link = itemsTemp[j].children[1].textContent;
                source = itemsTemp[j].children[2].textContent;
                pubDate = itemsTemp[j].children[4].textContent;
                description = itemsTemp[j].children[5].textContent;

                item = document.createElement('H2');
                item.textContent = title;
                cabecalho.appendChild(item);

                item = document.createElement('P');
                item.textContent = link;
                cabecalho.appendChild(item);

                item = document.createElement('P');
                item.textContent = source;
                cabecalho.appendChild(item);

                item = document.createElement('P');
                item.textContent = pubDate;
                cabecalho.appendChild(item);

                item = document.createElement('P');
                item.textContent = description;
                cabecalho.appendChild(item);
            };
        };
    };
};
rssxhr.open('GET', 'sop.php');
rssxhr.send(null);
};

//Função do Google relativo ao API Google Charts
function googlegraphs(bd) {
        // Load the Visualization API and the piechart package.
        google.load('visualization', '1', {
            'packages': ['corechart']
        });

        // Set a callback to run when the Google Visualization API is loaded.
        google.setOnLoadCallback(drawChart(bd));
    };

//Função do Google relativo ao API Google Charts. Modificado por mim para se adaptar a varias fontes de dados.
function drawChart(bd) {
    var criterio;
    if (bd === bd1) {
        criterio = "json/chart1.json";
    };

    if (bd === bd2) {
        criterio = "json/chart2.json";
    };

    if (bd === bd3) {
        criterio = "json/chart3.json";
    };

    if (bd === bd4) {
        criterio = "json/chart4.json";
    };

    if (bd === bd5) {
        criterio = "json/chart5.json";
    };

    var jsonData = $.ajax({
        url: criterio,
        dataType: "json",
        async: false
    }).responseText;

    console.log(jsonData);

        // Create our data table out of JSON data loaded from server.
        var data = new google.visualization.DataTable(jsonData);

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
        chart.draw(data, {
            width: 400,
            height: 300
        });
    };
})();