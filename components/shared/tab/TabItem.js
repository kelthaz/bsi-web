import PropTypes from 'prop-types';

const TabItem = ({ children }) => <>{children}</>;

TabItem.defaultProps = {
  children: <></>,
};

TabItem.propTypes = {
  children: PropTypes.node,
};
export default TabItem;
