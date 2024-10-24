import React from "react";

export const TopProductCard = ({img, price, title, count}) => {
    return (
        <div className="top_card_list">
            <div className="img_block">
                <img src={img} alt="imag" />
            </div>
            <p>{price}</p>
            <h3>{title}</h3>
            <p>{count}</p>
            <button>Sotib olish</button>
        </div>
    )
}