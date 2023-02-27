import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import Categories from "../components/Categories/Categories";
import Sort from "../components/Sort/Sort";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";

import { useEffect, useState } from "react";
import axios from 'axios';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';
import Pagination from '../components/Pagination';
import { useContext } from 'react';
import { SearchContext } from '../App';
import { setCategoryId, setCurrentPage, setSortType, setFilters } from '../redux/slices/filterSlice';
import { setSort } from '../redux/slices/filterSlice';
import { useRef } from 'react';
import { setItems } from '../redux/slices/pizzaSlice';

const Home = () => {
  const categoryId = useSelector(state => state.filter.categoryId)
  const sort = useSelector(state => state.filter.sort)
  const sortType = useSelector(state => state.filter.sortType)
  const currentPage = useSelector(state => state.filter.currentPage);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = useSelector(state => state.pizza.items)
  const listSort = ["rating", "price", "title"];
  // const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const onChangeCategory = id => {
    dispatch(setCategoryId(id))
  }

  const fetchPizzas = () => {
    setIsLoading(true);
    axios.get(`https://632f73e0f5fda801f8d26949.mockapi.io/items?page=${currentPage}&limit=4&sortBy=${listSort[sort]}${sortType ? '&order=desc' : ''}${categoryId !== 0 ? `&category=${categoryId}` : ''}&search=${searchValue}`)
      .then((res => dispatch(setItems(res.data))))
      .finally(() => setIsLoading(false))

  }

  useEffect(() => {
    const params = qs.parse(window.location.search.substring(1));
    dispatch(setFilters(params))
  }, [])

  const { searchValue, setSearchValue } = useContext(SearchContext)
  useEffect(() => {
    window.scroll(0, 0)

    fetchPizzas()

  }, [categoryId, sort, sortType, searchValue, currentPage]);

  useEffect(() => {
    const queryString = qs.stringify({
      categoryId,
      sort,
      currentPage
    })
    navigate(`?${queryString}`)
  }, [categoryId, sort, currentPage])
  const skeletons = [...new Array(6)].map((_, i) => <Skeleton key={i} />)
  const pizzas = items.map((item) => <PizzaBlock key={item.id} {...item} />)


  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeIndex={categoryId}
          setActiveIndex={onChangeCategory}
        />
        <Sort
          active={sort}
          setActive={(i) => dispatch(setSort(i))}
          sortType={sortType}
          setSortType={(prev) => dispatch(setSortType(!prev))}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? skeletons
          : pizzas
        }
      </div>
      <Pagination onChangePage={number => dispatch(setCurrentPage(number))} />
    </div>
  )
}

export default Home