import React from "react";
import {data} from '../assets/data/data';
import '../JobList.css'

export default function QueueJobList() {

    return (
        <div>
        <h1>Submitted Jobs</h1>
        {data.map((data,index) => (
            <table>
            <thead>
               <tr key={index+4}><th>{data.employee}</th></tr> 
            </thead>
            <tbody>
               {data.jobs.map(job => <tr key={index+10}><td>{job.job_id}</td><td>{job.job_description}</td></tr>)} 
            </tbody>
                
            </table>
        ))}
        </div>
    );
}