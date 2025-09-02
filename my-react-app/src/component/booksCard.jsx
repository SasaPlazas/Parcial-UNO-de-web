import { useState, useEffect} from 'react'


function BooksCard({book}) {

  const [add, setAdd] = useState('')

  //  const handleClick = () => {
  //     setAdd()
  //   }

  

  return (
    <>
    <div className='books-card'>
      <p>{book.title}</p>
      <p>{book.author_name}</p>
      <p>{book.first_publish_year}</p>
      <button>add</button>
    </div>
    
    </>
  )
}

export default BooksCard
