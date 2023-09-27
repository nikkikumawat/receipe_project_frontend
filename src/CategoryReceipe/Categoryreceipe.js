import React from 'react'
import { useContext } from 'react'
import { receipeContext } from '../App'
import { useNavigate } from 'react-router-dom'



function Categoryreceipe() {

    const nevigate = useNavigate()

    const { selectedCategory } = useContext(receipeContext)

    function handelfetching(e, name) {
        e.preventDefault()
        console.log(name)
       
        nevigate('/IngredientsData')
    }


    return (

        <div className='categoryReceipe'>
            <div className='receipes'>
                {
                    selectedCategory.map((recdata, index) => {
                        return (
                            <div className='receipe' key={index}>
                                <h2>{recdata.reciepeName}</h2>
                                <img src={recdata.mealImage} alt='mealimage' onClick={(e) => { handelfetching(e, recdata.reciepeName) }} ></img>
                            </div>

                        )

                    })
                }

            </div>
        </div>
    )
}

export default Categoryreceipe