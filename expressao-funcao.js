//existe tres formas de se escrever funcoes no javascript:

//declarativa:

function soma(x, y) {
    return x + y;
}

//expressiva:

const variavel = function (x, y) {
    return x + y;
}

//Arrow

const somaArraw = (x, y) => x + y;
const somaNumerosPequenos = (x, y) => {
    if (x || y > 10) {
        return "numero grande demais";
    } else {
        return x + y;
    }
}
console.log(somaNumerosPequenos(11, 2));

