import { useState, useEffect } from 'react';
import SimpleBanner from '../../components/shared/banners/simple-banner/SimpleBanner';
import Select from '../../components/shared/select/Select';
import Slider from '../../components/shared/slider/Slider';
import styles from './simulador.module.scss';
import Modal from '../../components/shared/modal/Modal';

export const Simulador = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [valueSlider, setValueSlider] = useState(2000000);
  const [minValue, setMinValue] = useState(0)
  const [descriptionValue, setDescriptionValue] = useState('')
  const items = ['12 meses', '18 meses', '24 meses', '30 meses', '36 meses'];
  const itemsPaymentTimes = ['Mensuales', 'Bimestrales'];
  const companiesTime = ['Más de 2 años', 'Menos de 2 años'];
  const salesYear = ['Más de $2 MDP', 'Menos de $2 MDP'];

  const [item, setItem] = useState('Seleccione...');
  const [itemsPaymentTime, setItemPayment] = useState('Seleccione...');
  const [itemsPaymentTimeResult, setItemPaymentResult] = useState('');
  const [companyTime, setItemCompany] = useState('Seleccione...');
  const [saleYear, setItemSale] = useState('Más de $2 MDP');

  const datos = [
    {
      id: 1,
      categoria: 'monto',
      parametrosCatalogo: [
        {
          descripcion: '$300,000.00',
          valor: 300000
        },
        {
          descripcion: '$400,000.00',
          valor: 400000
        },
        {
          descripcion: '$500,000.00',
          valor: 500000
        },
        {
          descripcion: '$600,000.00',
          valor: 600000
        },
        {
          descripcion: '$700,000.00',
          valor: 700000
        },
        {
          descripcion: '$800,000.00',
          valor: 800000
        },
        {
          descripcion: '$900,000.00',
          valor: 900000
        },
        {
          descripcion: '$1,000,000.00',
          valor: 1000000
        },
        {
          descripcion: '$1,100,000.00',
          valor: 1100000
        },
        {
          descripcion: '$1,200,000.00',
          valor: 1200000
        },
        {
          descripcion: '$1,300,000.00',
          valor: 1300000
        },
        {
          descripcion: '$1,400,000.00',
          valor: 1400000
        },
        {
          descripcion: '$1,500,000.00',
          valor: 1500000
        },
        {
          descripcion: '$1,600,000.00',
          valor: 1600000
        },
        {
          descripcion: '$1,700,000.00',
          valor: 1700000
        },
        {
          descripcion: '$1,800,000.00',
          valor: 1800000
        },
        {
          descripcion: '$1,900,000.00',
          valor: 1900000
        },
        {
          descripcion: '$2,000,000.00',
          valor: 2000000
        },
        {
          descripcion: '$2,100,000.00',
          valor: 2100000
        },
        {
          descripcion: '$2,200,000.00',
          valor: 2200000
        },
        {
          descripcion: '$2,300,000.00',
          valor: 2300000
        },
        {
          descripcion: '$2,400,000.00',
          valor: 2400000
        },
        {
          descripcion: '$2,500,000.00',
          valor: 2500000
        },
        {
          descripcion: '$2,600,000.00',
          valor: 2600000
        },
        {
          descripcion: '$2,700,000.00',
          valor: 2700000
        },
        {
          descripcion: '$2,800,000.00',
          valor: 2800000
        },
        {
          descripcion: '$2,900,000.00',
          valor: 2900000
        },
        {
          descripcion: '$3,000,000.00',
          valor: 3000000
        },
        {
          descripcion: '$3,100,000.00',
          valor: 3100000
        },
        {
          descripcion: '$3,200,000.00',
          valor: 3200000
        },
        {
          descripcion: '$3,300,000.00',
          valor: 3300000
        },
        {
          descripcion: '$3,400,000.00',
          valor: 3400000
        },
        {
          descripcion: '$3,500,000.00',
          valor: 3500000
        },
        {
          descripcion: '$3,600,000.00',
          valor: 3600000
        },
        {
          descripcion: '$3,700,000.00',
          valor: 3700000
        },
        {
          descripcion: '$3,800,000.00',
          valor: 3800000
        },
        {
          descripcion: '$3,900,000.00',
          valor: 3900000
        },
        {
          descripcion: '$4,000,000.00',
          valor: 4000000
        },
        {
          descripcion: '$4,100,000.00',
          valor: 4100000
        },
        {
          descripcion: '$4,200,000.00',
          valor: 4200000
        },
        {
          descripcion: '$4,300,000.00',
          valor: 4300000
        },
        {
          descripcion: '$4,400,000.00',
          valor: 4400000
        },
        {
          descripcion: '$4,500,000.00',
          valor: 4500000
        },
        {
          descripcion: '$4,600,000.00',
          valor: 4600000
        },
        {
          descripcion: '$4,700,000.00',
          valor: 4700000
        },
        {
          descripcion: '$4,800,000.00',
          valor: 4800000
        },
        {
          descripcion: '$4,900,000.00',
          valor: 4900000
        },
        {
          descripcion: '$5,000,000.00',
          valor: 5000000
        },
        {
          descripcion: '$5,100,000.00',
          valor: 5100000
        },
        {
          descripcion: '$5,200,000.00',
          valor: 5200000
        },
        {
          descripcion: '$5,300,000.00',
          valor: 5300000
        },
        {
          descripcion: '$5,400,000.00',
          valor: 5400000
        },
        {
          descripcion: '$5,500,000.00',
          valor: 5500000
        },
        {
          descripcion: '$5,600,000.00',
          valor: 5600000
        },
        {
          descripcion: '$5,700,000.00',
          valor: 5700000
        },
        {
          descripcion: '$5,800,000.00',
          valor: 5800000
        },
        {
          descripcion: '$5,900,000.00',
          valor: 5900000
        },
        {
          descripcion: '$6,000,000.00',
          valor: 6000000
        },
        {
          descripcion: '$6,100,000.00',
          valor: 6100000
        },
        {
          descripcion: '$6,200,000.00',
          valor: 6200000
        },
        {
          descripcion: '$6,300,000.00',
          valor: 6300000
        },
        {
          descripcion: '$6,400,000.00',
          valor: 6400000
        },
        {
          descripcion: '$6,500,000.00',
          valor: 6500000
        },
        {
          descripcion: '$6,600,000.00',
          valor: 6600000
        },
        {
          descripcion: '$6,700,000.00',
          valor: 6700000
        },
        {
          descripcion: '$6,800,000.00',
          valor: 6800000
        },
        {
          descripcion: '$6,900,000.00',
          valor: 6900000
        },
        {
          descripcion: '$7,000,000.00',
          valor: 7000000
        },
        {
          descripcion: '$7,100,000.00',
          valor: 7100000
        },
        {
          descripcion: '$7,200,000.00',
          valor: 7200000
        },
        {
          descripcion: '$7,300,000.00',
          valor: 7300000
        },
        {
          descripcion: '$7,400,000.00',
          valor: 7400000
        },
        {
          descripcion: '$7,500,000.00',
          valor: 7500000
        },
        {
          descripcion: '$7,600,000.00',
          valor: 7600000
        },
        {
          descripcion: '$7,700,000.00',
          valor: 7700000
        },
        {
          descripcion: '$7,800,000.00',
          valor: 7800000
        },
        {
          descripcion: '$7,900,000.00',
          valor: 7900000
        },
        {
          descripcion: '$8,000,000.00',
          valor: 8000000
        },
        {
          descripcion: '$8,100,000.00',
          valor: 8100000
        },
        {
          descripcion: '$8,200,000.00',
          valor: 8200000
        },
        {
          descripcion: '$8,300,000.00',
          valor: 8300000
        },
        {
          descripcion: '$8,400,000.00',
          valor: 8400000
        },
        {
          descripcion: '$8,500,000.00',
          valor: 8500000
        },
        {
          descripcion: '$8,600,000.00',
          valor: 8600000
        },
        {
          descripcion: '$8,700,000.00',
          valor: 8700000
        },
        {
          descripcion: '$8,800,000.00',
          valor: 8800000
        },
        {
          descripcion: '$8,900,000.00',
          valor: 8900000
        },
        {
          descripcion: '$9,000,000.00',
          valor: 9000000
        },
        {
          descripcion: '$9,100,000.00',
          valor: 9100000
        },
        {
          descripcion: '$9,200,000.00',
          valor: 9200000
        },
        {
          descripcion: '$9,300,000.00',
          valor: 9300000
        },
        {
          descripcion: '$9,400,000.00',
          valor: 9400000
        },
        {
          descripcion: '$9,500,000.00',
          valor: 9500000
        },
        {
          descripcion: '$9,600,000.00',
          valor: 9600000
        },
        {
          descripcion: '$9,700,000.00',
          valor: 9700000
        },
        {
          descripcion: '$9,800,000.00',
          valor: 9800000
        },
        {
          descripcion: '$9,900,000.00',
          valor: 9900000
        },
        {
          descripcion: '$10,000,000.00',
          valor: 10000000
        },
        {
          descripcion: '$10,100,000.00',
          valor: 10100000
        },
        {
          descripcion: '$10,200,000.00',
          valor: 10200000
        },
        {
          descripcion: '$10,300,000.00',
          valor: 10300000
        },
        {
          descripcion: '$10,400,000.00',
          valor: 10400000
        },
        {
          descripcion: '$10,500,000.00',
          valor: 10500000
        },
        {
          descripcion: '$10,600,000.00',
          valor: 10600000
        },
        {
          descripcion: '$10,700,000.00',
          valor: 10700000
        },
        {
          descripcion: '$10,800,000.00',
          valor: 10800000
        },
        {
          descripcion: '$10,900,000.00',
          valor: 10900000
        },
        {
          descripcion: '$11,000,000.00',
          valor: 11000000
        },
        {
          descripcion: '$11,100,000.00',
          valor: 11100000
        },
        {
          descripcion: '$11,200,000.00',
          valor: 11200000
        },
        {
          descripcion: '$11,300,000.00',
          valor: 11300000
        },
        {
          descripcion: '$11,400,000.00',
          valor: 11400000
        },
        {
          descripcion: '$11,500,000.00',
          valor: 11500000
        },
        {
          descripcion: '$11,600,000.00',
          valor: 11600000
        },
        {
          descripcion: '$11,700,000.00',
          valor: 11700000
        },
        {
          descripcion: '$11,800,000.00',
          valor: 11800000
        },
        {
          descripcion: '$11,900,000.00',
          valor: 11900000
        },
        {
          descripcion: '$12,000,000.00',
          valor: 12000000
        }
      ]
    },
    {
      id: 2,
      categoria: 'plazo',
      parametrosCatalogo: [
        {
          descripcion: '12 meses',
          valor: 12
        },
        {
          descripcion: '18 meses',
          valor: 18
        },
        {
          descripcion: '24 meses',
          valor: 24
        },
        {
          descripcion: '30 meses',
          valor: 30
        },
        {
          descripcion: '36 meses',
          valor: 36
        }
      ]
    },
    {
      id: 3,
      categoria: 'periodicidad',
      parametrosCatalogo: [
        {
          descripcion: 'Plazos Mensuales',
          valor: 1
        },
        {
          descripcion: 'Plazos Bimestrales',
          valor: 2
        }
      ]
    },
    {
      id: 4,
      categoria: 'antiguedad',
      parametrosCatalogo: [
        {
          descripcion: 'Menos de 2 años',
          valor: 1
        },
        {
          descripcion: 'Más de 2 años',
          valor: 2
        }
      ]
    },
    {
      id: 5,
      categoria: 'venta',
      parametrosCatalogo: [
        {
          descripcion: 'Menos de $2 MDP',
          valor: 1
        },
        {
          descripcion: 'Más de $2 MDP',
          valor: 2
        }
      ]
    }
  ];

  useEffect(() => {
    setMinValue(datos.[0].parametrosCatalogo.[0].valor)
    let filterValue = datos.[0].parametrosCatalogo.filter(param => {
      return param.valor === valueSlider
    });
    let setNewDescriptionValue = filterValue[0].descripcion;
    setDescriptionValue(setNewDescriptionValue)
  });
  
  const [resultState, setResulState] = useState(false);
  const [disabled, setDisabled] = useState(false)

  useEffect(() => {
    if (item === 'Seleccione...' ||  itemsPaymentTime === 'Seleccione...'  || companyTime === 'Seleccione...') {
      setDisabled(true);      
    } 
    else {
      setDisabled(false);
    }
  })
  
  return (
    <div>
      <div className="row justify-content-center">
          <Modal openModal={openModal} setOpenModal={setOpenModal}>
            <div className={`container px-xs-0 px-md-0`}>
              <div className="row justify-content-center mx-0 ">
              <div className={`px-3 col-md-12 col-xs-12`}>
              <h4 className={`${styles['title-input']}`}>Tu tabla de amortización</h4>

                <div className={` ${styles['text-container']}`}>Nuestros clientes son lo más importante para nosotros, por lo que siempre estarás asesorado y acompañado por nuestro equipo para cualquiera de tus dudas o necesidades. Ya sea por teléfono, correo electrónico o chat siempre estaremos pendientes de ti.</div>
              </div>
                <div className={`px-0 col-md-12 col-xs-12 mt-4 ${styles['modal-container']}`}>
                  <table >
                    <thead className={`${styles['thead']}`}>
                      <tr>
                        <th className={` ${styles['th']}`}>Num. Amort.</th>
                        <th className={` ${styles['th']}`}>Fecha</th>
                        <th className={` ${styles['th']}`}>Capital</th>
                        <th className={` ${styles['th']}`}>Intereses</th>
                        <th className={` ${styles['th']}`}>Saldo</th>
                        <th className={` ${styles['th']}`}>Pago Mensual</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                          <td className={`body2 ${styles['td']}`}>Disposición</td>
                          <td className={`body2 ${styles['td']}`}>22/Feb/2020</td>
                          <td className={`body2 ${styles['td']}`}>-</td>
                          <td className={`body2 ${styles['td']}`}>-</td>
                          <td className={`body2 ${styles['td']}`}>11,791,126.63</td>
                          <td className={`body2 ${styles['td']}`}>493,272.54</td>
                      </tr>
                      <tr>
                        <td className={`${styles['td']}`}>1</td>
                        <td className={`${styles['td']}`}>22/Mar/2020</td>
                        <td className={`${styles['td']}`}>208,873.37</td>
                        <td className={`${styles['td']}`}>208,873.37</td>
                        <td className={`${styles['td']}`}>11,791,126.63</td>
                        <td className={`${styles['td']}`}>493,272.54</td>
                      </tr>
                      <tr>
                        <td className={`${styles['td']}`}>2</td>
                        <td className={`${styles['td']}`}>22/Abr/2020</td>
                        <td className={`${styles['td']}`}>208,873.37</td>
                        <td className={`${styles['td']}`}>208,873.37</td>
                        <td className={`${styles['td']}`}>11,791,126.63</td>
                        <td className={`${styles['td']}`}>493,272.54</td>
                      </tr>
                      <tr>
                        <td className={`${styles['td']}`}>3</td>
                        <td className={`${styles['td']}`}>22/May/2020</td>
                        <td className={`${styles['td']}`}>208,873.37</td>
                        <td className={`${styles['td']}`}>208,873.37</td>
                        <td className={`${styles['td']}`}>11,791,126.63</td>
                        <td className={`${styles['td']}`}>493,272.54</td>
                      </tr>
                      <tr>
                        <td className={`${styles['td']}`}>4</td>
                        <td className={`${styles['td']}`}>22/Jun/2020</td>
                        <td className={`${styles['td']}`}>208,873.37</td>
                        <td className={`${styles['td']}`}>208,873.37</td>
                        <td className={`${styles['td']}`}>11,791,126.63</td>
                        <td className={`${styles['td']}`}>493,272.54</td>
                      </tr>
                      
                    </tbody>
                  </table>
              </div>
              <div className="col-md-1 px-md-0"/>
                  <div className="col-md-12 mt-3  text-center">
                    <button
                      type="button"
                      className={` ${menuOpen ? 'btn-medium-yellow' : 'btn-medium'}`}
                    >
                      Descargar tabla
                    </button>
                  </div>
                </div>
              </div>
          </Modal>
      </div>
      <SimpleBanner className="overflow-hidden">
        <div className="row justify-content-center">
          <div className={`col-auto my-auto ${styles['banner-title', 'title-mb']}`}>
            <h1 className={styles['color-white']}>¡TÚ DISEÑAS</h1>
            <h1 className={styles['color-blue-morning']}>TU CRÉDITO!</h1>
          </div>
        </div>
        <div className="row justify-content-center mx-0">
          <div className="col-md-8 col-xs-10">
            <div className={`body1 text-center ${styles['color-white']}`}>
              Elige el monto, plazo y pagos que más se adapte a ti y tu empresa
            </div>
          </div>
        </div>
        <div className="row justify-content-center mx-0 mt-4">
          <div className="col-md-8">
            <div className={`body2 text-center ${styles['color-white']}`}>
              Ten en cuenta que hay algunas zonas del país de donde no podrás solicitar un crédito PyME ni podrá residir
              tu Obligado Solidario.
            </div>
          </div>
        </div>
        <div className="row  justify-content-center mx-0 mb-5 mt-4">
          <button type="button" className={` btn-link ${styles['color-white']}`}>
            Conoce las zonas aquí
          </button>
        </div>
      </SimpleBanner>
      <div className={`container col-xs-11 col-md-8 px-xs-0 px-md-5 ${styles['simulator-info']}`}>
        <span className={styles['chunk-box']}></span>
        <span className={`d-block d-sm-none  ${styles['mobile-box-simulator']}`}></span>
        <div className={styles['simulator-content']}>
          <h1 className={` ${styles['title-top']}`}>¿Cuánto dinero necesitas?</h1>
          {itemsPaymentTimeResult}
          <div className="row mx-md-0 mb-5 mt-2">
            <div className="justify-content-center col-xs-12 col-sm-12 col-md-12 col-lg-12 mb-2">
              <div className="d-flex justify-content-center ">
                <div className={` col-xs-6 col-sm-6 col-md-6 col-lg-12 ${styles['value-side']}`}>
                  <div className="row justify-content-center ">
                    <div className={`d-none d-sm-block mr-md-4  ${styles['title-value-simulator']} `}>Necesito </div>
                    <p> {descriptionValue}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 px-xs-4 p-md-0 py-xs-0">
              <Slider value={valueSlider} setValue={setValueSlider}  min={minValue} max={12000000} step={100000} />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 mt-4 pr-0">
              <h1 className={`text-xs-center text-md-left  ${styles['title-input']}`}>¿En cuántos meses quieres pagarlo?</h1>

              <div className="d-flex align-items-start ">
                <div className={`col-xs-4 col-md-4 p-md-0	d-none d-md-block ${styles['input-text']}`}>Quiero pagarlo en</div>
                <div className="col-xs-12 col-md-7 p-md-0">
                  <Select item={item} setItem={setItem} items={items} />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 mt-4 ">
              <h2 className={`text-xs-center text-md-left ${styles['title-input']}`}>¿Cómo quieres que sean tus plazos?</h2>
              <div className="d-flex align-items-start ">
                <div className={`col-xs-4 col-md-4 p-md-0 d-none d-md-block  ${styles['input-text']}`}>Quiero plazos</div>
                <div className="col-xs-12 col-md-7 p-md-0">
                  <Select item={itemsPaymentTime} setItem={setItemPayment} items={itemsPaymentTimes} />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 mt-4 pr-0 ">
              <h2 className={`text-xs-center text-md-left  ${styles['title-input']}`}>¿Cuál es la antigüedad de tu empresa ?</h2>
              <div className="d-flex align-items-start ">
                <div className={`col-xs-4 col-md-4 p-md-0 d-none d-md-block ${styles['input-text']}`}>Mi empresa tiene</div>
                <div className="col-xs-12 col-md-7 p-md-0">
                  <Select item={companyTime} setItem={setItemCompany} items={companiesTime} />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 mt-4 ">
              <h2 className={`text-xs-center  text-md-left ${styles['title-input']}`}>¿Cuánto vendes anualmente?</h2>
              <div className="d-flex align-items-start ">
                <div className={`col-xs-4 col-sm-6 col-md-4 p-md-0 d-none d-md-block ${styles['input-text']}`}>Al año vendo</div>
                <div className="col-xs-12 col-sm-6 col-md-7 p-md-0">
                  <Select item={saleYear} setItem={setItemSale} items={salesYear} />
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mb-5 mt-4 ">
            <div className="order-xs-2 text-xs-center  order-md-1 mr-md-5 mr-lg-0 col-xs-12 col-sm-5 col-md-4 col-lg-3 mb-5 mr-xs-0 ">
              <button type="button" className={` ${menuOpen ? 'btn-medium-secondary-inverted' : 'btn-medium-secondary'}`}>
                Retoma tu proceso
              </button>
            </div>
            <div className="order-xs-1 text-xs-center order-md-2 col-xs-12 col-sm-5 col-md-4 col-lg-3 mb-3 ">
              <button
                type="button"
                onClick={() => setResulState(resultState => !resultState)}
                disabled={disabled}
                className={` ${menuOpen ? 'btn-medium-yellow' : 'btn-medium'}`}
              >
                Simula tu crédito
              </button>
            </div>
          </div>
        </div>
      </div>
      {resultState && (
        <div>
          <div className={`container col-sm-8 col-md-6 col-lg-6 px-0  ${styles['title-info']}`}>
            <div className="row justify-content">
              <div className="col-xs-12">
                <h2>TU CRÉDITO PYME</h2>
              </div>
              <div className="col-xs-1" />
              <div className="text-center col-xs-10">
                <p className={`${styles['sub-title']}`}>A continuación te presentamos el resultado de tu simulación:</p>{' '}
              </div>
            </div>
            <div className={`container ${styles['result-info']}`}>
              <div className="row mx-0 mb-4 mt-4">
                <div className="text-left order-md-1  col-xs-6 col-sm-6 col-md-6 col-lg-3">
                  <h1 className={styles['title-input']}>{descriptionValue}</h1>
                  <div className={styles['input-text']}>Solicitado</div>
                </div>
                <div className="text-left order-md-2 col-xs-6 col-sm-6 col-md-5 col-lg-3 ">
                  <h1 className={styles['title-input']}>25% anual</h1>
                  <div className={styles['input-text']}>Tasa ordinaria</div>
                </div>
                {/* <div className="text-left col-xs-6 col-sm-6 col-md-6 col-lg-3 mt-xs-3 mt-md-0">
                  <h1 className={styles['title-input']}>50%</h1>
                  <div className={styles['input-text']}>Tasa moratoria</div>
                </div> */}
                
                <div className="text-left order-md-3 col-xs-6 col-sm-6 col-md-6 col-lg-3 mt-xs-4 mt-md-4 mt-lg-0">
                  <h1 className={styles['title-input']}>{item}</h1>
                  <div className={styles['input-text']}>Plazo del crédito</div>
                </div>
                <div className="text-left order-md-4  order-5 col-xs-6 col-sm-6 col-md-3 col-lg-3 mt-xs-4 mt-md-4 mt-lg-0">
                  <h1 className={styles['title-input']}>29.10%</h1>
                  <div className={styles['input-text']}>CAT</div>
                </div>
                <div className="text-left order-md-5 col-xs-6 col-sm-6 col-md-6 col-lg-3 mt-xs-4 mt-md-4">
                  <h1 className={styles['title-input']}>2%</h1>
                  <div className={styles['input-text']}>Comisión por apertura</div>
                </div>
                <div className="text-left order-xs-4 order-md-5 col-xs-6 col-sm-6 col-md-6 col-lg-3 mt-xs-4 mt-md-4">
                  <h1 className={styles['title-input']}>
                    {itemsPaymentTime === 'Bimestrales' ? 'Bimestral' : itemsPaymentTime}
                  </h1>
                  <div className={styles['input-text']}>Esquema de pago</div>
                </div>
                <div className="text-left order-md-7 col-xs-6 col-sm-6 col-md-6 col-lg-3 mt-xs-4 mt-md-4">
                  <h1 className={styles['title-input']}>$ 31,25</h1>
                  <div className={styles['input-text']}>Pagos {itemsPaymentTime === 'Bimestrales' ? 'bimestrales' : itemsPaymentTime}</div>
                </div>

              </div>
            </div>
            <div className="row justify-content-center mx-0  mt-4">
              <button className="btn-link-blue-sky " type="button" onClick={() => setOpenModal(true)}>
                Mira tu tabla de amortización
              </button>
            </div>
          </div>
          <div className={'container col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
            <div className={`row  mx-0 mb-5 mt-2 `}>
              <div
                className={`col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-4 px-0 ${styles['resume-text']} ${styles['container-flex']}`}
              >
                <div className="col-md-1 col-lg-4 d-none d-md-block" />
                <div className="col-md-6 col-xs-9 pr-md-0 px-xs-1">
                  <p className="col-md-12 col-lg-10 col-xs-12  px-md-0 px-xs-0 mx-md-4 ml-md-4 ">
                    ¿Ya habías comenzado tu solicitud? <br></br> ¡Retómala aquí!
                  </p>
                  <button
                    className="col-xs-9 col-md-12 col-lg-7 btn-link-blue-sky mx-md-4 pl-xs-0 px-md-1  mr-md-4 mb-xs-5"
                    type="button"
                  >
                    Retoma tu proceso
                  </button>
                </div>
                <div className="col-md-2 mt-md-1 px-0">
                  <img alt="" src="/Sesion.png" />
                </div>
              </div>
              <div className={`col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-md-4 px-0 ${styles['container-flex']}`}>
                <div className="col-md-6 col-xs-9 px-xs-0">
                  <p className="d-none d-md-block mx-md-3 pr-md-0  mb-md-0 col-md-12 col-lg-12  ml-4">
                    ¿Te gusta este esquema de crédito? <br></br> ¡Inicia tu solicitud ahora!
                  </p>
                  <p className="d-block d-sm-none px-0 ml-md-0 mb-md-0 mt-xs-4 col-md-12 ml-2">
                    ¿Te gusta este esquema ? <br></br> ¡Inicia tu solicitud ahora!
                  </p>
                  <button
                    type="button"
                    className={`d-none d-md-block ml-md-4 col-md-12 col-lg-6 mt-3 ${
                      menuOpen ? 'btn-medium-yellow' : 'btn-medium'
                    }`}
                  >
                    Comienza tu solicitud
                  </button>
                  <button
                    type="button"
                    onClick={() => setResulState(resultState => !resultState)}
                    className={`d-block d-sm-none col-xs-8 col-md-8 mt-3 ml-xs-5 mt-xs-4 ${
                      menuOpen ? 'btn-medium-yellow' : 'btn-medium'
                    }`}
                  >
                    Solicitar mi crédito
                  </button>
                </div>
                <div className="col-md-6 col-sm-3 mt-md-0 mt-xs-4 px-0">
                  <img alt="" src="/Solicitud.svg" />
                </div>
              </div>
            </div>
            <div className={`row justify-content-center mb-md-4 `}>
              <div className="d-flex justify-content-center col-xs-12 col-sm-12 col-md-6 col-lg-4 mb-md-5 mb-xs-5">
                <h1 className={`${styles['last-title']}`}>
                  ¡Ya queremos saber qué grandes <br></br> &nbsp;planes tienes para tu negocio!
                </h1>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Simulador;
