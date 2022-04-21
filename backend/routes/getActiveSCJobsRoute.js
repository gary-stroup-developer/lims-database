const {getDbConnection} = require('../database');

const getActiveSCJobsRoute = {
    path:'/server/stemcells/activejobs',
    method: 'get',
    handler: async (req,res) => {
        const db = getDbConnection('temecula-lims-db');

        const activeJobs = await db.collection('stem cells').find({"status":"active"});

        res.status(200).json({activeJobs});
    }
};

exports.getActiveSCJobsRoute = getActiveSCJobsRoute;