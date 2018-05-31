"use strict"
import log from "../utils/logger"
import db from "../utils/database"
import measurement from "../models/measurement"

const measurements_list_get = (req, res) => {
  log.info("Accessed GET /measurements")
  res.status(200).send("measurements")
}

const measurements_post = (req, res) => {
  log.info("Accessed POST /measurements")
  log.info(req.body)
  res.status(201).send(req.body)
}

exports.measurements_list_get = measurements_list_get
exports.measurements_post = measurements_post
