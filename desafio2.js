/* faça um programa para calcular o valor de uma viage.

você terá três variáveis, são elas:
1-preço do etanol;
2-preço da gasolina;
3-o tipo de combustivel utilizado no veículo;
4-consumo médio de combustivel por km percorrido;
5-distancia em km da viagem.

imprima no console o valor necessário para realizar esta viagem.
*/

const precoEtanol = 4.39;
const precoGasolina = 5.23;
const kmPorLitro = 14;
const distanciaEmKm = 86;
const combustivelUtilizado = "Gasolina";

const litrosConsumidos = distanciaEmKm / kmPorLitro;

if (combustivelUtilizado === "Gasolina") {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
} else {
    const valorGasto = litosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
}



