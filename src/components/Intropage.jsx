// import React from 'react'
import Navintro from './Navintro'
import Intro from './Intro'

const Intropage = () => {
  return (
    <div className='p-4 relative bg-gradient-to-tl rounded-md shadow-gray-700 shadow-lg from-zinc-950 via-slate-700 to-slate-600'>
      <Navintro />
      <Intro />
      <Intro />
    </div>
  )
}

export default Intropage
