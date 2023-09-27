import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { receipeContext } from './App'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'



function Recipe() {


  const [allcategory, setallcatagory] = useState([])

  let navigate = useNavigate()

  const { selectedCategory, setSelectedCategory } = useContext(receipeContext)

  // -----------------------------------fethcing all category data from mongodb--------------------

  useEffect(() => {
    axios.get('http://localhost:8000/getAllcatagory')
      .then((result) => {
        console.log(result.data.status)
        setallcatagory(result.data.allCategory)
      })
  }, [])

  console.log(allcategory)


  function handelfetching(e, name) {
    e.preventDefault()
    console.log(name)

    axios.get(`http://localhost:8000/selectedcategoryreceipe/${name}`)
      .then((result) => {
        console.log(result.data.status)
        setSelectedCategory(result.data.reciepeData)

        navigate('/categoryReceipe')
      })

  }

  console.log(selectedCategory)

  return (
    <div className='reciepe'>
      <h2>Choose any type of category</h2>
      {
        (allcategory.length > 0) &&
        allcategory.map((category, index) => {
          return (
            <div className='' key={index}>
              <h2>{category.categoryName}</h2>
              <img src={category.categoryImg} alt="categoryimage" onClick={(e) => { handelfetching(e, category.categoryName) }}></img>

            </div>
          )
        })
      }
    </div>
  )
}

export default Recipe