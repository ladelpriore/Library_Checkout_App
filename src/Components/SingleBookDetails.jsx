import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const SingleBook = ({ token }) => {      
  const [selectedBook, setSelectedBook] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {        
    const getBook = async() => {
      const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${id}`) 
      const book = await response.json();
      setSelectedBook(book);
    }

    getBook()
  }, []);

  const checkoutBook = async() => {       
    await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${id}`) , {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

  return (
    <>
      {
        selectedProduct.images ? 
          <img 
            src={selectedBook.images[0].slice(2, -2)} 
            alt={`A beautiful ${selectedBook.title}`}
            height="300"
            width="300" 
          /> : 
          null
      }

      <h2>{selectedBook.title}</h2>
      <h2>Price: ${selectedBook.price}</h2>

      <p>{selectedBook.description}</p>

      {
        token ? <button onClick={ checkoutBook }>Get Book!</button> : null
      }
      
    </>
    
  )
}

export default SingleBook;