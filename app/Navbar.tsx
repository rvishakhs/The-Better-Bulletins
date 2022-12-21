import React from 'react'
import {categories} from "../constants/index"
import Navlink from './Navlink'

type Props = {}

const category = ["business", "finance", "sports", "tech", "commerce"]

function Navbar({}: Props) {
  return (
    <div className='grid grid-cols-4 my-6 mx-6 items-center justify-center gap-4 md:mx-16 md:grid-cols-7 text-xs md:text-sm'>
        {categories.map((category) => (
            <Navlink key={category} category={category} />
        ))}
    </div>
  )
}

export default Navbar