"use strict"

import log from "../utils/logger"
import express from "express"

import measurements_controller from "../controllers/measurementsController"

const router = new express.Router()

router.get("/measurements", measurements_controller.measurements_list)

router.post("/measurements", (req, res) => {
  log.info("Accessed /measurements")
  res.status(201).send("measurements")
})

module.exports = router
