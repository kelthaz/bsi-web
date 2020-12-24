import React, { useRef, useState } from 'react';
import Head from 'next/head';
import ReCAPTCHA from 'react-google-recaptcha';
import PropTypes from 'prop-types';
import styles from './captcha.module.scss';

const Captcha = ({ name, formulario }) => {
  const { errors, touched, setFieldTouched, setFieldValue } = formulario;
  const YOURSITEKEY = '6LcdaBIaAAAAAPywpDSkzysM4LfuypP3EZUEzCN2';
  const recaptchaRef = useRef();
  const [loading, setLoading] = useState(false);

  const onChange = (token) => {
    setFieldValue(name, token);
    setFieldTouched(name, true);
  };

  const onExpired = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      recaptchaRef.current.reset();
      setFieldValue(name, '');
    }, 500);
  };

  const hasError = () => touched[name] && errors[name];

  return (
    <>
      <Head>
        <script src="https://www.google.com/recaptcha/api.js" async defer />
      </Head>
      {!loading && (
        <div className={hasError() ? styles['captcha-container-error'] : styles['captcha-container']}>
          <ReCAPTCHA ref={recaptchaRef} sitekey={YOURSITEKEY} onChange={onChange} onExpired={onExpired} />
          <span className={styles['help-text-error']}>{hasError() && errors[name]}&nbsp;</span>
        </div>
      )}
    </>
  );
};

Captcha.propTypes = {
  name: PropTypes.string.isRequired,
  formulario: PropTypes.any.isRequired,
};

export default Captcha;
