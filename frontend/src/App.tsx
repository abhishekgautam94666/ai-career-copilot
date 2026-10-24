import { useEffect, useState } from "react"


function App() {
  const [message, setMessage] = useState("Connecting to backend....");

  useEffect(() => {
    fetch("http://localhost:5000/api/healthy")
      .then((response) => response.json())
      .then((data) => { setMessage(data.message) }).catch(() => {
        setMessage("Backend connection failed")
      })

  }, [])

  return (
    <div>
      <h1>AI Career Copilot</h1>
      <p>Your personal AI-powered job search assistant.</p>

      <button>Track My Jobs</button>
      <button>Analyze My Resume</button>

      <h2>Backend Status</h2>
      <p>{message}</p>

    </div>
  )
}

export default App
