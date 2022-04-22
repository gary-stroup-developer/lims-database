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
          const stemcellsResponse = await axios.get('/server/stemcells/complete-jobs');
          const tissuecultureResponse = await axios.get('/server/tissueculture/complete-jobs');

          const {scCompleteTotal, scComplete} = stemcellsResponse.data;
          const {tcCompleteTotal,tcComplete} = tissuecultureResponse.data;

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

          const {scActiveJobs} = stemcells.data;
          const {tcActiveJobs} = tissueculture.data;
          

          const scLateJobs = scActiveJobs.filter((job) => new Date(job.date_needed).getTime() < new Date(Date.now()).getTime());
          const tcLateJobs = tcActiveJobs.filter((job) => new Date(job.date_needed).getTime() < new Date(Date.now()).getTime());


          setLateJobsSC(scLateJobs.length);
          setLateJobsTC(tcLateJobs.length);
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
  