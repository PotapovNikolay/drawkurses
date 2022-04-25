import React, {useContext} from "react"
import { GridContext } from "../../../../context/GridContext"

function Nav() {

    const {visibleLeftSide,setVisibleLeftSide, visibleRightSide,setVisibleRightSide } = useContext(GridContext)

    return <div className=" flex flex-row p-5  bg-blue-100 rounded-t-2xl">
        <div className="grow text-3xl font-montserrat font-semibold pl-10 ">
            Все курсы
        </div>
        <div className="flex flex-row self-center   space-x-3">
            <a href="#" className="font-medium ">
                главная
            </a>
            <button onClick={()=>{setVisibleLeftSide(!visibleLeftSide)}} className="font-medium ">
                фильтр
            </button>
            <button onClick={()=>{setVisibleRightSide(!visibleRightSide)}} className="font-medium ">
                профиль
            </button>
        </div>

    </div>

}

export default Nav