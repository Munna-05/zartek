import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';


const FoodItems = ({ dishes, state }) => {
    let [counter, setCounter] = useState(0)
    let result = [...dishes]

    let [cart, setCart] = useState([])
    
   useEffect(()=>{
    console.log('page changed')
        setCart([])
   },[state])

    //add function
    const add = (index) => {
        let data = {
            index: index,
            dishes:result,
            quantity: counter + 1
        }

        let exist = cart.find((item) => item.index === index)
        if (exist) {
        console.log(cart)

            setCart(
                cart.map((item) =>
                    item.index === index
                        ?
                        { ...exist, quantity: exist.quantity + 1 }
                        :
                        item
                )
            )
        } else {
            setCart([...cart, data])
        }

    }



    // remove function
    const remove = (index) => {
        let result = [...dishes]
        let data = {
            index: index,
            dishes:dishes,
            quantity: counter - 1
        }

        let exist = cart.find((item) => item.index === index)
        if (exist) {
            console.log(exist)
            setCart(
                cart.map((item) =>
                    item.index === index
                        ?
                        { ...exist, quantity: exist.quantity ===0? exist.quantity = 0 : exist.quantity - 1 }
                        :
                        item
                )
            )
        } else {
            setCart([...cart, data])
        }

    }

    return (
        <AnimatePresence>


            <motion.div className=''

            >
                {dishes ? dishes.map((result, index) => {
                    return (
                        <>
                            <div className='border h-fit flex justify-between'>
                                <div className='px-4 ml-6 text-left my-auto'>
                                    <label className='font-bold' htmlFor="">{result.dish_name}</label><br />
                                    <div className='text-left ' style={{ width: "50vw" }}>
                                        <label htmlFor="">{result.dish_currency} {result.dish_price}</label><br />
                                        <label className='text-slate-500' htmlFor="">{result.dish_description}</label>
                                        <div className='my-2'>
                                            <button onClick={remove.bind(this, index)} className='w-10 bg-green-600 px-6 h-10 text-white rounded-l-full'>-</button>
                                          
                                                < button className='w-fit bg-green-600 text-white h-10'>{cart.map((items)=>items.index === index 
                                                && items.dishes.find(item=>item.dish_name === result.dish_name)
                                                ? items.quantity : null )}</button>
  
                                            <button onClick={add.bind(this, index)} className='w-10 bg-green-600 text-white px-6 h-10 pr-7 rounded-r-full'>+</button>

                                        </div>
                                        {result.addonCat.length > 0 ? <span className='text-sm text-red-600'>Customization available</span> : null}
                                    </div>
                                </div>
                                <span className='my-auto'>{result.dish_calories} calories</span>
                                <div className='h-40 m-5 w-40 mr-5 rounded-md overflow-hidden' style={{ backgroundImage: "url(" + result.dish_image + ")", backgroundSize: "cover" }}>
                                </div>
                            </div>
                        </>
                    )
                }) : null}
            </motion.div>
        </AnimatePresence >
    )
}

export default FoodItems