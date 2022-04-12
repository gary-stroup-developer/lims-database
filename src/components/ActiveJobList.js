import React from "react";
import {data} from '../assets/data/data';
import '../JobList.css'

export default function ActiveJobList() {

    return (
        <div>
        <h1>Active Jobs</h1>
        {data.map((data,index) => (
            <table>
            <thead>
                <tr key={index*1000}><th>{data.employee}</th></tr>
            </thead>
            <tbody>
                {data.jobs.map(job => <tr key={index*75}><td>{job.job_id}</td><td>{job.job_description}</td></tr>)}
            </tbody>
                
            </table>
        ))}
        </div>
    );
}