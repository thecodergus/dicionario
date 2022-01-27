import React from "react";

export const Etimologia: React.FC<{ etimologia: string }> = ({ etimologia}) => {
    return (
        <>
            <h2>Etimologia</h2>
            <p>{etimologia}</p>
        </>
    )
}