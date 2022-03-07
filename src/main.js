import {  pegaValorDoFiltro, calculo, ordenaDados, filtraDados } from './data.js';
import data from './data/ghibli/ghibli.js';

exibeFilmes([]);
const filtro = document.getElementById("selecao");
const ordemFiltro = document.getElementById("selecionaOrdem");  
let filtrarEOrdenar = function() {
    let valorEscolhido = filtro.value;
    let ordemEscolhida = ordemFiltro.value
    // console.log(ordemEscolhida)
    if (valorEscolhido == ""){
        valorEscolhido = []
    } else {
        valorEscolhido = valorEscolhido.split("."); //["diretor" "nome"] produtor.Nome
    }
    // console.log(valorEscolhido)
    exibeFilmes(valorEscolhido, ordemEscolhida);
}
filtro.addEventListener("change", filtrarEOrdenar)
ordemFiltro.addEventListener("change", filtrarEOrdenar)

//funcao que manda pro filtro de filme os dados e recebe o array com todos os filmes
function getMovies (valorEscolhido, ordemEscolhida) {      
    let filmes = filtraDados(data["films"], valorEscolhido[0], valorEscolhido[1] );
    return ordenaItem(filmes, ordemEscolhida)
}

let diretores = pegaValorDoFiltro(data["films"], "director");   
// console.log(diretores)
let produtores = pegaValorDoFiltro(data["films"], "producer");
// console.log(produtores)                                                                            
const filtroDiretor = document.getElementById("diretorOptgroup");
const filtroProdutor = document.getElementById("produtorOptgroup");

//cria filtro de diretores no html
diretores.forEach(function(diretor){
    filtroDiretor.innerHTML += `<option value= "director.${diretor}">${diretor}</option>`
});

//cria filtro de produtores no html
produtores.forEach(function(produtor){
    filtroProdutor.insertAdjacentHTML('beforeend',
    `<option value= "producer.${produtor}"> ${produtor}</option>`)
});

function exibeFilmes ( valorEscolhido, ordemEscolhida){
    let listaFilmes = document.getElementById("listaFilmes");  
    let items = getMovies(valorEscolhido, ordemEscolhida);     
    // console.log(items)                                                           
    let liCard;
    exibeContas(items);
    
    listaFilmes.innerHTML = "";
    //percorre cada item do array ; 
    items.forEach(function(movie){    
        //cria item na lista
        liCard = document.createElement("div");    
           
        liCard.insertAdjacentHTML("beforeend",
        `
        <section class="caixa-filmes" id=${movie.id} >  
        <figure>
            <img class="filme-img" src=${movie.poster} alt="imagens dos filmes: ${movie.title}">
         </figure>
         <div class="filme-informacoes">
            <p>Título: ${movie.title}</p>
            <p>Ano de lançamento: ${movie.release_date}</p>
            <p>Avaliação: ${movie.rt_score}</p>
            <p>Diretor: ${movie.director}</p>
            <p>Produtor: ${movie.producer}</p>
         </div>
         <div class="caixa-sinopse" >
            <p class="titulo-sinpose">Sinopse:</p> 
            <p class="texto-sinpose">${movie.description}</p>
         </div>
         </section>
         `)
        liCard.setAttribute("class", "lista-filme")
       listaFilmes.appendChild(liCard);                                                                                      
    });
    
}

function ordenaItem(items, ordemEscolhida){
    if (ordemEscolhida == "ordemAlfabetica"){
        return ordenaDados(items, "title", "asc")
    }
    if (ordemEscolhida == "lancamentosRecentes"){
        return ordenaDados(items, "release_date", "desc")
    }
    if (ordemEscolhida == "lancamentosAntigos"){
        return ordenaDados(items, "release_date", "asc")
    }
    return items


}


// function grafico (){
//     return calculo(data);
// }

// grafico();

// function exibeGrafico(){
//     let resultado = document.getElementById("resultadoCalculo");
//     let valor= grafico()
//     resultado.innerHTML= `${valor}`
// }

// exibeGrafico();


function exibeContas(items){
    let resultado = document.getElementById("resultadoCalculo");
    let valorMedia = calculo(items,"media", "rt_score" );

    let personagens = []

    items.map(function(film) {
        film.people.map(function (person){
            personagens.push(
                {
                    ...person,
                    'title' : film.title
                }
            )
        })
    })

    let valorMaior = calculo(personagens, "maior", "age");
    let valorMenor = calculo(personagens, "menor", "age");
    // console.log(valorMaior)
    // console.log(valorMenor)
    let mediaPersonagens = calculo(personagens, "media", "age");
    // console.log(valorMedia)
    
    resultado.innerHTML= `<h3 style=" color:#b3c235;">Curiosidades: </h3>
    <div class="info">
    <p class = "texto"> A média da avaliação dos filmes é ${valorMedia} .</p>
    <p class = "texto"> A média de idade dos personagens é de ${mediaPersonagens} anos.</p>
    <p class = "texto"> O personagem mais novo é ${valorMenor.name} com ${valorMenor.age} anos do filme ${valorMenor.title}: </p><img src="${valorMenor.img}" style=" width:5%; height: 10% ">
    <p class = "texto"> E o personagem mais velho é ${valorMaior.name} com ${valorMaior.age} anos do filme ${valorMaior.title}:</p><img src="${valorMaior.img}" style=" width:5%; height: 10%">
    </div>` 
    return resultado
    
}
