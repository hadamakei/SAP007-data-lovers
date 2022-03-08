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
export const ordenaDados = (items, ordenaPor, direcaoOrdem) => {
    if(ordenaPor == '') return items
    let valorA, valorB
   let returnArray =  [...items].sort(function (a,b)  {
        valorA = a[ordenaPor]
        valorB = b[ordenaPor]
        if(direcaoOrdem == 'asc') {
            return valorA.localeCompare(valorB);
        } else {
            return valorB.localeCompare(valorA);
        }
    });
    return returnArray
};

export const calculo = (dados, tipoConta, campoCalcular) => {
    let soma
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

