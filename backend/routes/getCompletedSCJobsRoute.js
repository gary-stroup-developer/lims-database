const {getDbConnection} = require('../database');

const getCompletedSCJobsRoute = {
    path: '/server/stemcells/complete-jobs',
    method: 'get',
    handler: async (req,res) => {
        const db = getDbConnection('temecula-lims-db');
        const complete = await db.collection('stem cells').find({"status":"complete"});

        res.status(200).json({complete});
    }
};

exports.getCompletedSCJobsRoute = getCompletedSCJobsRoute;