"use strict"

import log from "../utils/logger"
import express from "express"
import Datastore from "nedb"

let db = new Datastore()
const router = new express.Router()

router.get("/stats", (req, res) => {
  log.info("Accessed /stats")

  let data = db.find({}, (err, docs) => {
    if (err) log.error(err)
    log.info(docs)
    res.send(docs)
  })
})

module.exports = router
