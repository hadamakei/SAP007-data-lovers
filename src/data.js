// export const filterData = (data, valorEscolhido) => { //Recebe array de dados e valor escolhido de filtros
//     let filmes = data["films"].filter(filme => { //Filtra o novo array 
//         let verificaFiltroDiretor = (valorEscolhido.length == 0 || (valorEscolhido[0] == "diretor" && valorEscolhido[1] == filme["director"]))
//         let verificaFiltroProdutor = (valorEscolhido.length == 0 || (valorEscolhido[0] == "produtor" && valorEscolhido[1] == filme["producer"]))
//         return verificaFiltroDiretor || verificaFiltroProdutor; //Caso seja true, mantém o elemento, caso false, o retira do novo array
//     });
//     console.log(filmes)
//     return filmes
// }

export const filtraDados = (dados, campoDesejado, valorEscolhido) => {
    return dados.filter(elemento => {
        return elemento[campoDesejado] == valorEscolhido || valorEscolhido.length == 0
    });
}

// export const pegaValorDoArray = function (data, campoDesejado) {
//     let ArrayRetorno = []
//     data.map(function (elemento) {
//         if (ArrayRetorno.indexOf(elemento[campoDesejado]) == -1) {
//             ArrayRetorno.push(
//                 elemento[campoDesejado]
//             );
//         }
//     })
// }

//filtra nome dos filmes pagina personagens
export const pegaTitulo = (data) => {
    // let dados = data["films"]
    // let titulo = dados.map(nome =>nome["title"]) 
    // return titulo

    let titulo = [];
    data["films"].forEach((nome) => {
        titulo.push(
            nome["title"])
    });
    return titulo;
};

//filtra diretores pagina filme
export const pegaDiretores = (data) => {
    let diretores = [];
    data["films"].forEach((filme) => {

        if (diretores.indexOf(filme["director"]) == -1) {
            diretores.push(
                filme["director"]
            );
        }
    });
    return diretores;
}

//Filtra produtores pagina filme
export const pegaProdutores = (data) => {
    let produtores = [];
    data["films"].forEach((produtor) => {

        if (produtores.indexOf(produtor["producer"]) == -1) {
            produtores.push(
                produtor["producer"]
            );
        }
    });
    return produtores;
}

//funcao que filtra e retorna dados de personagens
export const filterCharacter = (data, tituloEscolhido, generoEscolhido) => {
    console.log(generoEscolhido)
    console.log(tituloEscolhido)
    //cria array pra guardar personagens
    let personagens = []
     //dentro dos dados; entra em filmes e percorre cada um
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

// export const ordenar = (items, ordenarPor) => {
//     items.sort(function (a,b)  {

//         switch(ordenarPor) {
//             case 'ordemAlfabetica': 
//                 if (a.title > b.title){
//                     return 1;
//                 }
//                 if (a.title < b.title){
//                     return -1;
//                 }
//                 return 0;
            
//             case 'lancamentosRecentes': 
//                 if (a.title > b.title){
//                     return 1;
//                 }
//                 if (a.title < b.title){
//                     return -1;
//                 }
//                 return 0;
//         }


        
//     });


//     if(opcaoValor ==  "ordemAlfabetica"){
//         items.sort(function (a,b)  {
//             if (a.title > b.title){
//                 return 1;
//             }
//             if (a.title < b.title){
//                 return -1;
//             }
//             return 0;
//         });
//     }
//     if (opcaoValor == "lancamentosRecentes"){
//         if (a.release_date > b.release_date){
//             return 1;
//         }
//         if (a.release_date < b.release_date){
//             return -1;
//         }
//         return 0;
//     } else{
//         if (a.release_date < b.release_date){
//             return 1;
//         }
//         if (a.release_date > b.release_date){
//             return -1;
//         }
//         return 0;
//     };
   
// };

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
            break
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

    console.log("entrou2")
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

export const calculo = (getMovies) => {
    let somaNota = 0
    let retornoCalculos = []
    let somaIdade = 0
    let contadorPersonagens = 0
    let maisJovem = 0 
    let maisVelho = 0
    // let dados = data["films"];
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
//console.log(calculo())
