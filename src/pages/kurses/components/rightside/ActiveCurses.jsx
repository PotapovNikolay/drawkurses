import {collection, getDoc, getDocs} from "firebase/firestore";
import {db} from "../../../../FireBaseConfig";
import {useContext, useEffect, useState} from "react";
import {CursesContext, DataBaseContext, UserContext} from "../../../../context/GridContext";

function ActiveCurses() {

    const {users, user} = useContext(UserContext)
    const {curses, favorite} = useContext(DataBaseContext)
    const [favCurses, setFavCurses] = useState([])

    const favoriteCollectionRef = collection(db, "favorite")

    const currentUser = users.find(x => x.Email === user.email)
    const favoriteCurses = favorite.filter(x => x.User === currentUser.id).map((item) => item.Curs)


    return <div className="flex flex-col space-y-5">
        <div className="text-2xl font-medium">
            Добавленные курсы
        </div>
        <div className="flex flex-col space-y-4">

            {curses.filter(x => favoriteCurses.includes(x.id)).map((item, index) => {
                return <div key={index}>{item.name}</div>
            })}

        </div>
    </div>
}

export default ActiveCurses
