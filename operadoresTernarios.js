//operadores ternarios, if resumido

const idadeMinima = 18;
let idadeCliente = 17;

//if normal
if(idadeCliente >= idadeMinima) {
    console.log('idade minima atendida')
} else {
    console.log('idade minima nao atendida')
}

//if com os operadores ternarios
//estrutura: condicao ? se verdadeiro faca isso: se falso faca isso

console.log(idadeCliente >= idadeMinima ? "idade minima atendida" : "idade minima nao atendida");