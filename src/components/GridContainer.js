import React from "react";
import boss from '../assets/images/boss.jpg';
import man from '../assets/images/man.png';
import woman from '../assets/images/woman.png';
import '@emdgroup-liquid/liquid/dist/css/liquid.global.css'
import '@emdgroup-liquid/liquid/dist/css/ld-typo.css';

function GridContainer() {
    return (
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
                <p className="custom-color d-typo ld-typo--b6">Capacity: <span>88%</span></p>
                    
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
                <p className="custom-color d-typo ld-typo--b6">Capacity: <span>94%</span></p>
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
                <p className="custom-color d-typo ld-typo--b6">Capacity: <span>105%</span></p>
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
                <p className="custom-color d-typo ld-typo--b6">Capacity: <span>96%</span></p>
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
                <p className="custom-color d-typo ld-typo--b6">Capacity: <span>100%</span></p>
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
                <p className="custom-color d-typo ld-typo--b6">Capacity: <span>75%</span></p>
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
                <p className="custom-color d-typo ld-typo--b6">Capacity: <span>78%</span></p>
            </div>
        </div>
    </div>
    );
}

export default GridContainer;