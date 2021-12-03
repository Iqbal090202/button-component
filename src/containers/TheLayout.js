import React from 'react'
import TheContent from './TheContent'
import TheSidebar from './TheSidebar'

const TheLayout = () => {
  return (
    <div className="the-layout">
      <TheSidebar />
      <div>
        <TheContent />
      </div>
    </div>
  )
}

export default TheLayout
