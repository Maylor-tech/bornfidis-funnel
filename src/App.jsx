import React, { useState } from 'react'
import LandingPage from './components/LandingPage'
import Questionnaire from './components/Questionnaire'
import ResultsPage from './components/ResultsPage'
import StyleGuide from './components/StyleGuide'
export default function App(){
  const [stage, setStage] = useState('landing')
  const [answers, setAnswers] = useState({})
  const [score, setScore] = useState(0)
  const [segment, setSegment] = useState('')
  const startQuiz = (seg) => { setSegment(seg || 'Farmer'); setStage('quiz') }
  const handleComplete = ({answers:a, score:s}) => { setAnswers(a); setScore(s); setStage('results') }
  return (
    <div className="container">
      <div style={{display:'flex',gap:8,marginBottom:12}}>
        <button className='secondary' onClick={()=>setStage('landing')}>Home</button>
        <button className='secondary' onClick={()=>setStage('style')}>Brand Guide</button>
      </div>
      {stage === 'landing' && <LandingPage onStart={startQuiz} />}
      {stage === 'quiz' && <Questionnaire segment={segment} onComplete={handleComplete} />}
      {stage === 'results' && <ResultsPage score={score} answers={answers} segment={segment} onRestart={()=>setStage('landing')} />}
      {stage === 'style' && <StyleGuide />}
      <div className="footer">© {new Date().getFullYear()} BORNFIDIS PROVISIONS — Farm-to-Table Logistics & Agri-Processing</div>
    </div>
  )
}