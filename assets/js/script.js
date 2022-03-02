/** como calcula juros simples?
    J = C * i * t
    M = J + C

    como calcula juros compostos?
    M = C (1 + i)^t 
*/

// Criar campos de inputs para o cálculo de juros simples
const button__jurosSimples = document.querySelector('#juros__simples');

button__jurosSimples.addEventListener('click', criar__inputs);

function criar__inputs(){
    const ul = document.querySelector('ul');

    const inputCapital = document.createElement('input');
    const inputTaxa = document.createElement('input');
    const inputTempo = document.createElement('input');
    const button = document.createElement('button');

    button.innerText = `Calcular`

    ul.appendChild(inputCapital);
    ul.appendChild(inputTaxa);
    ul.appendChild(inputTempo);
    ul.appendChild(button);

    button.addEventListener('click', function calular__juros_simples(){
        const capital = Number(inputCapital.value);
        const taxa = Number(inputTaxa.value);
        const tempo = Number(inputTempo.value);

        const juros = capital * (taxa / 100) * tempo;
        const montante = juros + capital;

        console.log(montante);
    });
};