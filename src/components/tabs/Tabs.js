import React, { useState } from 'react';

import Title from '../Title/Title';
import TabContent from './TabsComponents/TabContent';
import TabNavItem from './TabsComponents/TabNavItem';
import TabActivity from './TabsComponents/TabActivity';

import classes from './Tabs.module.scss';

import { firstTabList } from '../../data/data';
import { secondTabList } from '../../data/data';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <section className={classes.tabs}>
      <Title text="Ми пропонуємо" />
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
        <TabActivity id="tab1" activeTab={activeTab}>
          <TabContent contentList={firstTabList} />
        </TabActivity>
        <TabActivity id="tab2" activeTab={activeTab}>
          <TabContent contentList={secondTabList} />
        </TabActivity>
      </div>
    </section>
  );
};

export default Tabs;
