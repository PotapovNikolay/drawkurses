import Curses from "./Curses"
import Nav from "./Nav"

function CenterSide(){
    // h-[40rem]
    return<div id="journal-scroll" className=" space-y-5 overflow-y-scroll  relative h-[40rem] rounded-2xl">
        <div className={" "}>
            <Nav/>
        </div>
        <div>
            <Curses/>
        </div>
    </div>

}

export default CenterSide