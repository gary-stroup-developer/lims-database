const {getDbConnection} = require('../database');

const getCompletedTCJobsRoute = {
    path: '/server/tissueculture/complete-jobs',
    method: 'get',
    handler: async (req,res) => {
        const db = getDbConnection('temecula-lims-db');

        let tcCompleteTotal = [];

        const completeTotal = await db.collection('tissue culture').find({"status":"complete"});
        const tcComplete = await db.collection('tissue culture').countDocuments({"status":"complete"});

        await completeTotal.forEach(doc=>tcCompleteTotal.push(doc));
        res.status(200).json({tcCompleteTotal,tcComplete});
    }
};

exports.getCompletedTCJobsRoute = getCompletedTCJobsRoute;