import { LINKS } from '../config'
export default function ResultsPage({ score, segment, answers, onRestart }){
  const tiers = [
    {min:0, label:'Getting Organized', copy:'Square away consistency and basic ops, then unlock simple wins.'},
    {min:40, label:'Emerging Ready', copy:'Momentum is building — prioritize packaging, labeling, and logistics.'},
    {min:70, label:'Market Ready', copy:'You’re aligned for premium buyers. Activate demand and deliver reliably.'},
    {min:90, label:'Export Ready', copy:'Dial in compliance, capacity, and QA to scale across markets.'},
  ]
  const tier = tiers.reduce((acc,t)=> score>=t.min ? t : acc, tiers[0])
  const openLink = (url) => { if(!url || url.includes('YOUR-')){ alert('Replace placeholder links in src/config.js to enable this button.'); return } window.open(url, '_blank', 'noopener') }
  return (
    <div className='card'>
      <div className='badge'>Results</div>
      <h2>Your Bornfidis Readiness</h2>
      <div className='gauge'>
        <div className='g1'/><div className='g2'/><div className='g3'/><div className='g4'/>
        <div className='g5'/><div className='g6'/><div className='g7'/><div className='g8'/>
        <div className='g9'/><div className='g10'/>
      </div>
      <p><span className='score-badge'>{score}%</span> · {tier.label}</p>
      <h3>What this means</h3>
      <p>{tier.copy}</p>
      <ul className='list'>
        {segment === 'Farmer' && <li>Standardize harvest calendar, cold chain, and grading for fewer rejects.</li>}
        {segment === 'Processor' && <li>Finalize HACCP/PRPs, validate shelf life, and confirm label compliance.</li>}
        {segment === 'Buyer' && <li>Lock delivery windows, order sizes, and payment terms for steady supply.</li>}
        <li>We map you to matches in the PAPG network and Bornfidis Marketplace.</li>
      </ul>
      <h3>Next Steps</h3>
      <ul className='list'>
        <li>Book a 1:1 consult for packaging/logistics/readiness review.</li>
        <li>Join the PAPG WhatsApp for weekly demand & introductions.</li>
        <li>Grab the SOP starter (labels, specs, photo guidelines).</li>
      </ul>
      <div className='actions'>
        <button onClick={() => openLink(LINKS.calendly)}>Book a 1:1 Consultation</button>
        <button className='secondary' onClick={() => openLink(LINKS.whatsapp)}>Join WhatsApp Network</button>
        <button className='secondary' onClick={onRestart}>Restart</button>
      </div>
      <div style={{marginTop:16, fontSize:12, opacity:.8}}>
        Powered by Local Farmers, Crafted for Global Markets. · Developed by Bornfidis Digital Studio
      </div>
    </div>
  )
}