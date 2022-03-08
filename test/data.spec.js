import { calculo, ordenaDados, filtraDados, preencheValorTagOption } from '../src/data.js';

// describe('example', () => {
//   it('is a function', () => {
//     expect(typeof example).toBe('function');
//   });

//   it('returns `example`', () => {
//     expect(example()).toBe('example');
//   });
// });


// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
const dados = [
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

const dadosPersonagens = [
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



describe('ordenaDados', () => {

    it('is a function', () => {
        expect(typeof ordenaDados).toBe('function');
    });

    it('return resultado de ordenaDados Z-A', () => {
        let retornoEsperado = [
            dados[1],
            dados[0]
        ];

        expect(ordenaDados(dados, "title", "desc")).toEqual(retornoEsperado)
        
    })

    it('return resultado de ordenaDados A-Z', () => {
        let retornoEsperado = [
            dados[0],
            dados[1]
        ];

        expect(ordenaDados(dados, "title", "asc")).toEqual(retornoEsperado)
        
    })

    it('return resultado de ordenaDados filme mais recente para mais antigo', () => {
        let retornoEsperado = [
            dados[1],
            dados[0]
        ];

        expect(ordenaDados(dados, "release_date", "desc")).toEqual(retornoEsperado)
        
    })

    it('return resultado de ordenaDados filme mais antigo para mais recente', () => {
        let retornoEsperado = [
            dados[0],
            dados[1]
        ];

        expect(ordenaDados(dados, "release_date", "asc")).toEqual(retornoEsperado)
        
    })
});

   
    describe('calculo', () => {
        it('é função', () => {
            expect(typeof calculo).toBe('function');
        });

        it('returns resultado de calculo média de notas de filmes', () => {

            expect(calculo(dados, "media", "rt_score")).toBe('94.00');
        });

        it('returns resultado de calculo média de idade dos personagens', () => {

            expect(calculo(dadosPersonagens, "media", "age")).toBe('10.25');
        });

        it('returns resultado de maior idade dos personagens', () => {
            
            expect(calculo(dadosPersonagens, "maior", "age")).toEqual(dadosPersonagens[0]);
        });


    });

    describe('filtraDados', () => {
        it('é função', () => {
            expect(typeof filtraDados).toBe('function');
        });

        it('returns resultado de filtraDados', () => {
            let respostaCerta = [dados[0]] 

            expect(filtraDados(dados, "producer", "Isao Takahata")).toEqual(respostaCerta);
        });


        it('deve retornar um array com o filme "My Neighbor Totoro" para o producer "Hayao Miyazaki" ', () => {
            console.log(dados)
            let respostaCerta = [dados[1]]

            expect(filtraDados(dados, "producer", "Hayao Miyazaki")).toEqual(respostaCerta);
        });
        
    }); 

describe('preencheValorTagOption', () => {
    it('é função', () => {
        expect(typeof preencheValorTagOption).toBe('function');
    });

    it('returns resultado de preencheValorTagOption', () => {
        let respostaProdutor = [dados[0].producer, dados[1].producer ]
        let resultadoDiretor = ["Hayao Miyazaki"]
        let resultadoPersonagem = [dados[0].title, dados[1].title,]


        expect(preencheValorTagOption(dados, "producer")).toEqual(respostaProdutor);

        expect(preencheValorTagOption(dados, "director")).toEqual(resultadoDiretor);

        expect(preencheValorTagOption(dados, "title")).toEqual(resultadoPersonagem);

    });

});

