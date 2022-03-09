import {filtraDados, preencheValorTagOption, ordenaDados, calculoAgregado } from '../src/data.js';

const objFilmes = [
    {
        "title": "Castle in the Sky",
        "director": "Hayao Miyazaki",
        "producer": "Isao Takahata",
        "release_date": "1986",
        "rt_score": "95",
    },
    {
        "title": "My Neighbor Totoro",
        "director": "Hayao Miyazaki",
        "producer": "Hayao Miyazaki",
        "release_date": "1988",
        "rt_score": "93",

    }
]

// const objPersonagens = [
//     {
//         "name": "Pazu",
//         "gender": "Male",
//         "age": "13",
//     },
//     {
//         "name": "Lusheeta Toel Ul Laputa",
//         "gender": "Female",
//         "age": "13",
//         "specie": "Human",
//     },
//     {
//         "name": "Satsuki Kusakabe",
//         "gender": "Female",
//         "age": "11",
//     },
//     {
//         "name": "Mei Kusakabe",
//         "gender": "Female",
//         "age": "4",
//     }
// ]

describe('filtraDados', () => {
    it('é função', () => {
        expect(typeof filtraDados).toBe('function');
    });

    it('returna resultado de filtraDados', () => {
        let retornoEsperado = [objFilmes[0]]
        expect(filtraDados(objFilmes, "producer", "Isao Takahata")).toEqual(retornoEsperado);
    });

    it('deve retornar um array com o filme "My Neighbor Totoro" para o producer "Hayao Miyazaki" ', () => {
        let retornoEsperado = [objFilmes[1]]
        expect(filtraDados(objFilmes, "producer", "Hayao Miyazaki")).toEqual(retornoEsperado);
    });
});

describe('preencheValorTagOption', () => {
    it('é função', () => {
        expect(typeof preencheValorTagOption).toBe('function');
    });

    it('returns resultado de preencheValorTagOption', () => {
        let resultadoProdutor = [objFilmes[0].producer, objFilmes[1].producer]
        let resultadoDiretor = ["Hayao Miyazaki"]
        let resultadoPersonagem = [objFilmes[0].title, objFilmes[1].title,]
        expect(preencheValorTagOption(objFilmes, "producer")).toEqual(resultadoProdutor);
        expect(preencheValorTagOption(objFilmes, "director")).toEqual(resultadoDiretor);
        expect(preencheValorTagOption(objFilmes, "title")).toEqual(resultadoPersonagem);
    });
});

describe('ordenaDados', () => {
    it('is a function', () => {
        expect(typeof ordenaDados).toBe('function');
    });

    it('return resultado de ordenaDados Z-A', () => {
        let retornoEsperado = [objFilmes[1], objFilmes[0]];
        expect(ordenaDados(objFilmes, "title", "desc")).toEqual(retornoEsperado);
    })

    it('return resultado de ordenaDados A-Z', () => {
        let retornoEsperado = [objFilmes[0], objFilmes[1]];
        expect(ordenaDados(objFilmes, "title", "asc")).toEqual(retornoEsperado);
    })

    it('return resultado de ordenaDados filme mais recente para mais antigo', () => {
        let retornoEsperado = [objFilmes[1], objFilmes[0]];
        expect(ordenaDados(objFilmes, "release_date", "desc")).toEqual(retornoEsperado);
    })

    it('return resultado de ordenaDados filme mais antigo para mais recente', () => {
        let retornoEsperado = [objFilmes[0], objFilmes[1]];
        expect(ordenaDados(objFilmes, "release_date", "asc")).toEqual(retornoEsperado);
    })
});

describe('calculoAgregado', () => {
    it('é função', () => {
        expect(typeof calculoAgregado).toBe('function');
    });

    it('returna resultado de calculo da média de avaliação dos filmes', () => {
        expect(calculoAgregado([95,98,100,93])).toBe('96.5');
    })
});

   
    // describe('calculo', () => {
    //     it('é função', () => {
    //         expect(typeof calculo).toBe('function');
    //     });

    //     it('returna resultado de calculo da média de avaliação dos filmes', () => {

    //         expect(calculo(objFilmes, "media", "rt_score")).toBe('94.00');
    //     });

    //     it('returna resultado de calculo da média de idade dos personagens', () => {

    //         expect(calculo(objPersonagens, "media", "age")).toBe('10.25');
    //     });

    //     it('returna resultado de maior idade dos personagens', () => {
            
    //         expect(calculo(objPersonagens, "maior", "age")).toEqual(objPersonagens[0]);
    //     });


    // });


