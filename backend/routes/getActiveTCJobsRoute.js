const {getDbConnection} = require('../database');

const getActiveTCJobsRoute = {
    path: '/server/tissueculture/activejobs',
    method: 'get',
    handler: async (req,res) => {
        const db = getDbConnection('temecula-lims-db');

        const tcActiveJobs = await db.collection('tissue culture').find({"status":"active"});

        res.status(200).json({tcActiveJobs});
    }
};

exports.getActiveTCJobsRoute = getActiveTCJobsRoute;