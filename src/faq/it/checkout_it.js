export const checkoutFAQ_IT = {
  // Keywords rimangono invariate perché sono termini generici per il check-out
  keywords: [
    'check-out', 'checkout', 'orario', 'ora', 'quando', 'tardi', 'ritardo', 'uscita', 'fine', 'partenza', 
    'lasciare', 'camera', 'stanza', 'reception', 'posso', 'a che ora', 'quanto tempo', 'checkout dopo', 
    'a che ora si esce', 'orario uscita', 'quando uscire', 'quando partire', 'a che ora lasciare', 
    'lasciare stanza', 'fine soggiorno', 'rimanere tardi', 'lasciare camera tardi', 'tenere stanza di più', 
    'ritardare uscita', 'prolungare soggiorno', 'uscire presto', 'uscire tardi', 'uscire dopo', 
    'quando devo lasciare', 'quando posso partire', 'uscire camera', 'late checkout', 'check-out ritardato',
    'quando il check out', 'a che ora il check out', 'orario per uscire', 'quando si esce', 
    'devo liberare la stanza', 'quando finisce il soggiorno', 'orario check-out', 'quando esco',
    'quando liberare stanza', 'quando bisogna uscire', 'a che ora lasciare la stanza', 'quando devo uscire',
    'posso partire tardi?', 'quando liberare la camera', 'orario per lasciare camera'
  ],
  questions: {
    'A che ora devo lasciare la stanza?': {
      answer: 'La camera deve essere liberata entro le 10:00 del giorno della partenza. Se c\'è la necessità di tenere i bagagli più a lungo, la reception offre un servizio gratuito di deposito.',
      tags: [
        'check-out', 'checkout', 'camera', 'orari', 'a che ora', 'uscita', 'lasciare stanza', 
        'quando devo lasciare', 'partenza', 'fine soggiorno', 'devo uscire', 'orario check-out', 
        'uscire camera', 'a che ora è il check-out', 'lasciare tardi', 'uscire dopo', 'orario per uscire'
      ]
    },
    'Posso tenere la camera più a lungo?': {
      answer: 'Sì. Si deve avvisare in anticipo la reception per organizzare un late check-out.',
      tags: [
        'check-out', 'ritardo', 'supplemento', 'orari', 'partenza', 'tardi', 'tenere stanza di più', 
        'posso rimanere più a lungo', 'rimanere tardi', 'checkout prolungato', 'quanto costa checkout ritardato'
      ]
    },
    'Posso lasciare l\'auto dopo il check-out?': {
      answer: 'L\'hotel offre un parcheggio esterno gratuito non custodito. Se abbiamo posti liberi nel parcheggio, la macchina si può lasciare anche dopo il check-out. È anche disponibile un parcheggio coperto a pagamento (15 euro al giorno o 70,00 euro a settimana).',
      tags: [
        'check-out', 'auto', 'parcheggio', 'uscita', 'fine', 'lasciare macchina', 'posso parcheggiare dopo', 
        'tenere parcheggio', 'macchina in parcheggio dopo checkout'
      ]
    }
  }
};
