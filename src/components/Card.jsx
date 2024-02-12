import React from "react";
import { FaDollarSign, FaPoundSign, FaEuroSign } from "react-icons/fa";

function Card({ currencyData }) {
    console.log("card: ", currencyData);
    const { code, symbol, rate, description, rate_float } = currencyData;

    //Mapping between currency codes and corresponding icons
    const currencyIcons = {
        USD: <FaDollarSign />,
        GBP: <FaPoundSign />,
        EUR: <FaEuroSign />
    };

    return (
        <div className="flex flex-col items-center md:items-start p-4 border-2 border-neutral-300 hover:bg-neutral-300/55 hover:text-slate-700 m-4 rounded-lg text-white font-bold w-1/3 md:w-1/4">
            <div>
                <div className="flex items-center justify-start gap-1 text-yellow-300">
                    {currencyIcons[code] || <span>{code}</span>}
                </div>
                {/* Access the properties directly from the currencyData object */}
                <h3>{`Current ${description} Price: ${rate}`}</h3>
                <p>{`Rate Float: ${rate_float}`}</p>
            </div>
        </div>
    );
}

export default Card;