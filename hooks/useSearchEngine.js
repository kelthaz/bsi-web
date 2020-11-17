import { useEffect } from 'react';

const originalData = [
  { redirect: '/credito-pyme', text: 'Crédito Digital Pyme' },
  { redirect: '/credito-pyme', text: 'Nuestro crédito' },
  { redirect: '/requisitos', text: 'Requisitos para un Crédito Simple PyME' },
  { redirect: '/requisitos', text: 'Requisitos para una cuenta BanCoppel' },
  { redirect: '/simulador', text: 'Simulador' },
  { redirect: '/beneficios', text: 'Beneficios' },
  { redirect: '/ayuda', text: 'Centro de ayuda' },
  { redirect: '/aviso-privacidad', text: 'Aviso de privacidad' },
  { redirect: 'https://www.bancoppel.com/acerca_bancoppel/faq.html', text: 'Preguntas frecuentes', newTab: true },
  { redirect: 'https://www.bancoppel.com/acerca_bancoppel/faq.html', text: 'FAQ', newTab: true },
  { redirect: 'https://www.bancoppel.com/ahorro_bcopp/cuenta_efectiva.html', text: 'Cuenta efectiva', newTab: true },
];

const useSearchEngine = (value, setData) => {
  useEffect(() => {
    if (value.length > 3) {
      setData(
        originalData.filter(({ text }) => {
          const listData = text
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase();
          const valData = value
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase();
          return listData.includes(valData);
        })
      );
    } else {
      setData([]);
    }
  }, [value]);
};

export default useSearchEngine;