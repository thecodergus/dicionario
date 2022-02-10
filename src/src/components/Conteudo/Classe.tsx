import React from "react"
import { Row, Col } from "antd"

export const Classe: React.FC<{ classe: string}> = ({classe}) => {
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
                    <h2>Classe</h2>
                </Col>
            </Row>
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
                    <p>{classe}</p>
                </Col>
            </Row>
            
        </>
    )
}