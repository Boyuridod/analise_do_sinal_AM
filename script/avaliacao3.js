var E0 = 0, fm = 0, fm10 = 0, f0 = 0, f010 = 0, u = 0, fm2 = 0, fm2_10 = 0, f0_2 = 0, f0_2_10 = 0, fm3 = 0, fm3_10 = 0, f0_3 = 0, f0_3_10 = 0;
var c = 0, m = 0;

function recebeInputs(){

    try {
        E0 = parseFloat(document.getElementById("id1").value) / 2;
        fm = parseFloat(document.getElementById("id2").value);
        fm10 = parseFloat(document.getElementById("id3").value);
        f0 = parseFloat(document.getElementById("id4").value);
        f010 = parseFloat(document.getElementById("id5").value);
        u = (parseFloat(document.getElementById("id6").value) * 2) / E0;
        fm2 = parseFloat(document.getElementById("id7").value);
        fm2_10 = parseFloat(document.getElementById("id8").value);
        f0_2 = parseFloat(document.getElementById("id9").value);
        f0_2_10 = parseFloat(document.getElementById("id10").value);
        fm3 = parseFloat(document.getElementById("id11").value);
        fm3_10 = parseFloat(document.getElementById("id12").value);
        f0_3 = parseFloat(document.getElementById("id13").value);
        f0_3_10 = parseFloat(document.getElementById("id14").value);

        let analise = validar();
        mostrar_sinais(analise);
        
    }

    catch (error) {
        alert("error"+error);
    }

}

function validar(){
    let response = true;
    let string = 'Erro em valores de ';
    if(fm != fm2 || fm != fm3 || fm2 != fm3){
        response = false;
        string += 'dados da frequência mensageira,';
    } else if(fm10 != fm2_10 || fm10 != fm3_10 || fm2_10 != fm3_10){
        response = false;
        string += 'suas potências';
    }
}

function calcular() {

    alert("Calculando os sinais da mensagem e da portadora... " + E0);
    //Sinal da portadora
    return 'vixi_maria_galera';
}

function mostrar_sinais(analise){

    let respostas = document.getElementsByClassName("area_respostas")[0];
    let paragrafo = document.createElement("p");
    let string = calcular();
    paragrafo.append(string);
    respostas.appendChild(paragrafo);
}