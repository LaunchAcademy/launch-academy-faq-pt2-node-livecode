import React, { useState } from "react"

const NewFAQForm = (props) => {
    const [formFieldsState, setFormFieldsState] = useState({
        question: "",
        answer: ""
    })

    const handleInputChange = (event) => {
        setFormFieldsState({ 
            ...formFieldsState,
            [event.currentTarget.name]: event.currentTarget.value 
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.postFAQ(formFieldsState)
    }

    return (
        <div>
            <h2>New FAQ Form</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Question:
                    <input type="text" name="question" value={formFieldsState.question} onChange={handleInputChange}/>
                </label>
                
                <br></br>

                <label>
                    Answer: 
                    <input type="text" name="answer" value={setFormFieldsState.answer} onChange={handleInputChange}/>
                </label>

                <br></br>

                <input type="submit" value="Add FAQ"/>
            </form>
        </div>
    )
}

export default NewFAQForm