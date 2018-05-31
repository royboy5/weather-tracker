"use strict"

import log from "../utils/logger"
import express from "express"

const router = new express.Router()

router.get("/measurements", (req, res) => {
  log.info("Accessed /measurements")
  res.status(200).send("measurements")
})

module.exports = router
