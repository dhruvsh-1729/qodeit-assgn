import React, { useEffect, useState } from 'react'
import FormOptions from './FormOptions'
import { Form } from 'react-bootstrap'
import FormDetails from './FormDetails'
import FormBottom from './FormBottom'

const CustomForm = () => {
  const today = new Date();

  // Format the date as yyyy-mm-dd (required by the date input) to get today's date
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}`;
  let newPrice=12; //initialising price variable

  //state for form values
  const [state,setState] = useState({
    upActive:0,
    downActive:0,
    type:"",
    quantity:1,
    deadline:formattedDate,
  });

  //state for price value
  const [price, setPrice] = useState(newPrice);

  //updating price value in useEffect hook for updating with update in form values
  useEffect(()=>{
    if(state.upActive===0){
      newPrice=12*state["quantity"];
    }
    else if(state.upActive===1){
      newPrice=3*state["quantity"];
    }
    else{
    newPrice=18*state["quantity"];
    }
    setPrice(newPrice)
  },[state])

  //state values change function to be sent as prop to child components
  const changeValue=(key,value)=>{
    setState(prev=>({...prev,[key]:value}))
  }

  return (
    <>
      <Form style={{backgroundColor:"white", borderRadius:"1rem"}}>
        {/* this component has the buttons containing the options to select the high school, academia, etc */}
        <FormOptions state={state} setState={changeValue} />
        {/* this components has the select input and the deadline and the quantity tag */}
        <FormDetails state={state} setState={changeValue} />
        {/* this component is the bottom of the form displaying the price */}
        <FormBottom price={price} />
      </Form>

    </>
  )
}

export default CustomForm