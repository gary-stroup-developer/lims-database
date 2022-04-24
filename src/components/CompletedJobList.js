import React, {useEffect, useState} from "react";
import axios from "axios";
import '../JobList.css'

export default function CompletedJobList() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getJobsComplete = async () => {
            try {
                const response = await axios.get('/server/cellculture/complete-jobs');
                const {ccCompleteTotal} = response.data;
            
                setData((arr) => [...arr,...ccCompleteTotal]); 
                
                
            } catch(err){
                console.log(err);
            }
        }
        getJobsComplete();
    },[setData]);
    return (
        <div>
        <h1>Completed Jobs</h1>
        {data.map((data, index) => (
            <table>
            <thead>
                <tr key={index*15}><th>{data.assembly_number}</th></tr>
            </thead>
            <tbody>
                <tr key={index*7}><td>{data._id}</td><td>{data.description}</td></tr>
            </tbody>
                
            </table>
        ))}
        </div>
    );
}