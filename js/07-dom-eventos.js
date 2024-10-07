/* Funções de acesso e manipulação do DOM

- querySelector() é uma função para selecionar UM ÚNICO
elemento na página (DOM).

- querySelectorAll() é uma função para selecionar VÁRIOS elementos na página (DOM).

Nos dois casos, a seleção é feita usando seletores comuns ao que fazemos no CSS. */

/* Exemplos */
const titulo = document.querySelector("h1");
const textoDom = document.querySelector(".texto-dom");
const subtitulos = document.querySelectorAll("h2");
const varios = document.querySelectorAll("p, img, button");
console.log(varios);

/* Modificando elementos do DOM */
titulo.textContent = "Olá JavaScript!";
textoDom.innerHTML = "<i>O Márcio será reprovado!</i>";

/* Selecionar todos os links da lista de referências
e colocar neles o atributo target valendo _blank. */
const links = document.querySelectorAll(".lista-de-referencias a");
console.log(links);

// Se fosse um por um...
// links[0].setAttribute("target", "_blank");

/* Faça a mesma coisa usando for/of */
for( const link of links ){
    // Versão 1 (moderna, vale para qualquer atributo)
    // link.setAttribute("target", "_blank");
    
    /* Versão 2 (usando atributo via propriedade)
    Mais antiga, vale para atributos nativos do HTML */
    link.target = "_blank";
}

/* Manipulando Eventos */
const ex1 = document.querySelector("#exemplo01");
const msg = document.querySelector("#mensagem");

ex1.addEventListener("click", function(){
    msg.innerHTML = "Olá 🔥!";
});




