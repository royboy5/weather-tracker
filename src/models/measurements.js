"use strict"
import _ from "lodash"

export default class {
  constructor() {
    this.measurements = []
  }

  addMetric = measurements => {
    this.measurements.push(measurements)
  }

  removeMetric = measurements => {
    this.measurements.pop(
      _.findInex(this.measurements, m => m.timestamp === measurements.timestamp)
    )
  }

  getMetric = measurements =>
    this.measurements[
      _.findInex(this.measurements, m => m.timestamp === measurements.timestamp)
    ]
}
