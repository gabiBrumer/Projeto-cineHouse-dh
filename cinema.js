let filmes = require ('./database/catalogo.json');
let cinema = 'Cine Belas Artes';

function buscarFilme (codigo){
    const filmeEncontrado = filmes.find(function (filme){
        return filme.codigo == codigo // O retorno é um booleano
    })
    return filmeEncontrado 
}

const filmeEnc = buscarFilme (1)

if (filmeEnc != undefined){
   console.log (filmeEnc.titulo)
} else {
    console.log ("O filme não foi encontrado!")
}

function adicionarFilme (codigo, titulo, duracao, genero, emCartaz){
    const filme = {
        codigo: codigo,
        titulo: titulo,
        duracao: duracao,
        genero: genero,
        emCartaz: emCartaz,
    }

    filmes.push(filme)
    console.log (`O filme cod: ${filme.codigo}, nome: ${filme.titulo}, foi cadastrado com sucesso!`)
    console.table (filmes);
    let separador = '.';
    console.log (separador.repeat (150))
}

adicionarFilme (4, 'Harry Potter 3', 220, 'fantasia', true)

console.log (filmes)

function alterarFilmeEmCartaz (codigo, callback){
    const filmeEncontrado = callback(codigo)

    filmeEncontrado.emCartaz = !filmeEncontrado.emCartaz
}

console.log (filmes)
alterarFilmeEmCartaz (3, buscarFilme)
console.table (filmes)

const imprimeFilme = (filme, index) => console.log (index + ' - ' + filme.titulo)

function listarTodosOsFilmes (){
    filmes.forEach (imprimeFilme)
    }

// listarTodosOsFilmes ()

const filmesFiltrados = filmes.filter(filme => {
    return filme.genero.includes ('fantasia')
})

// console.table (filmesFiltrados)

// listar Filmes longa duração:

const filmesLongaDuracao = filmes.filter (filme => filme.duracao > 240)

// console.table (filmesLongaDuracao)

// Listar filmes em Cartaz: (Retornar um booleano)

const filmesEmCartaz = filmes.find (filme => filme.emCartaz == true)

// console.table (filmesEmCartaz)

// Listar filmes que não estão em cartaz: (Retornar um booleano)

const filmesNaoEmCartaz = filmes.filter (filme => !filme.emCartaz)

console.table (filmesNaoEmCartaz)