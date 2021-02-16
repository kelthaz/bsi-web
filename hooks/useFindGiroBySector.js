import { useEffect, useState } from 'react';
import changeSelectModel from '../helpers/changeSelectModel';
import SectoresRepositorio from '../services/simulador/sectores.repositorio';

const useFindGiroBySector = (formulario, nameSector, nameGiro) => {
  const [itemsGiro, setItemsGiro] = useState([]);

  useEffect(() => {
    if (formulario.values[nameSector]) {
      const fetchData = async () => {
        const giros = await SectoresRepositorio.getGiroPorSector(formulario.values[nameSector].value).then((resp) =>
          changeSelectModel('id', 'nombre', resp.data)
        );
        setItemsGiro(giros);
        const giroActual = giros.find(
          (giro) => formulario.values[nameGiro] && formulario.values[nameGiro].value === giro.value
        );
        formulario.setFieldValue(nameGiro, giroActual || null);
      };
      fetchData();
    }
  }, [formulario.values[nameSector]]);

  return [itemsGiro];
};

export default useFindGiroBySector;
