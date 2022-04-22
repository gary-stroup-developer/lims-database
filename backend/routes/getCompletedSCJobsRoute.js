const {getDbConnection} = require('../database');

const getCompletedSCJobsRoute = {
    path: '/server/stemcells/complete-jobs',
    method: 'get',
    handler: async (req,res) => {
        const db = getDbConnection('temecula-lims-db');

        let scCompleteTotal = [];
        const completeTotal = await db.collection('stem cells').find({"status":"complete"});
        const scComplete = await db.collection('stem cells').countDocuments({"status":"complete"});

        await completeTotal.forEach(doc => scCompleteTotal.push(doc));
        res.status(200).json({scCompleteTotal, scComplete});
    }
};

exports.getCompletedSCJobsRoute = getCompletedSCJobsRoute;