import { useEffect, useState } from "react"

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    
    useEffect(() => {
        fetch(`https://api.currencyfreaks.com/v2.0/rates/latest?apikey=1dfca12c258d4f64be30a7be015675f7&base=${currency}`)
        .then((res) => res.json())
        .then((res) => {
            setData(res.rates)
            console.log("Fetched rates:", res.rates) 
        })
        .catch((error) => console.log("Error fetching rates:", error))
    }, [currency])

    return data
}

export default useCurrencyInfo