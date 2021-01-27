function showList(empresa, ...clients) {
    console.log(empresa);
    console.log(clients)
}

showList('Origamid', 'João', 'Maria');

const numeros = [1,2,5,35,36,3,367,6];

console.log(Math.max(...numeros));

const itens = document.querySelectorAll('li');

itens.forEach(item=>console.log(item));
[...itens].map(item=>console.log(item));
// Transformou uma node List em array;

console.log(itens)

const carro = {cor: 'Azul', portas: 4, ano: 2020};
const cloneCarro = { ...carro, turbo: true }
console.log(cloneCarro)

class Transporte {
    cosnstructor() {
        this.terrestre = true;
    }
}

class Carro extends Transporte {
    constructor(cor, portas) {
        super();
        this.cor = cor;
        this.portas = portas;
    }
}

const carro1 = new Carro('Vermelho', 4);

const cloneCarro1 = {...carro1};

console.log(carro1);
console.log(cloneCarro1);