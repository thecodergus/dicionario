import { request } from 'https';
import React, {useEffect, useState} from 'react';
import type { Palavra, DataPalavra } from "../tipos"
import {requestPalavra, requestSinonimos} from "../utils"

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

  useEffect(
    () => {
      if(palavra !== ""){
        requestPalavra(palavra)
          .then((response: DataPalavra) => {
            setClasse(response.class)
            setSignificados(response.meanings)
            setEtimologia(response.etymology)
          })
          .catch(err => console.error(err))

          requestSinonimos(palavra)
            .then((response: string[]) => {
              setSinonimos(response)
            })
            .catch(err => console.error(err))
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
