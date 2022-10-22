import React, { useState } from 'react';

import Container from '../UI/Container/Container.js';
import FirstTab from './TabsComponents/FirstTab.js';
import SecondTab from './TabsComponents/SecondTab.js';
import TabNavItem from './TabsComponents/TabNavItem';
import TabContent from './TabsComponents/TabContent';

import classes from './Tabs.module.scss';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <section className={classes.tabs}>
      <Container>
        <ul className={classes.tabs__nav}>
          <TabNavItem
            title="Для приватних осіб"
            id="tab1"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <TabNavItem
            title="Для бізнесу"
            id="tab2"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </ul>

        <div className="tabs__outlet">
          <TabContent id="tab1" activeTab={activeTab}>
            <FirstTab />
          </TabContent>
          <TabContent id="tab2" activeTab={activeTab}>
            <SecondTab />
          </TabContent>
        </div>
      </Container>
    </section>
  );
};

export default Tabs;
