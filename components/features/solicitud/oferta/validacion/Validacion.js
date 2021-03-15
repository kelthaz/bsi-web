import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';
import TextField from '../../../../shared/text-field/TextField';
import {
  campoRequerido,
  clabeNumeroCuentaInvalido,
  longitudMinima,
  rfcInvalido,
} from '../../../../../constants/errors';
import { regexClabeOCuenta, regexRFCFisica, regexRFCMoral } from '../../../../../constants/regex';
import Modal from '../../../../shared/modal/Modal';
import SvgSesionValidacion from '../../../../svgs/oferta/SvgSesionValidacion';

const Validacion = () => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const {
    oferta: { conCuenta, tipoPersona },
  } = useSelector((state) => state.solicitud);

  const initialValues = {
    titular: 'Alejandra Aguilar Ruíz',
    rfc: 'AGRA9112150H1',
  };

  const formulario = useFormik({
    initialValues: {
      ...initialValues,
      clabe: '',
    },
    validationSchema: Yup.object().shape({
      clabe: Yup.string().matches(regexClabeOCuenta, clabeNumeroCuentaInvalido).required(campoRequerido),
      titular: Yup.string().required(campoRequerido),
      rfc: Yup.string()
        .matches(tipoPersona === 'Persona Moral' ? regexRFCMoral : regexRFCFisica, rfcInvalido)
        .min(tipoPersona === 'Persona Moral' ? 12 : 13, longitudMinima)
        .when('$conCuenta', (other, schema) => (other === true ? schema.required(campoRequerido) : schema)),
    }),
    onSubmit: (values) => {
      dispatch(
        nextStepDatosPersonales({
          currentStep: { tab: 'oferta', step: 'validacion' },
          oferta: { ...values },
        })
      );
    },
  });

  return (
    <div className="contedor-fixed-tab">
      <Modal openModal={openModal} setOpenModal={setOpenModal} closeable={false}>
        <div className="container px-xs-0 px-md-0">
          <div className="row justify-content-center mx-0 ">
            <SvgSesionValidacion />
          </div>
          <div className="row justify-content-center mx-0 mt-3">
            <div className="px-3 col-md-12 col-xs-12">
              <h4 className="color-blue-storm">¡Cuenta validada exitosamente!</h4>
            </div>
          </div>
          <div className="row justify-content-center mx-0 ">
            <div className="px-0 col-md-12 col-xs-12 mt-4">
              <p style={{ width: '425px' }}>
                Alejandra, tu cuenta BanCoppel 123456789876543210 ha sido vinculada con éxito. Aquí recibirás tu dinero
                cuando el proceso haya concluído.
              </p>
            </div>
          </div>
          <div className="row justify-content-center mx-0 ">
            <button type="submit" className="btn-medium my-3 mx-3">
              Continuemos
            </button>
          </div>
        </div>
      </Modal>
      <div className="contedor-solicitud">
        <div className="container p-0">
          <form noValidate>
            <h2 className="color-blue-storm">Para continuar</h2>
            {conCuenta ? (
              <p className="color-dark-gray body2">
                Compártenos los datos de tu cuenta bancaria BanCoppel, aquí te depositaremos tu dinero cuando termine el
                proceso.
              </p>
            ) : (
              <>
                <p className="color-dark-gray body2">
                  Al parecer aún no tienes una cuenta bancaria BanCoppel, acude a una sucursal para aperturarla y
                  podamos hacer el desembolso tu crédito cuando termine el proceso.
                  <br />
                  <a className="link">Conoce más.</a>
                </p>
                <p className="color-dark-gray body2">
                  Recuerda que tu oferta seguirá vigente por los siguientes 15 días, tu avance hasta este punto se
                  guardará y podrás retomar tu solicidutd cuando quieras.
                </p>
                <p className="color-dark-gray body2">Si ya tienes tu cuenta ingresala a continuación:</p>
              </>
            )}

            <div className="row no-gutters">
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <p className="input color-gray">Mi cuenta es</p>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 pr-lg-2 pr-md-2">
                <TextField
                  name="clabe"
                  format="number"
                  type="text"
                  size="big"
                  maxlength={18}
                  label="CLABE o cuenta BanCoppel"
                  {...formulario.getFieldMeta('clabe')}
                  {...formulario.getFieldHelpers('clabe')}
                />
              </div>
            </div>
            <div className="row no-gutters">
              <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                <p className="input color-gray">Titular de la cuenta</p>
              </div>
              <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12 pr-lg-2 pr-md-2">
                <TextField
                  name="titular"
                  format="uppercase"
                  type="text"
                  size="big"
                  maxlength={120}
                  label=""
                  disabled
                  {...formulario.getFieldMeta('titular')}
                  {...formulario.getFieldHelpers('titular')}
                />
              </div>
            </div>
            {!conCuenta && (
              <div className="row no-gutters">
                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                  <p className="input color-gray">RFC</p>
                </div>
                <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12 pr-lg-2 pr-md-2">
                  <TextField
                    name="rfc"
                    format="rfcformatter"
                    type="text"
                    size="big"
                    maxlength={120}
                    label=""
                    disabled
                    {...formulario.getFieldMeta('rfc')}
                    {...formulario.getFieldHelpers('rfc')}
                  />
                </div>
              </div>
            )}

            <div className="flex-column-center-config">
              <button
                type="button"
                className="btn-medium my-3 mx-3"
                disabled={!formulario.isValid}
                onClick={() => setOpenModal(true)}
              >
                Valida tu cuenta
              </button>
            </div>
          </form>
        </div>
        <div className="pt-5 mt-5">
          <p className="overline">
            Si aún no tienes una cuenta bancaria BanCoppel, te invitamos acudir a una sucursal para aperturarla y
            podamos hacer el desembolso tu crédito cuando termine el proceso.&nbsp;
            <a href="https://www.bancoppel.com/empresas/index.html" target="_blank" rel="noreferrer">
              Conoce más
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Validacion;
