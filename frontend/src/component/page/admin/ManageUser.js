import React, { useState, useEffect } from 'react'
import MenubarAdmin from "../../layout/MenubarAdmin";
import { useSelector } from "react-redux";

import { getAllUser } from '../../function/user';


const ManageUser = () => {

  const { user } = useSelector((state) => ({ ...state }));
  const [data, setData] = useState([]);

  console.log('data', data)
  useEffect(() => {
    //code
    loadData(user.token);
  }, []);

  const loadData = (authtoken) => {
    //code
    getAllUser(authtoken)
      .then((res) => {
        //code
        setData(res.data);
      })
      .catch((err) => {
        //err
        console.log(err.respond);
      });
  };
 
  return (
    <div className="container-fluid">
      <div className="row">
        <h1 style={{ textAlign: 'center' }} >List of User</h1>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <MenubarAdmin />
        </div>
        <div className="col">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">username</th>
                <th scope="col">role</th>
                <th scope="col">created</th>

              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr>
                  <th scope="row">{item._id}</th>
                  <td>{item.username}</td>
                  <td>{item.role}</td>
                  <td>{item.createdAt}</td>
                </tr>))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>



  )
}

export default ManageUser


