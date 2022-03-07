import { calculo, ordenaDados } from '../src/data.js';

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
  })
})

describe('calculo', () => {
    it('is a function', () => {
      expect(typeof calculo).toBe('function');
    });
  
    it('returns resultado de calculo', () => {

      expect(calculo(dados, "media", "rt_score")).toBe('94.00');
    });
  });
