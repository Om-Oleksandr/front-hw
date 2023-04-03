import React, { useEffect, useState } from 'react';
import styles from './PricingItem.module.sass';
import cx from 'classnames';

const PricingItem = (props) => {
  const {
    priceInfo: {
      title,
      subTitle,
      price: { amount, currency },
      beforeItems,
      items,
      afterItems,
      paragraphs,
      id,
    },
    handleClick,
    priceColor,
    isOpen: { isOpen },
  } = props;
  const [width, setWidth] = useState(window.innerWidth);
  const cardItem = cx(styles.card, {
    [styles['is-open']]: isOpen && width <= 905,
  });
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <article className={cardItem} style={{ borderColor: priceColor }}>
      <div
        className={styles.caption}
        data-border={priceColor}
        style={{ color: priceColor }}
        onClick={() => handleClick(id)}
      >
        <h2>{title}</h2>
        {width > 905 && <p className={styles['sub-title']}>{subTitle}</p>}
        <h4 className={styles.price}>{`${currency}${amount}`}</h4>
        <span style={{ color: priceColor }}></span>
        <span style={{ color: priceColor }}></span>
      </div>
      {
        <div className={styles.body}>
          {beforeItems &&
            beforeItems.map(({ content, toolTip }, index) => (
              <p data-tooltip={toolTip} key={index}>
                {content}
              </p>
            ))}
          <ul className={styles.features}>
            {items &&
              items.map(({ content, toolTip, linkText, linkPath }, index) => (
                <li data-tooltip={toolTip} key={index}>
                  {content} {linkText && <a href={linkPath}>{linkText}</a>}
                </li>
              ))}
          </ul>
          <ul>
            {afterItems &&
              afterItems.map(({ content, toolTip }, index) => (
                <li data-tooltip={toolTip} key={index}>
                  {content}
                </li>
              ))}
          </ul>

          {paragraphs &&
            paragraphs.map(({ text, linkText, linkPath }, index) => (
              <span key={index}>
                {text} {linkText && <a href={linkPath}>{linkText}</a>}
              </span>
            ))}
          <button style={{ backgroundColor: priceColor }}>start</button>
        </div>
      }
    </article>
  );
};

export default PricingItem;
