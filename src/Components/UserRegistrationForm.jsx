import { useState } from 'react';       //fb, too long, MOVE ROUTES, LOGIN PAGE, REGISTRATION PAGE!!    

const UserRegistrationForm = () => {            //CHANGE RIGESTERUSER COMPONENT name: RegisterForm?
  const [inputFirstName, setInputFirstName] = useState('');
  const [inputLastName, setInputLastName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const userRegistration = async(event) => {              //IS THIS TO ADD NEW PRODUCT/BOOK TITLES? iF SO, WHERE DOES THAT GO?
    event.preventDefault();
    await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register', {      
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        firstname: inputFirstName,
        lastname: inputLastName,
        email: inputEmail,
        password: inputPassword,
      })
    });



    const tokenObj = await response.json();     
    const accessToken = tokenObj.access_token;
    setToken(accessToken);
    localStorage.setItem('token', accessToken);
    };


  return (                                       
      <form onSubmit={userRegistration}>      
        <input 
          type="text"
          value={inputFirstName}
          onChange={(event) => { setInputFirstName(event.target.value) }}
          placeholder="First Name"
        />
        <input 
            type="text"
            value={inputLastName}
            onChange={(event) => { setInputLastName(event.target.value) }}
            placeholder="Last Name"
        />
        <input 
            type="text"
            value={inputEmail}
            onChange={(event) => { setInputEmail(event.target.value) }}
            placeholder="Email"
        />
        <input 
            type="text"
            value={inputPassword}
            onChange={(event) => { setInputPassword(event.target.value) }}
            placeholder="Password"
        />
        <button>Submit</button>
      </form>
  );
};

export default UserRegistrationForm;       