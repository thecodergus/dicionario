import React from "react";
import { Row, Col } from "antd"

export const Etimologia: React.FC<{ etimologia: string }> = ({ etimologia}) => {
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
                    <h2>Etimologia</h2>
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
                    <p>{etimologia}</p>
                </Col>
            </Row>
        
        </>
    )
}