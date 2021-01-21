import { useEffect, useState } from 'react';
import changeSelectModel from '../helpers/changeSelectModel';
import SectoresRepositorio from '../services/simulador/sectores.repositorio';

const useFindGiroBySector = (formulario, nameSector, nameGiro) => {
  const [itemsGiro, setItemsGiro] = useState([]);

  useEffect(() => {
    if (formulario.values[nameSector] && formulario.dirty) {
      const fetchData = async () => {
        const giros = await SectoresRepositorio.getGiroPorSector(formulario.values[nameSector].value).then(
          (resp) => resp.data
        );
        formulario.setFieldValue(nameGiro, null);
        setItemsGiro(changeSelectModel('id', 'nombre', giros));
      };
      fetchData();
    }
  }, [formulario.values[nameSector]]);

  return [itemsGiro];
};

export default useFindGiroBySector;
