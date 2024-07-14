import React, { useRef } from 'react'
import style from '../styles/Home.module.css'
export const Filtration = ({ filter = () => { } }) => {
  const ref = useRef(null)
  const onChanged = () => {
    const data = new FormData(ref.current)
    const search = data.get('search')
    const amount = data.get('amount')

    filter({ name: search, amount })
  }
  return (
    <form ref={ref} className={style.form} onChange={onChanged}>
      <input name="search" type="text" placeholder="Search By Name..." />
      <input name="amount" type="number" placeholder="Search By Amount..." />
    </form>
  )
}
