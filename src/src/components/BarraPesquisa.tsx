import React, {useState} from 'react';
import {AutoComplete} from "antd"
import type { PalavraPesquisa, Options } from "../types"

const BarraPesquisa: React.FC<PalavraPesquisa> = ({ setPalavra }) => {

  const [options, setOptions] = useState<Options[]>([])
  const onSearch = (searchText: string) => setPalavra(searchText)
  const onSelect = (data: string) => setPalavra(data)

  return (
    <>
      <AutoComplete
        options={options}
        style={{ width: 200 }}
        onSelect={onSelect}
        onSearch={onSearch}
        placeholder="input here"
      />
    </>
  );
}

export default BarraPesquisa;
