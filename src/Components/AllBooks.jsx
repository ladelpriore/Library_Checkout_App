import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const AllBooks = () => {     
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {    
    const getBooks = async() => {
      const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books`);
      const allBooks = await response.json();
      setBooks(allBooks);
    }

    getBooks();
  }, []);

  return (     
    <section id="all-books">
      {
        books.map((singleBook) => {
          return (
            // <Link to={`/products/${singleProduct.id}`} key={singleProduct.id}></Link>
            <section onClick={() => { navigate(`/books/${singleBook.id}`) }} key={singleBook.id}>
              <img 
                src={singleBook.images[0].slice(2, -2)} // {singleProduct.images[0]} 
                alt={`A beautiful ${singleBook.title}`}
                height="250"
                width="250"
              />

              <h2>{singleBook.title}</h2>
            </section>
          ) 
        })
      }
    </section>
  )
}

export default AllBooks;