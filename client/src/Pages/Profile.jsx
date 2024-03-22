import React from 'react'
import Left_profile from '../Components/Profile_components/Left_profile'
import Right_pofile from '../Components/Profile_components/Right_pofile'

export default function Profile() {
  return (
    <div className='flex flex-col md:flex-row'>
        <Left_profile/>
        <Right_pofile/>
    </div>
  )
}
