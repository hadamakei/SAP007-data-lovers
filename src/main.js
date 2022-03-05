import { filtraDadosFilmes, pegaValorDosFiltros, ordenaDados } from './data.js';
import data from './data/ghibli/ghibli.js';

exibeFilmes([]);
const filtro = document.getElementById("selecao");
const ordemFiltro = document.getElementById("selecionaOrdem");
let filtrarEOrdenar = function () {
  let valorEscolhido = filtro.value;
  let ordemEscolhida = ordemFiltro.value
  if (valorEscolhido == "") {
    valorEscolhido = []
  } else {
    valorEscolhido = valorEscolhido.split("."); //["diretor" "nome"] produtor.Nome
  }
  exibeFilmes(valorEscolhido, ordemEscolhida);
}
filtro.addEventListener("change", filtrarEOrdenar)
ordemFiltro.addEventListener("change", filtrarEOrdenar)

//funcao que manda pro filtro de filme os dados e recebe o array com todos os filmes
function getMovies(valorEscolhido, ordemEscolhida) {
  let filmes = filtraDadosFilmes(data["films"], valorEscolhido[0], valorEscolhido[1]);
  return ordenaItem(filmes, ordemEscolhida)
}

let diretores = pegaValorDosFiltros(data["films"], "director");
let produtores = pegaValorDosFiltros(data["films"], "producer");
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

function exibeFilmes(valorEscolhido, ordemEscolhida) {
  let listaFilmes = document.getElementById("listaFilmes");
  let itens = getMovies(valorEscolhido, ordemEscolhida);
  let liCard;
  // exibeContas(itens);

  listaFilmes.innerHTML = "";
  itens.forEach(function (movie) {
    //cria item na lista
    liCard = document.createElement("div");
    liCard.insertAdjacentHTML("beforeend",
      `
       <section class="div-borda">  
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

function ordenaItem(itens, ordemEscolhida) {
  if (ordemEscolhida == "ordemAlfabetica") {
    return ordenaDados(itens, "titulo", "asc")
  }
  if (ordemEscolhida == "lancamentosRecentes") {
    return ordenaDados(itens, "dataLancamento", "desc")
  }
  if (ordemEscolhida == "lancamentosAntigos") {
    return ordenaDados(itens, "dataLancamento", "asc")
  }
  return itens
}

// function exibeContas(itens) {
//   let resultado = document.getElementById("resultadoCalculo");
//   let valor = calculo(itens)
//   resultado.innerHTML = `<p> A média da avaliação dos filmes é ${valor["mediaNotas"]}
//     .</p><p> A média de idade dos personagens é ${valor["mediaIdade"]} anos.</p><p> O personagem mais novo tem ${valor["maisJovem"]} anos.</p><p> E o personagem mais velho tem ${valor["maisVelho"]} anos.</p>`
//   return resultado
// }
