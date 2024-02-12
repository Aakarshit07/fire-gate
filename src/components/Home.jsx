import { useEffect, useState } from "react"
import Card from "./Card";

function Home() {

    const [currencyDetails, setCurrencyDetails] = useState(null); 

    const fetchData = async () => {
        try {
         const response = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
         const data = await response.json()
         setCurrencyDetails(data);
        } catch (error) {
         console.error("Can't get the Bitcoin price: ", error.message);
        }
    }
    

    useEffect(() => {
        fetchData();
    // Empty dependency array ensures the effect runs only once on mount
    }, []) 

  
  
return (
    <div className="w-full flex flex-col flex-wrap justify-center items-center">
        <div className="my-2 border-2 border-[#cd561ff9] p-4 rounded-lg bg-neutral-300">
            <h1 className="text-3xl text-center font-bold text-[#e14825f9]">Bitcoin Price Index</h1>
        </div>
        {currencyDetails && (
            Object.values(currencyDetails.bpi).map(currencyData => (
                <Card key={currencyData.code} currencyData={currencyData} />
            ))
        )}
        <div className="flex flex-col justify-center items-center my-2 border-2 border-neutral-300 p-6 rounded-lg bg-neutral-300 hover:bg-neutral-300/50">
            <h3 className="font-bold text-xl text-slate-700">Last Updated</h3>
            <div className="font-semibold text-lg text-slate-800">
                {currencyDetails && (
                    <div>
                        <p>UTC: {new Date(currencyDetails.time.updatedISO).toUTCString()}</p>
                        <p>GTM: {new Date(currencyDetails.time.updatedISO).toLocaleString('en-GB', { timeZone: 'GMT' })}</p>
                        <p>Local Time: {new Date(currencyDetails.time.updatedISO).toLocaleString()}</p>
                    </div>  
                )}
            </div>
        </div>
    </div>
  )
}

export default Home;