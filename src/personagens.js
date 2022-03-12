import { filtraDados, ordenaDados, preencheValorTagOption} from './data.js';
import data from './data/ghibli/ghibli.js';

const filmes = preencheValorTagOption(data["films"], "title");
const filtroFilme = document.getElementById("selecioneFilme");
const filtroGenero = document.getElementById("selecioneGenero");
const filtroOrdem = document.getElementById("selecionaOrdem")

const filtroGeral = function () {
    let tituloEscolhido = filtroFilme.value;
    let generoEscolhido = filtroGenero.value;
    let ordemEscolhida = filtroOrdem.value
    exibePersonagens(tituloEscolhido, generoEscolhido, ordemEscolhida);
}

filtroGeral()
filtroFilme.addEventListener("change", filtroGeral)
filtroGenero.addEventListener("change", filtroGeral)
filtroOrdem.addEventListener("change", filtroGeral)

function pegaPersonagemPorFilme(tituloEscolhido, generoEscolhido, ordemEscolhida) {
    let personagens = []
    let filmesFiltrados = filtraDados(data["films"], 'title', tituloEscolhido);
    filmesFiltrados.map(function (film) {
        film.people.map(function (person) {
            personagens.push(
                {
                    ...person,
                    'title': film.title
                }
            )
        })
    })
    personagens = filtraDados(personagens, 'gender', generoEscolhido);
    return ordenaPersonagem(personagens, ordemEscolhida)
}

filmes.forEach(function (titulo) {
    filtroFilme.insertAdjacentHTML('beforeend',
        `<option value= "${titulo}">${titulo}</option>`)
});

function exibePersonagens(tituloEscolhido, generoEscolhido, ordemEscolhida) {
    //pega e salva o elemento com o id da lista na variavel cardPersonagens
    let cardPersonagens = document.getElementById("cardPersonagens");
    let listaPersonagens;
    let Personagens = pegaPersonagemPorFilme(tituloEscolhido, generoEscolhido, ordemEscolhida);
    cardPersonagens.innerHTML = " ";
    if (Personagens.length == 0) {
        cardPersonagens.innerHTML = "Sem resultados. Tente outros filtros."
    } //percorre cada personagem do array 
    Personagens.forEach(function (Personagens) {
        listaPersonagens = document.createElement("div");
        listaPersonagens.insertAdjacentHTML("beforeend",
     `
        <div class="card">
         <div class="card-interno">
             <div class="card-frente">
                 <img class="img-do-personagem" src=${Personagens.img} alt="imagem ref. ao personagem: ${Personagens.name} style= height = "240px", width= "100%">
                 <div class="card-titulo-frente">
                     <p>${Personagens.name}</p>
                 </div>
             </div>
             <div class= "card-verso">
                 <p class="card-titulo-verso">${Personagens.name}</p>
                 <p class="card-texto-verso">Idade: ${Personagens.age}</p>
                 <p class="card-texto-verso">Gênero: ${Personagens.gender}</p>
                 <p class="card-texto-verso">Espécie: ${Personagens.specie}</p>
                 <p class="card-texto-verso">Filme: ${Personagens.title}</p>
             </div>
            </div>
        </div>
     `
        )
        cardPersonagens.appendChild(listaPersonagens);
    });
}

function ordenaPersonagem(characters, ordemEscolhida) {
    if (ordemEscolhida == "ordemAlfabetica") {
        characters = ordenaDados(characters, "name", "asc",);
    }
    if (ordemEscolhida == "ordemReversaAlfabetica") {
        characters = ordenaDados(characters, "name", "desc");
    }
    return characters
}

const btnResete = document.getElementById("btnResete");
function limparFiltro() {
    window.location.reload(); 
}
btnResete.addEventListener("click", limparFiltro)