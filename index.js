import chalk from 'chalk'
import readlineSync from 'readline-sync'
/*
O usuário deseja comprar uma blusa do tipo canguru no tamanho XG, efetuando o pagamento por PIX porque não possui cartão.
*/

var blusa = 'canguru'
var cam = 'camiseta? '
var cred = 'credito'
var deb = 'debito'
var pix = 'pix '

var nome = readlineSync.question('Ola! Como voce se chama? ')
console.log('É um prazer tê-lo conosco ' + chalk.green(nome));

var tipoProduto = readlineSync.question ('Qual o produto desejado? ' + chalk.blue(blusa) + ' ou ' + chalk.red(cam ));
if (tipoProduto == 'canguru') {
    console.log(blusa);
}else {
    console.log(cam);
}
var tipoPagamento = readlineSync.question(chalk.green(nome) + 'escolha a forma de pagamento: ' + chalk.yellow(cred) + ", "+ chalk.bgMagenta(deb) + " ou " + chalk.magentaBright(pix));
if ( tipoPagamento == 'pix') {
    console.log(pix);
}else {
    console.log("Cartão");
}
console.log(`Foi um prazer atendê-lo ${nome}, você aduiriu o ${tipoProduto} com pagamento ${tipoPagamento}`)
