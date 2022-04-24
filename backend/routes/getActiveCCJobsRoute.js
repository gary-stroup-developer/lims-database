const {getDbConnection} = require('../database');

const getActiveCCJobsRoute = {
    path: '/server/cellculture/activejobs',
    method: 'get',
    handler: async (req,res) => {
        const db = getDbConnection('temecula-lims-db');

        let ccActiveJobs = [];

        const activeJobs = await db.collection('2022').find({"status":"active"});

        await activeJobs.forEach(doc => ccActiveJobs.push(doc));
      
        res.status(200).json({ccActiveJobs});
    }
};

exports.getActiveCCJobsRoute = getActiveCCJobsRoute;