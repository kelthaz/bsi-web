import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Select from '../../shared/select/Select';
import Slider from '../../shared/slider/Slider';
import styles from './simulador.module.scss';
import mexicanWeightFormatter from '../../../helpers/moneyFormatter';
import { seleccionOpcion } from '../../../constants/errors';
import { startUpdateDataSimulador, updateShowResultSimulador } from '../../../redux/actions/simulador';
import SvgPrimeraTextura from '../../svgs/texturas/SvgPrimeraTextura';
import SvgSegundaTextura from '../../svgs/texturas/SvgSegundaTextura';
import changeSelectModel from '../../../helpers/changeSelectModel';
import offsetTop from '../../../helpers/offsetTop';
import { INICIAR_SESION } from '../../../constants/routes/login/login';

const SelectorSimulador = ({ handleSimular, catalogo }) => {
  const dispatch = useDispatch();
  const {
    showResult,
    dataSimulador: { monto, plazo, periodicidad, aniosEmpresa, ventasAnio },
  } = useSelector((state) => state.simulador);
  const isFirstRun = useRef(true);

  const [montoItems, plazoItems, periodicidadItems, antiguedadItems, ventaItems] = catalogo;
  const [min, max, step] = montoItems.parametrosCatalogo;
  const itemsPaymentMonths = changeSelectModel('valor', 'descripcion', plazoItems.parametrosCatalogo);
  const itemsPaymentTimes = changeSelectModel('valor', 'descripcion', periodicidadItems.parametrosCatalogo);
  const itemsCompanyTime = changeSelectModel('valor', 'descripcion', antiguedadItems.parametrosCatalogo);
  const itemsSalesYear = changeSelectModel('valor', 'descripcion', ventaItems.parametrosCatalogo);

  const formulario = useFormik({
    initialValues: {
      monto,
      plazo,
      periodicidad,
      aniosEmpresa,
      ventasAnio: ventasAnio || itemsSalesYear[1],
    },
    validationSchema: Yup.object({
      monto: Yup.number(),
      plazo: Yup.object()
        .shape({
          value: Yup.string(),
          label: Yup.string(),
        })
        .nullable()
        .required(seleccionOpcion),
      periodicidad: Yup.object()
        .shape({
          value: Yup.string(),
          label: Yup.string(),
        })
        .nullable()
        .required(seleccionOpcion),
      aniosEmpresa: Yup.object()
        .shape({
          value: Yup.string(),
          label: Yup.string(),
        })
        .nullable()
        .required(seleccionOpcion),
      ventasAnio: Yup.object()
        .shape({
          value: Yup.string(),
          label: Yup.string(),
        })
        .nullable()
        .required(seleccionOpcion),
    }),
    onSubmit: (values) => {
      dispatch(
        startUpdateDataSimulador(
          {
            ...values,
          },
          handleSimular
        )
      );
    },
  });

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    if (showResult) {
      dispatch(updateShowResultSimulador());
    }
  }, [formulario.values]);

  return (
    <div className={styles['simulador-container']}>
      <div className="svg-textura-left-bottom">
        <SvgPrimeraTextura />
      </div>
      <div className="container p-0">
        <div className="card-simple-white-shadow p-lg-5 p-md-4 p-sm-2 p-xs-2">
          <form onSubmit={formulario.handleSubmit} noValidate>
            <div className="flex-column-center-config">
              <h3 className="color-blue-storm">¿Cuánto dinero necesitas?</h3>
              <p>
                <span className="input2 color-gray only-lg-inline">Necesito </span>
                <span className={`input2 color-blue-night ${styles['border-bottom-gray']}`}>
                  {mexicanWeightFormatter(formulario.values.monto.toString())}
                </span>
              </p>
            </div>

            <div className="pb-4">
              <Slider
                name="monto"
                min={min.valor}
                max={max.valor}
                step={step.valor}
                {...formulario.getFieldProps('monto')}
              />
            </div>

            <div className="row">
              <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12">
                <p className="sub color-blue-storm text-left">¿En cuántos meses quieres pagarlo?</p>
                <div className="row no-gutters ">
                  <div className="col-lg-6 col-md-8 d-none d-md-block pt-2">
                    <span className="input2 color-gray">Quiero pagarlo en</span>
                  </div>
                  <div className="col-lg-6 col-md-4 col-xs-12 col-sm-12">
                    <Select
                      name="plazo"
                      label="Seleccione..."
                      size="small"
                      items={itemsPaymentMonths}
                      blue
                      {...formulario.getFieldMeta('plazo')}
                      {...formulario.getFieldHelpers('plazo')}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12">
                <p className="sub color-blue-storm text-left">¿Cómo quieres los plazos de tu pago?</p>
                <div className="row no-gutters ">
                  <div className="col-lg-5 col-md-6 d-none d-md-block pt-2">
                    <span className="input2 color-gray">Quiero plazos</span>
                  </div>
                  <div className="col-lg-7 col-md-6 col-xs-12 col-sm-12">
                    <Select
                      name="periodicidad"
                      label="Seleccione..."
                      size="small"
                      items={itemsPaymentTimes}
                      blue
                      {...formulario.getFieldMeta('periodicidad')}
                      {...formulario.getFieldHelpers('periodicidad')}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12">
                <p className="sub color-blue-storm text-left">¿Cuál es la antigüedad de tu empresa?</p>
                <div className="row no-gutters ">
                  <div className="col-lg-6 col-md-7 d-none d-md-block pt-2">
                    <span className="input2 color-gray">Mi empresa tiene</span>
                  </div>
                  <div className="col-lg-6 col-md-5 col-xs-12 col-sm-12">
                    <Select
                      name="aniosEmpresa"
                      label="Seleccione..."
                      size="small"
                      items={itemsCompanyTime}
                      blue
                      {...formulario.getFieldMeta('aniosEmpresa')}
                      {...formulario.getFieldHelpers('aniosEmpresa')}
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12">
                <p className="sub color-blue-storm text-left">¿Cuánto vendes anualmente?</p>
                <div className="row no-gutters ">
                  <div className="col-lg-5 col-md-6 d-none d-md-block pt-2">
                    <span className="input2 color-gray">Al año vendo</span>
                  </div>
                  <div className="col-lg-7 col-md-6 col-xs-12 col-sm-12">
                    <Select
                      name="ventasAnio"
                      label="Seleccione..."
                      size="small"
                      items={itemsSalesYear}
                      blue
                      {...formulario.getFieldMeta('ventasAnio')}
                      {...formulario.getFieldHelpers('ventasAnio')}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12 order-lg-first order-md-first order-sm-last order-xs-last my-3">
                <div className="center-first-button">
                  <Link href={INICIAR_SESION}>
                    <button type="button" className="btn-medium-secondary">
                      Retoma tu proceso
                    </button>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12 order-lg-last order-md-last order-sm-first order-xs-first my-3">
                <div className="center-second-button">
                  <button type="submit" className="btn-medium" disabled={!(formulario.isValid && formulario.dirty)}>
                    Simula tu crédito
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="svg-textura-right-top">
        <SvgSegundaTextura />
      </div>
    </div>
  );
};

SelectorSimulador.propTypes = {
  handleSimular: PropTypes.func,
  catalogo: PropTypes.any.isRequired,
};

SelectorSimulador.defaultProps = {
  handleSimular: () => window.scrollTo(0, offsetTop('result-simulador')),
};

export default SelectorSimulador;
