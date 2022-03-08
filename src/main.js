import { filtraDados, ordenaDados, calculo,preencheValorTagOption } from './data.js';
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
function getMovies(valorEscolhido, ordemEscolhida) {
  let filmes = filtraDados(data["films"], valorEscolhido[0], valorEscolhido[1]);
  return ordenaItem(filmes, ordemEscolhida)
}

let diretores = preencheValorTagOption(data["films"], "director");   
// console.log(diretores)
let produtores = preencheValorTagOption(data["films"], "producer");
// console.log(produtores)                                                                            
const filtroDiretor = document.getElementById("diretorOptgroup");
const filtroProdutor = document.getElementById("produtorOptgroup");

//cria filtro de diretores no html
diretores.forEach(function (diretor) {
  filtroDiretor.innerHTML += `<option value= "director.${diretor}">${diretor}</option>`
});

//cria filtro de produtores no html
produtores.forEach(function (produtor) {
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
            <section class="div-borda" id=${movie.id}>  
            <figure>
              <img class="img-do-filme" src=${movie.poster} alt="imagem do poster ref. ao filme ${movie.title}">
         </figure>
          <div class="div-informacoes-gerais">
            <div class="div-titulo-e-avaliacao">
                <div class="titulo-do-filme">
                   <h3> ${movie.title}</h3>
                </div>
                <figure class="div-avaliacao">
                  <img class="img-da-avaliacao" src="./imagens/avaliacao.png" alt="Imagem de avaliação ref. a nota do filme">
                  <span class="nota-da-avaliacao">${movie.rt_score}</span>
               </figure>  
           </div>   
             <h3 class="titulo-tag-h3">Sinopse</h3> ${movie.description}
             <h3 class="titulo-tag-h3">Ficha Técnica</h3>
             <p><strong>Diretor</strong>: ${movie.director}</p>
             <p><strong>Produtor</strong>: ${movie.producer}</p>
             <p><strong>Ano de lançamento</strong>: ${movie.release_date}</p>
         </div>
      </section>
         `)
    liCard.setAttribute("class", "lista-filme")
    listaFilmes.appendChild(liCard);
  });
}

function ordenaItem(items, ordemEscolhida){
    if (ordemEscolhida == "ordemAlfabetica"){
        items = ordenaDados(items, "title", "asc")
    }
    if (ordemEscolhida == "lancamentosRecentes"){
        items = ordenaDados(items, "release_date", "desc")
    }
    if (ordemEscolhida == "lancamentosAntigos"){
        items =  ordenaDados(items, "release_date", "asc")
    }
    return items


}



function exibeContas(items){
    let resultado = document.getElementById("resultadoCalculo");
    let mediaNotasAvaliacao = calculo(items,"media", "rt_score" );

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

    console.log(personagens)
    let idadeMaior = calculo(personagens, "maior", "age");
    let idadeMenor = calculo(personagens, "menor", "age");
    let mediaPersonagens = calculo(personagens, "media", "age");

    // let genero = []

    // personagens.map(function(personagem){
    //     genero.push({
            
    //         "gender" : personagem.gender
        
    //     })
    // })

    // console.log(genero)
    // let mediaGenero = calculo(genero,"media", "Female" );
    
    resultado.innerHTML= `<h3 style=" color:#b3c235;">Curiosidades: </h3>
    <div class="info">
    <p class = "texto"> A média da avaliação dos filmes é ${mediaNotasAvaliacao} .</p>
    <p class = "texto"> A média de idade dos personagens é de ${mediaPersonagens} anos.</p>
    <p class = "texto"> O personagem mais novo é ${idadeMenor.name} com ${idadeMenor.age} anos do filme ${idadeMenor.title}: </p><img src="${idadeMenor.img}" style=" width:5%; height: 10% ">
    <p class = "texto"> E o personagem mais velho é ${idadeMaior.name} com ${idadeMaior.age} anos do filme ${idadeMaior.title}:</p><img src="${idadeMaior.img}" style=" width:5%; height: 10%">
    </div>` 
    return resultado
    
}
