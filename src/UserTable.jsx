import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './UserTable.css';
const UserTable = () => {

  const [data, setData] = useState([])

  const getData = async () => {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users')
      console.log(res.data);
      return res.data
    }
    catch (err) {
      console.log(err);
      return err;
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData()
      setData(result)
    }
    fetchData()
  }, [])
  return (
    <div>
      <h1>Get API</h1>
      <div className='container'>
        <div className='getDataContainer'>
          {data.map((item, index) => {
            return (
              <div className='dataSetTable' key={index}>
                <p><b>Id:</b><span>{item.id}</span></p>
                <p><b>Name:</b><span>{item.name}</span></p>
                <p><b>UserName:</b><span>{item.username}</span></p>
                <p><b>Address:</b></p>
                <p><b>street:</b><span>{item.address.street}</span></p>
                <p><b>suite:</b><span>{item.address.suite}</span></p>
                <p><b>city:</b><span>{item.address.city}</span></p>
                <p><b>Zipcode:</b><span>{item.address.zipcode}</span></p>
                <p><b>Geo:</b></p><p><b>lat:</b><span>{item.address.geo.lat}</span></p>
                <p><b>lng:</b><span>{item.address.geo.lng}</span></p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default UserTable;
