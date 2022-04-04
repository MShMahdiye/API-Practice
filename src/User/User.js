import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function User() {

  const [listOfUsers, setListOfUsers] = useState([]);
  const [blogByUser,setBlogByUser] = useState([])

  // const setId = async (item) => {
  // fetch('http://localhost:4000/blog/by-user' ,{
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     },body: JSON.stringify({
  //       _id:item._id
  //     })

  //   })
  //   .then((res) => {
  //     console.log('res from blog by User')
  //     return res.json()
  //   }).then(data => {
  //     console.log('data from blog by User : ',data);
  //     setBlogByUser(data)
  //   })
  // }

  useEffect(() => {
    fetch('http://localhost:4000/user', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then((res) => {
        console.log('res from get users')
        return res.json()
      }).then(data => {
        console.log('data from get users : ', data);
        setListOfUsers(data)
      })
  }, [])
  console.log('listOfUsers : ', listOfUsers);


  return (
    <div className='bg-red-200 flex flex-col flex-wrap justify-center items-center '>
      {
        listOfUsers.map((item) => {
          return (
            // <Link to={'/blog/by-user'} onClick={setId(item)}>
              <div className='flex mb-[2vw] py-[1vw] justify-around items-center w-[100%]' key={item._id}>
                <div className='w-[20%]'><img src={item.imgurl} width={'30%'} height={'30%'} className='rounded-lg' alt="user's img" /></div>
                <div className='w-[20%]'>{item.username}</div>
              </div>
            //  </Link> 
          )
        })
      }
    </div>
  )
}

export default User