import React, { createContext, useState } from 'react'

const UserContext = createContext()

function UserContextProvider(props) {
  const [user, setUser] = useState(null)

  const updateUser = (newUser) => {
    setUser(newUser)
  }
  return (
    <UserContext.Provider value={{ user, updateUser}}>
      {props.children}
    </UserContext.Provider>
  )
}

export {UserContextProvider}
export default UserContext
