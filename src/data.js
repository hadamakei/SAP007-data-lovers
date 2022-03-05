//funcões que filtra e retorna dados dos filmes
export const filtraDadosFilmes = (dados, campoDesejado, valorEscolhido) => {
    return dados.filter(elemento => {
        return elemento[campoDesejado] == valorEscolhido || valorEscolhido.length == 0
    });
}

export const pegaValorDosFiltros = function (data, campoDesejado) {
    let ArrayRetorno = []
    data.map(function (elemento) {
        if (ArrayRetorno.indexOf(elemento[campoDesejado]) == -1) {
            ArrayRetorno.push(
                elemento[campoDesejado]
            );
        }
    })
    return ArrayRetorno
}


//funcao que filtra e retorna dados de personagens
export const filtraPersonagens = (data, tituloEscolhido, generoEscolhido) => {
    let personagens = []
    data.films.map(film => { 
        film.people.map(person => {    
            personagens.push({ 
            "name": person["name"],
            "age": person["age"],
            "gender": person["gender"],
            "specie": person["specie"],
            "title": film["title"],
            "img": person["img"]  
            })
        })
    });
    personagens = personagens.filter(personagem =>{
        let filtroTitulo = (tituloEscolhido.length == 0 || (tituloEscolhido == personagem["title"]))
        let filtroGenero = (generoEscolhido.length == 0 || (generoEscolhido == personagem["gender"]));
        return filtroTitulo && filtroGenero
    })
    return personagens
}

//funcao que ordena dados dos filmes e personagens
export const ordenaDados = (items, ordenaPor, direcaoOrdem) => {
    if(ordenaPor == '') return items
    items.sort(function (a,b)  {
        let valorA
        let valorB
        switch(ordenaPor) {
            case 'dataLancamento': 
                valorA = parseInt(a.release_date)
                valorB = parseInt(b.release_date)
                break

            case 'titulo': 
                valorA = a.title
                valorB = b.title
                break

            case "nome":
                if(direcaoOrdem == 'asc') {
                    return a.name.localeCompare(b.name);
                } else {
                    return b.name.localeCompare(a.name);
                }
        }
        //Faz a ordenação
        if(direcaoOrdem == 'asc') {
            if (valorA > valorB){
                return 1;
            }
            if (valorA < valorB){
                return -1;
            }
        } else {
            if (valorA < valorB){
                return 1;
            }
            if (valorA > valorB){
                return -1;
            }
        }
        return 0;
    });
    return items
};


//funcao calculo agregado
export const calculo = (getMovies) => {
    let somaNota = 0
    let retornoCalculos = []
    let somaIdade = 0
    let contadorPersonagens = 0
    let maisJovem = 0 
    let maisVelho = 0
    getMovies.map(filme =>{
        somaNota += parseFloat(filme["rt_score"])
        filme.people.map(personagem => {
            if (parseInt(personagem.age)) {
                somaIdade += parseInt(personagem.age)
                contadorPersonagens++
                maisJovem = (maisJovem > personagem.age) || maisJovem == 0 ? personagem.age : maisJovem
                maisVelho = maisVelho < personagem.age ? personagem.age : maisVelho
            }
        })
    });
    retornoCalculos["mediaNotas"] = (somaNota/getMovies.length).toFixed(2)
    retornoCalculos["mediaIdade"] = (somaIdade/contadorPersonagens).toFixed(0)
    retornoCalculos["maisJovem"] = maisJovem
    retornoCalculos["maisVelho"] = maisVelho
    return retornoCalculos
}
