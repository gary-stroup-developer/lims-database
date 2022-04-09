  import './DashBoard.css';

  import '@emdgroup-liquid/liquid/dist/css/ld-button.css'
  import '@emdgroup-liquid/liquid/dist/css/ld-header.css'
  import '@emdgroup-liquid/liquid/dist/css/ld-icon.css'
  import '@emdgroup-liquid/liquid/dist/css/ld-select.css'

  import { useNavigate } from 'react-router-dom';

  import 'react-circular-progressbar/dist/styles.css';
  import SelectMenu from './components/SelectMenu';
  import Graph from './components/Graph';
  import GridContainer from './components/GridContainer';

  
  function DashBoard() {
    const history = useNavigate();
    
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
          <GridContainer />
  
      </div>
    </main>
    );
  }
  
  export default DashBoard;
  