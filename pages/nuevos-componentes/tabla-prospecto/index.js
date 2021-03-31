import React from 'react';
import TablaProspecto from '../../../components/features/privado/shared/tabla-prospectos/TablaProspectos';
import Tab from '../../../components/shared/tab/Tab';
import TabItem from '../../../components/shared/tab/TabItem';

const TablaProspectoPag = () => (
  <div className="container-fluid">
    <div className="row">
      <Tab>
        <TabItem tab="Documentos por revisar" keyTab="1">
          <TablaProspecto data={[
              { nombre: 'Fernanda Rodriguez',  porRevisar: '3 documentos', estatus: 1, persona: 'PFAE',  tiempoEspera: '10 min', region: 'Norte' },
              { nombre: 'Daniela Fernanda',    porRevisar: '2 documentos', estatus: 2, persona: 'Moral', tiempoEspera: '2 días', region: 'Oeste' },
              { nombre: 'José Lima Rodríguez', porRevisar: '2 documentos', estatus: 1, persona: 'PFAE',  tiempoEspera: '3 días', region: 'Oeste' },
              { nombre: 'Alejandro Ramírez',   porRevisar: '3 documentos', estatus: 0, persona: 'PFAE',  tiempoEspera: '20 min', region: 'Norte' },
              { nombre: 'Mariana Nayeli',      porRevisar: '5 documentos', estatus: 1, persona: 'Moral', tiempoEspera: '6 hrs',  region: 'Oeste' },
              { nombre: 'Fernanda Rodriguez',  porRevisar: '3 documentos', estatus: 1, persona: 'PFAE',  tiempoEspera: '10 min', region: 'Norte' },
              { nombre: 'Daniela Fernanda',    porRevisar: '2 documentos', estatus: 2, persona: 'Moral', tiempoEspera: '2 días', region: 'Oeste' },
              { nombre: 'José Lima Rodríguez', porRevisar: '2 documentos', estatus: 1, persona: 'PFAE',  tiempoEspera: '3 días', region: 'Oeste' },
              { nombre: 'Alejandro Ramírez',   porRevisar: '3 documentos', estatus: 0, persona: 'PFAE',  tiempoEspera: '20 min', region: 'Norte' },
              { nombre: 'Mariana Nayeli',      porRevisar: '5 documentos', estatus: 1, persona: 'Moral', tiempoEspera: '6 hrs',  region: 'Oeste' },
              { nombre: 'Fernanda Rodriguez',  porRevisar: '3 documentos', estatus: 1, persona: 'PFAE',  tiempoEspera: '10 min', region: 'Norte' },
              { nombre: 'Daniela Fernanda',    porRevisar: '2 documentos', estatus: 2, persona: 'Moral', tiempoEspera: '2 días', region: 'Oeste' },
              { nombre: 'José Lima Rodríguez', porRevisar: '2 documentos', estatus: 1, persona: 'PFAE',  tiempoEspera: '3 días', region: 'Oeste' },
              { nombre: 'Alejandro Ramírez',   porRevisar: '3 documentos', estatus: 0, persona: 'PFAE',  tiempoEspera: '20 min', region: 'Norte' },
              { nombre: 'Mariana Nayeli',      porRevisar: '5 documentos', estatus: 1, persona: 'Moral', tiempoEspera: '6 hrs',  region: 'Oeste' },
              { nombre: 'Fernanda Rodriguez',  porRevisar: '3 documentos', estatus: 1, persona: 'PFAE',  tiempoEspera: '10 min', region: 'Norte' },
              { nombre: 'Daniela Fernanda',    porRevisar: '2 documentos', estatus: 2, persona: 'Moral', tiempoEspera: '2 días', region: 'Oeste' },
              { nombre: 'José Lima Rodríguez', porRevisar: '2 documentos', estatus: 1, persona: 'PFAE',  tiempoEspera: '3 días', region: 'Oeste' },
              { nombre: 'Alejandro Ramírez',   porRevisar: '3 documentos', estatus: 0, persona: 'PFAE',  tiempoEspera: '20 min', region: 'Norte' },
              { nombre: 'Mariana Nayeli',      porRevisar: '5 documentos', estatus: 1, persona: 'Moral', tiempoEspera: '6 hrs',  region: 'Oeste' },
              { nombre: 'Fernanda Rodriguez',  porRevisar: '3 documentos', estatus: 1, persona: 'PFAE',  tiempoEspera: '10 min', region: 'Norte' },
              { nombre: 'Daniela Fernanda',    porRevisar: '2 documentos', estatus: 2, persona: 'Moral', tiempoEspera: '2 días', region: 'Oeste' },
              { nombre: 'José Lima Rodríguez', porRevisar: '2 documentos', estatus: 1, persona: 'PFAE',  tiempoEspera: '3 días', region: 'Oeste' },
              { nombre: 'Alejandro Ramírez',   porRevisar: '3 documentos', estatus: 0, persona: 'PFAE',  tiempoEspera: '20 min', region: 'Norte' },
              { nombre: 'Mariana Nayeli',      porRevisar: '5 documentos', estatus: 1, persona: 'Moral', tiempoEspera: '6 hrs',  region: 'Oeste' },
              { nombre: 'Fernanda Rodriguez',  porRevisar: '3 documentos', estatus: 1, persona: 'PFAE',  tiempoEspera: '10 min', region: 'Norte' },
              { nombre: 'Daniela Fernanda',    porRevisar: '2 documentos', estatus: 2, persona: 'Moral', tiempoEspera: '2 días', region: 'Oeste' },
              { nombre: 'José Lima Rodríguez', porRevisar: '2 documentos', estatus: 1, persona: 'PFAE',  tiempoEspera: '3 días', region: 'Oeste' },
              { nombre: 'Alejandro Ramírez',   porRevisar: '3 documentos', estatus: 0, persona: 'PFAE',  tiempoEspera: '20 min', region: 'Norte' },
              { nombre: 'Mariana Nayeli',      porRevisar: '5 documentos', estatus: 1, persona: 'Moral', tiempoEspera: '6 hrs',  region: 'Oeste' }
            ]}
          />
        </TabItem>
        <TabItem tab="Documentos" keyTab="2" />
        <TabItem tab="Generar alta de cliente" keyTab="3" />
        <TabItem tab="Desembolso" keyTab="4" />
      </Tab>
    </div>
  </div>
);
export default TablaProspectoPag;
