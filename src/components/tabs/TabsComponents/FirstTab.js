import TabItem from './TabItem';
import classes from '../Tabs.module.scss';

import { firstTabList } from '../../../data/data';

const FirstTab = () => {
  const items = firstTabList.map((item) => {
    return <TabItem key={item.id} img={item.img} title={item.title} Icn={item.icn} />;
  });
  return <ul className={classes.tabs__firsttab}>{items}</ul>;
};
export default FirstTab;
