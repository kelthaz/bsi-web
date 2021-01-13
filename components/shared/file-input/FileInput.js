/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './file-input.module.scss';

const FileInput = (props) => {
  const { text, subText, grayText } = props;
  const [getFileButton, setGetFileButton] = useState(null);

  const onChangeFileHandler = (event) => {
    const file = event.target.files[0].name;

    setGetFileButton(file);
  };

  const removeFileHandler = () => {
    setGetFileButton(null);
  };

  return (
    <div className={`${styles.group}`}>
      <div className={`${subText ? 'mb-0' : 'mb-1'}  ${styles.label}`} htlmFor="myfile">
        <div className="body3">
          {text} <span className={`body3 ${styles['gray-text']}`}>{grayText}</span>
        </div>

        <span className={`body3 ${styles['sub-text']}`}>{subText}</span>
      </div>
      {getFileButton && (
        <div className={`body3 ${styles['uploaded-file']}`}>
          {getFileButton}
          <span tabIndex={0} className={`${styles['remove-upload']}`} role="button" onClick={removeFileHandler}>
            &nbsp; X{' '}
          </span>
        </div>
      )}

      <label
        htmlFor="inputFile"
        className={`body3 mb-md-4 mb-xs-0 ${
          subText ? `${styles['label-text-button']}` : `${styles['label-sub-text-button']}`
        }`}
      >
        Examinar
      </label>
      <input
        onChange={onChangeFileHandler}
        className={`${styles.input}`}
        accept="image/png, image/jpg, application/pdf"
        type="file"
        id="inputFile"
        name="myfile"
      />
    </div>
  );
};

FileInput.propTypes = {
  text: PropTypes.string.isRequired,
  subText: PropTypes.string,
  grayText: PropTypes.string,
};

FileInput.defaultProps = { subText: '', grayText: '' };

export default FileInput;
