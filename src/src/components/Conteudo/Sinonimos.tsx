import React from "react";

export const Sinonimos: React.FC<{ sinonimos: string[] }> = ({ sinonimos }) => {
    return (
        <>
            <h2>Sininomos</h2>
            {
                sinonimos.map((item, index) => (
                    <p key={index}>{item}</p>
                ))
            }
        </>
    )
}