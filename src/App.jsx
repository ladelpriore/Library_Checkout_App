
import { Routes, Route, Link} from 'react-router-dom';
import { useState } from 'react'; 

import AllBooks from './Components/AllBooks.jsx';   
import SingleBookDetails from './Components/SingleBookDetails.jsx';  
import Homepage from './Components/Homepage.jsx';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem(`token`));

  const logOut = () => {
    localStorage.removeItem(`token`);
    setToken('');
  }

  return (           
    <>      
      <nav>
        <Link to='/Homepage'>Homepage</Link>
        <Link to='/AllBooks'>All Books</Link>
        {
          token ? <button onClick={logOut}>Log Out</button> : null
        }
      </nav>

      <h1>Book Buddy</h1>
      <Routes>
        <Route path="/" element={<AllBooks />} />
        <Route path="/books/:id" element={<SingleBookDetails />} />
        <Route path="/login" element={<UserLoginForm />} />
        <Route path="/register" element={<UserRegistrationForm />} />
      </Routes>
    </>
  )
}

export default App