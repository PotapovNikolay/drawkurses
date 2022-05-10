import Curses from "./Curses"
import Nav from "./Nav"

function CenterSide(){
    // h-[40rem]
    return<div className=" space-y-5    rounded-2xl pb-5">
        <div className={" sticky top-0 z-50"}>
            <Nav/>
        </div>
        <div className={'relative'} >
            <Curses/>
        </div>
    </div>

}

export default CenterSide