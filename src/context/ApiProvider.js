import React, { useState } from 'react'


export const ApiContext = React.createContext()
export default function ApiProvider({ children }) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)

    const fetchData = async () => {
        try {
            setLoading(true)
            const response = await fetch("https://raw.githubusercontent.com/llMOllSamir/json/main/db.json")
            const data = await response.json()
            setData(data)
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }




    const value = {
        data,
        loading,
        fetchData
    }

    return (
        <ApiContext.Provider value={value}>
            {children}
        </ApiContext.Provider>
    )
}



