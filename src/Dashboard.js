  import './DashBoard.css';
  import axios from 'axios';
  import '@emdgroup-liquid/liquid/dist/css/ld-button.css'
  import '@emdgroup-liquid/liquid/dist/css/ld-header.css'
  import '@emdgroup-liquid/liquid/dist/css/ld-icon.css'
  import '@emdgroup-liquid/liquid/dist/css/ld-select.css'

  import { useNavigate } from 'react-router-dom';
  import { useEffect, useState } from 'react';

  import 'react-circular-progressbar/dist/styles.css';
  import SelectMenu from './components/SelectMenu';
  import Graph from './components/Graph';
  import GridContainer from './components/GridContainer';

  
  function DashBoard() {
    const history = useNavigate();
    const year = new Date(Date.now()).getFullYear();

    //state variables
    const [totalJobsComplete, setTotalJobsComplete] = useState(0);
    const [lateJobsSC, setLateJobsSC] = useState(0);
    const [lateJobsTC, setLateJobsTC] = useState(0);
    const [totalCapacity, setTotalCapacity] = useState(0);
    const [indivCapacity, setIndivCapacity] = useState([]);

    useEffect(() => {
      const totalJobs = async () => {
        try {
          const cellCultureResponse = await axios.get('/server/cellculture/complete-jobs');

          const {ccCompleteTotal, ccComplete} = cellCultureResponse.data;

          setTotalJobsComplete(ccComplete);
        }catch(err){
          setTotalJobsComplete(0);
        }
      }
      totalJobs();
    }, []);

    useEffect(() => {
      const lateJobs = async() => {
        try{
          const cell_culture_capacity = await axios.get('/server/capacity');
          const cell_culture_active_jobs = await axios.get('/server/cellculture/activejobs');

          const {totalCCapacity, cc_indiv_capacity} = cell_culture_capacity.data;
          const {ccActiveJobs} = cell_culture_active_jobs.data;
          

          const scLateJobs = ccActiveJobs.filter((job) => new Date(job.date_needed).getTime() < new Date(Date.now()).getTime());
          const tcLateJobs = ccActiveJobs.filter((job) => new Date(job.date_needed).getTime() < new Date(Date.now()).getTime());

          setLateJobsSC(scLateJobs.length);
          setLateJobsTC(tcLateJobs.length);

          setTotalCapacity(totalCCapacity);
          setIndivCapacity((arr) => arr.concat(cc_indiv_capacity))
          
        }catch(err) {
          setLateJobsSC(0);
          setLateJobsTC(0);
        }
      }

      lateJobs();
    },[]);
    
    
      function myFunction() {
        let value = document.getElementById("select-menu").value;
            switch(value) {
            case "dashboard":
                history('/lims-database/');
                break;
            case "tissue-culture":
                history('/lims-database/tissue-culture');
                break;
            case "stem-cells": 
                history('/lims-database/stem-cells');
                break;
            case "fpq-log": 
                history('/lims-database/fpq-log');
                break;
            default: 
            history('/lims-database/');
        }
        
    }
  
    return (

    <main className='ld-theme-shake main'>

      <div className="container">
          <SelectMenu select={myFunction}/>
          <Graph individual ={indivCapacity.length} capacity={totalCapacity}/>
          <div>
            <p>Jobs Complete for {year}: {totalJobsComplete}</p>
            <p>Late Jobs: {lateJobsSC + lateJobsTC}</p>
          </div>
          <GridContainer metrics={indivCapacity}/>
  
      </div>
    </main>
    );
  }
  
  export default DashBoard;
  