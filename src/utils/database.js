"use strict"

export default class database {
  constructor(measurements = []) {
    this.measurements = measurements
  }
  addMeasurement(measurement) {
    this.measurements.push(measurement)
  }
}
