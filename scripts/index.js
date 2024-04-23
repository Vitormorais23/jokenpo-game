function jogar(jogada) {

    let jogadaMaquina = obterJogadaMaquina()

    console.log(`Jogador: ${jogada} VS Maquina: ${jogadaMaquina}`)
}

function obterJogadaMaquina() {
    // Criar um array com opções disponiveis
    let options = ['pedra', 'papel', 'tesoura']

    // Gerar numero alaátorio entre 0 e 3 onde o 3 não entra na conta pois essa função será gerada até o 2 
    let position = getRandom(0, 3)

    // Retornar a jogada da maquina
    return options[position]
}

function getRandom(min, max) {
    // min = Math.ceil(min); COMO ESTOU PASSANDO VALORES INTEIROS NÃO PRECISO DESSAS VARIÁVEIS
    // max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
  
  

function jogarNovamente() {
    console.log("jogar novamente")
}

function zerarPlacar() {
    console.log("zerar placar")
}