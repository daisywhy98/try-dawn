
import Link from 'next/link';
import React from 'react';
import SendEmail from '../components/SendEmail';



const page = () => {
    return (
        <div>
          
            <ul>
                <li><Link href="/envi-situation/panda">Panda</Link></li>
                <li><Link href="/envi-situation/lion">Lion</Link></li>
                <li><Link href="/envi-situation/polar-bear">Polar bear</Link></li>
                <li><Link href="/envi-situation/zebra">Zebra</Link></li>
            </ul>
         <SendEmail></SendEmail>
        </div>
    )
}

export default page