import React from 'react'
import CustomButton from './CustomButton'
import { upText, downText } from '../constants/data' //data hardcoded for the options as well as buttons

const FormOptions = ({state,setState}) => {
    console.log(state);
    // functions to handle change in active button 
    const changeUpIndex = (text)=>{
        console.log(text);
        const index = upText.indexOf(text);
        console.log(index);
        setState("upActive",index);
    }

    const changeDownIndex = (text)=>{
        console.log(text);
        const index = downText.indexOf(text);
        console.log(index);
        setState("downActive",index);
    }

    return (
        <>
        {/* mapping on the upText and downText arrays to display the custom buttons */}
            <div className="mx-3 my-3 d-flex flex-row px-3">
                {upText.map((text,i)=>{return(<CustomButton text={text} active={i===state["upActive"]?true:false} color={"white"}
                    activeColor={"black"} bgColor={"#9a71e0"} changeFunction={changeUpIndex}/>)})}
            </div>
            <div className="mx-3 my-3 d-flex flex-row px-3">
            {downText.map((text,i)=>{return(<CustomButton text={text} active={i===state["downActive"]?true:false} color={"white"}
                    activeColor={"black"} bgColor={"#9a71e0"} changeFunction={changeDownIndex}/>)})}
            </div>
        </>
    )
}

export default FormOptions