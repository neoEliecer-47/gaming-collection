import Header from '@/components/Header'
import React from 'react'

const layout = ({ children }:{ children: React.ReactNode }) => {
  return (
    <div className='p-0 m-0'>
       <Header fixed={false}/>
        {children}
    </div>
  )
}

export default layout