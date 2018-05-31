"use strict"

import Datastore from "nedb"

let db = new Datastore({ inMemoryOnly: true })

export default db

// export default class database {
//   constructor(measurements = []) {
//     this.measurements = measurements
//   }
//   addMeasurement(measurement) {
//     this.measurements.push(measurement)
//   }
// }
