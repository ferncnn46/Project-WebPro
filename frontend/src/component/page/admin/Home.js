import React from 'react'
import MenubarAdmin from "../../layout/MenubarAdmin";
import CardPlant from "../../layout/card";


const HomeAdmin = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ textAlign: 'center' }}>Home Admin</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <MenubarAdmin />
      </div>
      <CardPlant />
    </div>
  )
}

export default HomeAdmin


