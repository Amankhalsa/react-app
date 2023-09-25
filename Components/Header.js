import React from 'react'
import Link from 'next/link'

const Header = (props) => {
  return (
    <div className='h-14 px-5 bg-black text-white flex items-center justify-between'>
        <h2> {props.name}</h2>
        <div className='flex  gap-3'>
            <Link href="/">{props.home} </Link>
            <Link href="/About">{props.about} </Link>
            <Link href="/Blog">{props.blog} </Link>
            <Link href="/Account">{props.account} </Link>
        </div>

    </div>

  )
}

export default Header