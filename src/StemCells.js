import React, { useState } from "react";
import './TissueCulture.css';
import '@emdgroup-liquid/liquid/dist/css/ld-header.css'
import '@emdgroup-liquid/liquid/dist/css/ld-icon.css'
import '@emdgroup-liquid/liquid/dist/css/ld-sidenav.css'
import '@emdgroup-liquid/liquid/dist/css/ld-sidenav-navitem.css'

import JobForm from "./components/JobForm";
import SideBar from "./components/SideBar";
import JobList from "./components/JobList";


function StemCells() {
    const [displayForm, setDisplayForm] = useState(false);

    function toggleForm () {
        setDisplayForm(!displayForm);
    }
    

    return (
        <div>
            <div>
                <h1 className = "department-title ld-typo ld-typo--xb2">Stem Cells</h1> 
            </div>
            <div className="flex-box">
                <SideBar onClick = {toggleForm}/>
                <section className='form-section'>
                    {displayForm ? <JobForm /> : <JobList />}
                </section>
            </div>
 
        </div>
    );
}

export default StemCells;