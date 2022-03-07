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
    "people": [
      {
        "name": "Pazu",
        "gender": "Male",
        "age": "13",
      },
      {
        "name": "Lusheeta Toel Ul Laputa",
        "gender": "Female",
        "age": "13",
        "specie": "Human"
      },
         
    ]
  },
  {
    "title": "My Neighbor Totoro",
    "director": "Hayao Miyazaki",
    "producer": "Hayao Miyazaki",
    "release_date": "1988",
    "rt_score": "93",
    "people": [
      {
        "name": "Satsuki Kusakabe",
        "gender": "Female",
        "age": "11",
      },
      {
        "name": "Mei Kusakabe",
        "gender": "Female",
        "age": "4",
      },
    ]
  } 
]
describe('ordenaDados', () =>{
  
  it ('is a function', () =>{
    expect(typeof ordenaDados).toBe('function');
  });

  it ('return resultado de ordenaDados', () =>{
    let retornoEsperado = [{
      "title": "My Neighbor Totoro",
      "director": "Hayao Miyazaki",
      "producer": "Hayao Miyazaki",
      "release_date": "1988",
      "rt_score": "93",
      "people": [
        {
          "name": "Satsuki Kusakabe",
          "gender": "Female",
          "age": "11",
        },
        {
          "name": "Mei Kusakabe",
          "gender": "Female",
          "age": "4",
        },
      ]
    },
    {
      "title": "Castle in the Sky",
      "director": "Hayao Miyazaki",
      "producer": "Isao Takahata",
      "release_date": "1986",
      "rt_score": "95",
      "people": [
        {
          "name": "Pazu",
          "gender": "Male",
          "age": "13",
        },
        {
          "name": "Lusheeta Toel Ul Laputa",
          "gender": "Female",
          "age": "13",
          "specie": "Human"
        },
           
      ]
    }];
    expect(ordenaDados(dados, "title", "desc")).toEqual(retornoEsperado)
    // if(expect(ordenaDados(dados, "title", "desc")).toEqual(retornoEsperado)){
    //     console.log("Ok")
    // }else{
    //     error: "Falhou"
    // }
    
})

//   it('returns retorno resposta errada OrdenaDados', () => {
//       let retornoEsperado = [{
//         "title": "My Neighbor Totoro",
//         "director": "Hayao Miyazaki",
//         "producer": "Hayao Miyazaki",
//         "release_date": "1988",
//         "rt_score": "93",
//         "people": [
//           {
//             "name": "Satsuki Kusakabe",
//             "gender": "Female",
//             "age": "11",
//           },
//           {
//             "name": "Mei Kusakabe",
//             "gender": "Female",
//             "age": "4",
//           },
//         ]
//       },
//       {
//         "title": "Castle in the Sky",
//         "director": "Hayao Miyazaki",
//         "producer": "Isao Takahata",
//         "release_date": "1986",
//         "rt_score": "95",
//         "people": [
//           {
//             "name": "Pazu",
//             "gender": "Male",
//             "age": "13",
//           },
//           {
//             "name": "Lusheeta Toel Ul Laputa",
//             "gender": "Female",
//             "age": "13",
//             "specie": "Human"
//           },
             
//         ]
//       }];

      
//         expect(ordenaDados(dados, "title", "asc")).toBe(retornoEsperado);

//       });

// })

describe('calculo', () => {
    it('é função', () => {
      expect(typeof calculo).toBe('function');
    });
  
    it('returns resultado de calculo', () => {

      expect(calculo(dados, "media", "rt_score")).toBe('94.00');
    });
  });

describe('filtraDados', () => {
    it('é função', () => {
        expect(typeof filtraDados).toBe('function');
    });
    
    it('returns resultado de filtraDados', () => {
        let respostaCerta = [
            {
              "title": "Castle in the Sky",
              "director": "Hayao Miyazaki",
              "producer": "Isao Takahata",
              "release_date": "1986",
              "rt_score": "95",
              "people": [
                {
                  "name": "Pazu",
                  "gender": "Male",
                  "age": "13",
                },
                {
                  "name": "Lusheeta Toel Ul Laputa",
                  "gender": "Female",
                  "age": "13",
                  "specie": "Human"
                },
                   
              ]
            }

        ]
    expect(filtraDados(dados,"producer", "Isao Takahata")).toEqual(respostaCerta);
    });

     
      it('deve retornar um array com o filme "My Neighbor Totoro" para o producer "Hayao Miyazaki" ', () => {
        expect(filtraDados(dados,"producer","Hayao Miyazaki")).toStrictEqual(dados[1]);
      });
    
      it('deve retornar um array com o personagem "Pazu" do filme "Castle in the Sky" e genero "Male" ', () => {
        expect(filtraDados(dados,"gender","Male")).toStrictEqual([dados[0].people[0]]);
      });
    
    
});
});

describe('preencheValorTagOption', () => {
    it('é função', () => {
        expect(typeof preencheValorTagOption).toBe('function');
    });
    
    it('returns resultado de preencheValorTagOption', () => {
        let respostaCerta = ["Hayao Miyazaki","Isao Takahata" ]
        let resultado = ["Hayao Miyazaki"]
        let resultadoPersonagem = ["My Neighbor Totoro", "Castle in the Sky",]
    
    
        expect(preencheValorTagOption(dados,"producer")).toStrictEqual(respostaCerta);

        expect(preencheValorTagOption(dados,"director")).toStrictEqual(resultado);

        expect(preencheValorTagOption(dados,"title")).toStrictEqual(resultadoPersonagem);
    
    });
    
});

