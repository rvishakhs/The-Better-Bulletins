// "use client";

import React from 'react'
import {categories} from "../constants/index"
import Navlink from './Navlink'
// import { usePathname } from 'next/navigation';

type Props = {}

const category = ["business", "finance", "sports", "tech", "commerce"]

function Navbar({}: Props) {

    // const pathname = usePathname()
    // console.log(pathname);
    
  return (
    <div className='grid grid-cols-4 my-2 mx-6 items-center align-middle gap-4 md:mx-16 md:grid-cols-7 text-xs md:text-sm'>
        {categories.map((category) => (
            <Navlink key={category} category={category} isActive={true} />
        ))}
    </div>
  )
}

export default Navbar