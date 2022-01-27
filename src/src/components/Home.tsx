import React, {useEffect, useState} from 'react';
import BarraPesquisa from './BarraPesquisa';
import Conteudo from './Conteudo';


function Home() {

  const [searchWord, setSearchWord] = useState<string>("")

  return (
      <>
        <h1>Dicionario</h1>  
        <BarraPesquisa palavra={""} setPalavra={setSearchWord}  />
        <Conteudo palavra={searchWord} />
      </>
  );
}

export default Home;
