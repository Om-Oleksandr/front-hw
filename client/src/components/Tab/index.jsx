import React from 'react';
import cx from 'classnames';
import styles from './Tab.module.sass';
const Tab = (props) => {
  const { tab, openTab } = props;
  const classes = cx(styles.tab, { [styles.active]: tab.isActive });

  return (
    <div className={classes} key={tab.id}>
      <div className={styles.tab__caption} onClick={() => openTab(tab)}>
        <h2>{tab.title}</h2>
      </div>
      <div className={styles.tab__content}>
        {tab.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default Tab;
