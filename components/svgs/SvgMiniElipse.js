import PropTypes from 'prop-types';

const SvgMiniElipse = ({ color }) => (
  <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="3" cy="3" r="3" fill={color}/>
  </svg>
);

SvgMiniElipse.propTypes = {
  color: PropTypes.string.isRequired
};

export default SvgMiniElipse;
