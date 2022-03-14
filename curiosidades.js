import { calculoAgregado } from './data.js';
import data from './data/ghibli/ghibli.js'

const dados = data.films

function exibeIdadeDePersonagens(data) {
  const resultado = document.getElementById("resultadoIdadePersonagens");
  const personagens = []
  data.map(function (film) {
    film.people.map(function (person) {
      personagens.push(
        {
          ...person,
          'title': film.title
        }
      )
    })
  })
  const personagemMaiorIdade = calculoAgregado(personagens, "maior", "age");
  const personagemMenorIdade = calculoAgregado(personagens, "menor", "age");
  const idadeMediaDePersonagens = calculoAgregado(personagens, "media", "age");
  resultado.innerHTML = `
    <div>
          <p class="texto-media-idade-personagens"> A média de idade dos personagens é de <strong  class="resultado-media">${idadeMediaDePersonagens}</strong> anos.</p>
          
          <p> O personagem mais novo é ${personagemMenorIdade.name} com ${personagemMenorIdade.age} anos do filme ${personagemMenorIdade.title}:</p>
          
          <div class="div-img">
            <img class="img-personagem" src="${personagemMenorIdade.img}" alt="imagem ref. ao personagem style= height = "12%", width= "15%">
         </div>
         <p>E o personagem mais velho é ${personagemMaiorIdade.name} com ${personagemMaiorIdade.age} anos do filme ${personagemMaiorIdade.title}:</p>
          
         <div class="div-img">
           <img class="img-personagem" src="${personagemMaiorIdade.img}" alt="imagem ref. ao personagem style= height  = "12%", width= "15%">
         </div>
    </div>
  `
}
exibeIdadeDePersonagens(dados)


const tituloDoFilme = dados.map(film => film.title)
const avaliacaoDoFilme = dados.map(film => film["rt_score"])

// Printa o grafico da nota média de avaliação de cada filme
// eslint-disable-next-line no-undef
new Chart(chartMediaDeAvaliacao, {
  type: 'bar',
  data: {
    labels: tituloDoFilme,
    datasets: [{
      label: "Notas Por Filme",
      data: avaliacaoDoFilme,
      backgroundColor: "rgb(100, 145, 60, 0.5)",
      fill: true
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        min: 40
      }
    },
    plugins: {
      legend: {
        labels: {
          font: {
            size: 14
          }
        }
      }
    },
  }

})

function exibeMediaDeAvaliacao(avaliacaoDoFilme) {
  const resultadoMediaDeAvaliacao = document.getElementById("resultadoMediaDeAvaliacao");
  resultadoMediaDeAvaliacao.innerHTML =
    `<div class="printa-avaliacao">
        <p>A média de notas dos filmes é <strong class="resultado-media">${calculoAgregado(avaliacaoDoFilme, "media", "rt_score")}</strong>
        </p>
    </div>`
}
exibeMediaDeAvaliacao(dados)


// const generoPersonagens = dados.map(film => film.people)
// console.log(generoPersonagens)
// const masculino = dados
// const feminino = dados
// const indefinido = dados

// Printa o grafico da qnt de personagens por genero
// eslint-disable-next-line no-undef
// new Chart(chartGeneroDePersonagens, {

//   type: 'pie',
//   data: {
//     labels: ['Masculino', 'Feminino', 'Indefinido'],
//     datasets: [{
//       label: 'Status', //TITULO GRAFICO
//       data: [masculino.length, feminino.length, indefinido.length],
//       backgroundColor: [
//         'rgb(100, 145, 60, 0.5)',
//         'rgb(139, 18, 123)',
//         'rgb(52, 45, 161)',
//       ],
//     }]
//   },
//   options: {
//     title: {
//       display: true,
//       text: "GÊNERO"
//     }
//   }

// });





// const personagens = dados.map(film => film.people)

// function exibeGeneros() {
//     //const resultado = document.getElementById("resultadoIdadePersonagens");
//     //const genero = []
//     let personagem = []
//     let generos = []
//     // personagens.map(function (personagem) {
//        personagens.map(function (person) {
//          personagem.push(
//           {
//             ...person,
//             'gender': person.gender
            
//           }
//         )
//       })

//       personagem.map(function (genero){
//           generos.push(
//                 genero.gender
//           )
//       })
//       return personagem

//     //})
 

// }

// console.log(exibeGeneros())


