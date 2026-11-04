import React, { useState } from 'react'

const App = () => {
  const [title, settitle] = useState("")
  const [details, setdetails] = useState("")
  const [task, settask] = useState([])




  const handleSubmit = (e) => {
    e.preventDefault()


    const copytask = [...task]
    copytask.push({ title, details })
    settask(copytask)
 
    settitle("")
    setdetails("")
  }

    

  return (
    <div className="h-screen flex flex-col justify-center bg-black text-white">
      <form  onSubmit={(e) => handleSubmit(e)} className="flex flex-col items-center justify-center p-10">



        <input type="text"
        placeholder="Enter note heading" 
        className="px-5 py-2 border-2 rounded" 
        value={title}
        onChange={(e) => settitle(e.target.value)}
        />

        <input type="text" 
        placeholder="Enter note" 
        className="px-5 py-2 border-2 h-10 rounded"
        value={details}
        onChange={(e) => setdetails(e.target.value)}
        />
        
        <button className="px-5 py-2 bg-blue-500 text-white rounded">Add Note</button>
      
      </form>
      <div>
        <h1 className="text-4xl font-bold">Notes</h1>
      </div>
      <div>
        {task.map((item, index) => (
          <div key={index} className="flex flex-col items-center justify-center p-10">
            <h1 className="text-2xl font-bold">{item.title}</h1>
            <p className="text-sm">{item.details}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App