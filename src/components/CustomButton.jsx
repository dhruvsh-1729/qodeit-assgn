import React from 'react'
import { Button } from 'react-bootstrap'

const CustomButton = ({ text, color, active, activeColor, changeFunction, bgColor, size }) => {

    // function to call the prop function
    const handleClick = e => {
        changeFunction(text);
    }

    return (
        <>
        {/* bootstrap button */}
            <Button variant="primary" style={{
                color: active ? `${activeColor}` : `${color}`,
                borderStyle: 'none', margin: "0.5rem 0.5rem", backgroundColor: `${bgColor}`, fontSize: `${size}rem`
            }} onClick={handleClick}>{text}</Button>
        </>
    )
}

export default CustomButton