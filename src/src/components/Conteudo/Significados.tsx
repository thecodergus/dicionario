import React from "react";

export const Significados: React.FC<{ significados: string[] }> = ({ significados }) => {
    return (
        <>
            <h2>Significados</h2>
            {
                significados.map((item, index) => (
                    <p key={index}>{item}</p>
                ))
            }
        </>
    )
}