import React from 'react';
import CardBackOfficesSmall from '../../../shared/back-office-card-small/BackOfficeCardSmall';
import Tabla from '../../../shared/tabla/Tabla';
import SvgPMBackOffice from '../../../../../svgs/SvgPMBackOffice';
import SvgPFAEBackOffice from '../../../../../svgs/SvgPFAEBackOffice';
import SvgRevisionBackOffice from '../../../../../svgs/SvgRevisionBackOffice';

const SupervisorPLDTablero = () => {
  const COLUMNS = [
    {
      name: 'Nombre',
      selector: 'nombre',
      sortable: true,
    },
    {
      name: 'Persona',
      selector: 'persona',
      sortable: true,
    },
    {
      name: 'Relacionados por revisar',
      selector: 'relacionados',
      sortable: true,
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row mt-4 pl-3">
        <h3 className="color-blue-storm pr-3">Mi tablero</h3>
        <p className="color-blue-storm body2 mt-2">Supervisor PLD</p>
      </div>
      <div className="row mt-2">
        <div className="col-2">
          <div className="col-6 ml-3 pl-0 pb-2">
            <CardBackOfficesSmall title="2" subTitle="Total de casos por revisar " />
          </div>
          <div className="col-12 mt-3 ml-3 pl-0">
            <CardBackOfficesSmall title="2" subTitle="Total de casos analiados" iconoLista={false} />
          </div>
          <div className="col-6 mt-4 ml-3 pl-0">
            <CardBackOfficesSmall title="11:39 m." subTitle="Tiempo promedio de analistas en tarea" yellow />
          </div>
        </div>
        <div className="col-10 pl-4">
          <div className="card-simple-blue-light pb-0">
            <div className="card-simple-blue-light pt-0 pb-1 px-0">
              <h4 className="pb-2 color-blue-storm  bot-line">Indicadores del proceso de PLD</h4>
            </div>
            <div className="row">
              <div className="col-4">
                <div className="row">
                  <div className="col-1">
                    <SvgPMBackOffice />
                  </div>
                  <div className="col-md-7">
                    <h4 className="color-blue-night">14</h4>
                    <span className="body3 color-gray">Personas morales aprobadas</span>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="row">
                  <div className="col-1">
                    <SvgPMBackOffice />
                  </div>
                  <div className="col-7">
                    <h4 className="color-blue-night">34</h4>
                    <span className="body3 color-gray">Personas morales rechazadas</span>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="row">
                  <div className="col-1">
                    <SvgRevisionBackOffice />
                  </div>
                  <div className="col-8">
                    <h4 className="color-blue-night">OFAC</h4>
                    <span className="body3 color-gray">Lista negra más recurrente </span>
                  </div>
                </div>
              </div>

              <div className="col-4 mt-4">
                <div className="row">
                  <div className="col-1">
                    <SvgPFAEBackOffice />
                  </div>
                  <div className="col-7">
                    <h4 className="color-blue-night">48</h4>
                    <span className="body3 color-gray">PFAE aprobadas</span>
                  </div>
                </div>
              </div>
              <div className="col-4 mt-4 mb-5">
                <div className="row">
                  <div className="col-1">
                    <SvgPFAEBackOffice />
                  </div>
                  <div className="col-8">
                    <h4 className="color-blue-night">23</h4>
                    <span className="body3 color-gray">PFAE rechazadas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className="color-blue-storm pr-3 mt-3">Prospectos por revisar</h3>
        <div className="table-margin mb-4">
          <Tabla
            columns={COLUMNS}
            data={[
              {
                nombre: 'Fernanda Rodriguez',
                persona: 'PFAE',
                relacionados: '4',
              },
              {
                nombre: 'Alberto Abad Gómez',
                persona: 'Moral',
                relacionados: '2',
              },
              {
                nombre: 'Paletas S.A.',
                persona: 'Moral',
                relacionados: '4',
              },
              {
                nombre: 'Diana Flores Cantú',
                persona: 'Moral',
                relacionados: '5',
              },
            ]}
          />
        </div>
        <div className="footer-paginator">
          <div className="footer">
            <div className="float-right mb-4">
              <a className="link pb-4" href="/nuevos-componentes/tabla-casos-pld">
                Ver todos los casos
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupervisorPLDTablero;
