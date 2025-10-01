import { getCurrentUser } from '@/actions/users'
import React from 'react'

const SkillsPage = async() => {

  const user: any = await getCurrentUser()

  return (
    <div>
      <h1>SkillsPage</h1>

      <h3>Email:{user?.data?.email}</h3>
      <p>Name: {user?.data?.name}</p>
    </div>
  )
}

export default SkillsPage