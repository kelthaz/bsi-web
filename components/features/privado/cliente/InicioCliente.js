import React from 'react';

const InicioCliente = () => {
  const inicio = 'inicio';
  return (
    <div className="container">
      <div className="row" style={{ height: '2500px' }}>
        <div className="col-6" style={{ backgroundColor: 'red' }}>
          {inicio}
        </div>
        <div className="col-6" style={{ backgroundColor: 'blue' }}>
          {inicio}
        </div>
      </div>
    </div>
  );
};

export default InicioCliente;
