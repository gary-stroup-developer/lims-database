  import './DashBoard.css';
  import '@emdgroup-liquid/liquid/dist/css/liquid.global.css'
  import '@emdgroup-liquid/liquid/dist/css/ld-button.css'
  import '@emdgroup-liquid/liquid/dist/css/ld-header.css'
  import '@emdgroup-liquid/liquid/dist/css/ld-icon.css'
  import '@emdgroup-liquid/liquid/dist/css/ld-select.css'
  import boss from './assets/images/boss.jpg';
  import man from './assets/images/man.png';
  import woman from './assets/images/woman.png';
  import { useNavigate } from 'react-router-dom';

  
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
       <header className='ld-header ld-theme-shake'>
      <div className='ld-header__container'>
        <svg aria-label="Merck KGaA, Darmstadt, Germany" class="ld-header__logo ld-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.5921 7H19.1a.2882.2882 0 0 0-.1926.076l-2.9895 2.7586c-1.0241.9456-2.4024 1.4765-3.9177 1.4765-1.5796 0-3.0088-.5797-4.0444-1.5964 0 0-2.199-2.0294-2.2179-2.0477A2.5535 2.5535 0 0 0 4.0665 7h-1.785C2.126 7 2 7.1239 2 7.2766v7.7509c0 .765.6301 1.3843 1.4083 1.3843h.9133c.1564 0 .2831-.1249.2831-.2783l.0007-2.7582c0-.7208.5987-1.3155 1.3204-1.3155 1.3434 0 2.3067 1.1309 3.177 1.8863 1.0661.9254 1.8871 1.8169 2.8974 1.8169 1.0092 0 1.8306-.8915 2.8966-1.8169.8707-.7554 1.834-1.8863 3.1767-1.8863.718 0 1.3137.5887 1.3208 1.3039v1.6638c0 .765.6305 1.3829 1.4089 1.3829h.6079c.1588 0 .3061.0014.3061.0014.1561 0 .2828-.1249.2828-.2779V8.3842C22 7.6196 21.3692 7 20.5921 7Z" fill="currentcolor"/></svg>
        <div className='ld-header_site-name ld-typo--h5'>Temecula Cell Culture</div>
      </div>
    </header>
      <div className="container">
          <div className="graph">
              <div className='ld-select select-menu'>
                  <select id="select-menu" name="View" onChange={myFunction}>
                    <option value="">Go to...</option>
                    <option id="tissue-culture" value="tissue-culture">Tissue Culture</option>
                    <option id="stem-cells" value="stem-cells">Stem Cells</option>
                    <option id="dashboard" value="dashboard">Dashboard</option>
                    <option id="fpq-log" value="fpq-log">FPQ Log</option>
                  </select>
                  <svg
                    role="presentation"
                    className="ld-select__icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      d="M3 6l5 4 5-4"
                    />
                  </svg>
                </div>
          </div>
  
          <div className="grid-container">
              <div className="tile admin">
                  <div className="tile__top">
                      <div className="image-container">
                        <img src={boss} alt="manager of cell culture" />
                      </div>
                  </div>
                  <div className="tile__bottom">
                      <p>Manager</p>
                      <p>Name: <span>Katherine Tingley</span></p>
                  </div>
              </div>
              <div className="tile employee1">
                  <div className="tile__top">
                      <div className="image-container">
                      <img src={woman} alt="employee in cell culture" />
                      </div>
                  </div>
                  <div className="tile__bottom">
                      <p>Associate Scientist</p>
                      <p>Name: <span>Camille Agtina</span></p>
                  </div>
              </div>
              <div className="tile employee2">
                  <div className="tile__top">
                      <div className="image-container">
                        <img src={man} alt="employee in cell culture" />
                      </div>
                  </div>
                  <div className="tile__bottom">
                      <p>Scientist</p>
                      <p>Name: <span>Gerardo Sanchez</span></p>
                  </div>
              </div>
              <div className="tile employee3">
                  <div className="tile__top">
                      <div className="image-container">
                        <img src={man} alt="employee in cell culture" />
                      </div>
                  </div>
                  <div className="tile__bottom">
                      <p>Scientist</p>
                      <p>Name: <span>Gary Stroup</span></p>
                  </div>
              </div>
              <div className="tile employee4">
                  <div className="tile__top">
                      <div className="image-container">
                        <img src={woman} alt="employee in cell culture" />
                      </div>
                  </div>
                  <div className="tile__bottom">
                      <p>Scientist</p>
                      <p>Name: <span>Diana Forero-Cook</span></p>
                  </div>
              </div>
              <div className="tile employee5">
                  <div className="tile__top">
                      <div className="image-container">
                        <img src={woman} alt="employee in cell culture" />
                      </div>
                  </div>
                  <div className="tile__bottom">
                      <p>Scientist</p>
                      <p>Name: <span>Chintya Ganda</span></p>
                  </div>
              </div>
              <div className="tile employee6">
                  <div className="tile__top">
                      <div className="image-container">
                        <img src={woman} alt="employee in cell culture" />
                      </div>
                  </div>
                  <div className="tile__bottom">
                      <p>Associate Scientist</p>
                      <p>Name: <span>Rocky Mowery</span></p>
                  </div>
              </div>
              <div className="tile employee7">
                  <div className="tile__top">
                      <div className="image-container">
                        <img src={woman} alt="employee in cell culture" />
                      </div>
                  </div>
                  <div className="tile__bottom">
                      <p>Sr Scientist</p>
                      <p>Name: <span>Fran Castaneda</span></p>
                  </div>
              </div>
          </div>
  
      </div>
    </main>
    );
  }
  
  export default DashBoard;
  