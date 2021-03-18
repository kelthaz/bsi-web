import React from 'react';
import styles from './FirmaContrato.module.scss';
import FileInput from '../../../shared/file-input/FileInput';
import TextField from '../../../shared/text-field/TextField';

const FirmaContrato = () => {
  const inicio = 'inicio';
  return (
    <div className="container-fluid px-0">
      <div className="mt-4 mb-5">
        <h3 className="color-blue-storm">Firmar contrato de Crédito Dital Pyme</h3>
      </div>
      <div className="row">
        <div className="col-5">
          <div className="card-simple-blue-light">
            <div className="row">
              <div className="col-12">
                <h2 className={`mb-1 ${styles['bot-line']} color-blue-storm sub mt-2`}>Firmar contrato</h2>
                <p>
                  Para firmar el contrato digitalmente, tú y tu obligados solidarios, (en caso de haberlos) tendrán que
                  ingresar los documentos de e.firma.
                </p>
                <h3 className="color-gray sub">Alejandra Aguilar Ruí (Solicitante)</h3>
                <div className={`${styles['bot-line']}`}>
                  <FileInput firmaContrato text="Sube tu certificado público" subText="El archivo .cer" />
                </div>
                <div>
                  <FileInput firmaContrato text="Sube tu clave privada" subText="El archivo .key" />
                </div>
                <div>
                  <TextField
                    name="contrasena"
                    paste={false}
                    format="passwordspace"
                    maxlength={20}
                    type="password"
                    label="Contraseña de e.firma"
                  />
                </div>
                <h3 className="color-gray sub">Gabriel Hernande Medino (Obligado solidario)</h3>
                <div className={`${styles['bot-line']}`}>
                  <FileInput firmaContrato text="Sube tu certificado público" subText="El archivo .cer" />
                </div>
                <div>
                  <FileInput firmaContrato text="Sube tu clave privada" subText="El archivo .key" />
                </div>
                <div>
                  <TextField
                    name="contrasena"
                    paste={false}
                    format="passwordspace"
                    maxlength={20}
                    type="password"
                    label="Contraseña de e.firma"
                  />
                </div>
              </div>
            </div>
            <div className="row  justify-content-end mt-3 mr-3">
              <button disabled type="submit" className="btn-medium">
                Firmar
              </button>
            </div>
          </div>
        </div>
        <div className="col-7">
          <div className="card-simple-white-shadow">
            <div className="row">
              <div className="col-12">
                <h2 className="color-blue-storm sub mt-2">Firmar contrato</h2>
                <p>
                  Dicta dolorum natus aut aperiam pariatur laboriosam. Commodi reiciendis minus aut. Quia deserunt enim
                  inventore unde quos sunt dolorum. Voluptatem saepe distinctio rem neque qui aperiam eum. Nemo est id
                  officiis aut earum et. Omnis harum laborum illum enim dolor explicabo aut.
                  <p>
                    Accusamus molestias velit consequatur aut nemo quos quos. Id quidem sed est. Maxime qui possimus qui
                    facilis et numquam saepe ad. Omnis ipsum dolores vel eos nemo omnis quas. Inventore vero ut quia ut
                    distinctio exercitationem corporis. Quod possimus excepturi voluptas eligendi. Consequatur est
                    voluptate est cum eveniet eum mollitia. Veritatis voluptas natus assumenda.
                  </p>
                </p>
                <p>
                  Dicta dolorum natus aut aperiam pariatur laboriosam. Commodi reiciendis minus aut. Quia deserunt enim
                  inventore unde quos sunt dolorum. Voluptatem saepe distinctio rem neque qui aperiam eum. Nemo est id
                  officiis aut earum et. Omnis harum laborum illum enim dolor explicabo aut.
                  <p>
                    Accusamus molestias velit consequatur aut nemo quos quos. Id quidem sed est. Maxime qui possimus qui
                    facilis et numquam saepe ad. Omnis ipsum dolores vel eos nemo omnis quas. Inventore vero ut quia ut
                    distinctio exercitationem corporis. Quod possimus excepturi voluptas eligendi.
                  </p>
                </p>
                <p>
                  Dicta dolorum natus aut aperiam pariatur laboriosam. Commodi reiciendis minus aut. Quia deserunt enim
                  inventore unde quos sunt dolorum. Voluptatem saepe distinctio rem neque qui aperiam eum. Nemo est id
                  officiis aut earum et. Omnis harum laborum illum enim dolor explicabo aut.
                  <p>
                    Accusamus molestias velit consequatur aut nemo quos quos. Id quidem sed est. Maxime qui possimus qui
                    facilis et numquam saepe ad. Omnis ipsum dolores vel eos nemo omnis quas. Inventore vero ut quia ut
                    distinctio exercitationem corporis. Quod possimus excepturi voluptas eligendi. Consequatur est
                    voluptate est cum eveniet eum mollitia. Veritatis voluptas natus assumenda.
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirmaContrato;
