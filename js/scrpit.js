let calcular = document.getElementById("calcular");

function imc(){
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let resultado = document.getElementById("resultado");

    if(peso !== '' && altura !== ''){
        let valorImc = (peso / (altura * altura)).toFixed(1);
        let classificar = '';

        if(valorImc < 17){
            classificar = 'muito abaixo do Peso';
        }else if(valorImc >= 17 && valorImc <= 18.5){
            classificar = 'abaixo do Peso';
        }else if(valorImc >= 18.5 && valorImc < 25){
            classificar = 'Com, Peso Ideal. Parabééénnsss!!!';
        }else if(valorImc >= 25 && valorImc < 30){
            classificar = 'levemente acima do peso';
        }else if(valorImc >= 30 && valorImc < 35){
            classificar = 'Obeso';
        }else if(valorImc >= 35 && valorImc < 40){
            classificar = 'com, Obesidade Severa';
        }else {
            classificar = 'com, Obesidade Morbida';
        }

        resultado.textContent = `Seu IMC é ${valorImc} e você está ${classificar}`;

    }else{
        resultado.textContent = 'Preencha todos os campos !!!';
    }
}

calcular.addEventListener("click", imc);