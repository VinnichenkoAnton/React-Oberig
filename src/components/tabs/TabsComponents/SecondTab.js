import { v4 as uuidv4 } from 'uuid';

import SecurityTypeCard from './TabItem';
import classes from '../Tabs.module.scss';

import { ReactComponent as Enterpreneuricn } from '../../../resources/tabs/business/icns/enterpreneuricn.svg';
import { ReactComponent as Storeicn } from '../../../resources/tabs/business/icns/storeicn.svg';
import { ReactComponent as Officeicn } from '../../../resources/tabs/business/icns/officeicn.svg';
import { ReactComponent as Buildingicn } from '../../../resources/tabs/business/icns/buildingicn.svg';
import { ReactComponent as Warehouseicn } from '../../../resources/tabs/business/icns/warehouseicn.svg';
import { ReactComponent as Industryicn } from '../../../resources/tabs/business/icns/industryicn.svg';
import enterpreneur from '../../../resources/tabs/business/imgs/enterpreneur.jpg';
import store from '../../../resources/tabs/business/imgs/store.jpg';
import office from '../../../resources/tabs/business/imgs/office.jpeg';
import building from '../../../resources/tabs/business/imgs/building.jpg';
import warehouse from '../../../resources/tabs/business/imgs/warehouse.jpg';
import industry from '../../../resources/tabs/business/imgs/industry.jpg';

const securityPrivateTypes = [
  { id: uuidv4(), title: 'Охорона підприємств', img: enterpreneur, icn: Enterpreneuricn },
  { id: uuidv4(), title: 'Охорона магазинів', img: store, icn: Storeicn },
  { id: uuidv4(), title: 'Охорона офісів', img: office, icn: Officeicn },
  { id: uuidv4(), title: 'Охоронна будівництва', img: building, icn: Buildingicn },
  { id: uuidv4(), title: 'Охорона нежитлових приміщень', img: warehouse, icn: Warehouseicn },
  { id: uuidv4(), title: "Охорона промислових об'єктів", img: industry, icn: Industryicn },
];

const SecondTab = () => {
  const items = securityPrivateTypes.map((item) => {
    return <SecurityTypeCard key={item.id} img={item.img} title={item.title} Icn={item.icn} />;
  });
  return <ul className={classes.tabs__firsttab}>{items}</ul>;
};
export default SecondTab;
