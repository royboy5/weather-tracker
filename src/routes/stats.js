"use strict"

import log from "../utils/logger"
import express from "express"
import db from "../utils/database"

const router = new express.Router()

router.get("/stats", (req, res) => {
  log.info("Accessed /stats")
  db.find({}, (err, docs) => {
    if (err) log.error(err)
    log.info(docs)
    res.send(docs)
  })
})

module.exports = router
