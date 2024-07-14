import React from 'react'
import { useNavigate } from 'react-router-dom'
import style from "../styles/NotFound.module.css"
export const NotFound = () => {
    const navigate = useNavigate()
    return (
        <section className={style.section}>
            <h1>This Page Not Found</h1>
            <h2>404</h2>
            <button className={style.btn} onClick={() => navigate('/')}>Go Home</button>
        </section>
    )
}
