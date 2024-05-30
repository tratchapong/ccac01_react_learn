import React, { useContext } from 'react'
import UserContext from './contexts/UserContext'

function ProfileInfo() {
  const {user} =useContext(UserContext)
  return (
    <div className='profile-info'>
      <h3>Welcome, {user? user : 'guest'}</h3>
    </div>
  )
}

export default ProfileInfo