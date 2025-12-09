const carros = [
  { nome: "Fusca", ano: 1975 },
  { nome: "Gol", ano: 2005 },
  { nome: "Corolla", ano: 2022 },
  { nome: "Civic", ano: 2020 }
];
const carrosApos2010 = carros.filter(carro => carro.ano > 2010);
console.log(carrosApos2010)