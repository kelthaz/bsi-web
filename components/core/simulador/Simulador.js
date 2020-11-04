import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import Select from '../../shared/select/Select';
import Slider from '../../shared/slider/Slider';
import styles from './simulador.module.scss';
import mexicanWeightFormatter from '../../../helpers/moneyFormatter';
import { seleccionOpcion } from '../../../constants/errors';
import { updateDataSimulador } from '../../../redux/actions/simulador';

const Simulador = ({ handleSimular }) => {
  const dispatch = useDispatch();
  const { monto, plazo, periodicidad, aniosEmpresa, ventasAnio } = useSelector((state) => state.simulador);
  const itemsPaymentMonths = ['12 meses', '18 meses', '24 meses', '30 meses', '36 meses'];
  const itemsPaymentTimes = ['Mensuales', 'Bimestrales'];
  const itemsCompanyTime = ['Más de 2 años', 'Menos de 2 años'];
  const itemsSalesYear = ['Más de $2 MDP', 'Menos de $2 MDP'];

  const formulario = useFormik({
    initialValues: {
      monto,
      plazo,
      periodicidad,
      aniosEmpresa,
      ventasAnio,
    },
    validationSchema: Yup.object({
      monto: Yup.number(),
      plazo: Yup.string().required(seleccionOpcion),
      periodicidad: Yup.string().required(seleccionOpcion),
      aniosEmpresa: Yup.string().required(seleccionOpcion),
      ventasAnio: Yup.string(),
    }),
    onSubmit: (values) => {
      dispatch(
        updateDataSimulador({
          showResult: true,
          ...values,
        })
      );
      handleSimular();
      // alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="container card-simple-white-shadow p-lg-5 p-md-4 p-sm-2 p-xs-2">
      <form onSubmit={formulario.handleSubmit} noValidate>
        <div className="flex-column-center-config">
          <h3 className="color-blue-storm">¿Cuánto dinero necesitas?</h3>
          <p>
            <span className="body2 color-gray">Necesito </span>
            <span className="input2 color-gray-dark">{mexicanWeightFormatter(formulario.values.monto)}</span>
          </p>
        </div>

        <div className="pb-4">
          <Slider name="monto" formulario={formulario} min={300000} max={12000000} step={100000} />
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12">
            <p className="sub color-blue-storm text-lg-left text-md-left text-sm-center text-xs-center px-md-0 px-sm-5 px-xs-5">
              ¿En cuántos meses quieres pagarlo?
            </p>
            <div className="row no-gutters ">
              <div className="col-lg-4 col-md-5 d-none d-md-block pt-2">
                <span className="body2 color-gray">Quiero pagarlo en</span>
              </div>
              <div className="col-lg-8 col-md-7 col-xs-12 col-sm-12">
                <Select
                  label="Seleccione..."
                  name="plazo"
                  formulario={formulario}
                  size="small"
                  items={itemsPaymentMonths}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12">
            <p className="sub color-blue-storm text-lg-left text-md-left text-sm-center text-xs-center px-md-0 px-sm-5 px-xs-5">
              ¿Cómo quieres que sean tus plazos?
            </p>
            <div className="row no-gutters ">
              <div className="col-lg-4 col-md-5 d-none d-md-block pt-2">
                <span className="body2 color-gray">Quiero plazos</span>
              </div>
              <div className="col-lg-8 col-md-7 col-xs-12 col-sm-12">
                <Select
                  label="Seleccione..."
                  name="periodicidad"
                  formulario={formulario}
                  size="small"
                  items={itemsPaymentTimes}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12">
            <p className="sub color-blue-storm text-lg-left text-md-left text-sm-center text-xs-center px-md-0 px-sm-5 px-xs-5">
              ¿Cuál es la antigüedad de tu empresa?
            </p>
            <div className="row no-gutters ">
              <div className="col-lg-4 col-md-5 d-none d-md-block pt-2">
                <span className="body2 color-gray">Mi empresa tiene</span>
              </div>
              <div className="col-lg-8 col-md-7 col-xs-12 col-sm-12">
                <Select
                  label="Seleccione..."
                  name="aniosEmpresa"
                  formulario={formulario}
                  size="small"
                  items={itemsCompanyTime}
                />
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12">
            <p className="sub color-blue-storm text-lg-left text-md-left text-sm-center text-xs-center px-md-0 px-sm-5 px-xs-5">
              ¿Cuánto vendes anualmente?
            </p>
            <div className="row no-gutters ">
              <div className="col-lg-4 col-md-5 d-none d-md-block pt-2">
                <span className="body2 color-gray">Al año vendo</span>
              </div>
              <div className="col-lg-8 col-md-7 col-xs-12 col-sm-12">
                <Select
                  label="Seleccione..."
                  name="ventasAnio"
                  formulario={formulario}
                  size="small"
                  items={itemsSalesYear}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12 order-lg-first order-md-first order-sm-last order-xs-last mb-3">
            <div className={styles['config-flex-first-button']}>
              <button type="button" className="btn-medium-secondary">
                Retoma tu proceso
              </button>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12 order-lg-last order-md-last order-sm-first order-xs-first mb-3">
            <div className={styles['config-flex-second-button']}>
              <button type="submit" className="btn-medium" disabled={!formulario.isValid}>
                Simula tu crédito
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

Simulador.propTypes = {
  handleSimular: PropTypes.func,
};

Simulador.defaultProps = {
  handleSimular: () => {},
};

export default Simulador;
