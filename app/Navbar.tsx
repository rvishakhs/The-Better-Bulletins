import React from 'react'
import {categories} from "../constants/index"
import Navlink from './Navlink'

type Props = {}

function Navbar({}: Props) {
  return (
    <div>
        {categories.map((category) => (
            <Navlink key={category} category={category} />
        ))}
    </div>
  )
}

export default Navbar