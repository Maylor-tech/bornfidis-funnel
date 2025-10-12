import { BRAND } from '../config'
export default function LandingPage({ onStart }){
  return (
    <div className="card">
      <div className="header">
        <img className="brand__logo" src={BRAND.logo} alt={BRAND.name}/>
        <div className="brand">
          <span className="badge">{BRAND.name}</span>
        </div>
      </div>
      <h1>Connecting Jamaica’s Farmers, Processors & Buyers</h1>
      <p className="lead">
        Bornfidis helps you reach premium markets with packaging support, logistics, and demand planning — so your products arrive on spec, on time, at premium value.
      </p>
      <ul className="list">
        <li><strong>Access premium buyers</strong>: hotels, villas, restaurants</li>
        <li><strong>Compliance ready</strong>: labeling, HACCP guidance, shelf-life</li>
        <li><strong>Market visibility</strong>: listings, photos, spec sheets</li>
      </ul>
      <h2>Get your personalized readiness score</h2>
      <p className="lead">Pick your path to begin:</p>
      <div className="actions">
        <button onClick={() => onStart('Farmer')}>I’m a Farmer — Start Quiz</button>
        <button className="secondary" onClick={() => onStart('Processor')}>I’m a Processor</button>
        <button className="secondary" onClick={() => onStart('Buyer')}>I’m a Buyer / Chef</button>
      </div>
    </div>
  )
}