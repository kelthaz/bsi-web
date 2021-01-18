import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';

import ResultSimulador from '../../../../core/simulador/ResultSimulador';
import ModalTablaAmortizacion from '../modal-tabla-amortizacion/ModalTablaAmortizacion';
import Particles from '../../../../shared/confetti/Confetti';

const AprobacionCuentaPersona = () => {
  const [openModal, setOpenModal] = useState(false);
  const { oferta: { conCuenta } } = useSelector((state) => state.solicitud);

  const resultSimuladorTabla = [
    { numeroAmortizacion: 'Disposición', fecha: '22/Ene/2020', capital: '-', interes: '-', saldo: '1,500,000.00', pagoMensual: '80,057.28' },
    { numeroAmortizacion: '1', fecha: '22/Feb/2020', capital: '48,807', interes: '31,250', saldo: '1,451,193.00', pagoMensual: '80,057.28' },
    { numeroAmortizacion: '2', fecha: '22/Mar/2020', capital: '48,807', interes: '31,250', saldo: '1,451,193.00', pagoMensual: '80,057.28' },
    { numeroAmortizacion: '3', fecha: '22/Abr/2020', capital: '48,807', interes: '31,250', saldo: '1,451,193.00', pagoMensual: '80,057.28' },
    { numeroAmortizacion: '4', fecha: '22/May/2020', capital: '48,807', interes: '31,250', saldo: '1,451,193.00', pagoMensual: '80,057.28' },
    { numeroAmortizacion: '5', fecha: '22/Jun/2020', capital: '48,807', interes: '31,250', saldo: '1,451,193.00', pagoMensual: '80,057.28' },
    { numeroAmortizacion: '6', fecha: '22/Jul/2020', capital: '48,807', interes: '31,250', saldo: '1,451,193.00', pagoMensual: '80,057.28' },
    { numeroAmortizacion: '7', fecha: '22/Ago/2020', capital: '48,807', interes: '31,250', saldo: '1,451,193.00', pagoMensual: '80,057.28' },
  ];

  const idTest = 1;
  const [particles, setParticles] = useState([]);

  const clean = (id) => {
    setParticles(particles.filter((_id) => _id !== id));
  };

  useEffect(() => {
    let id = idTest;
    id += 1;

    setParticles([...particles, id]);
    setTimeout(() => {
      clean(id);
    }, 5000);
  }, []);

  return (
    <div className="contedor-fixed">
      {particles.map((id) => (
        <Particles key={id} count={Math.floor(window.innerWidth / 20)} />
      ))}
      <ModalTablaAmortizacion
        dataSimulador={{ monto: 1500000, plazo: '24 meses', periodicidad: 'Bimestral  ' }}
        resultSimuladorTabla={resultSimuladorTabla}
        openModal={openModal} setOpenModal={setOpenModal}
      />
      <div className="contedor-solicitud">
        <div className="container p-0">
          <div className="row">
            <div className="col-12">
              <h1 className="color-blue-storm text-center">¡Felicidades, Alejandra!</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h3 className="text-center">Podrás recibir un crédito de</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h2 className="color-blue-storm text-center">$1,500,000.00</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <p className="body2 text-center">
                de los $2,000,000.00 que solicitaste
              </p>
            </div>
          </div>
          {!conCuenta &&
            <div className="row my-1">
              <div className="col-12">
                <p className="body2 text-center">
                  ¡Además te proporcionaremos una cuenta bancaria BanCoppel!
                </p>
              </div>
            </div>
          }
          <div className="row mx-xs-1 my-3">
            <ResultSimulador
              dataSimulador={{ monto: 1500000, plazo: {label: '24 meses'}, periodicidad: { label: 'Bimestral  '} }}
              resultSimulador={{ tasaOrdinaria: '25%', comisionApertura: '2%', cat: '29.1%', pago: '$31,250' }} />
          </div>
          <div className="row">
            <div className="col-12">
              <p className="overline">
                La TIIE con la que se calculará su crédito será la que calcule el Banco de México al
                día de la firma del contrato, por lo que la TIIE mostrada en la propuesta emitida por
                el motor será meramente informativa.
              </p>
            </div>
          </div>
          <div className="row p-lg-4 py-md-5 px-md-0 p-sm-4 no-gutters">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 py-xs-4 line-card">
              <div className="card-transparent-only-row">
                <button className="btn-link-arrow-right" type="button" onClick={() => setOpenModal(true)}>
                  Mira tu tabla de amortización
                </button>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 py-xs-4">
              <div className="card-transparent-only-row">
                <button className="btn-link-arrow-right" type="button">
                  Mira las condiciones de tu crédito
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center">
              <Link href="/solicitud/[tab]/[step]" as="/solicitud/oferta/formaliza">
                <button className="btn-medium" type="button">
                  Siguiente
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default AprobacionCuentaPersona;
