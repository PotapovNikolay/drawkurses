import { useState, useEffect, useContext } from "react"
import { auth, db } from "../../../../FireBaseConfig"
import { collection, getDocs, addDoc } from "firebase/firestore"
import {CursesContext, FilterContext, GridContext} from "../../../../context/GridContext"

function Curses() {

    const ndata = [
        {
            "school": "Xyz school",
            "type": "3D",
            "name": "3D-художник по персонажам",
            "cost": "164 500",
            "duration": "11,5 месяцев",
            "professionalism": "Продвинутый",
            "url": "https://www.school-xyz.com/3d-khudozhnik-po-personazham",
            "backcolor": "#264653",
            "textcolor": "black",
            "pic": "https://github.com/PotapovNikolay/DrawCurses/blob/main/XYZ_School.png?raw=true"
        },
        {
            "school": "Xyz school",
            "type": "3D",
            "name": "3D-художник ",
            "cost": "175 000",
            "duration": "14 месяцев",
            "professionalism": "Продвинутый",
            "url": "https://www.school-xyz.com/professional-3d-artist",
            "backcolor": "#2A9D8F",
            "textcolor": "black",
            "pic": "https://github.com/PotapovNikolay/DrawCurses/blob/main/XYZ_School.png?raw=true"
        },
        {
            "school": "Xyz school",
            "type": "3D",
            "name": "3D-художник по оружию",
            "cost": "253 000",
            "duration": "15 месяцев",
            "professionalism": "Профессионал",
            "url": "https://www.school-xyz.com/3d-khudozhnik-po-oruzhiyu",
            "backcolor": "#E76F51",
            "textcolor": "black",
            "pic": "https://github.com/PotapovNikolay/DrawCurses/blob/main/XYZ_School.png?raw=true"
        },
        {
            "school": "Xyz school",
            "type": "3D",
            "name": "CGI-художник по персонажам",
            "cost": "324 588",
            "duration": "29 месяцев",
            "professionalism": "Профессионал",
            "url": "https://www.school-xyz.com/cgi-khudozhnik-po-personazham",
            "backcolor": "#E9C46A",
            "textcolor": "white",
            "pic": "https://github.com/PotapovNikolay/DrawCurses/blob/main/XYZ_School.png?raw=true"
        },
        {
            "school": "Xyz school",
            "type": "2D",
            "name": "Концепт-художник",
            "cost": "289 490",
            "duration": "14 месяцев",
            "professionalism": "Новичек",
            "url": "https://www.school-xyz.com/professional-concept-artist",
            "backcolor": "#f4a261",
            "textcolor": "white",
            "pic": "https://github.com/PotapovNikolay/DrawCurses/blob/main/XYZ_School.png?raw=true"
        },
        {
            "school": "Xyz school",
            "type": "2D",
            "name": "Концепт-Арт с Дмитрием Клюшкиным",
            "cost": "125 638",
            "duration": "6 месяцев",
            "professionalism": "Профессионал",
            "url": "https://www.school-xyz.com/concept-art",
            "backcolor": "#70c1b3",
            "textcolor": "black",
            "pic": "https://github.com/PotapovNikolay/DrawCurses/blob/main/XYZ_School.png?raw=true"
        },
        {
            "school": "Xyz school",
            "type": "2D",
            "name": "Анатомия игровых персонажей",
            "cost": "25 800",
            "duration": "1,5 месяца",
            "professionalism": "Новичек",
            "url": "https://www.school-xyz.com/anatomiya-igrovykh-personazhej",
            "backcolor": "#247ba0",
            "textcolor": "black",
            "pic": "https://github.com/PotapovNikolay/DrawCurses/blob/main/XYZ_School.png?raw=true"
        },
        {
            "school": "Xyz school",
            "type": "2D",
            "name": "Основы иллюстрации ",
            "cost": "125 638",
            "duration": "6 месяцев",
            "professionalism": "Новичек",
            "url": "https://www.school-xyz.com/osnovy-illyustracii",
            "backcolor": "#3d405b",
            "textcolor": "white",
            "pic": "https://github.com/PotapovNikolay/DrawCurses/blob/main/XYZ_School.png?raw=true"
        },
        {
            "school": "Xyz school",
            "type": "2D",
            "name": "Concept Art",
            "cost": "107 071",
            "duration": "5 месяцев",
            "professionalism": "Новичек",
            "url": "https://www.school-xyz.com/conceptart",
            "backcolor": "#e07a5f",
            "textcolor": "white",
            "pic": "https://github.com/PotapovNikolay/DrawCurses/blob/main/XYZ_School.png?raw=true"
        },
        {
            "school": "Smirnov school",
            "type": "2D",
            "name": "Основы CG рисунка",
            "cost": "11 500",
            "duration": "2,5 недели",
            "professionalism": "Новичек",
            "url": "https://smirnovschool.com/cgb",
            "backcolor": "#9d4edd",
            "textcolor": "white",
            "pic": "https://github.com/PotapovNikolay/DrawCurses/blob/main/Smirnovlogo.png?raw=true"
        },
        {
            "school": "Smirnov school",
            "type": "2D",
            "name": "Основы создания персонажей",
            "cost": "23 500",
            "duration": "1 месяц",
            "professionalism": "Новичек",
            "url": "https://smirnovschool.com/chb",
            "backcolor": "#264653",
            "textcolor": "black",
            "pic": "https://github.com/PotapovNikolay/DrawCurses/blob/main/Smirnovlogo.png?raw=true"
        },
        {
            "school": "Smirnov school",
            "type": "2D",
            "name": "Основы создания окружения",
            "cost": "23 500",
            "duration": "1 месяц",
            "professionalism": "Новичек",
            "url": "https://smirnovschool.com/enb",
            "backcolor": "#2A9D8F",
            "textcolor": "black",
            "pic": "https://github.com/PotapovNikolay/DrawCurses/blob/main/Smirnovlogo.png?raw=true"
        },
        {
            "school": "Smirnov school",
            "type": "3D",
            "name": "3D персонаж",
            "cost": "35 000",
            "duration": "1,5 месяца",
            "professionalism": "Новичек",
            "url": "https://smirnovschool.com/3dc",
            "backcolor": "#E76F51",
            "textcolor": "black",
            "pic": "https://github.com/PotapovNikolay/DrawCurses/blob/main/Smirnovlogo.png?raw=true"
        },
        {
            "school": "Smirnov school",
            "type": "3D",
            "name": "Основы Blender",
            "cost": "17 000",
            "duration": "4 недели",
            "professionalism": "Новичек",
            "url": "https://smirnovschool.com/bb",
            "backcolor": "#E9C46A",
            "textcolor": "white",
            "pic": "https://github.com/PotapovNikolay/DrawCurses/blob/main/Smirnovlogo.png?raw=true"
        },
        {
            "school": "Smirnov school",
            "type": "2D",
            "name": "Концепт-арт персонажей",
            "cost": "50 000",
            "duration": "3,5 месяца",
            "professionalism": "Продвинутый",
            "url": "https://smirnovschool.com/chca",
            "backcolor": "#f4a261",
            "textcolor": "white",
            "pic": "https://github.com/PotapovNikolay/DrawCurses/blob/main/Smirnovlogo.png?raw=true"
        },
        {
            "school": "Smirnov school",
            "type": "2D",
            "name": "Концепт-арт окружения",
            "cost": "52 000",
            "duration": "3,5 месяца",
            "professionalism": "Продвинутый",
            "url": "https://smirnovschool.com/eca",
            "backcolor": "#70c1b3",
            "textcolor": "black",
            "pic": "https://github.com/PotapovNikolay/DrawCurses/blob/main/Smirnovlogo.png?raw=true"
        },
        {
            "school": "Skillbox",
            "type": "2D",
            "name": "Коммерческий иллюстратор",
            "cost": "360 000",
            "duration": "16 месяцев",
            "professionalism": "Новичек",
            "url": "https://skillbox.ru/course/profession-commercial-illustrator-2/",
            "backcolor": "#247ba0",
            "textcolor": "black",
            "pic": "https://github.com/PotapovNikolay/DrawCurses/blob/main/skillbox.png?raw=true"
        },
        {
            "school": "Skillbox",
            "type": "2D",
            "name": "2D-художник",
            "cost": "300 000",
            "duration": "12 месяцев",
            "professionalism": "Новичек",
            "url": "https://skillbox.ru/course/profession-2d-artist/",
            "backcolor": "#3d405b",
            "textcolor": "white",
            "pic": "https://github.com/PotapovNikolay/DrawCurses/blob/main/skillbox.png?raw=true"
        },
        {
            "school": "Skillbox",
            "type": "2D",
            "name": "Концепт-художник с нуля до PRO",
            "cost": "310 000",
            "duration": "20 месяцев",
            "professionalism": "Новичек",
            "url": "https://skillbox.ru/course/profession-concept-art-pro/",
            "backcolor": "#e07a5f",
            "textcolor": "white",
            "pic": "https://github.com/PotapovNikolay/DrawCurses/blob/main/skillbox.png?raw=true"
        },
        {
            "school": "Skillbox",
            "type": "3D",
            "name": "3D-художник",
            "cost": "144 000",
            "duration": "12 месяцев",
            "professionalism": "Новичек",
            "url": "https://skillbox.ru/course/3d-artist/",
            "backcolor": "#9d4edd",
            "textcolor": "white",
            "pic": "https://github.com/PotapovNikolay/DrawCurses/blob/main/skillbox.png?raw=true"
        },
        {
            "school": "SkillFactory",
            "type": "3D",
            "name": "3D Artist",
            "cost": "158 000",
            "duration": "15 месяцев",
            "professionalism": "Новичек",
            "url": "https://contented.ru/edu/3d-artist?utm_source=skillfactory",
            "backcolor": "#264653",
            "textcolor": "black",
            "pic": ""
        }
    ]
    const {filter, setFilter} = useContext(FilterContext)
    const { curses, setCurses } = useContext(CursesContext)
    const { visibleLeftSide, setVisibleLeftSide, visibleRightSide, setVisibleRightSide } = useContext(GridContext)

    const dataCollectionRef = collection(db, "curses");

    const [data, setdata] = useState([])

    useEffect(() => {
        const getData = async () => {
            const data = await getDocs(dataCollectionRef);
            setCurses(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }
        getData();
    }, []);
    return <div className={visibleLeftSide & visibleRightSide ?"grid grid-cols-2 gap-3 ":"grid grid-cols-3 gap-3 "}>
        {curses.filter(function (item){

            if(filter.type==="")
            {
                return item
            }
            else if(filter.type===item.type) {
                return item
            }

        }).filter(function (item){
            if (parseInt(item.cost.replace(/\s+/g, ''))>filter.cost[0] && parseInt(item.cost.replace(/\s+/g, '')) < filter.cost[1]){
                return item
            }
        }).filter(function (item){
            if (filter.duration.length==0){
                return item
            }
        // .split(' ')[0]
            else if((filter.duration.includes("месяц")
                && (item.duration.includes("недел") || (item.duration.includes("месяц") && parseFloat(item.duration)<1.5)))

                ||(filter.duration.includes("пол года") && (item.duration.includes("месяц") && parseFloat(item.duration)<6.0))

            ||(filter.duration.includes("год") && (item.duration.includes("месяц") && parseFloat(item.duration)<12.0) )

                ||(filter.duration.includes("2 года") && (item.duration.includes("месяц") && parseFloat(item.duration)<30.0))){
                return item
            }
        }).filter(function (item){
            if (filter.professionalism.length===0){
                return item
            }
            else if(filter.professionalism.includes(item.professionalism)){
                return item
            }
        }).filter(function (item){
            if(filter.designPerson===false){
                return item
            }
            else if(item.name.includes("ерсон") && filter.designPerson===true){
                return item
            }
        }).filter(function (item){
            if(filter.designPlane===false){
                return item
            }
            else if(item.name.includes("окруж") && filter.designPlane===true){
                return item
            }
        }).filter(function (item){
            if(filter.lightColor===false){
                return item
            }
            else if(item.name.includes("свет") && filter.lightColor===true){
                return item
            }
        }).map((curs,index) => {

            return <div key={index} style={{backgroundColor:curs.backcolor}} className={'rounded-xl  text-white relative px-8'} >
                
                <div className="flex flex-row justify-start py-5 items-center space-x-5">
                    <div className="">
                        <img src={curs.pic} alt=" " className="w-10 h-10" />
                    </div>
                    <div className="flex flex-row justify-between grow self-start text-sm">
                        <div className="flex flex-col  grow">
                            <div className="font-medium text-lg mb-3">{curs.name}</div>
                            <div className="flex flex-row justify-between ">
                                <div>Школа</div>
                                <div>{curs.school}</div>
                            </div>
                            <div className="flex flex-row justify-between ">
                                <div>Время</div>
                                <div>{curs.duration}</div>
                            </div>
                            <div className="flex flex-row justify-between ">
                                <div>Цена</div>
                                <div>{curs.cost} Р</div>
                            </div>
                        </div>
                        
                        <button style={{ color: curs.backcolor}} className="bg-white rounded-xl h-8 w-8 text-3xl font-semibold relative">
                            +
                    </button>
                    </div>
                    
                </div>
                <div className="  border-white border-b-2">

                </div>
                <div className="flex flex-row justify-center py-2">
                    <a target="_blank" href={curs.url} >подробнее</a>
                </div>
            </div>
        })}
    </div>
}

export default Curses