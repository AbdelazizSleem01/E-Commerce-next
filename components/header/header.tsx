import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header>
      <nav>
        <div className='navbar justify-between bg-base-300'>
          <div >
            <Image src='/images/logo.jpg' height={50} width={50} alt='nextjs logo' className='w-24 rounded-full p-1' />
          </div >
          <div className='flex'>
            <ul className='flex gap-4'>
              <li>
                <Link className='btn btn-ghost rounded-btn' href='/'>
                  Home
                </Link>
              </li>
              <li>
                <Link className='btn btn-ghost rounded-btn' href='/cart'>
                  Cart
                </Link>
              </li>
              <li>
                <Link className='btn btn-ghost rounded-btn' href='/signin'>
                  Sign In
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </header>
  )
}

export default Header