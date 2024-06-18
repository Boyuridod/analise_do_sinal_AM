var E0 = 0, fm = 0, fm10 = 0, f0 = 0, f010 = 0, u = 0, f = 0, f10 = 0, f0_2 = 0, f0_2_10 = 0, f_2 = 0, f_2_10 = 0, f0_3 = 0, fo_3_10 = 0;
var c = 0, m = 0;

function recebeInputs(){

    try {
        E0 = parseFloat(document.getElementById("id1").value) / 2;
        fm = parseFloat(document.getElementById("id2").value);
        fm10 = parseFloat(document.getElementById("id3").value);
        f0 = parseFloat(document.getElementById("id4").value);
        f010 = parseFloat(document.getElementById("id5").value);
        u = (parseFloat(document.getElementById("id6").value) * 2) / E0;
        f = parseFloat(document.getElementById("id7").value);
        f10 = parseFloat(document.getElementById("id8").value);
        f0_2 = parseFloat(document.getElementById("id9").value);
        f0_2_10 = parseFloat(document.getElementById("id10").value);
        f_2 = parseFloat(document.getElementById("id11").value);
        f_2_10 = parseFloat(document.getElementById("id12").value);
        f0_3 = parseFloat(document.getElementById("id13").value);
        fo_3_10 = parseFloat(document.getElementById("id14").value);

        calcular();
    }

    catch (error) {
        alert("error"+error);
    }

}

function calcular() {

    alert("Bruno");

    var respostas = document.getElementsByClassName("area_respostas")[0];
    var paragrafo = document.createElement("p");

    paragrafo.append("Oi");

    respostas.appendChild(paragrafo);

}