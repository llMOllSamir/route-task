import React, { useCallback, useContext, useEffect, useState } from 'react'
import style from '../styles/Home.module.css'
import { Loader } from '../components/Loader'
import { ApiContext } from '../context/ApiProvider'
import { Table } from '../components/Table'
import { Filtration } from '../components/Filtration'
const Home = () => {
    const { loading, data } = useContext(ApiContext)
    const [filter, setFilter] = useState({})


    const dataFiltration = useCallback(
        () => {
            if (data) {
                if (Object.keys(filter).length === 0) {
                    return data
                }
                if (filter.name && filter.amount) {
                    return {
                        customers: filter?.name?.length > 0 ?
                            (data.customers.filter(item => item.name.toLowerCase().includes(filter.name.toLowerCase())))
                            : [...data?.customers],
                        transactions: filter.amount > 0 ?
                            (data?.transactions.filter(item => item.amount >= filter.amount))
                            : [...data?.transactions]
                    }
                }
                if (filter.name && filter.name.length > 0) {
                    return {
                        customers: (data.customers.filter(item => item.name.toLowerCase().includes(filter.name.toLowerCase()))),
                        transactions: [...data?.transactions]
                    }
                }
                if (filter?.amount && Number(filter.amount) && filter.amount > 0) {
                    return {
                        customers: [...data?.customers],
                        transactions: data?.transactions?.filter(item => item.amount >= filter.amount)
                    }
                }
                return data
            }
        },
        [filter, data]
    )


    if (loading) {
        return <Loader />
    }

    return (
        <section className={style.home}>
            <h1>Data Transaction</h1>
            <Filtration filter={setFilter} />
            <Table data={dataFiltration()} />
        </section>
    )
}

export default Home