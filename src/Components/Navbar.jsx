import React from 'react'

const Navbar = ({name}) => {

    return (
        <div className='pt-4 '>
            <div className='flex justify-between mb-6 h-10 px-5'>
                <div className='mt-2 text-lg font-bold'>{name}</div>
                <div>

                    <div>
                        <button className='mt-2 mx-3 font-boldmd'>My Orders</button>
                        <span className='mt-2 mx-1 font-boldmd'>Cart</span>
                    </div>


                </div>

            </div>


        </div>
    )
}

export default Navbar