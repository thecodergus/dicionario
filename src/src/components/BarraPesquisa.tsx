import React, {useState} from 'react';
import { AutoComplete, Button, Tooltip } from "antd"
import { SearchOutlined } from '@ant-design/icons';
import type { PalavraPesquisa, Options } from "../types"

const BarraPesquisa: React.FC<PalavraPesquisa> = ({ setPalavra, palavra }) => {

  const [palavraPesquisa, setPalavraPesquisa] = useState<string>(palavra)
  const [options, setOptions] = useState<Options[]>([])
  const onSearch = (searchText: string) => setPalavraPesquisa(searchText)
  const onSelect = (data: string) => setPalavra(data)
  const serchWord = () => setPalavra(palavraPesquisa)

  return (
    <>
      <AutoComplete
        options={options}
        style={{ width: 200 }}
        onSelect={onSelect}
        onSearch={onSearch}
        placeholder="input here"
      />
      <Tooltip title="search">
        <Button type="primary" shape="circle" icon={<SearchOutlined />}
          onClick={serchWord}
        />
      </Tooltip>
    </>
  );
}

export default BarraPesquisa;
