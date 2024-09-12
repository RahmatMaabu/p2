import Kesiswaan from '@/components/Kesiswaan/Kesiswaan'
import { getServerSession } from 'next-auth'
import React from 'react'

const page = async () => {
  const session = await getServerSession();
  return (
    <>
      <Kesiswaan session={session?.user?.name}/>
    </>
  )
}

export default page
