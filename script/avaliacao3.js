var E0 = 0, fm = 0, fm10 = 0, f0 = 0, f010 = 0, u = 0, f = 0, f10 = 0, f0_2 = 0, f0_2_10 = 0, f_2 = 0, f_2_10 = 0, f0_3 = 0, fo_3_10 = 0;

function recebeInputs() {

    try {
        E0 = document.getElementById("id1").value;
        fm = document.getElementById("id2").value;
        fm10 = document.getElementById("id3").value;
        f0 = document.getElementById("id4").value;
        f010 = document.getElementById("id5").value;
        u = (document.getElementById("id6").value * 2) / E0;
        f = document.getElementById("id7").value;
        f10 = document.getElementById("id8").value;
        f0_2 = document.getElementById("id9").value;
        f0_2_10 = document.getElementById("id10").value;
        f_2 = document.getElementById("id11").value;
        f_2_10 = document.getElementById("id12").value;
        f0_3 = document.getElementById("id13").value;
        fo_3_10 = document.getElementById("id14").value;

        calcular();
    }

    catch (error) {
        alert(error);
    }

}

function calcular() {

    alert("deu bom" + E0);

}