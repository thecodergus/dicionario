import React, {useEffect, useState} from 'react';
import BarraPesquisa from './BarraPesquisa';
import Conteudo from './Conteudo';
import {Row, Col, Layout} from "antd"


function Home() {

  const [searchWord, setSearchWord] = useState<string>("")

  return (
      <>
      <Row 
        gutter={12}
        style={{ alignItems: "center" }}
        justify="center"
      >
          <Col
            span={12}
            style={{
              textAlign: "center"
            }}
          >
            <h1>Dicionario</h1>
          </Col>
      </Row>
      <Row
        gutter={12}
        style={{ alignItems: "center" }}
        justify="center"
      >
        <Col span={12}>
          <BarraPesquisa palavra={""} setPalavra={setSearchWord} />
        </Col>
      </Row>
      <Layout.Content>
        <Conteudo palavra={searchWord} />   
      </Layout.Content>
      </>
  );
}

export default Home;
