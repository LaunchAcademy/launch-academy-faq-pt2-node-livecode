import express from "express"

import Question from "../../../models/Question.js"

const questionsRouter = new express.Router()

questionsRouter.get("/", (req, res) => {
  const questionObjects = Question.findAll()
  res.set({ 'Content-Type': 'application/json' }).status(200).json({ questions: questionObjects })
})

questionsRouter.post("/", (req, res) => {
  // create a new question object
  const newQuestion = new Question(req.body)
  // save the question
  // if it saves also send the persisted version back to React. Now it has an id! 
  if (newQuestion.save()) {
    res.status(201).json({ question: newQuestion })
  } else {
    res.status(422).json({ errors: question.errors })
  }
})

export default questionsRouter