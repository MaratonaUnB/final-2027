export const site = {
  name: 'Final Brasileira da Maratona SBC de Programação 2027',
  shortName: 'Maratona SBC 2027',
  description:
    'Final Brasileira da Maratona SBC de Programação 2027, em Brasília — DF.',
  locale: 'pt-BR',
  city: 'Brasília — DF',
  venue: 'Universidade de Brasília (UnB)',
  // Fuso de Brasília (UTC-3). Ajustar se o horário oficial de abertura mudar.
  startsAt: '2027-09-11T09:00:00-03:00',
  endsAt: '2027-09-14T18:00:00-03:00',
} as const;

export const nav = [
  { label: 'O evento', href: '/evento' },
  { label: 'Programação', href: '/programacao' },
  { label: 'Local', href: '/local' },
  { label: 'Contato', href: '/contato' },
];
