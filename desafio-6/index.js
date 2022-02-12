function somar(numero1, numero2) {
    let soma = numero1 + numero2
    return `A soma dos dois números é: ${soma}`
}

function subtrair(numero1, numero2) {
    let subtracao = numero1 - numero2
    return `A subtração dos dois número é: ${subtracao}`
}

function multiplicar(numero1, numero2) {
    let multiplicacao = numero1 * numero2
    return `A multiplicação dos dois número é: ${multiplicacao}`
}

function dividir(numero1, numero2) {
    let divisao = numero1 / numero2
    return `A divisão dos dois números é: ${divisao}`
}

let resultadoSoma = somar(2, 5)
let resultadoSubtracao = subtrair(2, 5)
let resultadoMultiplicacao = multiplicar(2, 5)
let resultadoDivisao = dividir (10, 2)

console.log (resultadoSoma)
console.log (resultadoSubtracao)
console.log (resultadoMultiplicacao)
console.log (resultadoDivisao)