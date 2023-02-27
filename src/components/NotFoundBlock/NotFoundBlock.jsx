import React from 'react'
import classes from './NotFoundBlock.module.scss'
import MyButton from '../UI/MyButton/MyButton'
import { Link } from 'react-router-dom'
const NotFoundBlock = () => {
  return (
    <div className={classes.root}>
      <h1 >Ничего не найдено :(</h1>
      <p className={classes.description}>К сожалению данная страница отсутсвует на нашем сайте</p>
      <Link to="/"><MyButton >Назад</MyButton></Link>
    </div>

  )
}

export default NotFoundBlock