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
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(
    () => {
      if(palavra !== ""){
        setIsLoading(true)

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

              setIsLoading(false)
            })
            .catch(err => {
              setIsLoading(false)
              console.error(err)
            })

      }else{

        setClasse("")
        setSignificados([])
        setEtimologia("")
        setSinonimos([])

      }
    },
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
