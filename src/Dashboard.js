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


    useEffect(() => {
      const totalJobs = async () => {
        try {
          const stemcellsResponse = await axios.get('/server/stemcells/completedjobscount');
          const tissuecultureResponse = await axios.get('/server/tissueculture/completedjobscount');

          const scComplete = stemcellsResponse.data.completedjobs;
          const tcComplete = tissuecultureResponse.data.completedjobs;

          setTotalJobsComplete(scComplete + tcComplete);
        }catch(err){
          setTotalJobsComplete(0);
        }
      }
      totalJobs();
    }, []);

    useEffect(() => {
      const lateJobs = async() => {
        try{
          const stemcells = await axios.get('/server/stemcells/activejobs');
          const tissueculture = await axios.get('/server/tissueculture/activejobs');

          const scLateJobs = stemcells.data.filter((job) => job.due_date < new Date(Date.now()));
          const tcLateJobs = tissueculture.data.filter((job) => job.due_date < new Date(Date.now()));

          setLateJobsSC(scLateJobs);
          setLateJobsTC(tcLateJobs);
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
          <Graph />
          <div>
            <p>Jobs Complete for {year}: {totalJobsComplete}</p>
            <p>Late Jobs: {lateJobsSC + lateJobsTC}</p>
          </div>
          <GridContainer />
  
      </div>
    </main>
    );
  }
  
  export default DashBoard;
  