import { useState, useEffect} from 'react'
import BooksCard from './booksCard'

function ListCard({books}) {
  

  return (
    <>
        {books.map((book) => 
        <BooksCard book={book} key={book.key}/>)}
    </>
  )
}

export default ListCard
