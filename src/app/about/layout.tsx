import React from 'react'

function Layout({children}:{children:React.ReactNode}) {
  return (
    <div>
        <h2>Contact</h2>
        {children}</div>
  )
}

export default Layout