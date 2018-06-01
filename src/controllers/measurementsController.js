"use strict"

import log from "../utils/logger"
import db from "../utils/database"
import Measurement from "../models/measurement"

const measurementsListGet = (req, res) => {
  log.info("Accessed GET /measurements")
  res.status(200).send("measurements")
}

const measurementsPost = (req, res) => {
  log.info("Accessed POST /measurements")

  try {
    let metrics = new Measurement(req.body)
    log.info("metric created")

    db.insert(req.body, (err, newDoc) => {
      if (err) {
        log.error(err)
        res.status(400)
      }
      log.info("Row inserted")
      res.status(201).send(newDoc)
    })
  } catch (e) {
    log.info(e)
    res.status(400).send(e)
  }
}

exports.measurementsListGet = measurementsListGet
exports.measurementsPost = measurementsPost
