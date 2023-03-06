import React from 'react'
import { useParams } from 'react-router-dom'


const Number = () => {
    const {data, color, backgroundColor} = useParams()
    if(!isNaN(data)){
        return (
            <div>
                <h1>The Number is: {data}</h1>
            </div>
        )
    }
        return (
            <div>
                <h1 style={{backgroundColor: backgroundColor, color: color}}>The word is: {data}</h1>
            </div>
        )
    }

export default Number