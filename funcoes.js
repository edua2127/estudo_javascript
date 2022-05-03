
//como criar uma funcao


//nao é obrigatorio ter parametro ou retorno, mas se nao os tiver, tabmem nao vai ser
//possivel passar informacao para a funcao ou retornar informacoes daquela funcao

function funcao2() {
    //bloco de codigo dentro;
}

function nome(parametro) {
    variavel = "meu retorno"
    //codigos que podem estar presentes
    return variavel;
}


//funcoes matematicas

//arredonda um numero
Math.round(5.4);

//arredonda para cima
Math.ceil(5.9);

//arredonda para baixo
Math.floor(5.8);

//retira os decimais
Math.trunc(10.56);


//gerador de numeros aleatorios
Math.random();


//funcoes interessantes

function nomeidade(nome, idade) {
    return `meu nome é ${nome} e minha idade é ${idade}`;
}

//como definir um valor padrao para um parametro

function valorpadrao(num1 = 1, num2 = 1) {
    return num1 + num2;
}
