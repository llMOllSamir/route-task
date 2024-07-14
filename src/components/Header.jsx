import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import style from '../styles/Header.module.css'
export const Header = () => {
    const navigate = useNavigate()

    return (
        <header className={style.header}>
            <h2 onClick={() => navigate('/')}>Transactions</h2>
            <nav>
                <NavLink to='/'>Home</NavLink>
            </nav>
        </header>
    )
}
