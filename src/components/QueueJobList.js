import axios from "axios";
import React, { useEffect, useState } from "react";

import '../JobList.css'

export default function QueueJobList() {
const [data, setData] = useState([]);

useEffect(() => {
    const getJobsInQueue = async () => {
        try {
            const response = await axios.get('/server/queue');
            const {jobsInQueue} = response.data;
            if(jobsInQueue.length > 0) {
               setData(() => jobsInQueue.map(doc => doc)); 
            } else {
                setData([{
                    requestor: 'None',
                    _id: 'No jobs available',
                    description: 'no jobs submitted at this time'
                }])
            }
            
        } catch(err){
            console.log(err);
        }
    }
    getJobsInQueue();
},[]);

    return (
        <div>
        <h1>Submitted Jobs</h1>
        {data.map((job,index) => (
            <table>
            <thead>
               <tr key={index+4}><th>{job.requestor}</th></tr> 
            </thead>
            <tbody>
               <tr key={index+10}>
                <td>{job._id}</td>
                <td>{job.description}</td>
               </tr>
            </tbody>
                
            </table>
        ))}
        </div>
    );
}