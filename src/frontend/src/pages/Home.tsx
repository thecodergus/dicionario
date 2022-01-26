import React, {useEffect, useState} from 'react';
import {Layout, Menu, Breadcrumb, AutoComplete, Input} from "antd"
import "./home.css"

const {Header, Content, Footer} = Layout

function Home() {

  const [searchContent, setSetSearchContent] = useState<string>("")
  const [serachOptions, setSearchOptions] = useState<string[]>([])

  const onChange = (data: string) => setSetSearchContent(data)
  const onSearch = (data: string) => console.log(data)

  return (
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <AutoComplete
            // options={serachOptions}
            style={{ width: 200 }}
            // onSelect={onSelect}
            onSearch={onSearch}
            placeholder="Escreva aqui"
          />
        </Header>
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>{searchContent}</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
            Content
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
  );
}

export default Home;
