import React, {useState} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '@emdgroup-liquid/liquid/dist/components/ld-input';
import '@emdgroup-liquid/liquid/dist/components/ld-label';
import Modal from 'react-bootstrap/Modal'
import axios from "axios";
import '@emdgroup-liquid/liquid/dist/components/ld-icon';


function JobForm() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [value, setValue] = useState({
        requestor: '',
        department: '',
        date_needed: '',
        cell_line_pn: '',
        cell_line: '',
        description: '',
        quantity: 0,
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

     const handleFindCellLineInfo = () => {
        const response = axios.get(`/server/cell-line-info/${value.cell_line_pn}`);
        const {cell_line_info} = response.data;
        
        const {cell_line, cell_line_pn ,description,assembly_number} = cell_line_info;
        
        setValue((prevState) => ({
            ...prevState,
            cell_line,
            cell_line_pn,
            description,
            assembly_number
        }));
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
                <>
                <div className="d-grid gap-2">
                    <ld-label>
                    Cell Line Part Number
                        <Button variant="outline-secondary" onClick={handleShow}>
                           Search
                        </Button> 
                    </ld-label>
                </div>

            
                <Modal className="modal-dialog modal-dialog-centered" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Cell Culture Cell Lines</Modal.Title>
                </Modal.Header>
                <Modal.Body className="row">
                    <Form>
                        <Form.Group>
                            <Form.Label>Cell Line Part Number</Form.Label>
                            <Form.Control type="text" name="cell_line_pn" value={value.cell_line_pn} onChange={handleChange} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                    Close
                    </Button>
                    <Button variant="primary" onSubmit={handleFindCellLineInfo}>
                        Submit
                    </Button>
                </Modal.Footer>
                </Modal>
            </>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Cell Line</Form.Label>
                <Form.Control type="text" name="cell_line" value={value.cell_line} onChange={handleChange}/>
            </Form.Group>
  
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" name="description" value={value.description} onChange={handleChange}  />
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
              
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default JobForm;