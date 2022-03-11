import { filtraDados, preencheValorTagOption, ordenaDados, calculo, calculoAgregado } from '../src/data.js';

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

const objPersonagens = [
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

describe('filtraDados', () => {
    it('é função', () => {
        expect(typeof filtraDados).toBe('function');
    });

    it('resultado de filtraDados', () => {
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

    it('resultado de preencheValorTagOption', () => {
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

    it('resultado de ordenaDados Z-A', () => {
        let retornoEsperado = [objFilmes[1], objFilmes[0]];
        expect(ordenaDados(objFilmes, "title", "desc")).toEqual(retornoEsperado);
    })

    it('resultado de ordenaDados A-Z', () => {
        let retornoEsperado = [objFilmes[0], objFilmes[1]];
        expect(ordenaDados(objFilmes, "title", "asc")).toEqual(retornoEsperado);
    })

    it('resultado de ordenaDados filme mais recente para mais antigo', () => {
        let retornoEsperado = [objFilmes[1], objFilmes[0]];
        expect(ordenaDados(objFilmes, "release_date", "desc")).toEqual(retornoEsperado);
    })

    it('resultado de ordenaDados filme mais antigo para mais recente', () => {
        let retornoEsperado = [objFilmes[0], objFilmes[1]];
        expect(ordenaDados(objFilmes, "release_date", "asc")).toEqual(retornoEsperado);
    })

    it('resultado de ordenaDados sem valor de filtro', () => {
        let retornoEsperado = objFilmes;
        expect(ordenaDados(objFilmes, "", "asc")).toEqual(retornoEsperado);
    })
});


describe('calculo', () => {
    it('é função', () => {
        expect(typeof calculo).toBe('function');
    });

    it('resultado de calculo média de notas de filmes', () => {

        expect(calculo(objFilmes, "media", "rt_score")).toBe('94.00');
    });

    it('resultado de calculo média de idade dos personagens', () => {

        expect(calculo(objPersonagens, "media", "age")).toBe('10.25');
    });

    it('resultado de maior idade dos personagens', () => {
        let respostaMaior = objPersonagens[0]

        expect(calculo(objPersonagens, "maior", "age")).toEqual(respostaMaior);
    });

    it('resultado de personagens com menor idade', () => {
        let respostaMenor = objPersonagens[3]

        expect(calculo(objPersonagens, "menor", "age")).toEqual(respostaMenor);
    });


});

describe('calculoAgregado', () => {
    it('é função', () => {
        expect(typeof calculoAgregado).toBe('function');
    })
    it('returna resultado de calculo da média de avaliação dos filmes', () => {
        let notas = [95, 93]
        expect(calculoAgregado(notas)).toEqual(94);
    })
});
