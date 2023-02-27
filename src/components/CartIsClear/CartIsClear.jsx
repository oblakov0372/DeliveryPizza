import React from 'react'
import { Link } from 'react-router-dom'
import emptyCart from '../../assets/img/empty-cart.png'
import CartItem from '../CartItem'
import MyButton from '../UI/MyButton/MyButton'
import classes from './CartIsClear.module.scss'
const CartIsClear = () => {
  return (
    <div className={classes.root}>
      <img src={emptyCart} width='300px' alt="Корзина Пустая" />
      <h1>Корзина Пуста!</h1>
      <Link to="/"><MyButton >Назад</MyButton></Link>
    </div>
  )
}

export default CartIsClear