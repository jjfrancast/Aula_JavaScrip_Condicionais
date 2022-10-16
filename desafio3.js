/*
Desafio 3- elabore um programa que dado as 3 notas tiradas por um aluno em um semestre da faculdade, calcule e imprima a sua media e a sua classificação conforme a tabela a baixo:

Média = (Média 1 + Média 2 + Media 3 ) / 3;

Classificação do aluno:
-media menor que 5 = Reprovado;
-media igual ou menor que 7 = Recuperação;
-média mais que 7 = Aprovado

*/

const nota1 = 7;
const nota2 = 7;
const nota3 = 7.4
const media = (nota1 + nota2 + nota3) / 3;
console.log(media);

if (media < 5) {
    console.log('Reprovado');
} else if (media >= 5 && media <= 7) {
    console.log('Recuperação');
} else {
    console.log('Aprovado');
}






