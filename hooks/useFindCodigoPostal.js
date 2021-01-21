import { useEffect, useState } from 'react';
import { createSelectModel } from '../helpers/changeSelectModel';
import LocalizacionRepositorio from '../services/simulador/localizacion.repositorio';

const useFindCodigoPostal = (
  formulario,
  nameCodigoPostal,
  nameColonia,
  nameMunicipioAlcaldia,
  nameCiudad,
  nameEstado
) => {
  const [colonias, setColonias] = useState([]);

  useEffect(() => {
    if (formulario.values[nameCodigoPostal].length === 5) {
      const fetchData = async () => {
        const { municipio, asentamientos, ciudad } = await LocalizacionRepositorio.getLocalizacion(
          formulario.values[nameCodigoPostal]
        )
          .then((resp) => resp.data)
          .catch(() => {
            formulario.setFieldValue(nameColonia, null);
            return {
              municipio: { nombre: '', estado: { nombre: '' } },
              ciudad: '',
              asentamientos: [],
            };
          });
        formulario.setFieldValue(nameMunicipioAlcaldia, municipio.nombre);
        formulario.setFieldValue(nameCiudad, ciudad);
        formulario.setFieldValue(nameEstado, municipio.estado.nombre);
        // await formulario.setFieldError(nameCodigoPostal, 'El estado no tiene cobertura');
        setColonias(createSelectModel(asentamientos));
      };
      fetchData();
    }
  }, [formulario.values[nameCodigoPostal]]);

  return [colonias];
};

export default useFindCodigoPostal;
