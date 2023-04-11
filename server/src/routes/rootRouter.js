import express from "express"
import clientRouter from "./clientRouter.js"
import launchersRouter from "./api/v1/launchersRouter.js"
import questionsRouter from "./api/v1/questionsRouter.js"

const rootRouter = new express.Router()

// each of these api routers are for our fetch requests
rootRouter.use("/api/v1/launchers", launchersRouter)
rootRouter.use("/api/v1/questions", questionsRouter)

// this router will handle non-fetch requests, and will simply render the React app if requested
rootRouter.use("/", clientRouter)

export default rootRouter
