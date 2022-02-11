import { request } from 'https';
import React, {useEffect, useState} from 'react';
import { notification } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { motion, AnimatePresence } from "framer-motion"
import type { Palavra, DataPalavra, Sinonimos as SinonimosType } from "../../types"

import { requestMeanings, requestSynonyms} from "../../services/requests"

import {Palavra as PalavraConteudo} from './Palavra';
import { Classe } from './Classe';
import { Significados } from './Significados';
import { Etimologia } from './Etimologia';
import { Sinonimos } from './Sinonimos';

import Item from "./Item"

const Conteudo: React.FC<Palavra> = ({ palavra }) => {
  //https://motion.ant.design/components/tween-one#components-tween-one-demo-position
  // animação

  const [palavraAux, setPalavraAux] = useState<string>(palavra)
  const [classe, setClasse] = useState<string>("")
  const [significados, setSignificados] = useState<string[]>([])
  const [etimologia, setEtimologia] = useState<string>("")
  const [sinonimos, setSinonimos] = useState<string[]>([])
  const [hidden, setHidden] = useState<boolean>(true)

  // auxiliar para a exibição das animações de aparecimento de conteudo
  const [showPalavra, setShowPalavra] = useState<boolean>(false)
  const [showClasse, setShowClasse] = useState<boolean>(false)
  const [showSignificados, setShowSignificados] = useState<boolean>(false)
  const [showEtimologia, setShowEtimologia] = useState<boolean>(false)
  const [showSinonimos, setShowSinonimos] = useState<boolean>(false)


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
    
    setPalavraAux(palavra)

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

  const showContent = () => {
    const time = 1000

    setTimeout(() => setShowPalavra(true), time * 0)
    setTimeout(() => setShowClasse(true), time * 1)
    setTimeout(() => setShowSignificados(true), time * 2)
    setTimeout(() => setShowEtimologia(true), time * 3)
    setTimeout(() => setShowSinonimos(true), time * 4)

  }

  const hiddenContent = () => {
    setShowPalavra(false)
    setShowClasse(false)
    setShowSignificados(false)
    setShowEtimologia(false)
    setShowSinonimos(false)
  }

  // Executa quando o botão de pesquisa é apertado ou é selecionado uma palavra no auto complete da barra de pesquisa
  useEffect(
    () => {
      hiddenContent()
      setTimeout(updateData, 1000)
      if(palavra !== ""){
        setTimeout(showContent, 1500)
      }
    }
    ,
    [palavra]
  )

  // Startar mostrar
  useEffect(
    () => {  
      if(hidden === false){
        showContent()
      }else{
        hiddenContent()
      }
    },
    [hidden]
  )


  return (
    <>
      <Item show={showPalavra}>
        <PalavraConteudo palavra={palavraAux} />
      </Item>
      <Item show={showClasse}>
        <Classe classe={classe} />
      </Item>
      <Item show={showSignificados}>
        <Significados significados={significados} />
      </Item>
      <Item show={showEtimologia}>
        <Etimologia etimologia={etimologia} />
      </Item>
      <Item show={showSinonimos}>
        <Sinonimos sinonimos={sinonimos} />
      </Item>
    </>
  );
}

export default Conteudo;
