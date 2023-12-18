import { createContext } from "react";
import { useState } from "react";



export const UserContext = createContext({});

export function UserContextProvider({children}){

    const [loginData, setloginData] = useState({});

    function RegisterUser(username, password, email, repasword){
        console.log('Registering...Checking API');
        
        const data = {
            dataUsername : username,
            dataPassword : password,
            dataEmail: email,
            dataRepasword: repasword
        }

        fetch('http://localhost:3005/register', {
            headers:{
                'Content-type':"application/json"
            },
            method: "POST",
            body: JSON.stringify({
                username: data.dataUsername,
                password: data.dataPassword,
                email: data.dataEmail,
                repasword: data.dataRepasword
            }),
        })
        .then((res) => res.json())
        .then((data) => {
            setloginData(data)
        });
    }

    const value ={
        RegisterUser,
        loginData

    }

    return(
        <UserContext.Provider value={value}>
         {children}
        </UserContext.Provider>
    )
    
}