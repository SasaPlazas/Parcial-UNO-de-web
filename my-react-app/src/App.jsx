import { useState, useEffect } from 'react'
import ListCard from './component/cardList';

function App() {

    const [search, setSearch] = useState('');
    const [button, setButton] =useState('');
    const [books, setBooks] =useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState(true);

    const sendSearch = async (e) => {
        e.preventDefault();
       try {
        const data = await fetch(` https://openlibrary.org/search.json?q=${search}&limit=10`).then((res) => res.json());
        setBooks(data.docs);
      } catch (error) {
        setError(error);}
      //  finally {
      //   setLoading(false); 
      }
console.log(books);

  // if(error) return <p>error: {error}</p>
  // if(loading) return <p>loading</p>
  // if(result) return books


  return (
    <>
      <form onSubmit={(e) => sendSearch(e)}>
            <input
            onChange={(e) => setSearch(e.target.value)}
            placeholder="search a book"
            value={search}  
            />
            <button type='submit'>Search</button>
        </form>



    <ListCard books ={books}/>
    </>
  )
}

export default App
