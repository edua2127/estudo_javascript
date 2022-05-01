//tipo const -> aquilo que nao vai ser alterado
//tipo let -> aquilo que vai ser alterado, que pode ser passado como parametro
//tipo var -> variavel global, não recomendado, declaracao pode ser em qualquer lugar


const forma = 'quadrado';
let altura;
let largura;
let area;

altura = 10;
largura = 4;

if(forma === 'quadrado') {
    area = altura * largura;
} else {
    area = (altura * largura) / 2;
}

console.log(area);

