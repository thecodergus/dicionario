import { request } from 'https';
import React, {useEffect, useState} from 'react';
import { notification } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
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
  const [hidden, setHidden] = useState<boolean>(true)


  const errorNotification = () => {
    notification.open({
      message: "Palavra não encontrada",
      description: `A palavra "${palavra}" não foi encontrada`,
      icon: <CloseOutlined style={{ color: "#FF0000"}} />,
      style: { color: "#FF0000"}
    })
  }


  // Realiza a pesquisa e atualiza as informações do conteudo
  const updateData = () => {
    if(palavra !== ""){
      // Requisição a dicio.com.br
      requestMeanings(palavra)
        .then((response: DataPalavra) => {
          if(response.class !== ""){
            setClasse(response.class)
            setSignificados(response.meanings)
            setEtimologia(response.etymology)

            setHidden(false)
          }else{
            errorNotification()
          }          
        })
        .catch(err => {
          console.error(err)
        })

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

      setHidden(true)
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
      <PalavraConteudo palavra={palavra} hidden={hidden} />
      <Classe classe={classe} hidden={hidden} />
      <Significados significados={significados} hidden={hidden} />
      <Etimologia etimologia={etimologia} hidden={hidden} />
      <Sinonimos sinonimos={sinonimos} hidden={hidden} />
    </>
  );
}

export default Conteudo;
