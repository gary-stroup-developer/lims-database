const {getFPQ} = require('./getFPQ');
const {getCapacityRoute} = require('./getCapacityRoute');
const {getActiveCCJobsRoute} = require('./getActiveCCJobsRoute');
const {getCompletedCCJobsRoute} = require('./getCompletedCCJobsRoute');
const {getCCJobsInQueueRoute} = require('./getCCJobsInQueueRoute');
const {getCellLineInfoRoute} = require('./getCellLineInfoRoute');

const routes = [
    getFPQ,
    getCapacityRoute,
    getActiveCCJobsRoute,
    getCompletedCCJobsRoute,
    getCCJobsInQueueRoute,
    getCellLineInfoRoute
]

exports.routes = routes;