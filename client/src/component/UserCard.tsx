import React from 'react'
type User = {
    id: string
    name: string 
    email: string
}
type UserCardProps = 
{
    user: User
}
const UserCard = ({user}:UserCardProps) => {
  return (
    <>
    <div className='border border-gray-800 p-4'>
        <h2>
            {user.id}
        </h2>
        <p>{user.name}</p>
        <p>{user.email}</p>
    </div>
    </>
  )
}

export default UserCard