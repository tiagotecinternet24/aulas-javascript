/* Manipulação do DOM (SEM EVENTOS) */

/* Exemplo 0
querySelector é uma função para selecionar
UM elemento no DOM (página/documento).

querySelectorAll é uma função para selecionar 
VÁRIOS elementos no DOM. */

// Selecionando a partir da tag h1
const titulo = document.querySelector("h1");

// Selecionando todos h2


console.log(titulo);


// Modificando o DOM
titulo.textContent = "Opa!";

//varios[0].textContent = "Teste";

const elementos = document.querySelectorAll("h2");
console.log(elementos);

for(let elemento of elementos) {
    // Mudando o texto de cada elemento
    elemento.textContent = "Mudou!";

    // Aplicando CSS via JS
    elemento.style.color = "red";
}

/* Exemplo 01: PULEI (FOI MAL...) */

/* Exemplo 02: MODO NOTURNO */
const pagina = document.querySelector("body");
const botaoNoturno = document.querySelector("#noturno");

// Monitor de Evento
botaoNoturno.addEventListener("click", function(){
    pagina.classList.toggle("noturno");

    /* Lógica para mudar o texto do botão
    Se a página estiver com a classe noturno,
    mostramos o botão com o texto "Desativar".
    Senão, mostramos o botão com o texto "Ativar" */
    if( pagina.classList.contains("noturno") ){
        botaoNoturno.textContent = "Desativar";
    } else {
        botaoNoturno.textContent = "Ativar";
    }
});


/* Exemplo 03 */
const formulario = document.querySelector("form");
const campoNome = document.querySelector("#nome");
const campoNota1 = document.querySelector("#nota1");
const campoNota2 = document.querySelector("#nota2");
const divResultados = document.querySelector("#resultados");

formulario.addEventListener("submit", function(event){
    /* Anulando o comportamento padrão (redirecionamento)
    do navegador */
    event.preventDefault();

    // Obtendo os valores digitados nos campos
    let nome = campoNome.value;
    let nota1 = parseFloat(campoNota1.value);
    let nota2 = parseFloat(campoNota2.value);

    /* Funções de conversão
    parseFloat()  -> garante que o valor seja tratado como número
    podendo ter casas decimais.
    
    parseInt() -> garante que o valor seja tratado como
    número inteiro (não permite casas decimais). */

    // Calculando a média
    let media = (nota1 + nota2) / 2;

    // Verificação da situação do aluno baseada na média
    let situacao;
    if ( media >= 7 ) {
        situacao = "aprovado";
    } else {
        situacao = "reprovado";
    }

    /* Etapa 1: criar um novo elemento/tag para receber os dados */
    let paragrafo = document.createElement("p");

    /* Etapa 2: montar e estilizar o conteúdo deste novo elemento/tag */
    paragrafo.classList.add(situacao); 
    paragrafo.innerHTML = `${nome} - ${media} - ${situacao}`;
    
    /* Etapa 3: adicionar o novo elemento ao DOM */
    divResultados.appendChild(paragrafo);

    // Reset no formulário (limpar os campos)
    formulario.reset();

    // Devolver o cursor para o campo nome
    campoNome.focus();

    // Teste
    console.log(nome, nota1, nota2, media, situacao);
});







