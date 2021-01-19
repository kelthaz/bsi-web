import PropTypes from 'prop-types';

const TabItem = (props) => {
  const { children, tab, keyTab, onChangeOption, blocked } = props;

  return (
    <div tab={tab} key={keyTab} onChangeOption={onChangeOption} blocked={blocked}>
      {children}
    </div>
  );
};

TabItem.defaultProps = {
  children: <></>,
  onChangeOption: () => {},
  blocked: false,
};

TabItem.propTypes = {
  children: PropTypes.any,
  tab: PropTypes.string.isRequired,
  keyTab: PropTypes.string.isRequired,
  onChangeOption: PropTypes.func,
  blocked: PropTypes.bool,
};
export default TabItem;
