export function scoreAnswer(q, val){
  if(q.type === 'range'){
    const norm = (val - q.min) / Math.max(1,(q.max - q.min))
    return Math.max(0, Math.min(1, norm)) * (q.weight || 1)
  }
  if(q.type === 'select'){
    const idx = Array.isArray(q.options) ? q.options.indexOf(val) : 0
    const norm = (idx < 0 ? 0 : idx) / Math.max(1, (q.options?.length - 1) || 1)
    return norm * (q.weight || 1)
  }
  return 0
}
export function computeScore(questions, answers){
  const weights = questions.reduce((sum,q)=> sum + (q.weight || 1), 0)
  const raw = questions.reduce((sum,q)=> sum + (scoreAnswer(q, answers[q.id]) || 0), 0)
  const pct = Math.round((raw / Math.max(1,weights)) * 100)
  return Math.max(0, Math.min(100, pct))
}