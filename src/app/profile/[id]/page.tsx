import React from 'react'

const Profile = ({params}:any) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
        Profile of {params.id}
    </div>
  )
}

export default Profile