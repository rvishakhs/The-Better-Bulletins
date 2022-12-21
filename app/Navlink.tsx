import Link from 'next/link'
import React from 'react'

type Props = {
    category : string
}

function Navlink({category}: Props) {
  return (
      <div className='grid grid-cols-4 md:grid-col-7'>
        <a
            href={`/${category}`}
            className="navlink"    
        >
                {category}
        </a>
             
    </div>
  )
}

export default Navlink