import React, { useCallback, useRef } from 'react'
import debounce from 'lodash.debounce'
import search from '../../assets/img/search.svg'
import styles from './Search.module.scss'
import clear from '../../assets/img/close.png'
import { SearchContext } from '../../App'
import { useContext } from 'react'
import { useState } from 'react'
const Search = () => {
  const [value, setValue] = useState()
  const { searchValue, setSearchValue } = useContext(SearchContext)
  const inputRef = useRef()

  const onClickClear = () => {
    setSearchValue('');
    setValue('')
    inputRef.current.focus();
  }
  const updateSearchValue = useCallback(
    debounce((str) => {
      setSearchValue(str)
    }, 300),
    []
  )

  const onChangeInput = event => {
    setValue(event.target.value)
    updateSearchValue(event.target.value)
  }

  return (
    <div className={styles.root}>
      <img className={styles.img} src={search} height="20px" alt="Поиск" />
      <input ref={inputRef} value={value} onChange={onChangeInput} className={styles.input} placeholder='Поиск пиццы...' />
      {value && (<img onClick={onClickClear} className={styles.imgClear} src={clear} alt="clear" />)}
    </div>
  )
}

export default Search