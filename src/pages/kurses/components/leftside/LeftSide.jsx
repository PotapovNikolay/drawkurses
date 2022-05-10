import React, {useState, useContext, useEffect} from 'react'
import Slider from '@mui/material/Slider';
import {FilterContext} from "../../../../context/GridContext"

import price from "../../../../content/free-icon-ruble-1868089.png"
import time from "../../../../content/free-icon-time-6682770.png"
import cap from "../../../../content/premium-icon-cap-4919658.png"
import feedback from "../../../../content/premium-icon-feedback-4596415.png"

function Switch2D3D() {

    const {filter, setFilter} = useContext(FilterContext)

    function addFilter() {
        if(filter.type===""){
            setFilter({...filter, type: "3D"})
        }
        else if(filter.type==="3D"){
            setFilter({...filter, type: "2D"})
        }
        else if(filter.type==="2D"){
            setFilter({...filter, type: "3D"})
        }

    }

    return <div className=" flex flex-row justify-center mb-8 ">
        <button onClick={() => addFilter()}
                className={' justify-around w-7/12 font-semibold bg-blue-200 rounded-xl text-white flex flex-row relative'}>
            <div className='py-1 relative z-10'>
                2D
            </div>
            <div className='py-1 relative z-10'>
                3D
            </div>
            <div
                className={filter.type==="2D"||filter.type==="" ? "bg-[#4361ee] rounded-xl transition ease-in-out duration-200 -translate-x-1/2  h-full w-1/2  absolute inset-y-0  z-0" :
                    "absolute transition ease-in-out duration-200 translate-x-1/2  inset-y-0  z-0 bg-[#4361ee] h-full w-1/2 rounded-xl  "}>
            </div>
        </button>
    </div>
}


const minDistance = 10000;

function valuetext(value) {
    return value * 100;
}

function MinimumDistanceSlider() {
    const {filter, setFilter} = useContext(FilterContext)

    const handleChange1 = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            // setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
            setFilter({...filter, cost:[Math.min(newValue[0], filter.cost[1] - minDistance), filter.cost[1]]})
        } else {
            // setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
            setFilter({...filter, cost:[filter.cost[0], Math.max(newValue[1], filter.cost[0] + minDistance)]})

        }
    };

    return (
        <Slider
            getAriaLabel={() => 'Minimum distance'}
            value={filter.cost}
            sx={{
                color: '#4361ee',
                height: 3,
                '& .MuiSlider-thumb': {
                    width: '10px',
                    height: '10px',

                    '&:hover, &.Mui-focusVisible': {
                        boxShadow: 'none',
                    },
                    '&.Mui-active': {
                        boxShadow: 'none',
                    },

                },

            }}
            onChange={handleChange1}
            step={1000}

            min={10000}
            max={360000}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            disableSwap
        />
    );
}

function Price() {

    const {filter, setFilter} = useContext(FilterContext)


    return <div className='flex flex-col '>
        <div className='flex flex-row '>
            <img src={price} className='w-6 h-6'/>
            <div className='self-center text-xs font-medium pl-1'>
                Цена
            </div>
        </div>
        <div className='relative'>
            <MinimumDistanceSlider/>
        </div>
    </div>
}

function Duration() {
    const {filter, setFilter} = useContext(FilterContext)
    let {duration} = filter;

    function addFilter(value) {
        duration.includes(value) ? duration = duration.filter(x => x !== value) : duration.push(value)
        setFilter({...filter, duration})
    }

    return <div className='flex flex-col space-y-2 text-xs font-medium'>
        <div className='flex flex-row '>
            <img src={time} className='w-6 h-6'/>
            <div className='self-center  pl-1'>
                Продолжительность
            </div>
        </div>
        <div className='grid grid-cols-2 gap-x-1 gap-y-1 '>
            <button onClick={() => addFilter("месяц")}
                    className={filter.duration.includes("месяц") ? 'bg-blue-200 rounded-xl text-xs py-[0.3rem] font-medium' : 'bg-[#e2eefe] rounded-xl text-xs py-[0.3rem] font-medium'}>
                до месяца
            </button>
            <button onClick={() => addFilter("пол года")}
                    className={filter.duration.includes("пол года") ? 'bg-blue-200 rounded-xl text-xs py-[0.3rem] font-medium' : 'bg-[#e2eefe] rounded-xl text-xs py-[0.3rem] font-medium'}>
                до полу года
            </button>
            <button onClick={() => addFilter("год")}
                    className={filter.duration.includes("год") ? 'bg-blue-200 rounded-xl text-xs py-[0.3rem] font-medium' : 'bg-[#e2eefe] rounded-xl text-xs py-[0.3rem] font-medium'}>
                до года
            </button>
            <button onClick={() => addFilter("2 года")}
                    className={filter.duration.includes("2 года") ? 'bg-blue-200 rounded-xl text-xs py-[0.3rem] font-medium' : 'bg-[#e2eefe] rounded-xl text-xs py-[0.3rem] font-medium'}>
                до 2 лет
            </button>

        </div>
    </div>

}

function FeedBack() {

    return <div className='flex flex-col space-y-2 '>
        <div className='flex flex-row basis-full'>
            <img src={feedback} className='w-6 h-6' alt=" "/>
            <div className='self-center text-xs font-medium pl-1'>
                Обратная связь
            </div>
        </div>

        <div className='flex flex-row space-x-1'>
            <button className='bg-[#e2eefe] rounded-xl text-xs py-[0.3rem] font-medium grow'>
                да
            </button>
            <button className='bg-[#e2eefe] rounded-xl text-xs py-[0.3rem] font-medium grow'>
                нет
            </button>
        </div>
    </div>
}

function Education() {

    const {filter, setFilter} = useContext(FilterContext)
    let {professionalism} = filter;
    function addFilter(value) {
        professionalism.includes(value) ? professionalism = professionalism.filter(x => x !== value) : professionalism.push(value)
        setFilter({...filter, professionalism})
    }

    return <div className='flex flex-col '>
        <div className='flex flex-row mb-2'>
            <img src={cap} className='w-8 h-8'/>
            <div className='self-center text-xs font-medium pl-1'>
                Уровень подготовки
            </div>
        </div>
        <button onClick={() => addFilter("Новичек")} className={filter.professionalism.includes("Новичек")?'bg-blue-200 rounded-xl text-xs py-[0.3rem] font-medium ':'bg-[#e2eefe] rounded-xl text-xs py-[0.3rem] font-medium '}>
            Новичек
        </button>
        <div className='flex flex-row space-x-1 grow mt-1  '>

            <button onClick={() => addFilter("Продвинутый")} className={filter.professionalism.includes("Продвинутый")?'bg-blue-200 rounded-xl text-xs py-[0.3rem] font-medium px-1.5':'bg-[#e2eefe] px-1.5 rounded-xl text-xs py-[0.3rem] font-medium '}>
                Продвинутый
            </button>
            <button onClick={() => addFilter("Профессионал")} className={filter.professionalism.includes("Профессионал")?'bg-blue-200 rounded-xl text-xs py-[0.3rem] font-medium px-1.5':'bg-[#e2eefe] px-1.5 rounded-xl text-xs py-[0.3rem] font-medium '}>
                Профессионал
            </button>
        </div>
    </div>
}

function LeftSide() {
    const {filter, setFilter} = useContext(FilterContext)

    function resetFilter(){
        setFilter({type:"", duration: [], cost:[10000,360000], professionalism:[],designPerson:false,designPlane:false,lightColor:false })
    }

    return <div className="flex flex-row justify-center h-full mx-6 ">
        <div className="flex flex-col space-y-5 self-center grow ">
            <div>
                <Switch2D3D/>
            </div>
            <div>
                <Price/>
            </div>
            <div>
                <Duration/>
            </div>
            {/*<div>*/}
            {/*    <FeedBack />*/}
            {/*</div>*/}
            <div>
                <Education/>
            </div>
            <div className='flex flex-col text-xs font-medium space-y-2 '>
                <div className='flex flex-row justify-between'>
                    <div>
                        Дизайн персонажа
                    </div>
                    <input onChange={()=>setFilter({...filter, designPerson:!filter.designPerson})} checked={filter.designPerson} type="checkbox" id="horns" name="horns" className='self-center'/>
                </div>
                <div className='flex flex-row justify-between'>
                    <div>
                        Дизайн окружения
                    </div>
                    <input onChange={()=>setFilter({...filter, designPlane:!filter.designPlane})} checked={filter.designPlane}  type="checkbox" id="horns" name="horns" className='self-center'/>
                </div>
                <div className='flex flex-row justify-between'>
                    <div>
                        Свет и цвет
                    </div>
                    <input onChange={()=>setFilter({...filter, lightColor:!filter.lightColor})} checked={filter.lightColor} type="checkbox" id="horns" name="horns" className='self-center'/>
                </div>
            </div>
            <button onClick={()=>resetFilter()} className='w-full p-1 py-2 bg-[#4361ee] text-white rounded-xl text-xs font-medium'>
                Сбросить фильтры
            </button>
        </div>
    </div>

}

export default LeftSide