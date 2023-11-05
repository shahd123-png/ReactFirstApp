import React from 'react'
import './AppTest.css'

const Card = ({nameList , color , deleteFunc }) => {
    const test =  nameList.map((el , index)=> (  

        <div className="inside" key={index} style={{backgroundColor : color}}>

        <p> Name : {el.name}</p>
        <p> age : {el.age}</p>
        <p className='par' 
        onClick={(e) => deleteFunc(e, index)}> career : {el.career}</p>

        </div>))
  return (
    <div className="card"> {test} </div>
  )
}

export default Card;
