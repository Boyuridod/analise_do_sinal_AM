document.addEventListener("DOMContentLoaded", function () {
    function showAlert(title, message) {
        document.getElementById("alertTitle").innerText = title;
        document.getElementById("alertMessage").innerText = message;
        document.getElementById("customAlert").style.display = "block";
    }

    function closeAlert() {
        document.getElementById("customAlert").style.display = "none";
    }

    function recebeValores() {
        try {
            E0 = parseFloat(document.getElementById("id1").value) / 2;

            fm = parseFloat(document.getElementById("id2").value);
            fm10 = parseFloat(document.getElementById("id3").value);
            f0 = parseFloat(document.getElementById("id4").value);
            f010 = parseFloat(document.getElementById("id5").value);

            fm2 = parseFloat(document.getElementById("id6").value);
            fm2_10 = parseFloat(document.getElementById("id7").value);
            f0_2 = parseFloat(document.getElementById("id8").value);
            f0_2_10 = parseFloat(document.getElementById("id9").value);

            u = (parseFloat(document.getElementById("id10").value) * 2) / E0;

            fm3 = parseFloat(document.getElementById("id11").value);
            fm3_10 = parseFloat(document.getElementById("id12").value);
            f0_3 = parseFloat(document.getElementById("id13").value);
            f0_3_10 = parseFloat(document.getElementById("id14").value);

            fm4 = parseFloat(document.getElementById("id15").value);
            fm4_10 = parseFloat(document.getElementById("id16").value);
            f0_4 = parseFloat(document.getElementById("id17").value);
            f0_4_10 = parseFloat(document.getElementById("id18").value);

            let analise = validar();

            if (analise.respostaMens == "Corretas" && analise.respostaPort == "Corretas") {
                calcular();
            } else {
                if (analise.respostaMens == "Corretas")
                    analise.respostaMens = "";
                else if (analise.respostaPort == "Corretas")
                    analise.respostaPort = "";
                showAlert("Erro de Validação!", analise.respostaMens + "\n\n" + analise.respostaPort);
            }
        } catch (error) {
            showAlert("Erro!", "Erro ao receber os dados\n" + error);
        }
    }

    function validar() {
        let respostaMens = 'Verifique se você digitou corretamente os ';
        let respostaPort = 'Verifique se você digitou corretamente os ';

        if (fm == fm2 && fm2 == fm3 && fm3 == fm4) {
            if(fm10 == fm2_10 && fm2_10 == fm3_10 && fm3_10 == fm4_10) {
                respostaMens = 'Corretas';
            } else {
                respostaMens += 'valores das potências da mensageira';
            }
        } else {
            respostaMens += 'dados da frequência da mensageira';
            if(!(fm10 == fm2_10 && fm2_10 == fm3_10 && fm3_10 == fm4_10)) {
                respostaMens += ' e os valores das potências dela';
            } 
        }

        if (f0 == f0_2 && f0_2 == f0_3 && f0_3 == f0_4) {
            if (f010 == f0_2_10 && f0_2_10 == f0_3_10 && f0_3_10 == f0_4_10) {
                respostaPort = 'Corretas';
            } else {
                respostaPort += 'valores das potências da portadora';
            }
        } else {
            respostaPort += 'dados da frequência da mensageira';
            if (!(f010 == f0_2_10 && f0_2_10 == f0_3_10 && f0_3_10 == f0_4_10)) {
                respostaPort += ' e os valores das potências dela';
            }
        }

        return {
            respostaMens,
            respostaPort
        };
    }

    function calcular() {

        let respostas = document.getElementsByClassName("area_respostas")[0];
        let paragrafo = document.createElement("p");
        let quebra = document.createElement("br");
        var texto = "";

        texto = "E0 = " + E0;

        paragrafo.append(texto);

        paragrafo.append(quebra);

        Em = u * E0;

        texto = "Em = " + Em;

        paragrafo.append(texto);

        paragrafo.append(quebra);

        texto = "u = " + u;

        paragrafo.append(texto);

        paragrafo.append(quebra);

        c = "c(t) = " + E0 + "*cos(2*\u03C0*" + f0 + "^" + f010 + "*t)";

        paragrafo.append(c);

        paragrafo.append(quebra);

        m = "m(t) = " + Em + "*cos(2*\u03C0*" + fm + "^" + fm10 + "*t)";

        paragrafo.append(m);

        respostas.appendChild(paragrafo);

    }

    // Make the functions available globally if needed
    window.recebeValores = recebeValores;
    window.closeAlert = closeAlert;
});