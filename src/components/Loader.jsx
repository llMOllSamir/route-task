import React from 'react'
import style from '../styles/Loader.module.css'
export const Loader = () => {
    return (
        <section className={style.loader}>
            <span></span>
            <h1>Loading...</h1>
        </section>
    )
}
