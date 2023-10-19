import React from 'react'
import { Button } from 'react-bootstrap'

const CustomButton = ({text,color,active,activeColor,changeFunction,bgColor,size}) => {
    const handleClick = e=>{
        changeFunction(text);
    }

  return (
    <>
    <Button variant="primary" style={{color:active?`${activeColor}`:`${color}`,
    borderStyle:'none',margin:"0.5rem 0.5rem",backgroundColor:`${bgColor}`,fontSize:`${size}rem`}} onClick={handleClick}>{text}</Button>
    </>
  )
}

export default CustomButton