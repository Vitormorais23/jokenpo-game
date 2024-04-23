// ENUM de resultado da partida
const RESULTADO = {
    GANHOU: 0,
    PERDEU: 1,
    EMPATOU: 2
}

const OPCOES = {
    PE: 'pedra',
    PA: 'papel',
    TE: 'tesoura'
}

function jogar(jogada) {
    // Obter jogada da maquina
    let jogadaMaquina = obterJogadaMaquina()

    console.log(`Jogador: ${jogada} VS Maquina: ${jogadaMaquina}`)

    // Obter resultado da partida
    let resultado = obterResultado(jogada, jogadaMaquina)

    if (resultado === RESULTADO.EMPATOU) {
        console.log('Empate')
    } else if (resultado === RESULTADO.GANHOU) {
        console.log('Ganhou')   
    } else if (resultado === RESULTADO.PERDEU) {
        console.log('Perdeu')   
    }

    exibirJogadaJogador(jogada, resultado)

    alternarLayouts()
}

function exibirJogadaJogador(jogada, resultado) {
    // Recuperar elemento img do HTML
    let img = document.getElementById('jogada-jogador-img')

    let color = 'gray'

    switch (resultado) {
        case RESULTADO.GANHOU:
            color = 'green'
            break
        case RESULTADO.PERDEU:
            color = 'red'
            break
        default:
            color = 'gray'
            break    
    }

    img.src = `/assets/${jogada}-${color}.png`
}

function alternarLayouts() {
    let home = document.getElementsByClassName('home')[0]
    let score = document.getElementsByClassName('score')[0]

    // toggle é como se fosse uma tomada ele liga e desliga a chamada, que nesse caso é o hidden
    home.classList.toggle('hidden')
    score.classList.toggle('hidden')
}

function obterResultado(jogada, jogadaMaquina) {
    // Pedra ganha da tesoura (amassando-a ou quebrando-a).
    // Tesoura ganha do papel (cortando-o).
    // Papel ganha da pedra (embrulhando-a).

    // Empate
    if (jogada === jogadaMaquina) {
        return RESULTADO.EMPATOU
    } 
    // Ganhou
    else if (jogada === OPCOES.PE && jogadaMaquina === OPCOES.TE) {
        return RESULTADO.GANHOU
    } else if (jogada === OPCOES.PA && jogadaMaquina === OPCOES.PE) {
        return RESULTADO.GANHOU
    } else if (jogada === OPCOES.TE && jogadaMaquina === OPCOES.PA) {
        return RESULTADO.GANHOU
    } 
    // Perdeu
    else if (jogada === OPCOES.TE && jogadaMaquina === OPCOES.PE) {
        return RESULTADO.PERDEU
    } else if (jogada === OPCOES.PE && jogadaMaquina === OPCOES.PA) {
        return RESULTADO.PERDEU
    } else if (jogada === OPCOES.PA && jogadaMaquina === OPCOES.TE) {
        return RESULTADO.PERDEU
    }
}

function obterJogadaMaquina() {
    // Criar um array com opções disponiveis
    let options = [OPCOES.PE, OPCOES.PA, OPCOES.TE]

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
    
    alternarLayouts()
}

function zerarPlacar() {
    console.log("zerar placar")
    
    alternarLayouts()
}