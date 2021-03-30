import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './tab.module.scss';

const Tab = ({ children, initOption }) => {
  const [option, setOption] = useState(initOption);

  const handleOption = (selectOption) => {
    if (!children[selectOption].props.blocked) {
      setOption(selectOption);
    }
    children[selectOption].props.changeoption();
  };

  return (
    <>
      <div className={styles.tab}>
        {children.map((tabItem, index) => (
          <button
            type="button"
            key={tabItem.props.keyTab}
            style={{ width: `${100 / children.length}%` }}
            className={`${styles['tab-links']} ${option === index ? styles['tab-active'] : ''}`}
            onClick={() => handleOption(index)}
          >
            {tabItem.props.tab}
          </button>
        ))}
      </div>

      <div className={styles['tab-content']}>{children[option]}</div>
    </>
  );
};

Tab.propTypes = {
  children: PropTypes.node.isRequired,
  initOption: PropTypes.number,
};

Tab.defaultProps = {
  initOption: 0,
};

export default Tab;
