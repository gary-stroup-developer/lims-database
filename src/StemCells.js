import React from "react";
import '@emdgroup-liquid/liquid/dist/css/liquid.global.css'
// import '@emdgroup-liquid/liquid/dist/css/ld-button.css'
import '@emdgroup-liquid/liquid/dist/css/ld-header.css'
import '@emdgroup-liquid/liquid/dist/css/ld-icon.css'
import '@emdgroup-liquid/liquid/dist/css/ld-sidenav.css'
import '@emdgroup-liquid/liquid/dist/css/ld-sidenav-navitem.css'

function StemCells() {
    return (
        <div>
            <div class="header">
                <h1 class = "department-title ld-typo ld-typo--xb2">Tissue Culture</h1> 
            </div>
            <div class="sidenav-container ld-sidenav">
                <div class="ld-sidenav-back ld-sidenav__slot-container-top">
                    <div class="ld-sidenav-navitem ld-typo--cap-l">Database Features</div>
                </div>
                <div class="ld-sidenav-navitem ld-typo--cap-m">Create</div>
                <div class="ld-sidenav-navitem ld-typo--cap-m">Queue</div>
                <div class="ld-sidenav-navitem ld-typo--cap-m">Active</div>
                <div class="ld-sidenav-navitem ld-typo--cap-m">Completed</div>
                <div class="ld-sidenav-navitem ld-typo--cap-m">Support</div>
                <hr />
                <div class="ld-sidenav-navitem ld-typo--cap-m">Create Cell Definition</div>
                <a class="back-home ld-sidenav-navitem ld-typo--cap-m" href="/lims-database">Dashboard</a>
            </div>
        </div>
    );
}

export default StemCells;