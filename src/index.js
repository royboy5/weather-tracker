import path from "path"
import express from "express"
import { json as parseJsonBody } from "body-parser"
import requireAll from "require-all"

const routes = requireAll(path.join(__dirname, "routes"))

const server = express()
export default server

/*
  TODO: Implement the endpoints in the ATs.
  The below stubs are provided as a starting point.
  You may refactor them however you like, so long as the default export of
  this file is the root request handler (i.e. `express()`).
*/

/**
 * Disable x-power-by
 * requests and responses are in JSON
 */
server.disable("x-powered-by")
server.use(parseJsonBody())

/**
 * Server routes
 */

/**
 * Home - /
 */
server.get("/", routes.home)

/**
 * Stats - /stats
 */
server.get("/stats", routes.stats)

// features/01-measurements/01-add-measurement.feature
server.post("/measurements", (req, res) => {
  /* Example:
  assert.deepEqual(res.body, {
    timestamp: '2015-09-01T16:00:00.000Z',
    temperature: 27.1,
    dewPoint: 16.7,
    precipitation: 0
  });
  */

  res.status(501)
})

// // features/01-measurements/02-get-measurement.feature
// server.get('/measurements/:timestamp', (req, res) => {
//   /* Example 1:
//   assert.equal(req.params.timestamp, '2015-09-01T16:20:00.000Z');

//   res.send({
//     timestamp: '2015-09-01T16:00:00.000Z',
//     temperature: 27.1,
//     dewPoint: 16.7,
//     precipitation: 0
//   });
//   */

//   /* Example 2:
//   assert.equal(req.params.timestamp, '2015-09-01');

//   res.send([
//     {
//       timestamp: '2015-09-01T16:00:00.000Z',
//       temperature: 27.1,
//       dewPoint: 16.7,
//       precipitation: 0
//     },
//     {
//       timestamp: '2015-09-01T16:10:00.000Z',
//       temperature: 27.3,
//       dewPoint: 16.9,
//       precipitation: 0
//     }
//   ]);
//   */

//   res.sendStatus(501); // not implemented
// });

// // features/01-measurements/03-update-measurement.feature
// server.put('/measurements/:timestamp', (req, res) => {
//   /* Example:
//   assert.equal(req.params.timestamp, '2015-09-01T16:00:00.000Z');

//   assert.deepEqual(res.body, {
//     timestamp: '2015-09-01T16:00:00.000Z',
//     temperature: 27.1,
//     dewPoint: 16.7,
//     precipitation: 15.2
//   });
//   */

//   res.sendStatus(501); // not implemented
// });

// // features/01-measurements/03-update-measurement.feature
// server.patch('/measurements/:timestamp', (req, res) => {
//   /* Example:
//   assert.equal(req.params.timestamp, '2015-09-01T16:00:00.000Z');

//   assert.deepEqual(res.body, {
//     timestamp: '2015-09-01T16:00:00.000Z',
//     precipitation: 15.2
//   });
//   */

//   res.sendStatus(501); // not implemented
// });

// // features/01-measurements/04-delete-measurement.feature
// server.delete('/measurements/:timestamp', (req, res) => {
//   /* Example:
//   assert.equal(req.params.timestamp, '2015-09-01T16:20:00.000Z');
//   */

//   res.sendStatus(501); // not implemented
// });

// // features/02-stats/01-get-stats.feature
// server.get('/stats', (req, res) => {
//   /* Example:
//     assert.deepEqual(req.query.metric, [
//       'temperature',
//       'dewPoint'
//     ]);

//     assert.deepEqual(req.query.stat, [
//       'min',
//       'max'
//     ]);

//     res.send([
//       {
//         metric: 'temperature',
//         stat: 'min'
//         value: 27.1
//       },
//       {
//         metric: 'temperature',
//         stat: 'max'
//         value: 27.5
//       },
//       {
//         metric: 'dewPoint',
//         stat: 'min'
//         value: 16.9
//       },
//       {
//         metric: 'dewPoint',
//         stat: 'max'
//         value: 17.3
//       }
//     ]);
//   */

//   res.sendStatus(501); // not implemented
// });
