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

//funcao que ordena dados dos filmes e personagens
export const ordenaDados = (itens, ordenaPor, direcaoOrdem) => {
    if(ordenaPor == '') return itens
    let valorA, valorB
    let returnaArray = [...itens].sort(function (a,b)  {
        valorA = a[ordenaPor]
        valorB = b[ordenaPor]
        if(direcaoOrdem == 'asc') {
            return valorA.localeCompare(valorB);
        } else {
            return valorB.localeCompare(valorA);
        }
    });
    return returnaArray
};

//funcao de calculo agregado para filmes e personagens
export const calculo = (dados, tipoConta, campoCalcular) => {
    let soma;
  //  let maisJovem;
  //  let maisVelho;
   // let contadorPersonagens;
  //  let somaIdade = 0
    switch(tipoConta){
        case "media":
                dados = dados.filter(function(valor) {
                    return parseInt(valor[campoCalcular]) >= 0 ? true : false
                })
                soma = dados.reduce((somaValor, atual) => {
                
                    return somaValor + parseFloat(atual[campoCalcular])
                }, 0)
                return (soma/dados.length).toFixed(2)
        case "maior":
        case "menor":
            dados = dados.filter(function(personagem) {
                // if (parseInt(personagem.age)) {
                //     somaIdade += parseInt(personagem.age)
                //     contadorPersonagens++
                //     maisJovem = (maisJovem > personagem.age) || maisJovem == 0 ? personagem.age : maisJovem
                //     maisVelho = maisVelho < personagem.age ? personagem.age : maisVelho
                // }
                return parseInt(personagem[campoCalcular]) >= 0 ? true : false
            })
            dados = ordenaDados(dados, campoCalcular, "desc")
            if (tipoConta == "maior"){
                return dados[0]
            }else{
                return dados.pop()
            }
        }
}
//         case "mediaGenero":
//                 dados = dados.filter(function(valor) {
//                     return (valor[campoCalcular]) >= "" ? true : false
//                 })
//                 soma = dados.filter(function(somaValor, atual) => {
                    
//                     return somaValor + atual[campoCalcular]
//                 }, 0)
//                 return (soma/dados.length).toFixed(2)
    
// }


export const calculoAgregado = (dados) => {
    return dados.reduce((acum, atual) => acum + atual, 0) / dados.length
    };

// export const calculoAgregado = (data) => {
//     const total = data.reduce((acum, atual) => {
//         return acum + atual.data
//     }, 0)
//     return total/data.length
// }

