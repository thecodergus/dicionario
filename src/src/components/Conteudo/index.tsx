import { request } from 'https';
import React, {useEffect, useState} from 'react';
import type { Palavra, DataPalavra, Sinonimos as SinonimosType } from "../../types"

import { requestMeanings, requestSynonyms} from "../../services/requests"

import {Palavra as PalavraConteudo} from './Palavra';
import { Classe } from './Classe';
import { Significados } from './Significados';
import { Etimologia } from './Etimologia';
import { Sinonimos } from './Sinonimos';

const Conteudo: React.FC<Palavra> = ({ palavra }) => {

  const [classe, setClasse] = useState<string>("")
  const [significados, setSignificados] = useState<string[]>([])
  const [etimologia, setEtimologia] = useState<string>("")
  const [sinonimos, setSinonimos] = useState<string[]>([])


  // Realiza a pesquisa e atualiza as informações do conteudo
  const updateData = () => {
    if(palavra !== ""){
      // Requisição a dicio.com.br
      requestMeanings(palavra)
        .then((response: DataPalavra) => {
          setClasse(response.class)
          setSignificados(response.meanings)
          setEtimologia(response.etymology)
        })
        .catch(err => console.error(err))

      // Requisição sinonimos a dicio.com.br
      requestSynonyms(palavra)
        .then((response: SinonimosType) => {
          setSinonimos(response)

        })
        .catch(err => {
          console.error(err)
        })
    }else{
      setClasse("")
      setSignificados([])
      setEtimologia("")
      setSinonimos([])
    }
  }

  // Executa quando o botão de pesquisa é apertado ou é selecionado uma palavra no auto complete da barra de pesquisa
  useEffect(
    updateData
    ,
    [palavra]
  )


  return (
    <>
      <PalavraConteudo palavra={palavra} />
      <Classe classe={classe} />
      <Significados significados={significados} />
      <Etimologia etimologia={etimologia} />
      <Sinonimos sinonimos={sinonimos} />
    </>
  );
}

export default Conteudo;
