import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

const RedirectPage = () => {
    const [active, setActive] = useState(false)

    if (active) {
      return <Navigate to='/' />
    }

    return (
    <div>
      <button onClick={() => setActive(!active)}>ana sayfaya yönlendir</button>
    </div>
  )
}

export default RedirectPage
