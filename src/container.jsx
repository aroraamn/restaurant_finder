import React from 'react'
import Body from './components/body/body'
import SideMenu from './components/sideMenu/sideMenu'

const Container = () => {
  return (
    <div className='flex m-auto h-[90vh] items-center justify-center w-[85vw] my-10 rounded-xl overflow-hidden'>
        <SideMenu/>
        <Body/>
    </div>
  )
}

export default Container