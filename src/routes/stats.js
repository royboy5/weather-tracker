"use strict"

import log from "../utils/logger"
import express from "express"
import db from "../utils/database"

const router = new express.Router()

router.get("/", (req, res) => {
  log.info("Accessed /stats")
  db.find({}, (err, docs) => {
    if (err) log.error(err)
    log.info(docs)
    res.send(docs)
  })
})

module.exports = router

// // // features/02-stats/01-get-stats.feature
// // server.get('/stats', (req, res) => {
// //   /* Example:
// //     assert.deepEqual(req.query.metric, [
// //       'temperature',
// //       'dewPoint'
// //     ]);

// //     assert.deepEqual(req.query.stat, [
// //       'min',
// //       'max'
// //     ]);

// //     res.send([
// //       {
// //         metric: 'temperature',
// //         stat: 'min'
// //         value: 27.1
// //       },
// //       {
// //         metric: 'temperature',
// //         stat: 'max'
// //         value: 27.5
// //       },
// //       {
// //         metric: 'dewPoint',
// //         stat: 'min'
// //         value: 16.9
// //       },
// //       {
// //         metric: 'dewPoint',
// //         stat: 'max'
// //         value: 17.3
// //       }
// //     ]);
// //   */

// //   res.sendStatus(501); // not implemented
// // });
