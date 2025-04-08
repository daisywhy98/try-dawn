import React from 'react'



const DjHeader = () => {
    return (
        <div className='w-full h-28 p-6 bg-linear-to-r from-green-700 to-green-500' style={{
            backgroundImage: "url('/images/rotating-galex-6.gif')", backgroundSize: "100% auto",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
        }}>
            <div>Welcome to my website</div>
            <div className='flex flex-row items-center justify-between'>
                <div>subscribe</div>
                <div>blog</div>
            </div>


        </div>
    )
}

export default DjHeader