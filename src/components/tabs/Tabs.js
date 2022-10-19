import React, { useState } from 'react';

import Container from '../UI/container/Container.js';
import FirstTab from './components/FirstTab.js';
import SecondTab from './components/SecondTab.js';
import TabNavItem from './components/TabNavItem';
import TabContent from './components/TabContent';

import classes from './Tabs.module.scss';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <section className={classes.tabs}>
      <Container>
        <ul className="nav">
          <TabNavItem title="Tab 1" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab} />
          <TabNavItem title="Tab 2" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab} />
        </ul>

        <div className="outlet">
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
