import Curses from "./Curses"
import Nav from "./Nav"

function CenterSide(){

    return<div id="journal-scroll" className="flex flex-col p-5 space-y-5 h-[40rem] overflow-y-scroll ">
        <div>
            <Nav/>
        </div>
        <div>
            <Curses/>
        </div>
    </div>

}

export default CenterSide