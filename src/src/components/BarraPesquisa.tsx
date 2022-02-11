import React, {useState} from 'react';
import { AutoComplete, Button, Tooltip } from "antd"
import { SearchOutlined } from '@ant-design/icons';
import type { PalavraPesquisa, Options } from "../types"

const BarraPesquisa: React.FC<PalavraPesquisa> = ({ setPalavra, palavra }) => {

  const [palavraPesquisa, setPalavraPesquisa] = useState<string>(palavra)

  // Opções de palavras a serem sugeridas para pesquisa de acordo com o que ja foi digitado
  // Ideia é ter a lista completa de palavras do portugues
  const [options, setOptions] = useState<Options[]>([])
  const onSearch = (searchText: string) => setPalavraPesquisa(searchText)
  const onSelect = (data: string) => setPalavra(data)
  const searchWord = () => setPalavra(palavraPesquisa)

  return (
    <>
      <AutoComplete
        options={options}
        style={{ width: "90%" }}
        onSelect={onSelect}
        onSearch={onSearch}
        placeholder="Escreva aqui"
        onInputKeyDown={
          e => {
            if(e.key === "Enter"){
              searchWord()
            }
          }
        }
      />
      <Tooltip title="search">
        <Button type="primary" shape="circle" icon={<SearchOutlined />}
          onClick={searchWord}
        />
      </Tooltip>
    </>
  );
}

export default BarraPesquisa;
