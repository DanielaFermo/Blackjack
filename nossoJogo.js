/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


alert('Boas vindas ao jogo de Blackjack!')
const jogar = confirm('Deseja realizar uma nova rodada?')
let jogadorCarta1= 0
let jogadorCarta2= 0 
let computadorCarta1 = 0
let computadorCarta2 = 0 

if (jogar) {
jogadorCarta1 = comprarCarta()
jogadorCarta2 = comprarCarta()
computadorCarta1 = comprarCarta()
computadorCarta2 = comprarCarta()
resultadoJogador= jogadorCarta1.valor + jogadorCarta2.valor
resultadoComputador =computadorCarta1.valor + computadorCarta2.valor
if (resultadoComputador < resultadoJogador){
   console.log(`Voce ganhou esta rodada! Voce tirou as cartas ${jogadorCarta1.texto} e ${jogadorCarta2.texto} que tem o valor de ${resultadoJogador} e o computador tirou as cartas ${computadorCarta1.texto} e ${computadorCarta2.texto} que tem o valor de ${resultadoComputador} `);
}
else if(resultadoComputador==resultadoJogador)
{
console.log(`Foi empate!`);
}
else
{
   console.log(` O computador ganhou esta rodada! Voce tirou as cartas ${jogadorCarta1.texto} e ${jogadorCarta2.texto} que tem o valor de ${resultadoJogador} e o computador tirou as cartas ${computadorCarta1.texto} e ${computadorCarta2.texto} que tem o valor de ${resultadoComputador} `)  
}
}else{
   console.log('O jogo acabou!')
}


