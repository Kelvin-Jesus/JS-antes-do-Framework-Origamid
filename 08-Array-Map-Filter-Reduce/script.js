const precos = [
    'crédito',
    'R$ 200',
    'R$ 400',
    'Contas Pagar',
    'R$ 300',
    'R$ 400',
    'Meus Dados'
];

const precosFiltro = precos.filter(preco => preco.includes('R$'))
// O que passar pelo filtro vai para o array final


const precosNumeros = precosFiltro.map(preco => Number(preco.replace('R$ ', '')))
// Alterou todos os itens de precosFiltro


const total = precosNumeros.reduce((acumulador, atual)=>acumulador + atual)

console.log(total);