import { filtraDados, ordenaDados, preencheValorTagOption, calculo } from './data.js';

import data from './data/ghibli/ghibli.js';

//funcao manda pra filtro de personagens os dados; recebe array com os personagens
const filmes = preencheValorTagOption(data["films"], "title");
// console.log(filmes);

//salva o array de personagens q veio do filtro                                                        
const filtroFilme = document.getElementById("selecioneFilme");
const filtroGenero = document.getElementById("selecioneGenero");
const filtroOrdem = document.getElementById("selecionaOrdem")

let filtroGeral = function(){
    let tituloEscolhido = filtroFilme.value;
    let generoEscolhido = filtroGenero.value;
    let ordemEscolhida = filtroOrdem.value
    // console.log(tituloEscolhido)
    exibePersonagens(tituloEscolhido, generoEscolhido, ordemEscolhida);
}

filtroGeral()

filtroFilme.addEventListener("change", filtroGeral)
filtroGenero.addEventListener("change", filtroGeral)
filtroOrdem.addEventListener("change", filtroGeral)

function getCharacter(tituloEscolhido, generoEscolhido, ordemEscolhida){
    let personagens = []

    let filmesFiltrados = filtraDados(data["films"], 'title', tituloEscolhido);

    filmesFiltrados.map(function(film) {
        film.people.map(function (person){
            personagens.push(
                {
                    ...person,
                    'title' : film.title
                }
            )
        })
    })
    
    personagens = filtraDados(personagens, 'gender', generoEscolhido);
    return ordenaPersonagem(personagens,ordemEscolhida)
}

filmes.forEach(function(titulo){
    filtroFilme.insertAdjacentHTML('beforeend',
    `<option value= "${titulo}">${titulo}</option>` )
});

function exibePersonagens(tituloEscolhido, generoEscolhido, ordemEscolhida){
    //pega e salva o elemento com o id da lista na variavel cardPeople
    let cardPeolple = document.getElementById("cardPersonagens");
    let liPersonagens;  
    let Personagens = getCharacter(tituloEscolhido, generoEscolhido, ordemEscolhida);
   // let divImagem;
   // let divInfo;

    // console.log(characters);
    cardPeolple.innerHTML= " ";
    if (Personagens.length == 0){
        cardPeolple.innerHTML = "Sem resultados. Tente outros filtros."
    } //percorre cada personagem do array 
    Personagens.forEach(function(Personagens){  
    liPersonagens = document.createElement("div"); 
    liPersonagens.insertAdjacentHTML("beforeend",
        `
        <div class="card">
         <div class="card-interno">
             <div class="card-frente">
                 <figure>
                 <img class="card-img" src=${Personagens.img} alt="imagem ref. ao personagem: ${Personagens.name} style=" height = "240px", width= "250px
                 100%"" >
                 </figure>  
                 <div class="card-nome-frente"><p>${Personagens.name}</p></div>
             </div>
               
             <div class= "card-verso">
              <p class="card-nome-verso">${Personagens.name}</p>
              <p class="card-texto-verso">Idade: ${Personagens.age}</p>
              <p class="card-texto-verso">Gênero: ${Personagens.gender}</p>
              <p class="card-texto-verso">Espécie: ${Personagens.specie}</p>
              <p class="card-texto-verso">Filme: ${Personagens.title}</p>
             </div>
            </div>
        </div>
        `
        )
    cardPeolple.appendChild(liPersonagens);
    });
}

function ordenaPersonagem (characters, ordemEscolhida){
    if(ordemEscolhida == "ordemAlfabetica"){ 
        
        characters = ordenaDados(characters, "name", "asc",);
    }
    if(ordemEscolhida == "ordemReversaAlfabetica") {
        characters = ordenaDados(characters, "name", "desc");
    }
    return characters
}


const dadosPersonagens = [
    {
        "name": "Pazu",
        "gender": "Male",
        "age": "13",
    },
    {
        "name": "Lusheeta Toel Ul Laputa",
        "gender": "Female",
        "age": "13",
        "specie": "Human",
    },
    {
        "name": "Satsuki Kusakabe",
        "gender": "Female",
        "age": "11",
    },
    {
        "name": "Mei Kusakabe",
        "gender": "Female",
        "age": "4",
    }
]

let idadeMaior = calculo(dadosPersonagens, "maior", "age");

console.log(idadeMaior)

