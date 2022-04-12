import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '@emdgroup-liquid/liquid/dist/components/ld-input';
import '@emdgroup-liquid/liquid/dist/components/ld-label';
import Modal from 'react-bootstrap/Modal'
import {useState} from "react";
import '@emdgroup-liquid/liquid/dist/components/ld-icon';


function JobForm() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
      
    return (
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Requestor</Form.Label>
                <Form.Control type="text" placeholder="Gary Stroup" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Department</Form.Label>
                <Form.Select>
                    <option>Tissue Culture</option>
                    <option>Stem Cells</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Date Needed</Form.Label>
                <Form.Control type="date" />
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

            
                <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Cell Culture Cell Lines</Modal.Title>
                </Modal.Header>
                <Modal.Body><ld-input placeholder="Search" type="search"></ld-input></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                    Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Submit
                    </Button>
                </Modal.Footer>
                </Modal>
            </>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Cell Line</Form.Label>
                <Form.Control type="text"/>
            </Form.Group>
  
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Quantity</Form.Label>
                <Form.Control type="text"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Assembly Number</Form.Label>
                <Form.Control type="text"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Lot Number</Form.Label>
                <Form.Control type="text"/>
            </Form.Group>
              
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default JobForm;