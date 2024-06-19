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

            if (analise.respostaMens == "Corretas" && analise.respostaPort == "Corretas") {
                calcular();
            } else {
                if(analise.respostaMens == "Corretas")
                    analise.respostaMens = "";
                else if(analise.respostaPort == "Corretas")
                    analise.respostaPort = "";
                showAlert("Erro de Validação!", analise.respostaMens + "\n" + analise.respostaPort);
            }
        } catch (error) {
            showAlert("Erro!", "Erro ao receber os dados\n" + error);
        }
    }

    function validar() {
        let respostaMens = 'Verifique se você digitou corretamente os ';
        let respostaPort = 'Verifique também se ';

        if (fm != fm2 || fm != fm3 || fm2 != fm3) {
            respostaMens += 'dados da frequência da mensageira';
            if (fm10 != fm2_10 || fm10 != fm3_10 || fm2_10 != fm3_10) {
                respostaMens += ' e os valores das potências';
            }
        } else if (fm10 != fm2_10 || fm10 != fm3_10 || fm2_10 != fm3_10) {
            respostaMens += 'valores das potências da mensageira';
        } else {
            respostaMens = "Corretas";
        }

        if (f0 != f0_2 || f0 != f0_3 || f0_2 != f0_3) {
            respostaPort += 'dados da frequência da portadora';
            if (f010 != f0_2_10 || f010 != f0_3_10 || f0_2_10 != f0_3_10) {
                respostaPort += ' e os valores das potências';
            }
        } else if (f010 != f0_2_10 || f010 != f0_3_10 || f0_2_10 != f0_3_10) {
            respostaPort += 'valores das potências da portadora';
        } else {
            respostaPort = "Corretas";
        }

        return {
            respostaMens,
            respostaPort
        };
    }

    function calcular() {
        let respostas = document.getElementsByClassName("area_respostas")[0];
        let paragrafo = document.createElement("p");

        c = "c(t) = " + E0 + "*cos(2*\u03C0*" + f0 + "^" + f010 + "*t)";

        paragrafo.append(c);
        respostas.appendChild(paragrafo);
    }

    // Make the functions available globally if needed
    window.recebeValores = recebeValores;
    window.closeAlert = closeAlert;
});
