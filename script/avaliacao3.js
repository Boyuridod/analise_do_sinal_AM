var E0 = getElementById("id1"), fm = getElementById("id2"), fm10 = getElementById("id3");
var f0 = getElementById("id4"), f010 = getElementById("id5"), u = (getElementById("id6") * 2) / E0;
var f = getElementById("id7"), f10 = getElementById("id8"), f0_2 = getElementById("id9"), f0_2_10 = getElementById("id10");
var f_2 = getElementById("id11"), f_2_10 = getElementById("id12"), f0_3 = getElementById("id13"), fo_3_10 = getElementById("id14");

 // Cria o elemento parágrafo
 var paragrafo = document.createElement("p");
            
 // Define o texto do parágrafo
 paragrafo.textContent = "Este é um parágrafo adicionado dinamicamente.";
 
 // Adiciona o parágrafo à div com o ID area_respostas
 var areaRespostas = document.getElementById("area_respostas");
 areaRespostas.appendChild(paragrafo);