import React from "react"
import { Row, Col } from "antd"

export const Palavra: React.FC<{palavra: string}> = ({palavra}) => {
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
                    <h2>Palavra</h2>
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
                    <p>{palavra}</p>
                </Col>
            </Row>
        
        </>
    )
}