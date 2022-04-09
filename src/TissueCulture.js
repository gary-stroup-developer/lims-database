import React from "react";
import './TissueCulture.css';
import '@emdgroup-liquid/liquid/dist/css/liquid.global.css'
import '@emdgroup-liquid/liquid/dist/css/ld-header.css'
import '@emdgroup-liquid/liquid/dist/css/ld-icon.css'
import '@emdgroup-liquid/liquid/dist/css/ld-sidenav.css'
import '@emdgroup-liquid/liquid/dist/css/ld-sidenav-navitem.css'
import '@emdgroup-liquid/liquid/dist/css/ld-typo.css'

import JobForm from "./components/JobForm";

function TissueCulture() {
    return (
        <div>
            <div>
                <h1 className = "department-title d-typo ld-typo--xb3">Tissue Culture</h1> 
            </div>
            <div className="flex-box">
                <div className="sidenav-container ld-sidenav">
                    <div className="ld-sidenav-back ld-sidenav__slot-container-top">
                        <div className="ld-sidenav-navitem ld-typo--cap-l">Database Features</div>
                    </div>
                    <div className="ld-sidenav-navitem ld-typo--cap-m">Create</div>
                    <div className="ld-sidenav-navitem ld-typo--cap-m">Queue</div>
                    <div className="ld-sidenav-navitem ld-typo--cap-m">Active</div>
                    <div className="ld-sidenav-navitem ld-typo--cap-m">Completed</div>
                    <div className="ld-sidenav-navitem ld-typo--cap-m">Support</div>
                    <hr />
                    <div className="ld-sidenav-navitem ld-typo--cap-m">Create Cell Definition</div>
                    <a className="back-home ld-sidenav-navitem ld-typo--cap-m" href="/lims-database/">Dashboard</a>
                </div>
                <section className='form-section'>
                    <JobForm />
                </section>
            </div>

        </div>
    );
}

export default TissueCulture;