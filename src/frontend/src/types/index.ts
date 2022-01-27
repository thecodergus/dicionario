import { type } from "os";

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

export type Sinonimos = string[]

export interface Options {
    value: string
}