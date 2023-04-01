import React from 'react';
import styles from './Advantage.module.sass';
import CONSTANTS from '../../constants';
import advantages from './Advantage.json';
const Advantage = () => {
  const renderCard = ({ imgPath, imgAlt, title, content }, index) => (
    <article key={index} className={styles.card}>
      <img src={`${CONSTANTS.STATIC_IMAGES_PATH}${imgPath}`} alt={imgAlt} />
      <h3>{title}</h3>
      <p>{content}</p>
    </article>
  );
  return (
    <section className={styles.container__description}>
      <h2 className={styles.blueUnderline}>Why Squadhelp?</h2>
      <div className={styles.cardContainer}>{advantages.map(renderCard)}</div>
    </section>
  );
};

export default Advantage;
