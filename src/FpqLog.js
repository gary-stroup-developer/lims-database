import React from "react";

import './DatabaseDisplay.css';

import '@emdgroup-liquid/liquid/dist/css/ld-header.css'
import '@emdgroup-liquid/liquid/dist/css/ld-icon.css'
import '@emdgroup-liquid/liquid/dist/css/ld-sidenav.css'
import '@emdgroup-liquid/liquid/dist/css/ld-sidenav-navitem.css'
import '@emdgroup-liquid/liquid/dist/css/ld-typo.css'

function FpqLog() {
    return (
        <div className="DatabaseDisplay-container">
        <div>
            <h1 className = "department-title d-typo ld-typo--xb3">FPQ Log</h1> 
        </div>
        <div className="flex-box">
            <div className="sidenav-container ld-sidenav">
                <div className=" database-features ld-sidenav-back ld-sidenav__slot-container-top">
                    <div className="ld-sidenav-navitem ld-typo--cap-l">Database Features</div>
                </div>
                <div className="ld-sidenav-navitem ld-typo--cap-m" >Create</div>
                <div className="ld-sidenav-navitem ld-typo--cap-m" >Queue</div>
                <hr />
                <a className="back-home ld-sidenav-navitem ld-typo--cap-m" href="/lims-database">Dashboard</a>
            </div>
            <section className='form-section'>
                <h1>Create form</h1>
                <h1>Pull in job list from database</h1>
              
            </section>
        </div>

    </div>
    );
}

export default FpqLog;