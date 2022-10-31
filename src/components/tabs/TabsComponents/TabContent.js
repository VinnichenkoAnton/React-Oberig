import TabItem from './TabItem';
import classes from '../Tabs.module.scss';

const TabContent = ({ contentList }) => {
  const items = contentList.map((item) => {
    return <TabItem key={item.id} id={item.id} img={item.img} title={item.title} Icn={item.icn} />;
  });
  return <ul className={classes.tabs__contenttab}>{items}</ul>;
};
export default TabContent;
