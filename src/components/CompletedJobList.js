import React from "react";
import {data} from '../assets/data/data';
import '../JobList.css'

export default function CompletedJobList() {

    return (
        <div>
        <h1>Completed Jobs</h1>
        {data.map((data, index) => (
            <table>
            <thead>
                <tr key={index*15}><th>{data.employee}</th></tr>
            </thead>
            <tbody>
                {data.jobs.map(job => <tr key={index*7}><td>{job.job_id}</td><td>{job.job_description}</td></tr>)}
            </tbody>
                
            </table>
        ))}
        </div>
    );
}