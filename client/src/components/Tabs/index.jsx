import React, { useState } from 'react';
import styles from './Tabs.module.sass';
import Tab from './../Tab';
const tabsArr = [
  {
    title: 'What business naming services does Squadhelp offer?',
    paragraphs: [
      'Squadhelp’s main brand naming services include:',
      'A Name Marketplace which features ~150K of the best names on the web. We have reviewed more than 6 million names ideas with domains using AI, machine learning, and manual reviews to curate powerful collections of names available for immediate purchase.',
      'Crowdsourced Naming Contest allows you to engage our community of more than 250,000 creatives to receive a huge breadth of name ideas and find the perfect name quickly.',
      'Managed Naming Services offer the white glove experience of a naming agency with all the benefits of crowdsourcing.',
    ],
    isActive: false,
  },
  {
    title: 'Is Squadhelp a naming agency?',
    paragraphs: [
      'Squadhelp is the next generation of a brand naming agency. Our multiple unique approaches to naming and branding encouraged Inc. Magazine to select us as one of the most innovative fast growing startups in America.',
    ],
    isActive: false,
  },
  {
    title: 'How do I get started when naming my brand?',
    paragraphs: [
      'The first step to naming your venture is to understand your brand. Start by answering these questions: What immediate impression do I want to instill? What are my core brand values? How do I want people to feel? What differentiates me from my competition? Who are my customers?',
      'Once you have a vision for where you want to take your brand, you can start brainstorming brand name ideas.',
    ],
    isActive: false,
  },
];

const Tabs = () => {
  const [tabs, setIsActive] = useState(tabsArr);
  const openTab = (tab) => {
    tab.isActive = !tab.isActive;
    const newTabs = [...tabs];
    setIsActive(newTabs);
  };
  const renderTab = (tab, index) => (
    <Tab key={index} tab={tab} openTab={openTab} />
  )
  return (
    <section className={styles.container}>
      {tabs.map(renderTab)}
    </section>
  );
};

export default Tabs;
