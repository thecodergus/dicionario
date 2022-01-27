import React from "react"

export const Classe: React.FC<{ classe: string}> = ({classe}) => {
    return (
        <>
            <h2>Classe</h2>
            <p>{classe}</p>
        </>
    )
}