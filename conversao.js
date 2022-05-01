//conversao implicita
    //na conversao implicita é usado o operador == para realizar comparacoes entre valores sem se importar
    //com o tipo, não é recomendado o seu uso, visto que é a causa para varios bugs
    //ex:
    /*let numero = 123;
    let palavra = '123';

    console.log(numero == palavra);

    //tambem é possivel concatenar um numero com uma palavra
    console.log(numero + palavra);*/

//conversao explicita
    //na conversao explicita voce transforma de forma permanente um tipo para o outro
    //funcoes:
        //numero para string: String()
        //string para numero: Number()

    let numero1 = 123;
    let palavra1 = '123';

    console.log(typeof palavra1)
    console.log(typeof Number(palavra1))

    console.log(typeof numero1);
    console.log(typeof String(numero1));
