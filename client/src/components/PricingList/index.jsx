import React, { useState } from 'react';
import pricingList from './pricingList.json';
import PricingItem from './PricingItem';
import styles from './PricingList.module.sass';

const priceColors = ['#e0b48d', '#e8b954', '#555', '#28d2d0'];
const initialState = pricingList.map((price, iindex) => ({
  id: price.id,
  isOpen: iindex === 0 ? true : false,
}));

const PricingList = () => {
  const [priceOpen, setPriceOpen] = useState(initialState);
  const handleClick = (id) => {
    setPriceOpen(
      priceOpen.map((elem) => ({
        ...elem,
        isOpen: elem.id === id ? !elem.isOpen : false,
      }))
    );
  };
  const mapPricingList = (price, index) => (
    <PricingItem
      handleClick={handleClick}
      key={price.id}
      priceInfo={price}
      priceColor={priceColors[index]}
      isOpen={priceOpen[index]}
    />
  );
  return (
    <section className={styles.container}>
      {pricingList.map(mapPricingList)}
    </section>
  );
};

export default PricingList;
