import React from 'react';

const ActivacionToken = () => {
  const ActivacionToken = 'ActivacionToken';
  return (
    <div className="container-fluid px-0">
      <div className="mt-4 mb-5">
        <h3 className="color-blue-storm">Activación de token</h3>
      </div>
      <div className="row">
        <div className="col-4">
          <div className="card-simple-blue-light">
            <div className="row">
              <div className="col-12">
                <h2 className="mb-3 bot-line color-blue-storm sub mt-2">Cómo activar el token</h2>
                <p>
                  Sigue las instrucciones de la guía para registrar y activar tu token digital para el servicio de
                  EmpresaNet Plus.
                </p>
                <p> Recuerda que si tienes dudas puedes contactar a tu ejecutivo a través del chat.</p>
              </div>
            </div>
            <div className="row  justify-content-end mt-3 mr-3">
              <button type="submit" className="btn-medium">
                Descargar
              </button>
            </div>
          </div>
        </div>
        <div className="col-6">Componente faltante</div>
      </div>
    </div>
  );
};

export default ActivacionToken;
