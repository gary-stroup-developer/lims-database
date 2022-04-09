import React from "react";

function SelectMenu({select}) {
    return (
        <div>
        <div className='ld-select select-menu'>
            <select id="select-menu" name="View" onChange={select}>
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
    );
}

export default SelectMenu;