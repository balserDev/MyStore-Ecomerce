import { createContext } from "react";
import { useState } from "react";



export const UserContext = createContext({});

export function UserContextProvider({children}){

    const [loginData, setloginData] = useState({});
    const [userData, setUserData] = useState({loged:false, data:{}});

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

    function LoginUser(email, password){
        console.log('Registering...Checking API');
        
        const data = {
            dataPassword : password,
            dataEmail: email,
        }

        fetch('http://localhost:3005/login', {
            headers:{
                'Content-type':"application/json"
            },
            method: "POST",
            body: JSON.stringify({
                password: data.dataPassword,
                email: data.dataEmail
            }),
        })
        .then((res) => res.json())
        .then((data) => {
            setUserData(data)
        });
    }

    function LogOut(){
        setUserData({loged:false, data:{}})
    }
    const value ={
        RegisterUser,
        loginData,
        userData,
        LoginUser,
        LogOut
    }

    return(
        <UserContext.Provider value={value}>
         {children}
        </UserContext.Provider>
    )
    
}