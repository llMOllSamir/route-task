import React, { useContext, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Header } from '../components/Header'
import { ApiContext } from '../context/ApiProvider'

const Layout = () => {
    const { pathname } = useLocation()
    const { fetchData } = useContext(ApiContext)
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Layout