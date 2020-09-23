import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './tab.module.scss';

const Tab = (props) => {
  const { children } = props;
  const tabItems = children.map(({ props: propsChild }) => ({
    tab: propsChild.tab,
    keyTab: propsChild.keyTab,
    children: propsChild.children,
  }));

  const [tabOpen, setTabOpen] = useState(tabItems[0]);

  return (
    <>
      <div className={styles.tab}>
        {tabItems.map((tabItem) => (
          <button
            type="button"
            key={tabItem.keyTab}
            style={{ width: `${100 / tabItems.length}%` }}
            className={`${styles['tab-links']} ${tabOpen.keyTab === tabItem.keyTab ? styles['tab-active'] : ''}`}
            onClick={() => setTabOpen({ ...tabItem })}
          >
            {tabItem.tab}
          </button>
        ))}
      </div>

      <div className={styles['tab-content']}>{tabOpen.children}</div>
    </>
  );
};

Tab.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Tab;
