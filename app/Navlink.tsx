import Link from 'next/link'
import React from 'react'

type Props = {
    category : string
}

function Navlink({category}: Props) {
  return (
    <Link 
        href={`/${category}`}
        className=""
    >    
            {category}
    </Link>
  )
}

export default Navlink