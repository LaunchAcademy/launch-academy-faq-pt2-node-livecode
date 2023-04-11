import fs from "fs"
import _ from "lodash"

const questionsPath = "questions.json"

class Question {
  constructor({ id, question, answer }) {
    this.id = id
    this.question = question
    this.answer = answer
  }

  static findAll() {
    const questionData = JSON.parse(fs.readFileSync(questionsPath)).questions
    const questions = questionData.map(question => new Question(question))
    return questions
  }

  isValid() {
    // create an errors object that we can add to later
    this.errors = {}
    // designate fields that must be present before saving
    const requiredFields = ["question", "answer"]
    let isValid = true

    // iterate over each requiredField
    for (const requiredField of requiredFields) {
      // say first that that field has zero errors (empty array)
      this.errors[requiredField] = []
      // if this object's property that matches that field is blank, we have an error
      if (!this[requiredField]) {
        isValid = false
        // add the error to a list of possible errors for that field
        this.errors[requiredField].push("Can't be blank")
      }
    }
    // return true or false depending on if there were errors
    return isValid
  }

  static getNextQuestionId() {
    const maxQuestion = _.maxBy(Question.findAll(), Question => Question.id)
    return maxQuestion.id + 1
  }

  save() {
    // if all fields have been filled
    // if (this.isValid()) {
      // delete any errors from the past
      // delete this.errors
      // get a unique id for this new entry
      this.id = Question.getNextQuestionId()
      // get the old questions
      const questions = Question.findAll()
      // add this question to the old ones
      questions.push(this)
      // prepare the data to be re-added to the file with the new question
      const data = { questions: questions }
      // add the new set of questions to the JSON file
      fs.writeFileSync(questionsPath, JSON.stringify(data))
      return true
    // } else {
    //   return false
    // }
  }
}

export default Question