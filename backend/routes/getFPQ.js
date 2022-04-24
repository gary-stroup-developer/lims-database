const {getDbConnection} = require('../database');
const getFPQ = {
    path: '/server/getFPQ',
    method: 'get',
    handler: async (req,res) => {
        const db = getDbConnection('temecula-lims-db');
        const fpq = await db.collection('fpq').find({},{"item_description":1,"date":1,"reason_code":1});

        res.status(200).json({fpq});
    }
};

exports.getFPQ = getFPQ;