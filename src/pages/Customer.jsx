import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ApiContext } from '../context/ApiProvider'
import style from '../styles/Customer.module.css'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, TimeScale } from 'chart.js';
import 'chartjs-adapter-date-fns';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, TimeScale);

export const Customer = () => {
    const { id } = useParams()
    const { data: customerData } = useContext(ApiContext)
    const [customer, setCustomer] = useState("")
    const [transactions, setTransactions] = useState([])


    useEffect(() => {
        setCustomer(customerData?.customers?.find(item => item?.id === Number(id))?.name || "")
        setTransactions(customerData?.transactions?.filter(item => item?.customer_id === Number(id)))
    }, [customerData, id])



    const data = {
        labels: transactions?.map(item => item?.date),
        datasets: [
            {
                label: 'Transaction Amount',
                data: transactions?.map(item => item?.amount),
                borderColor: 'rgba(75,192,192,1)',
                backgroundColor: 'rgba(75,192,192,0.2)',
                fill: false,
            },
        ],
    };


    const options = {
        scales: {
            x: {
                type: 'time',
                time: {
                    unit: 'day',
                },
                title: {
                    display: true,
                    text: 'Date',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Amount',
                },
            },
        },
    };

    return (
        <section className={style.section}>
            {customer && <h1>{customer}</h1>}
            <div>
                <Line data={data} options={options} />
            </div>
        </section>
    )
}
