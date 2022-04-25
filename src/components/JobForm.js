import React, {useState} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '@emdgroup-liquid/liquid/dist/components/ld-input';
import '@emdgroup-liquid/liquid/dist/components/ld-label';

import axios from "axios";
import '@emdgroup-liquid/liquid/dist/components/ld-icon';


function JobForm() {

    const [value, setValue] = useState({
        requestor: '',
        department: '',
        date_needed: '',
        quantity: '',
        assembly_number: '',
        lot_number: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValue((prevState)=>({
            ...prevState,
            [name] : value
        }));
     };

     const submitFormData = async () => {
         try {
            const response = await axios.post('/server/cell-line-info',{value});
            console.log(response.data);
         } catch(err) {
             console.log(err);
         }
     };

    return (
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Requestor</Form.Label>
                <Form.Control type="text" placeholder="employee name" name="requestor" value={value.requestor} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Department</Form.Label>
                <Form.Select name="department" value={value.department} onChange={handleChange} >
                    <option>Other</option>
                    <option>Tissue Culture</option>
                    <option>Stem Cells</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Date Needed</Form.Label>
                <Form.Control type="date" name="date_needed" value={value.date_needed} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Quantity</Form.Label>
                <Form.Control type="text" name="quantity" value={value.quantity} placeholder="" onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Assembly Number</Form.Label>
                <Form.Control type="text" name="assembly_number" value={value.assembly_number} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Lot Number</Form.Label>
                <Form.Control type="text" name="lot_number" value={value.lot_number} onChange={handleChange} />
            </Form.Group>
              
            <Button variant="primary" type="submit" onClick={submitFormData}>
                Submit
            </Button>
        </Form>
    );
}

export default JobForm;