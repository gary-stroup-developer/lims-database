const {getDbConnection} = require('../database');

const getCompletedSCJobsRoute = {
    path:'/server/stemcells/completedjobs',
    method: 'get',
    handler: async (req,res) => {
        const db = getDbConnection('temecula-lims-db');

        const completedjobs = await db.collection('stemcells').find({"status":"complete"},{"job_id":1,"description":1,"user":1});
        res.status(200).json({completedjobs});
    }
};

exports.getCompletedSCJobsRoute = getCompletedSCJobsRoute;