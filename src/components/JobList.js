import React from "react";
import {data} from '../assets/data/data';
import '../JobList.css'

export default function JobList() {

    return (
        <div>
        {data.map((data,index) => (
            <table>
            <thead>
               <tr key={index*3}><th>{data.employee}</th></tr> 
            </thead>
            <tbody>
               {data.jobs.map(job => <tr key={index*2}><td>{job.job_id}</td><td>{job.job_description}</td></tr>)} 
            </tbody>
                
            </table>
        ))}
        </div>
    );
}