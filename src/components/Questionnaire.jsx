import React, { useMemo, useState } from 'react'
import { baseQuestions, extraQuestions } from '../data.questions'
import { computeScore } from '../utils.scoring'
export default function Questionnaire({ segment='Farmer', onComplete }){
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const qs = useMemo(()=>[...baseQuestions[segment], ...extraQuestions], [segment])
  const total = qs.length
  const progress = Math.round((step/total)*100)
  const q = qs[step]
  const setVal = (id, val) => setAnswers(a=> ({...a, [id]: val}))
  const next = () => { if(step < total-1) setStep(s=>s+1); else { const score = computeScore(qs, answers); onComplete?.({answers, score}) } }
  return (
    <div className='card'>
      <div className='badge'>Quiz · {segment}</div>
      <h2>Agri-Business Readiness</h2>
      <div className='progress'><div className='progress__bar' style={{width: progress+'%'}}/></div>
      <p><strong>Question {step+1} / {total}</strong></p>
      <p>{q.q}</p>
      {q.type === 'range' && (
        <input type='range' min={q.min} max={q.max} step={q.step || 1} value={answers[q.id] ?? q.min} onChange={e=> setVal(q.id, Number(e.target.value))} style={{width:'100%'}} />
      )}
      {q.type === 'select' && (
        <div style={{display:'grid', gap:8}}>
          {q.options.map(opt=> (
            <label key={opt} style={{display:'flex',alignItems:'center',gap:8}}>
              <input type='radio' name={q.id} value={opt} checked={answers[q.id] === opt} onChange={()=> setVal(q.id, opt)} />
              <span>{opt}</span>
            </label>
          ))}
        </div>
      )}
      <div className='actions'><button onClick={next}>{step < total-1 ? 'Next' : 'See My Results'}</button></div>
    </div>
  )
}