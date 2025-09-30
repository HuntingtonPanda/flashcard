import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

type flashcard = {
  id: number;
  question: string;
  answer: string;
}

const flashcards: flashcard[] = [
  {
    id: 1,
    question: "What is the name of the fountain that bruins touch during orientation to bruinize incoming students?",
    answer: "Inverted fountain"
  },
  {
    id: 2,
    question: "What are the names of the 3 dining halls on the hill?",
    answer: "De Neve, Epicuria at Covel, Bruin Plate"
  },
  {
    id: 3,
    question: "How does most UCLA student refer to Bruin Plate?",
    answer: "BPlate"
  },
  {
    id: 4,
    question: "How many Epicurias does UCLA have?",
    answer: "2: covel and ackerman"
  },
  {
    id: 5,
    question: "Who is the famous UCLA basketball coach who is memoralized with a wooden statue on campus?",
    answer: "John Robert Wooden"
  },
  {
    id: 6,
    question: "What is the name of the medical insurance all UC schools offer to their students exclusively?",
    answer: "UC Ship"
  },
  {
    id: 7,
    question: "What major has the lowest acceptance rate in UCLA?",
    answer: "Nursing"
  },
  {
    id: 8,
    question: "What is the name of the museum that can be found on campus?",
    answer: "Fowler Museum"
  },
  {
    id: 9,
    question: "What does North and South Side refer to in terms of UCLA?",
    answer: "The geographic split that coincidently splits Humanities and STEM classes"
  },
  {
    id: 10,
    question: "What allows UC students with their school's gym membership use and other UC's gym?",
    answer: "UC Reciprocity"
  }
]

function App() {
  //const [count, setCount] = useState(0)
  //const flashcardDict = {};


  return (
    <>
      <header>
        <title>Flashcards for Bruins!</title>
        <h1>Flashcard for Bruins</h1>
        <h2>This is UCLA fun facts</h2>
      </header>

      <body>
        {flashcards.map((flashcard, index) => (
          <div className="card" key={index}>
            {flashcard.question && <p><strong>Question:</strong> {flashcard.question}</p>}
          </div>
        ))}
      </body>

    </>
  )
}

export default App
