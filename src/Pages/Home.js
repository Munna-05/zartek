import React from 'react'
import Navbar from '../Components/Navbar'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Items from './Items'

const Home = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099`).then((response) => {
            setData(response.data)
        })
    }, [])

    return (
        <div>
            {
                data.map((element) => {
                    return (
                        <>
                            <Navbar name={element.restaurant_name} />

                        </>
                    )
                })
            }
            {data.map((list)=>{
                return(
                    <>
                    <Items list={list.table_menu_list}/>
                    </>
                )
            })}

        </div>
    )
}

export default Home