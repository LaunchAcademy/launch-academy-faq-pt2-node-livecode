import express from "express"
import getClientIndexPath from "../config/getClientIndexPath.js"

const router = new express.Router()


const clientRoutes = ["/"]
// for any of the above paths, render the html file that has our div with an id of app! /client/public/index.html
router.get(clientRoutes, (req, res) => {
  res.sendFile(getClientIndexPath())
})

export default router
