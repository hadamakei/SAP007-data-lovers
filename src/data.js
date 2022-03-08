//funcões que filtra e retorna dados dos filmes
export const filtraDados = (dados, campoDesejado, valorEscolhido) => {
    return dados.filter(elemento => {
        return elemento[campoDesejado] == valorEscolhido || valorEscolhido.length == 0
    });
}

export const preencheValorTagOption = function (data, campoDesejado) {
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
// export const filterCharacter = (data, tituloEscolhido, generoEscolhido) => {
//     console.log(generoEscolhido)
//     console.log(tituloEscolhido)
//     //cria array pra guardar personagens
//     let personagens = []
//      //dentro dos dados; entra em filmes e percorre cada um
//     data.films.map(film => { 
//         film.people.map(person => {    

//             personagens.push({ 
//             "name": person["name"],
//             "age": person["age"],
//             "gender": person["gender"],
//             "specie": person["specie"],
//             "title": film["title"],
//             "img": person["img"]  
//             })
//         })
//     });
    
//     personagens = personagens.filter(personagem =>{
//         let filtroTitulo = (tituloEscolhido.length == 0 || (tituloEscolhido == personagem["title"]))
//         let filtroGenero = (generoEscolhido.length == 0 || (generoEscolhido == personagem["gender"]));
//         return filtroTitulo && filtroGenero
//     })
//     return personagens
// }

//funcao que ordena dados dos filmes e personagens
export const ordenaDados = (items, ordenaPor, direcaoOrdem) => {
    if(ordenaPor == '') return items
    let valorA, valorB
    let returnArray = [...items].sort(function (a,b)  {
        valorA = a[ordenaPor]
        valorB = b[ordenaPor]
        if(direcaoOrdem == 'asc') {
            return valorA.localeCompare(valorB);
        } else {
            return valorB.localeCompare(valorA);
        }
    });
    // console.log(items)
    return returnArray
   

    // if(opcaoValor ==  "ordemAlfabetica"){
    //     items.sort(function (a,b)  {
    //         if (a.title > b.title){
    //             return 1;
    //         }
    //         if (a.title < b.title){
    //             return -1;
    //         }
    //         return 0;
    //     });
    // }
    // if (opcaoValor == "lancamentosRecentes"){
    //     if (a.release_date > b.release_date){
    //         return 1;
    //     }
    //     if (a.release_date < b.release_date){
    //         return -1;
    //     }
    //     return 0;
    // } else{
    //     if (a.release_date < b.release_date){
    //         return 1;
    //     }
    //     if (a.release_date > b.release_date){
    //         return -1;
    //     }
    //     return 0;
    // };
   
};

// export const calculo = (getMovies) => {
//     let somaNota = 0
//     let retornoCalculos = []
//     let somaIdade = 0
//     let contadorPersonagens = 0
//     let maisJovem = 0 
//     let maisVelho = 0
//     // let dados = data["films"];
//     getMovies.map(filme =>{
//         somaNota += parseFloat(filme["rt_score"])
//         filme.people.map(personagem => {
//             if (parseInt(personagem.age)) {
//                 somaIdade += parseInt(personagem.age)
//                 contadorPersonagens++
//                 maisJovem = (maisJovem > personagem.age) || maisJovem == 0 ? personagem.age : maisJovem
//                 maisVelho = maisVelho < personagem.age ? personagem.age : maisVelho
//             }
//         })
//     });
//     retornoCalculos["mediaNotas"] = (somaNota/getMovies.length).toFixed(2)
//     retornoCalculos["mediaIdade"] = (somaIdade/contadorPersonagens).toFixed(0)
//     retornoCalculos["maisJovem"] = maisJovem
//     retornoCalculos["maisVelho"] = maisVelho
    
//     return retornoCalculos
// }
//console.log(calculo())

export const calculo = (dados, tipoConta, campoCalcular) => {
    let soma
    switch(tipoConta){
        case "media":
            // console.log(dados)
                dados = dados.filter(function(valor) {
                    return parseInt(valor[campoCalcular]) >= 0 ? true : false
                })
                // console.log(dados)
                soma = dados.reduce((somaValor, atual) => {
                
                    return somaValor + parseFloat(atual[campoCalcular])
                }, 0)
                // console.log()
                return (soma/dados.length).toFixed(2)
                
                // dados.map(valor =>{                                                         //trocar por reduce?
                //     somaValor += parseFloat(valor[campoCalcular])
                // });
                // somaValor = somaValor/dados.length
                // return somaValor.toFixed(2);

                

        case "maior":
        case "menor":
            dados = dados.filter(function(valor) {
                return parseInt(valor[campoCalcular]) >= 0 ? true : false
            })
            dados = ordenaDados(dados, campoCalcular, "desc")
            if (tipoConta == "maior"){
                return dados[0]
            }else{
                return dados.pop()
            }
        }
    
}
