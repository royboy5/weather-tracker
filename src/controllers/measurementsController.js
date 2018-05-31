"use strict"
import log from "../utils/logger"
import db from "../utils/database"
import measurement from "../models/measurement"

const measurements_list = (req, res) => {
  log.info("Accessed /measurements")
  res.status(200).send("measurements")
}

exports.measurements_list = measurements_list
