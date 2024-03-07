import React from 'react'
import Landing from '../Components/home_components/Landing'
import Features from '../Components/home_components/Features'
import Support from '../Components/home_components/Support'

export default function Home() {
  return (
    <div className='flex flex-col items-center'>
      <Landing/>
      <Features/>
      <Support/>
    </div>
  )
}
