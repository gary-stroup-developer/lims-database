const {getDbConnection} = require('../database');

const getCellLineInfoRoute = {
    path: '/server/cell-line-info/:id',
    method: 'get',
    handler: async (req,res) => {
        const part_number = req.params.id;
        let cell_line_info = [];
        const db = getDbConnection('temecula-lims-db');
        const queue = await db.collection('cell-line-info').find({"cell_line_pn":part_number.toString()});
        await queue.forEach(doc => cell_line_info.push(doc));
        
        res.status(200).json({cell_line_info: cell_line_info[0]});
    }
};

exports.getCellLineInfoRoute = getCellLineInfoRoute;