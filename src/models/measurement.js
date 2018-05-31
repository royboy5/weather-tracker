"use strict"

export default class Measurement {
  constructor({ timestamp, ...rest } = {}) {
    if (!timestamp) {
      throw new Error(`Param 'timestamp' is required`)
    }

    if (rest && typeof rest !== "object") {
      throw new Error(`Param 'rest' must be an object`)
    }

    this.timestamp = timestamp

    if (rest) {
      Object.keys(rest).forEach(metric => {
        this[metric] = rest[metric]
      })
    }
  }
}
