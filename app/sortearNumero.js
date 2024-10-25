const menorValor = 1
const maiorValor = 1000

const numeroSecreto = gerarNumeroAleatorio()
const elementoMaiorValor = document.getElementById('maior-valor')
const elementoMenorValor = document.getElementById('menor-valor');

elementoMenorValor.innerHTML = menorValor
elementoMaiorValor.innerHTML = maiorValor

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
}

console.log(`numero secreto: ${numeroSecreto}`)

