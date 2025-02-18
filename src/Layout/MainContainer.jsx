import React from 'react'

const MainContainer = ({children}) => {
  return (
    <div className="py-[100px] sm:px-12 md:px-[120px] px-5 w-full h-screen overflow-y-scroll">
      {children}
    </div>
  )
}

export default MainContainer
