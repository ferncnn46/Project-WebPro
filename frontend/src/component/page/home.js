import React from 'react'
import Navbar from "../layout/navbar";
const home = () => {

  return (

    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Navbar />
      </div>
      <div>
      <h1 style={{ textAlign: 'center' }}>Home</h1>
      </div>
    </div>
  )
}

export default home
