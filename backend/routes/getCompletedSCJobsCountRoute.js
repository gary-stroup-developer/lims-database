const {getDbConnection} = require('../database');

const getCompletedSCJobsCountRoute = {
    path:'/server/stemcells/completedjobscount',
    method: 'get',
    handler: async (req,res) => {
        const db = getDbConnection('temecula-lims-db');

        const completedjobs = await db.collection('stem cells').find({"status":"complete"}).count();
        res.status(200).json({completedjobs});
    }
};

exports.getCompletedSCJobsCountRoute = getCompletedSCJobsCountRoute;