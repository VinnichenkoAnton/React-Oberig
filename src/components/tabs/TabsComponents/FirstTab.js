import { v4 as uuidv4 } from 'uuid';

import SecurityTypeCard from './TabItem';
import classes from '../Tabs.module.scss';

import { ReactComponent as Videoicn } from '../../../resources/tabs/private/icns/videoicn.svg';
import { ReactComponent as Houseicn } from '../../../resources/tabs/private/icns/houseicn.svg';
import { ReactComponent as Flaticn } from '../../../resources/tabs/private/icns/flaticn.svg';
import { ReactComponent as Alarmicn } from '../../../resources/tabs/private/icns/alarmicn.svg';
import { ReactComponent as Complexicn } from '../../../resources/tabs/private/icns/complexicn.svg';
import video from '../../../resources/tabs/private/imgs/video.jpg';
import house from '../../../resources/tabs/private/imgs/house.jpg';
import flat from '../../../resources/tabs/private/imgs/flat.jpg';
import alarm from '../../../resources/tabs/private/imgs/alarm.jpg';
import complex from '../../../resources/tabs/private/imgs/complex.jpg';

const securityPrivateTypes = [
  { id: uuidv4(), title: 'Відеоспостереження', img: video, icn: Videoicn },
  { id: uuidv4(), title: 'Охорона будинків', img: house, icn: Houseicn },
  { id: uuidv4(), title: 'Охорона квартир', img: flat, icn: Flaticn },
  { id: uuidv4(), title: 'Охоронна сигналізація', img: alarm, icn: Alarmicn },
  { id: uuidv4(), title: 'Охорона житлових комплексів', img: complex, icn: Complexicn },
];

const FirstTab = () => {
  const items = securityPrivateTypes.map((item) => {
    return <SecurityTypeCard key={item.id} img={item.img} title={item.title} Icn={item.icn} />;
  });
  return <ul className={classes.tabs__firsttab}>{items}</ul>;
};
export default FirstTab;
