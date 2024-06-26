import React from 'react'
import CallToAction from '../components/CallToAction'

export default function Projects() {
  return (
    <div className='flex flex-col justify-center mx-auto items-center gap-6 p-3 min-h-screen max-w-2xl'>
    <h1 className='text-3xl font-semibold'>Projects</h1>
    <p className='text-md text-gray-500'>Build fun and engaging projects while learning HTML, CSS, and JavaScript!</p>
    <CallToAction/>
    </div>
  )
}
