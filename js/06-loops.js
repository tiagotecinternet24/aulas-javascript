/* Principais comandos de repetição:
- while -> ENQUANTO
- for   -> PARA 

São comandos de uso geral, existem em praticamente qualquer linguagem de programação. */

// Exemplo 1: while
let contador = 1;

while ( contador <= 5 ) {
    console.log("Valor do contador é: "+contador);
    contador++; // ++ operador de incremento
}

console.log("---\n");

// Exemplo 2: for
for( let contador = 1; contador <= 10; contador++ ){
    // alert("Oieeee pela "+contador+"ª vez!");
    console.log("Oieeee pela "+contador+"ª vez!");
}

console.log("Chega chato pra caramba!!!");

/* Nomenclatura para variáveis de controle 
Embora possamos dar qualquer nome (como contador por exemplo), geralmente são usadas as letras i, j ou k (ou outras letras se necessário). */
for(let i = 1; i <= 3; i++){
    console.log("Valor de i é: "+i); 
}

console.log("\n---");

/* Loops exclusivos do JS para estruturas de dados */

// for/of -> loop para arrays
const bandas = [
    "Slayer", "Pink Floyd", "Rush", "Nightwish",
    "Iron Maiden", "Judas Priest", "Metallica",
    "Justin Bieber"
];

for(const banda of bandas) {
    console.log(banda);    
}

console.log("\n---");

// Usando o for tradicional

// Guardando o tamanho do array uma vez (fazendo cache do array)
let quantidade = bandas.length;

for( let i = 0; i < quantidade; i++ ){
    
    /* Usamos i dentro dos colchetes como índice dinâmico do array */
    console.log(bandas[i]); 
}

// for/in -> loop para objetos
const pessoa = {
    nome: "Fulano da Silva",
    idade: 40,
    cidade: "São Paulo",
    estado: "SP",
    email: "fulano@provedor.com",
    time: "Corinthians"
};

for(const prop in pessoa){
    // Mostra somente o nome da propriedade
    console.log(prop);    
    
    // Mostra somente o valor da propriedade
    console.log(pessoa[prop]);   
}

console.log("\n---");

/* Exercícios
1) Faça um array chamado "clientes" contendo 3 objetos. Cada objeto deverá ter uma propriedade "identificador" (com valores 1, 2 e 3) e uma propriedade "nome" (com os nomes dos clientes: "Goku", "Naruto" e "Shiryu").

2) Faça um loop (qualquer um dos que vimos) e mostre no console os dados de cada cliente conforme a seguir:
- Cliente: Goku, id: 1
- Cliente: Naruto, id: 2
- Cliente: Shiryu, id: 3     */





















