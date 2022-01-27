export interface Palavra {
    palavra: string
}

export interface PalavraPesquisa extends Palavra{
    setPalavra: (nome: string) => void
}

export interface DataPalavra {
    class: string
    meanings: string[]
    etymology: string
}

export interface Options {
    value: string
}