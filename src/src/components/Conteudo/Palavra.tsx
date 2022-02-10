import React from "react"
import { Row, Col } from "antd"

export const Palavra: React.FC<{palavra: string, hidden: boolean}> = ({palavra, hidden}) => {
    return (
        <>
            <Row
                hidden={hidden}
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
                    <h2>Palavra</h2>
                </Col>
            </Row>
            <Row
                hidden={hidden}
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
                    <p>{palavra}</p>
                </Col>
            </Row>
        
        </>
    )
}