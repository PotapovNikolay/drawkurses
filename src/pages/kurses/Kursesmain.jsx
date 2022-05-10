import React, {useState, useContext, useEffect} from "react";
import CenterSide from "./components/centerside/CenterSide";
import LeftSide from "./components/leftside/LeftSide";
import RightSide from "./components/rightside/RightSide";
import {
    GridContext,
    UserContext,
    CursesContext,
    FilterContext,
    DataBaseContext
} from "../../context/GridContext"
import {onAuthStateChanged} from "firebase/auth"
import {auth, db} from "../../FireBaseConfig"
import {collection, getDocs} from "firebase/firestore";

function KursesMain() {

    const [visibleLeftSide, setVisibleLeftSide] = useState(false)
    const [visibleRightSide, setVisibleRightSide] = useState(false)
    const [users, setUsers] = useState([]);
    const [updateDB, setUpdateDB] = useState(false)
    const [favorite, setFavorite] = useState([]);
    const [curses, setCurses] = useState([]);
    const [user, setUser] = useState({})
    // const [favCurses, setFavCurses] = useState(false)
    const [filter, setFilter] = useState({
        type: "",
        duration: [],
        cost: [10000, 360000],
        professionalism: [],
        designPerson: false,
        designPlane: false,
        lightColor: false
    });

    //useStateFilter
    useEffect(()=>{
        const data = localStorage.getItem('filter')
        if(data){
            const data1 = JSON.parse(data)
            setFilter(data1[0])
        }
    },[])

    useEffect(()=>{
        localStorage.setItem('filter', JSON.stringify([filter]))
    },[filter])


    useEffect(function setVisibleSide(){
        const left = localStorage.getItem('leftSide')
        const right = localStorage.getItem('rightSide')
        if (left){
            setVisibleLeftSide(JSON.parse(left))
        }
        if (right){
            setVisibleRightSide(JSON.parse(right))
        }
    },[])

    useEffect(function visibleSide () {
        localStorage.setItem('leftSide', JSON.stringify(visibleLeftSide))
        localStorage.setItem('rightSide', JSON.stringify(visibleRightSide))
    },[visibleLeftSide,visibleRightSide])


    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    })
    // user, favorite
    const favoriteCollectionRef = collection(db,"favorite")
    const dataCollectionRef = collection(db, "curses");
    const usersCollectionRef = collection(db, "users");

    useEffect(() => {
        const getData = async () => {

            const dataCurses = await getDocs(dataCollectionRef);
            setCurses(dataCurses.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

            const dataUsers = await getDocs(usersCollectionRef);
            setUsers(dataUsers.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

            const dataFavorite = await getDocs(favoriteCollectionRef);
            setFavorite(dataFavorite.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }
        getData();
    }, [updateDB]);
    console.log('uss',users)
    // useEffect(()=>{
    //     const user = localStorage.getItem('user')
    //     const curses = localStorage.getItem('curses')
    //     const favorite = localStorage.getItem('favorite')
    //     if(user){
    //         setUser(JSON.parse(user))
    //     }
    //     if(curses){
    //         setUser(JSON.parse(curses))
    //     }
    //     if(favorite){
    //         setUser(JSON.parse(favorite))
    //     }
    // },[])
    //
    // useEffect(()=>{
    //     localStorage.setItem('user', JSON.stringify([user]))
    //     localStorage.setItem('curses', JSON.stringify([curses]))
    //     localStorage.setItem('favorite', JSON.stringify([favorite]))
    // },[user, curses, favorite])

    // console.log("f",favorite)
    // console.log(user)
    // console.log("c",curses)
    // console.log(updateDB)
    return <GridContext.Provider value={{visibleLeftSide, setVisibleLeftSide, visibleRightSide, setVisibleRightSide}}>
        <UserContext.Provider value={{user, setUser, users, setUsers}}>
            <DataBaseContext.Provider value={{curses,favorite, updateDB, setUpdateDB}}>
            {/*<CursesContext.Provider value={{curses, setCurses}}>*/}
                <FilterContext.Provider value={{filter, setFilter}}>
                    <div className="grid grid-cols-12  my-10  " >
                        {visibleLeftSide ?
                            <div className="col-span-2 animate-leftside self-start ">
                                <LeftSide/>
                            </div> : null
                        }
                        <div className={visibleLeftSide && visibleRightSide ? "col-span-7 " :
                            visibleLeftSide && !visibleRightSide ? "col-span-10 mr-5  " :
                                !visibleLeftSide && visibleRightSide ? "col-span-9 ml-5" : "col-span-12 mx-5 "}>
                            <div className="bg-blue-100 rounded-2xl ">
                                <CenterSide/>
                            </div>
                        </div>

                        {visibleRightSide ?
                            <div className="col-span-3  animate-rightside ">
                                <RightSide/>
                            </div>
                            : null
                        }
                    </div>
                    <div className={'bg-black flex flex-row justify-center py-12 text-lg text-white font-medium'}>
                        <div>
                            © Мария Куценко
                        </div>
                    </div>
                </FilterContext.Provider>
            </DataBaseContext.Provider>
        </UserContext.Provider>

    </GridContext.Provider>
}

export default KursesMain