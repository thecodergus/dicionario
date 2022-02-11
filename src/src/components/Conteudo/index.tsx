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

const Conteudo: React.FC<Palavra> = ({ palavra }) => {
  //https://motion.ant.design/components/tween-one#components-tween-one-demo-position
  // animação

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

  // Startar mostrar
  useEffect(
    () => {
      const time = 1000

      if(hidden === false){
        setTimeout(() => setShowPalavra(true), time * 1)
        setTimeout(() => setShowClasse(true), time * 2)
        setTimeout(() => setShowSignificados(true), time * 3)
        setTimeout(() => setShowEtimologia(true), time * 4)
        setTimeout(() => setShowSinonimos(true), time * 5)
      }else{
        setShowPalavra(false)
        setShowClasse(false)
        setShowSignificados(false)
        setShowEtimologia(false)
        setShowSinonimos(false)
      }
    },
    [hidden]
  )


  return (
    <>
      <AnimatePresence>
        {
          showPalavra &&(
            <motion.div
              animate={{ y: 100 }}
              transition={{
                delay: 0,
                y: { type: "spring", stiffness: 400 },
                default: { duration: 2 },
              }}
            >
              <PalavraConteudo palavra={palavra} />
            </motion.div>
          )
        }
      </AnimatePresence>
      
      <AnimatePresence>
        {
          showClasse &&(
            <motion.div
              animate={{ y: 100 }}
              transition={{
                delay: 0,
                y: { type: "spring", stiffness: 400 },
                default: { duration: 2 },
              }}
            >
              <Classe classe={classe} />
            </motion.div>
          )
        }
      </AnimatePresence>

      <AnimatePresence>
        {
          showSignificados &&(
            <motion.div
              animate={{ y: 100 }}
              transition={{
                delay: 0,
                y: { type: "spring", stiffness: 400 },
                default: { duration: 2 },
              }}
            >
              <Significados significados={significados} />
            </motion.div>
          )
        }
      </AnimatePresence>

      <AnimatePresence>
        {
          showEtimologia &&(
            <motion.div
              animate={{ y: 100 }}
              transition={{
                delay: 0,
                y: { type: "spring", stiffness: 400 },
                default: { duration: 2 },
              }}
            >
              <Etimologia etimologia={etimologia} />
            </motion.div>
          )
        }
      </AnimatePresence>

      <AnimatePresence>
        {
          showSinonimos &&(
            <motion.div
              animate={{ y: 100 }}
              transition={{
                delay: 0,
                y: { type: "spring", stiffness: 400 },
                default: { duration: 2 },
              }}
            >
              <Sinonimos sinonimos={sinonimos} />
            </motion.div>
          )
        }
      </AnimatePresence>
    </>
  );
}

export default Conteudo;
