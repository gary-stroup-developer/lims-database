const {getDbConnection} = require('../database');

const getCompletedSCJobsCountRoute = {
    path:'/server/stemcells/completedjobscount',
    method: 'get',
    handler: async (req,res) => {
        const db = getDbConnection('temecula-lims-db');

        const scComplete = await db.collection('stem cells').countDocuments({"status":"complete"});
        res.status(200).json({scComplete});
    }
};

exports.getCompletedSCJobsCountRoute = getCompletedSCJobsCountRoute;