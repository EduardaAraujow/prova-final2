function enviar(){
    let Txa = document.querySelector('#numero1');
    let numero1 = parseInt(Txa.value);
    let divsoma1 = document.querySelector('.soma');


    let Txb = document.querySelector('#numero2');
    let numero2 = parseInt(Txb.value);
    let divsoma2 = document.querySelector('.soma');

    let Ressoma = soma1(numero1,numero2);

    divsoma.innerHTML += '<div>' + numero1 + '</div>';
    divsoma.innerHTML += '<div>' + numero2 + '</div>';
    let div = document.createElement('div');
    div.textContent= Ressoma;
    divsoma.append(div);
    div.classList.add(estilo);
}

function soma1(numero1,numero2)(){
    let soma = numero1 + numero2;
    return soma1;
}
