import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import styles from './indicadores.module.scss';

const Indicadores = () => {
  const [editorState, setEditorState] = useState('');

  return (
    <div className="col-12 card-simple-blue-light">
      <div className="row">
        <div className="col-2">
          <div>
            <Bar
              data={{
                labels: ['Días oficiales', 'Días reales'],
                datasets: [{ label: 'Días', data: [30, 14], backgroundColor: ['#225aa7', '#81c1ea'] }],
              }}
              height={100}
              width={100}
              options={{
                scales: {
                  x: {
                    display: false,
                  },
                  y: {
                    display: false,
                  },
                },
                plugins: {
                  legend: {
                    display: false,
                  },
                },
              }}
            />
          </div>
          <span className="row justify-content-md-center color-gray">Onboarding</span>
        </div>
        <div className="col-2">
          <div>
            <Bar
              data={{
                labels: ['Días oficiales', 'Días reales'],
                datasets: [{ label: 'Días', data: [28, 33], backgroundColor: ['#225aa7', '#81c1ea'] }],
              }}
              height={100}
              width={100}
              options={{
                scales: {
                  x: {
                    display: false,
                  },
                  y: {
                    display: false,
                  },
                },
                plugins: {
                  legend: {
                    display: false,
                  },
                },
              }}
            />
          </div>
          <span className="row justify-content-md-center color-gray">Seguimiento</span>
        </div>
        <div className="col-2">
          <div>
            <Bar
              data={{
                labels: ['Días oficiales', 'Días reales'],
                datasets: [{ label: 'Días', data: [2, 4], backgroundColor: ['#225aa7', '#81c1ea'] }],
              }}
              height={100}
              width={100}
              options={{
                scales: {
                  x: {
                    display: false,
                  },
                  y: {
                    display: false,
                  },
                },
                plugins: {
                  legend: {
                    display: false,
                  },
                },
              }}
            />
          </div>
          <span className="row justify-content-md-center color-gray">Juridico</span>
        </div>
        <div className="col-2">
          <div>
            <Bar
              data={{
                labels: ['Días oficiales', 'Días reales'],
                datasets: [{ label: 'Días', data: [2, 14], backgroundColor: ['#225aa7', '#81c1ea'] }],
              }}
              height={100}
              width={100}
              options={{
                scales: {
                  x: {
                    display: false,
                  },
                  y: {
                    display: false,
                  },
                },
                plugins: {
                  legend: {
                    display: false,
                  },
                },
              }}
            />
          </div>
          <span className="row justify-content-md-center color-gray">Medios de pago</span>
        </div>
        <div className="col-2">
          <div>
            <Bar
              data={{
                labels: ['Días oficiales', 'Días reales'],
                datasets: [{ label: 'Días', data: [30, 14], backgroundColor: ['#225aa7', '#81c1ea'] }],
              }}
              height={100}
              width={100}
              options={{
                scales: {
                  x: {
                    display: false,
                  },
                  y: {
                    display: false,
                  },
                },
                plugins: {
                  legend: {
                    display: false,
                  },
                },
              }}
            />
          </div>
          <span className="row justify-content-md-center color-gray">Mesa de control</span>
        </div>
        <div className="col-2">
          <div>
            <Bar
              data={{
                labels: ['Días oficiales', 'Días reales'],
                datasets: [{ label: 'Días', data: [30, 14], backgroundColor: ['#225aa7', '#81c1ea'] }],
              }}
              height={100}
              width={100}
              options={{
                scales: {
                  x: {
                    display: false,
                  },
                  y: {
                    display: false,
                  },
                },
                plugins: {
                  legend: {
                    display: false,
                  },
                },
              }}
            />
          </div>
          <span className="row justify-content-md-center color-gray">Dictamen PLD</span>
        </div>
      </div>
    </div>
  );
};

export default Indicadores;
