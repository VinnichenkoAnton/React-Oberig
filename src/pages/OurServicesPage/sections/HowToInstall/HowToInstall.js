import Container from '../../../../components/UI/Container/Container';
import Title from '../../../../components/Title/Title';
import HowToInstallItem from './HowToInstallItem/HowToInstallItem';

import classes from './HowToInstall.module.scss';

import { howToInstallList } from '../../../../data/data';

const HowToInstall = () => {
  return (
    <section className={classes.howtoinstall}>
      <Container>
        <Title text="Як скористатися нашими послугами" />
        <ul className={classes.howtoinstall__list}>
          {howToInstallList.map((item, index) => {
            return (
              <HowToInstallItem key={item.id} Icn={item.icn} title={item.title} order={index} />
            );
          })}
        </ul>
      </Container>
    </section>
  );
};

export default HowToInstall;
