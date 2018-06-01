"use strict"

// import log from '../utils/logger';
import express from "express"

import measurementsController from "../controllers/measurementsController"

const router = new express.Router()

router.get("/:timestamp", measurementsController.measurementsItemGet)

router.post("/", measurementsController.measurementsPost)

// // // features/01-measurements/02-get-measurement.feature
// // server.get('/measurements/:timestamp', (req, res) => {
// //   /* Example 1:
// //   assert.equal(req.params.timestamp, '2015-09-01T16:20:00.000Z');

// //   res.send({
// //     timestamp: '2015-09-01T16:00:00.000Z',
// //     temperature: 27.1,
// //     dewPoint: 16.7,
// //     precipitation: 0
// //   });
// //   */

// //   /* Example 2:
// //   assert.equal(req.params.timestamp, '2015-09-01');

// //   res.send([
// //     {
// //       timestamp: '2015-09-01T16:00:00.000Z',
// //       temperature: 27.1,
// //       dewPoint: 16.7,
// //       precipitation: 0
// //     },
// //     {
// //       timestamp: '2015-09-01T16:10:00.000Z',
// //       temperature: 27.3,
// //       dewPoint: 16.9,
// //       precipitation: 0
// //     }
// //   ]);
// //   */

// //   res.sendStatus(501); // not implemented
// // });

// // // features/01-measurements/03-update-measurement.feature
// // server.put('/measurements/:timestamp', (req, res) => {
// //   /* Example:
// //   assert.equal(req.params.timestamp, '2015-09-01T16:00:00.000Z');

// //   assert.deepEqual(res.body, {
// //     timestamp: '2015-09-01T16:00:00.000Z',
// //     temperature: 27.1,
// //     dewPoint: 16.7,
// //     precipitation: 15.2
// //   });
// //   */

// //   res.sendStatus(501); // not implemented
// // });

// // // features/01-measurements/03-update-measurement.feature
// // server.patch('/measurements/:timestamp', (req, res) => {
// //   /* Example:
// //   assert.equal(req.params.timestamp, '2015-09-01T16:00:00.000Z');

// //   assert.deepEqual(res.body, {
// //     timestamp: '2015-09-01T16:00:00.000Z',
// //     precipitation: 15.2
// //   });
// //   */

// //   res.sendStatus(501); // not implemented
// // });

// // // features/01-measurements/04-delete-measurement.feature
// // server.delete('/measurements/:timestamp', (req, res) => {
// //   /* Example:
// //   assert.equal(req.params.timestamp, '2015-09-01T16:20:00.000Z');
// //   */

// //   res.sendStatus(501); // not implemented
// // });

module.exports = router
