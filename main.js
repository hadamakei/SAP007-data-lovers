import { filtraDados, ordenaDados, preencheValorTagOption } from './data.js';
import data from './data/ghibli/ghibli.js';

exibeFilmes([]);
const filtro = document.getElementById("selecao");
const ordemFiltro = document.getElementById("selecionaOrdem");  
let filtrarEOrdenar = function() {
    let valorEscolhido = filtro.value;
    let ordemEscolhida = ordemFiltro.value
    if (valorEscolhido == ""){
        valorEscolhido = []
    } else {
        valorEscolhido = valorEscolhido.split("."); //["diretor" "nome"] produtor.Nome
    }
    exibeFilmes(valorEscolhido, ordemEscolhida);
}
filtro.addEventListener("change", filtrarEOrdenar)
ordemFiltro.addEventListener("change", filtrarEOrdenar)

//funcao que manda pro filtro de filme os dados e recebe o array com todos os filmes
function pegaFilmes(valorEscolhido, ordemEscolhida) {
  let filmes = filtraDados(data["films"], valorEscolhido[0], valorEscolhido[1]);
  return ordenaItem(filmes, ordemEscolhida)
}

let diretores = preencheValorTagOption(data["films"], "director");   
let produtores = preencheValorTagOption(data["films"], "producer");
const filtroDiretor = document.getElementById("diretorOptgroup");
const filtroProdutor = document.getElementById("produtorOptgroup");

//cria lista de opções no filtro dediretores no html
diretores.forEach(function (diretor) {
  filtroDiretor.innerHTML += `<option value= "director.${diretor}">${diretor}</option>`
});

//cria lista de opções no filtro de produtores no html
produtores.forEach(function (produtor) {
  filtroProdutor.insertAdjacentHTML('beforeend',
    `<option value= "producer.${produtor}"> ${produtor}</option>`)
});

function exibeFilmes ( valorEscolhido, ordemEscolhida){
    let listaFilmes = document.getElementById("listaFilmes");  
    let itens = pegaFilmes(valorEscolhido, ordemEscolhida);     
    let cardFilmes;

    listaFilmes.innerHTML = "";
    itens.forEach(function(movie){    
        cardFilmes = document.createElement("div");    
        cardFilmes.insertAdjacentHTML("beforeend",
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
    cardFilmes.setAttribute("class", "lista-filme")
    listaFilmes.appendChild(cardFilmes);
  });
}

function ordenaItem(itens, ordemEscolhida){
    if (ordemEscolhida == "ordemAlfabetica"){
        itens = ordenaDados(itens, "title", "asc")
    }
    if (ordemEscolhida == "lancamentosRecentes"){
        itens = ordenaDados(itens, "release_date", "desc")
    }
    if (ordemEscolhida == "lancamentosAntigos"){
        itens =  ordenaDados(itens, "release_date", "asc")
    }
    return itens
}

const btnResete = document.getElementById("btnResete");
function limparFiltro() {
    window.location.reload(); 
}
btnResete.addEventListener("click", limparFiltro)

