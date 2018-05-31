"use strict"

import log from "../utils/logger"
import express from "express"

const router = new express.Router()

router.get("/stats", (req, res) => {
  log.info("Accessed /stats")
  res.send("stats")
})

module.exports = router
