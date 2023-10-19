import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import { options } from '../constants/data'
import { Form, InputGroup } from 'react-bootstrap'
import CustomButton from './CustomButton';

const opts = ["Pages", "Words"]; //array for the two buttons below quantity

const FormDetails = ({ state, setState }) => {
    // state to take care of active button between pages and words
    const [active, setActive] = useState(1);

    // function for changing the value of active state button
    const changeIndex = (text) => {
        console.log(text);
        const index = opts.indexOf(text);
        console.log(index);
        setActive(index);
    }

    useEffect(() => {
    }, [state])

    return (
        <>
            <Form>
                {/* select tag for the type of paper */}
                <div className="mx-3">
                    <Form.Group controlId="formPaper">
                        <Form.Label>Type of Paper</Form.Label>
                    </Form.Group>
                    <Select
                        defaultValue={options[0]}
                        isClearable={false}
                        options={options}
                        onChange={e => { setState("type", e.label) }}
                        value={{ label: state["type"], value: state["type"] }}
                    />
                </div>
                {/* input number tag for quantity pages or words */}
                <div className="d-flex flex-row">
                    <div className="mx-3 col-sm-5">
                        <Form.Group controlId="formQuantity">
                            <Form.Label>Quantity</Form.Label>
                        </Form.Group>
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="Quantity"
                                aria-label="Quantity"
                                aria-describedby="basic-addon1"
                                type="number"
                                value={active === 0 ? state["quantity"] * 275 : state["quantity"]}
                                onChange={e => {
                                    if (active) setState("quantity", Math.max(e.target.value, 1))
                                    else {
                                        setState("quantity", Math.max(Math.floor(e.target.value / 275), 1))
                                    }
                                }}
                            />
                        </InputGroup>
                        <CustomButton text={"Pages"} active={active === 0 ? true : false} color={"white"}
                            activeColor={"black"} bgColor={"#9a71e0"} changeFunction={changeIndex} />
                        <CustomButton text={"Words"} active={active === 1 ? true : false} color={"white"}
                            activeColor={"black"} bgColor={"#9a71e0"} changeFunction={changeIndex} />
                    </div>
                    {/* input tag for the deadline date */}
                    <div className="mx-3 col-sm-5">
                        <Form.Group controlId="formDeadline">
                            <Form.Label>Deadline</Form.Label>
                        </Form.Group>
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="Deadline"
                                aria-label="Deadline"
                                aria-describedby="basic-addon1"
                                type="date"
                                value={state["deadline"]}
                                onChange={e => setState("deadline", e.target.value)}
                            />
                        </InputGroup>
                    </div>
                </div>
            </Form>
        </>
    )
}

export default FormDetails