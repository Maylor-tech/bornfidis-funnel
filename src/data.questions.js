export const baseQuestions = {
  Farmer: [
    { id: 'volume',  q: 'Average weekly harvest volume (kg)?', type:'range', min:0, max:1000, step:50, weight:1 },
    { id: 'harvest', q: 'How consistent is your harvest schedule?', type:'select', options:['Ad hoc','Monthly','Bi-weekly','Weekly'], weight:1 },
    { id: 'cold',    q: 'Cold chain available (cooler/ice/reefer)?', type:'select', options:['No','Sometimes','Yes'], weight:1 },
    { id: 'spec',    q: 'Can you meet size/grade specifications?', type:'select', options:['Rarely','Sometimes','Consistently'], weight:1 },
  ],
  Processor: [
    { id: 'haccp',   q:'Food safety program (HACCP/PRP) in place?', type:'select', options:['No','In progress','Yes'], weight:1 },
    { id: 'pack',    q:'Retail packaging & labels compliant?', type:'select', options:['No','Partially','Yes'], weight:1 },
    { id: 'shelf',   q:'Shelf life validated?', type:'select', options:['No','Some tests','Validated'], weight:1 },
    { id: 'capacity',q:'Weekly processing capacity (kg)?', type:'range', min:0, max:2000, step:100, weight:1 },
  ],
  Buyer: [
    { id: 'orders',  q:'Typical order size (kg)?', type:'range', min:0, max:500, step:25, weight:1 },
    { id: 'delivery',q:'Preferred delivery windows per week?', type:'select', options:['1','2','3+'], weight:1 },
    { id: 'terms',   q:'Payment terms you can support?', type:'select', options:['COD','7 days','14+ days'], weight:1 },
    { id: 'trace',   q:'Require farm traceability?', type:'select', options:['Nice to have','Preferred','Required'], weight:1 },
  ]
}
export const extraQuestions = [
  { id:'marketing', q:'Do you have product photos & spec sheet?', type:'select', options:['No','Some','Yes'], weight:0.5 },
  { id:'logistics', q:'Access to reliable transport?', type:'select', options:['No','Sometimes','Yes'], weight:0.75 },
  { id:'digital',   q:'Comfortable using WhatsApp/Email for orders?', type:'select', options:['No','Somewhat','Yes'], weight:0.5 },
  { id:'goals',     q:'Primary goal this quarter?', type:'select', options:['Sales','Packaging','Certifications','Supply'], weight:0 }
]