
import React from 'react'

const page = ({ params }: { params: { name: string } }) => {
    const { name } = params;
    return (
        <div>
           
            <div className='text-3xl'>detail pages for {name}</div>
            <img></img>
        </div>
    )
}

export default page