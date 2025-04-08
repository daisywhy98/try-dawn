import React from 'react'
import CurrentTime from './CurrentTime'
import Population from './Population'


const DjHeader = () => {
    return (
        // <div className='w-full h-28 bg-linear-to-r from-green-700 to-green-500 p-6'>
        <div className='w-full h-28 p-6' style={{ backgroundImage: "url('/images/rotating-galex-6.gif')", backgroundSize: "100% auto", 
            backgroundPosition: "center", 
            backgroundRepeat: "no-repeat"  }}>
            <div>Welcome to my website</div>
            <div className='flex flex-row items-center justify-between'>
            <CurrentTime></CurrentTime>
            <Population></Population>
            </div>
       
       
        </div>
    )
}

export default DjHeader