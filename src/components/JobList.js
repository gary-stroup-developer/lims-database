import React from "react";
import {data} from '../assets/data/data';
import '../JobList.css'

export default function JobList() {

    return (
        <div>
        {data.map((data) => (
            <table>
                <tr><th>{data.employee}</th></tr>
                {data.jobs.map(job => <tr><td>{job.job_id}</td><td>{job.job_description}</td></tr>)}
            </table>
        ))}
        </div>
    );
}