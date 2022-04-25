const {getDbConnection} = require('../database');

const postFormData = {
    path: '/server/cell-line-info',
    method: 'post',
    handler: async (req,res) => {
        const {value} = req.body;
        const year = new Date(Date.now()).getFullYear().toString();
        const db = getDbConnection('temecula-lims-db');
        let cell_line_info = {};

        const jobInfo = await db.collection('cell-line-info').find({"assembly_number":value.assembly_number},{"_id":0});
        await jobInfo.forEach(doc => {
            cell_line_info = {
                ...cell_line_info,
                cell_line: doc.cell_line,
                cell_line_pn: doc.cell_line_pn,
                description: doc.description,
                category: doc.category,
                weight: doc.weight,
                status: "queue"
            }
    });
    const data = {...value,...cell_line_info}
    await db.collection(year).insertOne(data);
    res.status(200).json({"status":"successful upload"})
    }

    
}

exports.postFormData = postFormData;