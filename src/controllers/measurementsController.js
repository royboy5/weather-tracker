"use strict";

import log from "../utils/logger";
import db from "../utils/database";
import Measurement from "../models/measurement";
import { checkTimestamp } from "../utils/helpers";

/**
 * POST metric
 */
const measurementsPost = (req, res) => {
  log.info("Accessed POST /measurements");

  try {
    const metrics = new Measurement(req.body);
    log.info("metric created");

    db.insert(metrics, (err, newDoc) => {
      if (err) {
        log.error(err);
        res.status(400).send({ status: "error", message: err });
      }
      log.info("Row inserted");
      res
        .status(201)
        .location(`/measurements/${metrics.timestamp}`)
        .send({
          status: "success",
          message: newDoc
        });
    });
  } catch (e) {
    log.info(e.message);
    res.status(400).send({
      status: "error",
      message: e.message
    });
  }
};

/**
 * GET request for metrics
 */
const measurementsItemGet = (req, res) => {
  log.info("Accessed GET /measurements");
  log.info(req.params.timestamp, "timestamp");

  /**
   * If UTC timestamp, Get a specific measurement
   * Else return array of measurements from a day
   */
  if (checkTimestamp(req.params.timestamp)) {
    log.info("utc");
    db.findOne({ timestamp: req.params.timestamp }, (err, doc) => {
      if (err) {
        log.error(err);
        res.status(404).send({ status: "err", message: err });
      }

      if (!doc) {
        res.status(404).send({ status: "err", message: "Query is null" });
      }

      log.info(doc);
      res.status(200).send(doc);
    });
  } else {
    db.find({ timestamp: new RegExp(req.params.timestamp) }, (err, docs) => {
      if (err) {
        log.error(err);
        res.status(404).send({ status: "err", message: err });
      }

      log.info(docs);

      if (!docs.length) {
        res.status(404).send({ status: "err", message: "Query is null" });
      } else {
        res.status(200).send(docs);
      }
    });
  }
};

const measurementsPut = (req, res) => {
  log.info("Accessed PUT /measurements");
};

exports.measurementsItemGet = measurementsItemGet;
exports.measurementsPost = measurementsPost;
exports.measurementsPut = measurementsPut;
