/*
O IMC(ìndice de massa corporl) é um cripterio da OMS para dar uma indicação sobre a condição de peso de uma pessoa adulta.

Formula do IMC:
IMC = peso / (altura * altura)

Elabora um algoritmo que dado o peso e a altura de um adulto mostre mostre sua condição de acordo com a tabela abaix:

IMC em adultos Condição:
- menor que 18,5 = abaixo do peso;
- entre 18,5 e 25 = Peso normal;
- entre 25 e 30 = acima do peso; 
- emtre 30 e 40 = obeso;
- acima de 40 = obesidade grave;

*/
const peso = 83;
const altura = 1.70;
const imc = peso / Math.pow(altura, 2);
console.log(imc);

if (imc < 18.5) {
    console.log('abaixo do peso');
} else if (imc >= 18.5 && imc < 25) {
    console.log('peso normal');
} else if (imc >= 25 && imc < 30) {
    console.log('acima do peso');
} else if (imc >= 30 && imc < 40) {
    console.log('obeso');
} else {
    console.log('Obesidade Grave');
}















