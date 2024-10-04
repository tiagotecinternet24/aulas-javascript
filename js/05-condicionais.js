/* Comandos condicionais mais comuns:
if      ->  SE
else    ->  SENÃO */

// Exemplo 1: condicional simples
let numero = 5;

if( numero > 10 ){
    console.log(numero);        
}

// Exemplo 2: condicional composta
let aluno = "Klaibert";
let idade = 18;

/* Lógica: verificar se o aluno é menor de idade ou maior de idade. */
if( idade < 18 ){
    console.log("É menor de idade");
} else {
    console.log("É maior de idade");
}

console.log("---\n");

/* Exercícios (FAÇA AQUI!!!) */

/* 1) Crie duas variáveis conforme a seguir:
Nota 1 (contendo um valor de 0 a 10)
Nota 2 (contendo outro valor de 0 a 10) */
let nota1 = 6.9;
let nota2 = 6.8745;

/* 2) Crie uma variável chamada "Média" que receberá o valor CALCULADO da média das duas notas informadas. DICA: você deve SOMAR as duas notas e DEPOIS dividir por 2. */


/* Opção 1: fazendo as operações SEPARADAMENTE */
// let soma = nota1 + nota2;
// console.log(soma);
// let media = soma / 2;
// console.log(media);

/* Opção 2: fazendo as operações DE UMA VEZ */
let media = (nota1 + nota2) / 2;
console.log(media);

/* 3) Programe uma condicional que verifique o valor da média calculada. Se a média for maior/igual a 7, mostre "aprovado". Caso contrário, mostre "reprovado". */
// if(media >= 7){
//     console.log("aprovado");
// } else {
//     console.log("reprovado");
// }

/* Lógica inversa */
if(media < 7){
    console.log("reprovado");    
} else {
    console.log("aprovado");    
}

/* ShortHand if/else (if/else "curto/abreviado") 
usando operador ternário   ?:   */
let situacao = media >= 7 ? "aprovado" : "reprovado";

console.log(situacao);
