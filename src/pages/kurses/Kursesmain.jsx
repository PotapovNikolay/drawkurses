import React, {useState, useContext, useEffect} from "react";
import CenterSide from "./components/centerside/CenterSide";
import LeftSide from "./components/leftside/LeftSide";
import RightSide from "./components/rightside/RightSide";
import {GridContext, UserContext, CursesContext, FilterContext} from "../../context/GridContext"
import {onAuthStateChanged} from "firebase/auth"
import {auth, db} from "../../FireBaseConfig"
import {duration} from "@mui/material";
import {getDocs} from "firebase/firestore";

function KursesMain() {

    const [visibleLeftSide, setVisibleLeftSide] = useState(false)
    const [visibleRightSide, setVisibleRightSide] = useState(false)
    const [users, setUsers] = useState([]);
    const [curses, setCurses] = useState([]);
    const [user, setUser] = useState({})

    const [filter, setFilter] = useState({
        type: "",
        duration: [],
        cost: [10000, 360000],
        professionalism: [],
        designPerson: false,
        designPlane: false,
        lightColor: false
    });

    useEffect(()=>{
        const data = localStorage.getItem('filter')
        if(data){
            const data1 = JSON.parse(data)
            // console.log(data1[0])
            setFilter(data1[0])
        }
    },[])

    useEffect(()=>{
        localStorage.setItem('filter', JSON.stringify([filter]))
    },[filter])

    // useEffect(()=>{
    //     const visibleLeftSide = localStorage.getItem('visibleLeftSide')
    //     const visibleRightSide = localStorage.getItem('visibleRightSide')
    //     if(visibleLeftSide){
    //         setVisibleLeftSide(JSON.parse(visibleLeftSide))
    //     }
    //     else if(visibleRightSide){
    //         setVisibleRightSide(JSON.parse(visibleRightSide))
    //     }
    // })
    //
    // useEffect(()=>{
    //     localStorage.setItem('visibleLeftSide', JSON.stringify(visibleLeftSide))
    // },[visibleLeftSide])
    // useEffect(()=>{
    //     localStorage.setItem('visibleRightSide', JSON.stringify(visibleRightSide))
    // },[visibleRightSide])

    // const [filter, setFilter] = useState(()=>{
    //     const saved = localStorage.getItem('filter')
    //     const initialValue = JSON.parse(saved)
    //     return initialValue || "";
    // })
    // useEffect(() => {
    //     const getFilter = async () => {
    //         const sfilter = filter
    //         setFilter(sfilter)
    //     }
    //     getFilter()
    // }, []);
    // const {status} = filter
    // console.log(JSON.stringify(filter))
    // useEffect(function (){
    //     localStorage.setItem('filter',JSON.stringify({
    //         type: "",
    //         duration: [],
    //         cost: [10000, 360000],
    //         professionalism: [],
    //         designPerson: false,
    //         designPlane: false,
    //         lightColor: false
    //     }))
    //     // console.log(filter)
    // },[filter])

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    })

    return <GridContext.Provider value={{visibleLeftSide, setVisibleLeftSide, visibleRightSide, setVisibleRightSide}}>
        <UserContext.Provider value={{user, setUser, users, setUsers}}>
            <CursesContext.Provider value={{curses, setCurses}}>
                <FilterContext.Provider value={{filter, setFilter}}>
                    <div className="grid grid-cols-12  h-[40rem]  mt-10 ">
                        {visibleLeftSide ?
                            <div className="col-span-2 animate-leftside place-self-center ">
                                <LeftSide/>
                            </div> : null
                        }
                        <div className={visibleLeftSide & visibleRightSide ? "col-span-7 " :
                            visibleLeftSide & !visibleRightSide ? "col-span-10 mr-5" :
                                !visibleLeftSide & visibleRightSide ? "col-span-9 ml-5" : "col-span-12 mx-5 "}>
                            <div className="bg-blue-100 rounded-2xl ">

                                <CenterSide/>
                            </div>
                        </div>

                        {visibleRightSide ?
                            <div className="col-span-3 ">
                                <RightSide/>
                            </div>
                            : null
                        }
                    </div>
                </FilterContext.Provider>
            </CursesContext.Provider>
        </UserContext.Provider>

    </GridContext.Provider>
}

export default KursesMain