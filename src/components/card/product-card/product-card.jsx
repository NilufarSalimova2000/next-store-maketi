import React from "react";

export const  ProductCard = ({img, title}) => {
    return (
        <div className="card">
            <img src={img} alt="imag" />
            <h2>{title}</h2>
        </div>
    )
}