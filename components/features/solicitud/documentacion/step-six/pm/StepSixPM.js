import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { nextStepDatosPersonales } from '../../../../../../redux/actions/solicitud';
import RadioButton from '../../../../../shared/radio-button/RadioButton';

const StepSixPM = () => {
  const { documentacion } = useSelector((state) => state.solicitud);
  const dispatch = useDispatch();
  const router = useRouter();

  const { initialValues } = {
    initialValues: {
      retiros: documentacion.retiros,
      depositos: documentacion.depositos,
      transacciones: documentacion.transacciones,
      retiros2: documentacion.retiros2,
      depositos2: documentacion.depositos2,
      transacciones2: documentacion.transacciones2,
    },
  };

  const formulario = useFormik({
    initialValues,
    onSubmit: (values) => {
      dispatch(
        nextStepDatosPersonales({
          currentStep: { tab: 'documentacion', step: '9' },
          documentacion: { ...documentacion, ...values },
        })
      );
      router.push('/solicitud/[tab]/[step]', '/solicitud/documentacion/9');
    },
  });

  return (
    <>
      <div className="contedor-fixed-tab">
        <div className="contedor-solicitud  w-75">
          <div className="container pl-md-0 pl-lg-5 px-xs-0">
            <form
              className="mt-xs-5 mt-md-0 mt-lg-0 pl-md-0 pl-lg-5 pl-xs-0"
              onSubmit={formulario.handleSubmit}
              noValidate
            >
              <p className="color-dark-gray sub mb-0">
                Dinos, ¿cómo serán los movimientos y la transaccionalidad mensual de la cuenta?
              </p>
              <span className="color-dark-gray sub">
                Selecciona una opción para el rango del no. de transacciones y una para el importe por tipo de
                operación:
              </span>
              <div className="row pl-xs-3 pt-4 pl-md-2">
                <p className="col-md-3 col-xs-7 pl-xs-0  pl-md-2 pr-0 color-gray-light sub">Número de transacciones</p>
                <div className="col-md-9 col-xs-4 mt-md-2 mt-xs-2 line">&nbsp;</div>
              </div>
              <div className="row ">
                <div className="pt-2 col-md-3 col-lg-2 col-xs-4">
                  <p className="color-gray sub">Operaciones</p>
                </div>
                <div className="pt-2 col-md-3 col-lg-2 col-xs-4">
                  <p className="color-gray sub">De 0 a 50 </p>
                </div>
                <div className="pt-2 col-md-3 col-lg-2 col-xs-4">
                  <p className="color-gray sub">Más de 50</p>
                </div>
              </div>
              <div className="row ">
                <div className="pt-2 col-lg-2 col-md-4 col-xs-5 pr-xs-0">
                  <p className="color-gray">Retiros</p>
                </div>
                <div className="pt-2 col-md-2 pl-xs-0 pl-md-0 pl-lg-4 col-xs-4 ml-xs-1 ml-md-0 ml-lg-3">
                  <RadioButton name="retiros" formulario={formulario} value="1" />
                </div>
                <div className="pt-2 col-md-3 col-lg-7 pl-md-4 pl-xs-0 col-xs-1">
                  <RadioButton name="retiros" formulario={formulario} value="2" />
                </div>
                <div className="pt-2 col-md-4 col-lg-2 col-xs-4 pr-md-0">
                  <p className="color-gray">Depósitos</p>
                </div>
                <div className="pt-2 col-md-2 col-xs-4 ml-xs-3 ml-md-0 pl-md-0 pl-lg-4 ml-lg-3">
                  <RadioButton name="depositos" formulario={formulario} value="1" />
                </div>
                <div className="pt-2 col-md-5 col-lg-7 col-xs-1 pl-md-4">
                  <RadioButton name="depositos" formulario={formulario} value="2" />
                </div>
                <div className="pt-2 col-md-4 col-lg-2 col-xs-4 pr-md-0">
                  <p className="color-gray">Transferencias</p>
                </div>
                <div className="pt-2 col-md-2 col-xs-4 ml-xs-3 ml-md-0 pl-md-0 pl-lg-4 ml-lg-3">
                  <RadioButton name="transferencias" formulario={formulario} value="1" />
                </div>
                <div className="pt-2 col-md-2 col-xs-1 pl-md-4">
                  <RadioButton name="transferencias" formulario={formulario} value="2" />
                </div>
              </div>
              <div className="row pl-xs-0  pl-md-2 pt-3">
                <p className="col-md-2 col-xs-6 pr-0 pr-lg-0 pl-lg-0 color-gray-light sub">Importe esperado</p>
                <div className="col-md-10 col-xs-6 mt-2 pl-md-2 line">&nbsp;</div>
              </div>
              <div className="row mr-3 table-documentacion">
                <table>
                  <thead>
                    <tr>
                      <th>Operaciones</th>
                      <th>Menos de 50,000</th>
                      <th>De 50,001 a 250,000</th>
                      <th>De 250,001 a 50,000</th>
                      <th>De 500,001 a 1,000, 000</th>
                      <th>De 1,000,001 a 10,000,000</th>
                      <th>De 10,000,000 a 50,000,000</th>
                      <th>Más de 50,000,001</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="ml-3 mt-3 color-gray ">Retiros</div>
                      </td>
                      <td>
                        <div className="ml-5 mt-3 ">
                          <RadioButton name="retiros2" formulario={formulario} value="1" />
                        </div>
                      </td>
                      <td>
                        <div className="ml-5 mt-3 ">
                          <RadioButton name="retiros2" formulario={formulario} value="2" />
                        </div>
                      </td>
                      <td>
                        <div className="ml-5 mt-3  ">
                          <RadioButton name="retiros2" formulario={formulario} value="3" />
                        </div>
                      </td>
                      <td>
                        <div className="ml-5 mt-3 ">
                          <RadioButton name="retiros2" formulario={formulario} value="4" />
                        </div>
                      </td>
                      <td>
                        <div className="ml-5 mt-3 ">
                          <RadioButton name="retiros2" formulario={formulario} value="5" />
                        </div>
                      </td>
                      <td>
                        <div className="ml-5 mt-3 ">
                          <RadioButton name="retiros2" formulario={formulario} value="6" />
                        </div>
                      </td>
                      <td>
                        <div className="ml-5 mt-3 ">
                          <RadioButton name="retiros2" formulario={formulario} value="7" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="ml-3 mt-3 color-gray ">Depósitos</div>
                      </td>
                      <td>
                        <div className="ml-5 mt-3 ">
                          <RadioButton name="depositos2" formulario={formulario} value="1" />
                        </div>
                      </td>
                      <td>
                        <div className="ml-5 mt-3 ">
                          <RadioButton name="depositos2" formulario={formulario} value="2" />
                        </div>
                      </td>
                      <td>
                        <div className="ml-5 mt-3  ">
                          <RadioButton name="depositos2" formulario={formulario} value="3" />
                        </div>
                      </td>
                      <td>
                        <div className="ml-5 mt-3 ">
                          <RadioButton name="depositos2" formulario={formulario} value="4" />
                        </div>
                      </td>
                      <td>
                        <div className="ml-5 mt-3 ">
                          <RadioButton name="depositos2" formulario={formulario} value="5" />
                        </div>
                      </td>
                      <td>
                        <div className="ml-5 mt-3 ">
                          <RadioButton name="depositos2" formulario={formulario} value="6" />
                        </div>
                      </td>
                      <td>
                        <div className="ml-5 mt-3 ">
                          <RadioButton name="depositos2" formulario={formulario} value="7" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="ml-3 mt-3 color-gray ">Trasnferencias</div>
                      </td>
                      <td className=" pb-xs-3">
                        <div className="ml-5 mt-3 ">
                          <RadioButton name="transferencias2" formulario={formulario} value="1" />
                        </div>
                      </td>
                      <td className=" pb-xs-3">
                        <div className="ml-5 mt-3 ">
                          <RadioButton name="transferencias2" formulario={formulario} value="2" />
                        </div>
                      </td>
                      <td className=" pb-xs-3">
                        <div className="ml-5 mt-3  ">
                          <RadioButton name="transferencias2" formulario={formulario} value="3" />
                        </div>
                      </td>
                      <td className=" pb-xs-3">
                        <div className="ml-5 mt-3 ">
                          <RadioButton name="transferencias2" formulario={formulario} value="4" />
                        </div>
                      </td>
                      <td className=" pb-xs-3">
                        <div className="ml-5 mt-3 ">
                          <RadioButton name="transferencias2" formulario={formulario} value="5" />
                        </div>
                      </td>
                      <td className=" pb-xs-3">
                        <div className="ml-5 mt-3 ">
                          <RadioButton name="transferencias2" formulario={formulario} value="6" />
                        </div>
                      </td>
                      <td className=" pb-xs-3">
                        <div className="ml-5 mt-3 ">
                          <RadioButton name="transferencias2" formulario={formulario} value="7" />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex-column-center-config">
                <button type="submit" className="cicle-button-blue my-3" aria-label="Avanzar" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default StepSixPM;
