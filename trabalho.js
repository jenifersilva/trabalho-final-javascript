import { IDADE_MINIMA_ADOCAO, PORTE, GRAMAS_RACAO_POR_KG, PET } from "./trabalho-dados.js"

function geradorDeTagsDeIdentificacao(nome){
    return nome.toUpperCase()
}

function verificarSePodeSerAdotado(idade, porte){
    return idade >= IDADE_MINIMA_ADOCAO || porte == PORTE.M.abreviacao ? true : false
}

function calcularConsumoDeRacao(nome = "", idade = "", peso){
    return peso * GRAMAS_RACAO_POR_KG
}

function decidirTipoDeAtividadePorPorte(porte){
    switch(porte){
        case PORTE.P.descricao:
            return 'brincar dentro de casa'
        case PORTE.M.descricao:
            return 'caminhada no quarteirão'
        case PORTE.G.descricao:
            return 'correr no parque'
        default:
            return 'porte inválido'
    }
}

async function buscarDadoAsync (){
    return PET.nome
}

export {
    geradorDeTagsDeIdentificacao,
    verificarSePodeSerAdotado,
    calcularConsumoDeRacao,
    decidirTipoDeAtividadePorPorte,
    buscarDadoAsync
}