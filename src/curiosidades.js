import { calculoAgregado, calculo } from './data.js';
import data from './data/ghibli/ghibli.js'

const filme = data.films

const tituloDoFilme = filme.map(film => film.title)
const avaliacaoDoFilme = filme.map(film => film["rt_score"])
console.log(avaliacaoDoFilme)
const chartMediaDeAvaliacao = document.getElementById("chartMediaDeAvaliacao")


// função que printa o grafico da nota média de avaliação de cada filme
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


const exibeMediaDeAvaliacao = (dataFilmes) => {
  let avaliacaoDoFilme = []
  for (let Filme of dataFilmes) {
    let numeroDaAvaliacao = parseInt(Filme["rt_score"])
    avaliacaoDoFilme.push(numeroDaAvaliacao)
  }
  console.log(avaliacaoDoFilme)
  const printaoMediaDeAvaliacao = document.getElementById("resultadoMediaDeAvaliacao")
  printaoMediaDeAvaliacao.innerHTML =
    `<div class="printa-avaliacao">
            <div class="box-avaliacao">
                <p>A média de notas dos filmes é <strong class="resultado-media-de-avaliacao">${calculoAgregado(avaliacaoDoFilme)}</strong></p>
            </div>
        </div>`
}
exibeMediaDeAvaliacao(filme)


// const personagens = data...people
function exibeMediaDePersonagens(data){
  let resultado = document.getElementById("resultadoMediaDePersonagens");

  let personagens = []

  data.map(function(film) {
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
  resultado.innerHTML= `
  <div class="info">
  <p class = "texto"> A média de idade dos personagens é de ${mediaPersonagens} anos.</p>
  <p class = "texto"> O personagem mais novo é ${valorMenor.name} com ${valorMenor.age} anos do filme ${valorMenor.title}: </p><img src="${valorMenor.img}" style=" width:5%; height: 10% ">
  <p class = "texto"> E o personagem mais velho é ${valorMaior.name} com ${valorMaior.age} anos do filme ${valorMaior.title}:</p><img src="${valorMaior.img}" style=" width:5%; height: 10%">
  </div>` 
 }
 exibeMediaDePersonagens(filme)








