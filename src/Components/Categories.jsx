import React, { useEffect, useState } from 'react'
import FoodItems from './FoodItems'
import "./categories.css";
import { AnimatePresence, motion } from 'framer-motion';
const Categories = ({ details }) => {
    const [style, setStyle] = useState('w-96 border-b-2 text-red-500 font-bold border-red-500 pb-1')
    const [dishes, setDishes] = useState([])
    const [state,setState] = useState('')
    

    useEffect(() => {
        details.map((res) => { return setDishes(res.category_dishes) })

    }, [details])
    useEffect(()=>{
        console.log(state)

    },[state])


    return (

        <div>
            <div className='flex jusitfy-center w-screen border-b overflow-x-scroll scroll' >
                <div className=' flex mx-auto  cursor-pointer'>

                    {details ? details.map((result,index) => {
                        return (
                            <>
                                <div className='' >
                                    <div onClick={() => { setDishes(result.category_dishes) ;setState(index) }} className={index===state?style:'w-96 border-b pb-1'}>{result.menu_category}</div>

                                </div>
                            </>
                        )
                    }) : null}

                </div>
            </div>
            <AnimatePresence>

                <motion.div
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -300, opacity: 0 }}>

                    <FoodItems state={state} dishes={dishes} />
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

export default Categories