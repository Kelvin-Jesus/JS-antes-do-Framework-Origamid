async function fetchProdutos(url) {
    const response = await fetch(url);
    const jBody = await response.json();
    console.log(jBody);
    return jBody
}

const req = fetchProdutos('https://ranekapi.origamid.dev/json/api/produto');

console.log(req)