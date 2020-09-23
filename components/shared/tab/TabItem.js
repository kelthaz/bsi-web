import PropTypes from 'prop-types';

const TabItem = (props) => {
  const { children, tab, key } = props;

  return (
    <div tab={tab} key={key}>
      {children}
    </div>
  );
};

TabItem.propTypes = {
  tab: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  key: PropTypes.string.isRequired,
};
export default TabItem;
