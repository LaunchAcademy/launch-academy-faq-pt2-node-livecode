import express from "express"

import Launcher from "../../../models/Launcher.js"

const launchersRouter = new express.Router()

launchersRouter.get("/", (req, res) => {
  // grab an array of Launcher objects from the `launchers.json` file
  const launcherObjects = Launcher.findAll()

  // tell the browser to expect JSON
  // set the status to 200 success
  // return our launders as an object of JSON 
  res.set({ 'Content-Type': 'application/json' }).status(200).json({ launchers: launcherObjects })
})

launchersRouter.get("/:id", (req, res) => {
  // grab a specific launcher object from the `launchers.json` file
  const launcher = Launcher.findById(req.params.id)

  // if present, send up that launcher, otherwise sent back an error
  if(launcher) {
    res.set({ 'Content-Type': 'application/json' }).status(200).json({ launcher })
  } else {
    res.status(404).json({ error: "Launcher Not Found!" })
  }
})

export default launchersRouter