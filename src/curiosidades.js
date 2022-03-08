import { calculo} from './data.js';
import data from './data/ghibli/ghibli.js';

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
  let mediaPersonagens = calculo(personagens, "media", "age");
  
  resultado.innerHTML= `<h3 style=" color:#b3c235;">Curiosidades: </h3>
  <div class="info">
  <p class = "texto"> A média da avaliação dos filmes é ${valorMedia} .</p>
  <p class = "texto"> A média de idade dos personagens é de ${mediaPersonagens} anos.</p>
  <p class = "texto"> O personagem mais novo é ${valorMenor.name} com ${valorMenor.age} anos do filme ${valorMenor.title}: </p><img src="${valorMenor.img}" style=" width:5%; height: 10% ">
  <p class = "texto"> E o personagem mais velho é ${valorMaior.name} com ${valorMaior.age} anos do filme ${valorMaior.title}:</p><img src="${valorMaior.img}" style=" width:5%; height: 10%">
  </div>` 
  return resultado
  
}

// const filmes = data.filmes

// const filmesTitulos = filmes.map(film => film.tile)

// const avaliacaoFilmes = filmes.map(film => film["rt_score"])

// const chartAvaliacao = document.getElementById("chartAvaliacao")


// new Chart(chartAvaliacao, {
//     type: 'bar',
//     data: {
//       labels: filmesTitulos,

//       datasets: [{
//         label: "Notas Por Filme",
//         data: avaliacaoFilmes,
//         backgroundColor: "rgb(100, 145, 60, 0.5)",
//         fill: true
//       }]
//     },
//     options: {
//       responsive: true,
//       scales: {
//         y: {
//           min: 40
//         }
//       },
//       plugins: {
//         legend: {
//           labels: {
//             font: {
//               size: 14
//             }
//           }
//         }
//       },
//     }
  
//   })
  


// const notaDeAvaliacao = (dataFilmes) => {
//     let avaliacaoFilmes = []
//     for (let filme of dataFilmes) {
//       let numeroDeAvaliacao = parseInt(filme["rt_score"])
//       avaliacaoFilmes.push(numeroDeAvaliacao)
  
//     }
//     const printNumeroDeAvaliacao = document.getElementById("dadosDeAvaliacao")
//     printNumeroDeAvaliacao.innerHTML =
//       `<div class="">
//               <div class="">
//                   <p>A média de notas dos filmes é <strong class="data">${calculoAgregado(avaliacaoFilmes)}</strong></p>
//               </div>
//           </div>`
//   }
//   notaDeAvaliacao(filmes)






