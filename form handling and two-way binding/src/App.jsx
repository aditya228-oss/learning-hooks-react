import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  const submitHandler = (e) => {
    e.preventDefault()
    console.log('submitted')
    setTitle('')// to clear the input field after submission
  }
  return (
    <div>App
      <form onSubmit={(e) => submitHandler(e)}>
        <input type="text"
        placeholder='enter your name'
        value={title}
        onChange={(e) => {setTitle(e.target.value)}}/>

        <button>Submit</button>
      </form>
    </div>
  )
}

export default App