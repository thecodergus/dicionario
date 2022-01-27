import React from "react"

export const Palavra: React.FC<{palavra: string}> = ({palavra}) => {
    return (
        <>
        <h2>Palavra</h2>
        <p>{palavra}</p>
        </>
    )
}