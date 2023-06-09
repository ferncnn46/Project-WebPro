import React from 'react'
import MenubarUser from "../../layout/MenubarUser";
import CardPlant from '../../layout/card';

const Home = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Home User</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <MenubarUser />
      </div>
      <CardPlant />
    </div>
    )
}

export default Home