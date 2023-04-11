import React, { useState, useEffect } from 'react'
import Question from './Question'
import { hot } from "react-hot-loader/root"

const FAQList = props => {
  const [questions, setQuestions] = useState([])
  const [selectedQuestion, setSelectedQuestion] = useState([])

  const getQuestions = async () => {
    const response = await fetch("/api/v1/questions")
    const questionsObject = await response.json()
    const questions = questionsObject.questions
    // debugger
    setQuestions(questions)
  }

  useEffect(() => {
    getQuestions()
  }, [])

  const toggleQuestionSelect = id => {
    if (id === selectedQuestion) {
      setSelectedQuestion(null)
    } else {
      setSelectedQuestion(id)
    }
  }

  const questionListItems = questions.map(question => {
    let selected
    if (selectedQuestion === question.id) {
      selected = true
    }

    let handleClick = () => {
      toggleQuestionSelect(question.id)
    }

    return (
      <Question
        key={question.id}
        question={question.question}
        answer={question.answer}
        selected={selected}
        handleClick={handleClick}
      />
    )
  })

  return (
    <div className="page">
      <h1>We Are Here To Help</h1>
      <div className="question-list">{questionListItems}</div>
    </div>
  )
}

export default hot(FAQList)
