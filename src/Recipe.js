import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

function Recipe() {

    const [allcategory , setallcatagory] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/getAllcatagory')
        .then((result)=>{
            console.log(result.data.status)
            setallcatagory(result.data.allCategory)
        })
    },[])
    
     console.log(allcategory)

  return (
    <div className='reciepe'>
      <h2>Choose any type of category</h2>
      {
        (allcategory.length > 0 ) && 
        allcategory.map((category,index)=>{
            return(
              <div className='' key={index}>
                  <h2>{category.categoryName}</h2>
                  <img src={category.categoryImg}></img>
                  
              </div>
            )
        })
      }
    </div>
  )
}

export default Recipe