
/* mexendo com condicionais */
const peso = prompt("Digite seu peso");
const altura = prompt("Digite sua Altura");
const imc = Math.round(peso / (altura * altura));
/*const imc = peso / (altura * altura);*/
/*biblioteca que calcula numeros elevados/*Math.pow (altura,2)*/
console.log(imc);

if (imc < 18.5) {
    console.log('Abaixo do Peso, ');

}else if (imc >= 18.5 && imc <= 25){

    document.write('Na Média de Peso, ' );
}

else if ( imc >=25  && imc <= 30 ){
    document.write('Acima do Peso, ' );
}
else if ( imc >=30  && imc <= 40 ){
    document.write('Acima do Peso, ' );
}
else if ( imc >=40  && imc <= 60 ){
    document.write ('Baleia' );
}
/*Math.round arredonda o resultado*/
Math.round(imc); document.write(`Seu IMC é ${imc}`);