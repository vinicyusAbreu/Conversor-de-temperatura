(function() {
    const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
    let dia = document.getElementById('dia');
    let mes = document.getElementById('mes');
    let ano = document.getElementById('ano');
    let conversor = document.getElementById('conversor');
    let convertido = document.getElementById('convertido');
    let seleção1 = document.getElementById('seleção1');
    let seleção2 = document.getElementById('seleção2');

    conversor.addEventListener('keyup', function(e) {
        let cov = conversor.value;


        if (seleção1.value == "Celsius") {
            if (seleção2.value == "Fahrenheit") {
                convertido.value = parseFloat(cov * 9) / 5 + 32;
            } else if (seleção2.value == "Kelvin") {
                convertido.value = parseFloat(cov) + 273.15;
            } else if (seleção2.value == "Celsius") {
                convertido.value = cov;
            }
        }
        if (seleção1.value == "Fahrenheit") {
            if (seleção2.value == "Fahrenheit") {
                convertido.value = cov;
            } else if (seleção2.value == "Kelvin") {
                convertido.value = (((cov - 32) * (5 / 9)) + 273.15).toFixed(3);

            } else if (seleção2.value == "Celsius") {
                convertido.value = ((cov - 32) * (5 / 9)).toFixed(3);
            }
        }

        if (seleção1.value == "Kelvin") {
            if (seleção2.value == "Fahrenheit") {
                convertido.value = ((cov - 273.15) * (9 / 5) + 32).toFixed(2);
            } else if (seleção2.value == "Kelvin") {
                convertido.value = cov;

            } else if (seleção2.value == "Celsius") {
                convertido.value = (cov - 273.15).toFixed(2);
            }
        }

    });


    function data() {
        let agora = new Date;
        dia.innerHTML = agora.getDate();
        mes.innerHTML = meses[(agora.getMonth())];
        ano.innerHTML = agora.getFullYear();
    }

    data();

    let selecao = Array.from(document.querySelectorAll('.reset'))
    selecao.forEach(select => {
        select.addEventListener("change", () => {
            conversor.value = "";
            convertido.value = "";
        })
    });


}());