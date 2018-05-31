"use strict"

import log from "../utils/logger"
import express from "express"
import Datastore from "nedb"

let db = new Datastore()
const router = new express.Router()

var doc = {
  hello: "world",
  n: 5,
  today: new Date(),
  nedbIsAwesome: true,
  notthere: null,
  notToBeSaved: undefined, // Will not be saved
  fruits: ["apple", "orange", "pear"],
  infos: { name: "nedb" }
}

router.get("/", (req, res) => {
  log.info("Accessed /")
  db.insert(doc, function(err, newDoc) {
    log.info(newDoc)
  })

  res.status(200).send("Weather tracker is up and running!\n")
})

module.exports = router
