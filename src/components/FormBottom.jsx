import React from 'react'
import { Button } from 'react-bootstrap'

const FormBottom = ({price}) => {
  return (
    <>
    <div className="row">
    <div className="col-sm-3 mx-3 mt-2">
        <div className="text-center">Approx.price</div>
        <div style={{fontSize:"3rem",fontWeight:'700'}}>{`$${price}`}</div>
    </div>
   <div className="col-sm-8">
    <Button style={{fontSize:"1.5rem",backgroundColor:"#ffc966",fontWeight:"700",color:"black",transition:'0.5s all ease'}}>Proceed To Order</Button>
   </div>
   </div>
    </>
  )
}

export default FormBottom