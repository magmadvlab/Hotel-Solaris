export const checkinFAQ_IT = {
  // Keywords rimangono invariate perché sono termini generici per il check-in
  keywords: [
    'check-in', 'checkin', 'orario', 'ora', 'quando', 'presto', 'tempo', 'inizio', 
    'registrazione', 'arrivo', 'anticipato', 'prenotazione', 'posso', 'a che ora', 
    'quanto tempo', 'checkin prima', 'a che ora si entra', 'orario ingresso', 
    'quando entrare', 'quando posso arrivare', 'venire presto', 'inizio soggiorno', 
    'check-in presto', 'checkin anticipato', 'checkin camera', 'camera pronta quando',
    'orario check-in', 'a che ora è il check-in', 'quando è il check-in', 'check-in?', 
    'quando arrivo', 'a che ora il check in', 'inizio camera', 'posso fare il check-in', 
    'quando posso fare il check-in'
  ],
  questions: {
    'A che ora posso fare il check-in?': {
      answer: 'Il check-in è disponibile dopo le 16:30. Possiamo consegnare le camere anche dopo mezzogiorno se sono già pronte. Per garantire un arrivo senza problemi, vi consigliamo di avvisare la portineria in anticipo.',
      tags: ['check-in', 'orari', 'arrivo', 'quando', 'tempo', 'inizio', 'a che ora si entra?', 'quando posso arrivare?', 'posso arrivare presto?', 'checkin anticipato?', 'a che ora posso entrare?']
    },
    'Quando posso entrare in camera?': {
      answer: 'Potete entrare in camera dopo aver effettuato il check-in.',
      tags: ['camera', 'orari', 'entrata', 'check-in', 'bagagli', 'registrazione', 'quando entro?', 'posso entrare prima?', 'a che ora consegnano la camera?', 'camera pronta quando?', 'checkin anticipato camera?']
    },
    'Posso arrivare prima del check-in?': {
      answer: 'Sì, è possibile arrivare prima. Si deve avvisare in anticipo la portineria.',
      tags: ['arrivo', 'anticipato', 'bagagli', 'check-in', 'prima', 'inizio', 'arrivare prima?', 'posso venire prima?', 'check-in anticipato?', 'a che ora posso arrivare?', 'checkin prima camera?']
    },
    'Cosa devo fare se arrivo tardi?': {
      answer: 'Gli arrivi dopo le 23:00 devono informare in anticipo la portineria, che è aperta dalle 08:00 alle 23:00, 7 giorni su 7.',
      tags: ['arrivo', 'tardi', 'ritardo', 'check-in', 'registrazione', 'arrivo notturno?', 'check-in serale?', 'venire tardi?', 'checkin di notte?', 'checkin fuori orario?']
    },
    'Cosa serve per il check-in?': {
      answer: 'Per il check-in servono i documenti di tutti gli ospiti.',
      tags: ['check-in', 'documenti', 'procedure', 'pagamenti', 'registrazione', 'cosa devo portare?', 'serve documento?', 'documento per entrare?', 'prenotazione necessaria?', 'cosa mi serve per checkin?']
    }
  }
};
