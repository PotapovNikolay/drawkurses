import React, { useContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { auth, db } from "../../../../../FireBaseConfig"
import { collection, getDocs, addDoc } from "firebase/firestore"
import { UserContext } from "../../../../../context/GridContext"
// import {data} from "../../../../../data"

function Registration(props) {

    

    const{users, setUsers} = useContext(UserContext)

    const [newName, setNewName] = useState("")
    const [newSername, setNewSername] = useState("")
    const [registerEmail, setRegisterEmail] = useState("")
    const [registerPassword, setRegisterPassword] = useState("")
    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    
    const usersCollectionRef = collection(db, "users");

    
    

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }
        getUsers();
    }, []);
    

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
        }
        catch (error) {
            console.log(error.message)
        }

    }

    const createUser = async () => {
        register()

        await addDoc(usersCollectionRef, { Name: newName, Sername: newSername, Email: registerEmail })
    }

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
            props.setLog(!props.Log)
        }
        catch (error) {
            console.log(error.message)
        }
    }
    // const logout = async () => {
    //     await signOut(auth)
    // }


    return <div className="flex flex-col">
        <div >
            Для просмотра профиля и активных курсов войдите
        </div>
        
        <div className="flex flex-col text-sm space-y-3">
            <div className="flex flex-col">
                <label for="Email">Почта</label>
                <input
                id="Email"
                type="email" 
                onChange={(event) => { setLoginEmail(event.target.value) }} 
                className="bg-blue-50 focus:outline-none focus:ring-none rounded-lg w-8/12 py-1 pl-5 caret-blue-800" />
            </div>
            <div className="flex flex-col">
                <label for="Password">Пароль</label>    
                <input 
                id="Password"
                type="password"
                onChange={(event) => { setLoginPassword(event.target.value) }} 
                className="bg-blue-50 focus:outline-none focus:ring-none rounded-lg w-8/12 py-1 pl-5 caret-blue-800" />
                
            </div>
            <button onClick={login} className="bg-blue-700 text-white rounded-lg py-1 w-8/12">Войти</button>
        </div>

        <div>
            Или зарегистрируйтесь
        </div>

        <div className="flex flex-col text-sm space-y-3">
            <div className="flex flex-col">
                <label for="Name">Имя</label>
                <input type="text" id="Name" onChange={(event) => { setNewName(event.target.value); }} className="bg-blue-50 rounded-lg focus:outline-none focus:ring-none w-8/12 py-1 pl-5 caret-blue-800" />

            </div>
            <div className="flex flex-col">
                <label for="Name">Фамилия</label>
                <input type="text" id="Sername" onChange={(event) => { setNewSername(event.target.value); }} className="bg-blue-50 focus:outline-none focus:ring-none rounded-lg w-8/12 py-1 pl-5 caret-blue-800" />

            </div>
            <div className="flex flex-col">
                <label for="Email">Почта</label>
                <input
                    id="Email"
                    type="email"
                    onChange={(event) => { setRegisterEmail(event.target.value); }}
                    placeholder="email"
                    className="bg-blue-50 focus:outline-none focus:ring-none rounded-lg w-8/12 py-1 pl-5 caret-blue-800" />

            </div>
            <div className="flex flex-col">
                <label for="Password">Пароль</label>
                <input
                    id="Password"
                    type="password"
                    onChange={(event) => { setRegisterPassword(event.target.value); }}
                    placeholder="password"
                    className="bg-blue-50 focus:outline-none focus:ring-none rounded-lg w-8/12 py-1 pl-5 caret-blue-800" />


            </div>
            <button onClick={createUser} className="bg-blue-700 text-white rounded-lg py-1 w-8/12">Регистрация</button>
        </div>

        
        {/* <div>{user?.email}

        </div> */}

        {/* <button onClick={logout}> выйти</button> */}

        {/* <div>
            {" "}
            {users.map((user1) => {
                if (user.email == user1.Email) {
                    return <div>
                        Name:{user1.Name}<br />
                        Sername:{user1.Sername}<br />
                        Email:{user1.Email}<br />
                        {user1.id}
                    </div>
                }
            }
            )
            }
        </div>
        <br />
        <div>

        </div> */}

    </div>
}

export default Registration