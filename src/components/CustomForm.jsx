import React, { useEffect, useState } from 'react'
import FormOptions from './FormOptions'
import { Form } from 'react-bootstrap'
import FormDetails from './FormDetails'
import FormBottom from './FormBottom'

const CustomForm = () => {
  const today = new Date();

  // Format the date as yyyy-mm-dd (required by the date input)
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}`;
  let newPrice=12;

  const [state,setState] = useState({
    upActive:0,
    downActive:0,
    type:"",
    quantity:1,
    deadline:formattedDate,
  });

  const [price, setPrice] = useState(newPrice);

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

  const changeValue=(key,value)=>{
    setState(prev=>({...prev,[key]:value}))
  }

  return (
    <>
      <Form style={{backgroundColor:"white", borderRadius:"1rem"}}>
        <FormOptions state={state} setState={changeValue} />
        <FormDetails state={state} setState={changeValue} />
        <FormBottom price={price} />
      </Form>

    </>
  )
}

export default CustomForm