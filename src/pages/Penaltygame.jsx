import React, { useEffect, useState } from 'react'

function Penaltygame() {
  const [data,setData]=useState(null)
  useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("https://moccha77-fbe81-default-rtdb.firebaseio.com/shoots.json")
          const data = await response.json()
          setData(`https://back.moccha77.com/video/${data.file_id}`)
        } catch (error) {
          console.log(error)
        }
      }
      fetchData()
    }, [])
  return (
    <div className='video-container'>
      {data?(
        <video className="fullscreen-video" autoPlay loop>
        <source src={data} type="video/mp4" />
        </video>
      ):(null)}
        
    </div>
    
  )
}

export default Penaltygame