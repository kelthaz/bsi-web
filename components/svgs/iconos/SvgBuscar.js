import PropTypes from 'prop-types';

const SvgBuscar = ({ color }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10.6665" cy="10.6665" r="8" stroke={color} strokeWidth="2"/>
    <path d="M20.6262 22.0404C21.0168 22.431 21.6499 22.431 22.0404 22.0404C22.431 21.6499 22.431 21.0168 22.0404 20.6262L20.6262 22.0404ZM22.0404 20.6262L16.7071 15.2929L15.2929 16.7071L20.6262 22.0404L22.0404 20.6262Z" fill={color}/>
  </svg>
);

SvgBuscar.propTypes = {
  color: PropTypes.string,
};

SvgBuscar.defaultProps = {
  color: '#F4F6F9'
};

export default SvgBuscar;
