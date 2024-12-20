
import { Link } from 'react-router-dom'
import React from 'react'

function Header() {
  return (
    <div>
      <header className='mb-8 flex items-center gap-2'>
        <Link to="/" className='text-zinc-800'>
      <img src="/favicon.png" alt="Logo" class="w-10"/>
      </Link>
        <p className='font-semibold'>Untitled Content Form</p>
      </header>
    </div>
  )
}

export default Header;