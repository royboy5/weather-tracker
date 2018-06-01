"use strict";

import log from "../utils/logger";
import db from "../utils/database";
import Measurement from "../models/measurement";
import { checkTimestamp, filterKeys } from "../utils/helpers";

/**
 * POST measurements
 */
const measurementsPost = (req, res) => {
  log.info("Accessed POST /measurements");

  try {
    const metrics = new Measurement(req.body);
    log.info("metric created in POST");

    db.insert(metrics, (err, newDoc) => {
      if (err) {
        log.error(err);
        res.status(400).send({ status: "error", message: err });
      } else {
        log.info("Row inserted");
        res
          .status(201)
          .location(`/measurements/${metrics.timestamp}`)
          .send({
            status: "success",
            message: newDoc
          });
      }
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
 * GET request for measurements
 */
const measurementsGet = (req, res) => {
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
      } else if (!doc) {
        res.status(404).send({ status: "err", message: "Query is null" });
      } else {
        const filteredObj = filterKeys(doc, null, ["_id"]);

        log.info(filteredObj);
        res.status(200).send(filteredObj);
      }
    });
  } else {
    db
      .find({ timestamp: new RegExp(req.params.timestamp) })
      .sort({ timestamp: 1 })
      .exec((err, docs) => {
        log.info(docs);
        if (err) {
          log.error(err);
          res.status(404).send({ status: "err", message: err });
        } else if (!docs.length) {
          res.status(404).send({ status: "err", message: "Query is null" });
        } else {
          const filteredArr = docs.map(item => filterKeys(item, null, ["_id"]));
          log.info(filteredArr);
          res.status(200).send(filteredArr);
        }
      });
  }
};

/**
 * PUT request for measurements
 */
const measurementsPut = (req, res) => {
  log.info("Accessed PUT /measurements");

  try {
    const metrics = new Measurement(req.body);
    log.info("metric created in PUT");

    db.update(
      { timestamp: req.params.timestamp },
      metrics,
      { returnUpdatedDocs: true },
      (err, numAffected, affectedDocuments, upsert) => {
        if (err) {
          log.error(err);
          res.status(400).send({ status: "error", message: err });
        } else if (!numAffected) {
          log.error("Query is null");
          res.status(404).send({ status: "error", message: "Query is null" });
        } else if (req.params.timestamp !== affectedDocuments.timestamp) {
          log.error("Cannot update timestamp");
          res
            .status(409)
            .send({ status: "error", message: "Cannot update timestamp" });
        } else {
          log.info("Row inserted");
          res.status(204).send({
            status: "success",
            message: affectedDocuments
          });
        }
      }
    );
  } catch (e) {
    log.info(e.message);
    res.status(400).send({
      status: "error",
      message: e.message
    });
  }
};

/**
 * DELETE request for measurements
 */
const measurementsDelete = (req, res) => {
  log.info("Accessed DELETE /measurements");
  res.status(200).send(req.params);
};

exports.measurementsPost = measurementsPost;
exports.measurementsGet = measurementsGet;
exports.measurementsPut = measurementsPut;
exports.measurementsDelete = measurementsDelete;
