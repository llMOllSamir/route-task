import React from 'react'
import style from "../styles/Home.module.css"
import { useNavigate } from 'react-router-dom'
export const Table = ({ data }) => {
    const navigate = useNavigate()


    const getUserData = (id) => data?.customers?.find(item => item?.id === id)

    return (
        <table className={style.table}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>

                {
                    (data?.customers?.length > 0 && data?.transactions?.length > 0) ?
                        data?.transactions?.map(item => (
                            getUserData(item?.customer_id) && <tr onClick={() => navigate(`/customer/${item?.customer_id}`)} key={item?.id}>
                                <td>{getUserData(item?.customer_id)?.name}</td>
                                <td>{item?.date}</td>
                                <td>{item?.amount}</td>
                            </tr>
                        )) : <tr style={{ textAlign: "center" }}>
                            <td colSpan={3} >
                                No Data</td>
                        </tr>
                }
            </tbody>
        </table >
    )
}
