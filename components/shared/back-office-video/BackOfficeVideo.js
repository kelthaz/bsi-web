/* eslint-disable jsx-a11y/iframe-has-title */
import PropTypes from 'prop-types';
import styles from './back-office-video.module.scss';

const IndividualVideo = ({ idVideo, src, height, width }) => (
  <div key={idVideo}>
    <div className="col-xs-12 col-md-4 ">
      <iframe className={styles['video-preview']} height={height} width={width} src={src} frameBorder="0" start="100" />
    </div>
  </div>
);

IndividualVideo.propTypes = {
  idVideo: PropTypes.number,
  src: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

IndividualVideo.defaultProps = {
  idVideo: null,
  src: null,
  width: null,
  height: null,
};

export default IndividualVideo;
