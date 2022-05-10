import { useState,useContext } from "react"
import ActiveCurses from "./ActiveCurses"
import Registration from "./auth/Registration"
import Profile from "./Profile"
import {onAuthStateChanged} from "firebase/auth" 
import { auth, db } from "../../../../FireBaseConfig"
import { UserContext } from "../../../../context/GridContext"

function RightSide() {


    const{user, setUser} = useContext(UserContext)



    return <div className="flex flex-col mx-6 mt-3 space-y-10 ">
        {user ? <div>
            <Profile />
        </div> :
            <div>
                <Registration user={user} setUser={setUser} />
            </div>
        }
        {user ?
            <div>
                <ActiveCurses />
            </div> : null
        }

        <div>

        </div>
    </div>

}




export default RightSide