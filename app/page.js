"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
const page = (props) => {
const [Images, setImages] = useState([])
 useEffect(() =>{
  getImages()
 },[])

const getImages = async () =>{
  try{
    const response = await axios.get('https://picsum.photos/v2/list')
    const data = response.data;
    setImages(data)
    console.log(Images);
  }catch(error){
      console.error('Error Fethching images ')
  }


}
  return (
    <>
    <h2  className='text-red-500 text-center text-5xl font-bold'> Home page </h2>
     <div className='text-center '>

     <button onClick={getImages} className='px-5 py-3 bg-green-800 text-white font-bold'> Get images</button>
     </div>
     
     <div className='p-10'>

{Images.map((elem,i)=> {

  return  <img key={i} src={elem.download_url}  width={300} height={200} className='m-10 rounded inline-block'/>
}) }
     </div>
     </>
  )
}

export default page