import { useState } from 'react'
import './App.css'
import MovieSuggestForm from './Components/MovieSuggestForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <MovieSuggestForm />
      </div>
    </>
  )
}

export default App
