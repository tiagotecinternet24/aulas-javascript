// Exemplo 1: objeto com dados de uma pessoa
const pessoa = {
    // propriedade: valor
    nome: "Chaves",
    idade: 10,
    cidade: "São Paulo",
    estado: "SP"
};

// Exibindo a estrutura do objeto
console.log(pessoa);

// Acessando determinadas propriedades
console.log(
`O ${pessoa.nome} possui ${pessoa.idade} anos e mora em ${pessoa.cidade}.`
);

// Exemplo 2: objeto com array
const livro = {
    titulo: "Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    volumes: [
        "A Sociedade do Anel",
        "As Duas Torres",
        "O Retorno do Rei"
    ]
};

// Exibindo a estrutura
console.log(livro);

// Acesso usando nome da prop. e índice do array desta prop.
console.log(livro.volumes[1]);

// Exemplo 3: array de objetos
const livros = [
    {
        titulo: "Harry Potter",
        autor: "J.K. Rowling"
    },
    {
        titulo: "Senhor dos Anéis",
        autor: "J.R.R. Tolkien"
    },
    {
        titulo: "Ghost Rider",
        autor: "Neil Peart"
    }
];

// Acessando através do índice a prop.
console.log(livros[1].autor);

console.log("\nExercícios! (Correção)");

/* Crie um objeto chamado "aluno" contendo os seguintes dados:

Nome Completo
Data de Nascimento
Lista de telefones (fixo e celular)
Endereço contendo (separadamente): rua,
número, bairro. */

const aluno = {
    nome_completo: "Ozzy Osbourne",
    data: "10/05/1950",
    telefones: ["11-2135-0300", "11-9888-0000"],
    endereco: {
        rua: "Francisco Coimbra",
        numero: "403",
        bairro: "Penha"
    }
};

/* Mostre no console o nome do aluno, o telefone celular e o bairro em que mora. */
console.log(aluno.nome_completo);
console.log(aluno.telefones[1]);
console.log(aluno.endereco.bairro);

console.log(`O aluno ${aluno.nome_completo}, cujo telefone celular é ${aluno.telefones[1]}, mora no bairro ${aluno.endereco.bairro}.`);






