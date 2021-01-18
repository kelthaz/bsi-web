import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Particles from '../../../../shared/confetti/Confetti';

const AprobacionContacto = () => {

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
      <div className="contedor-solicitud">
        <div className="container p-0 text-center">
          <div className="row">
            <div className="col-12 pb-3">
              <h2 className="color-blue-storm">¡Felicidades, Alejandra!</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <p className="body2">
                Hemos analizado tu solicitud y un ejecutivo se pondrá en contacto contigo a la
                brevedad al teléfono que nos proporcionaste para guiarte en la siguiente parte del proceso.
              </p>
            </div>
          </div>
          <div className="row pt-4">
            <div className="col-12 text-center">
              <Link href="/solicitud/[tab]/[step]" as="/solicitud/datos-personales/bienvenida">
                <button className="btn-medium" type="button">
                  Entendido
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AprobacionContacto;
