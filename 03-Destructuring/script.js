document.documentElement.addEventListener('mousemove', handleMouseMove);

function handleMouseMove({ clientX, clientY, target }) {

    // const { clientX, clientY, target } = e;
    console.log(clientX, clientY, target);
}

const frutas = ['Banana', 'Uva'];

const [ fruta1, fruta2 ] = frutas;
console.log(fruta1, fruta2)