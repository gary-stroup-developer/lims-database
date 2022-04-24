const {getDbConnection} = require('../database');

const getActiveCCJobsRoute = {
    path: '/server/cellculture/activejobs',
    method: 'get',
    handler: async (req,res) => {
        const db = getDbConnection('temecula-lims-db');
        const year = new Date(Date.now()).getFullYear().toString();

        let ccActiveJobs = [];

        const activeJobs = await db.collection(year).find({"status":"active"}).sort({ requestor : 1} );
        
        await activeJobs.forEach(doc => ccActiveJobs.push(doc));

        res.status(200).json({ccActiveJobs});
    }
};

exports.getActiveCCJobsRoute = getActiveCCJobsRoute;