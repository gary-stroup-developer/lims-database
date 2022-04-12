import React from "react";
import './TissueCulture.css';

import '@emdgroup-liquid/liquid/dist/css/ld-header.css'
import '@emdgroup-liquid/liquid/dist/css/ld-icon.css'
import '@emdgroup-liquid/liquid/dist/css/ld-sidenav.css'
import '@emdgroup-liquid/liquid/dist/css/ld-sidenav-navitem.css'
import '@emdgroup-liquid/liquid/dist/css/ld-typo.css'
import DatabaseDisplay from "./components/DatabaseDisplay";


function TissueCulture() {
    return<DatabaseDisplay department={"Tissue Culture"}/>;
}

export default TissueCulture;