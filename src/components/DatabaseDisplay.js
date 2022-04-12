import React,{useState} from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import JobList from "./JobList";
import JobForm from "./JobForm";
import QueueJobList from "./QueueJobList";
import ActiveJobList from "./ActiveJobList";
import CompletedJobList from "./CompletedJobList";
import '../DatabaseDisplay.css';

function DatabaseDisplay({department}) {

    const [displayForm, setDisplayForm] = useState("active");
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function showForm (form) {
        console.log(form)
        setDisplayForm(form);
    }

    function showSelectedJobForm(value) {
        switch(value) {
            case "create":
                return <JobForm />;
            case "queue":
                return <QueueJobList />;
            case "active":
                return <ActiveJobList />;
            case "completed":
                return <CompletedJobList/>;
            default:
                return <JobList />;
        }
    }

    return (
        <div className="DatabaseDisplay-container">
            <div>
                <h1 className = "department-title d-typo ld-typo--xb3">{department}</h1> 
            </div>
            <div className="flex-box">
                <div className="sidenav-container ld-sidenav">
                    <div className=" database-features ld-sidenav-back ld-sidenav__slot-container-top">
                        <div className="ld-sidenav-navitem ld-typo--cap-l">Database Features</div>
                    </div>
                    <div className="ld-sidenav-navitem ld-typo--cap-m" onClick={()=>showForm("create")}>Create</div>
                    <div className="ld-sidenav-navitem ld-typo--cap-m" onClick={()=>showForm("queue")}>Queue</div>
                    <div className="ld-sidenav-navitem ld-typo--cap-m" onClick={()=>showForm("active")}>Active</div>
                    <div className="ld-sidenav-navitem ld-typo--cap-m" onClick={()=>showForm("completed")}>Completed</div>
                    <div className="ld-sidenav-navitem ld-typo--cap-m">Support</div>
                    <hr />
                    <div className="ld-sidenav-navitem ld-typo--cap-m" onClick={handleShow}>Create Cell Definition</div>
                    <a className="back-home ld-sidenav-navitem ld-typo--cap-m" href="/lims-database">Dashboard</a>
                </div>
                <section className='form-section'>
                    {showSelectedJobForm(displayForm)}
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Create Cell Line Definition</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="modal-body">
                            <div className="cellLine-def"><ld-input placeholder="Part Number" type="text"></ld-input></div>
                            <div className="cellLine-def"><ld-input placeholder="Description" type="text"></ld-input></div>
                            <div className="cellLine-def"><ld-input placeholder="Assembly Number" type="text"></ld-input></div>
                            <div className="cellLine-def"><ld-input placeholder="Assembly Description" type="text"></ld-input></div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                            Close
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                                Submit
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </section>
            </div>

        </div>
    );
}

export default DatabaseDisplay;