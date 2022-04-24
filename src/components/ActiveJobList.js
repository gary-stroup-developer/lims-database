import React, {useEffect, useState} from "react";
import axios from "axios";

import '../JobList.css'

export default function ActiveJobList() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getJobsActive = async () => {
            try {
                const response = await axios.get('/server/cellculture/activejobs');
                const {ccActiveJobs} = response.data;
            
                setData((arr) => [...arr,...ccActiveJobs]); 
                
                
            } catch(err){
                console.log(err);
            }
        }
        getJobsActive();
    },[setData]);

    return (
        <div>
        <h1>Active Jobs</h1>
        {data.map((data,index) => (
            <table>
            <thead>
                <tr key={index*1000}><th>{data.requestor}</th></tr>
            </thead>
            <tbody>
                <tr key={index*75}><td>{data._id}</td><td>{data.description}</td></tr>
            </tbody>
                
            </table>
        ))}
        </div>
    );
}