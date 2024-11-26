import { useState } from "react";

const UserLogInForm = () => {
    const [inputEmail, setInputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState("");


    const userLogIn = async(event) => {       //edit fb, apply books terms
        event.preventDefault();

        const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login'{   
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: inputEmail,
            password: inputPassword 
        }),
        });

        const result = await response.json();
        const accessToken = tokenObj.access_token;
    };

  return (
          <form onSubmit={userLogIn}>
            <input 
              placeholder="email" 
              onChange={(event) => { setInputEmail(event.target.value)}}
            />
            <input 
              placeholder="password" 
              onChange={(event) => { setInputPassword(event.target.value)}}
            />

            <button>Log In</button>
          </form>
        );
      };

export default UserLogInForm;

      