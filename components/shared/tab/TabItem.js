import PropTypes from 'prop-types';

const TabItem = (props) => {
  const { children, tab, keyTab } = props;

  return (
    <div tab={tab} key={keyTab}>
      {children}
    </div>
  );
};

TabItem.propTypes = {
  children: PropTypes.any.isRequired,
  tab: PropTypes.string.isRequired,
  keyTab: PropTypes.string.isRequired,
};
export default TabItem;
