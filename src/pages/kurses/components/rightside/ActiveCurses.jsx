import {collection, getDoc, getDocs, deleteDoc, doc} from "firebase/firestore";
import {db} from "../../../../FireBaseConfig";
import {useContext, useEffect, useState} from "react";
import {CursesContext, DataBaseContext, UserContext} from "../../../../context/GridContext";

function ActiveCurses() {

    const {users, user} = useContext(UserContext)
    const {curses, favorite, updateDB, setUpdateDB} = useContext(DataBaseContext)

    const currentUser = user?users.find(x => x.Email === user.email):null
    const favoriteCurses = currentUser?favorite.filter(x => x.User === currentUser.id).map((item) => item.Curs):null

    const delFromActive = async (id) => {
        const favDoc = doc(db, "favorite", favorite.find(x => x.Curs === id).id)
        setUpdateDB(!updateDB)
        await deleteDoc(favDoc)
    }
    console.log(favoriteCurses)
    return <div className="flex flex-col space-y-3">
        <div className="text-2xl font-medium">
            Добавленные курсы
        </div>
        <div className="flex flex-col space-y-2">
            {
                favoriteCurses!==null && favoriteCurses.length!==0? curses.filter(x => favoriteCurses.includes(x.id)).map((item, index) => {
                    return <div key={index} className={'flex flex-row justify-between py-2 rounded-xl '}>
                        <div className={'flex flex-row space-x-3'}>

                            <div style={{backgroundColor: item.backcolor}} className={'self-center rounded-xl p-1.5 basis-1/6'}>
                                <img className={'p-1 '} src={item.pic} alt={" "}/>
                            </div>
                            <div className={'flex flex-col basis-4/6'}>
                                <div className={'flex flex-row space-x-2 justify-between'}>
                                    <div>
                                        <a target="_blank" href={item.url} className={'self-start font-medium text-xl '} >{item.name}</a>
                                    </div>
                                    <button onClick={() => delFromActive(item.id)} className={'text-xs self-center '}>
                                        удалить
                                    </button>
                                </div>

                                <div>{item.school}</div>
                            </div>
                        </div>

                        {/*<button  onClick={() => delFromActive(item.id)}*/}
                        {/*        className={' h-5 w-5 text-2xl font-medium rounded-xl self-center'}>*/}
                        {/*    -*/}
                        {/*</button>*/}
                    </div>
                }):<div>У вас пока не добавлены курсы</div>
            }

        </div>
    </div>
}

export default ActiveCurses
