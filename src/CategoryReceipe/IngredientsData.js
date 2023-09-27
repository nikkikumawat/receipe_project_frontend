import React from 'react'
import { useContext } from 'react'
import { receipeContext } from '../App'



function IngredientsData() {


    const { selectedCategory } = useContext(receipeContext)

    return (
        <div className='ingredients'>
            <div className='ingradientsdata'>

                {
                    selectedCategory.map((recdata, index) => {
                        return (
                            <div className='receipe' key={index}>
                                <img src={recdata.mealImage} alt='mealimage'></img>
                            </div>

                        )

                    })
                }
            </div>
        </div>
    )
}

export default IngredientsData