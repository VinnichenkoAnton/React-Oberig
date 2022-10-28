import { v4 as uuidv4 } from 'uuid';

import { ReactComponent as Locationicn } from '../resources/advantages/icns/locationicn.svg';
import { ReactComponent as Allinclusiveicn } from '../resources/advantages/icns/allinclusiveicn.svg';
import { ReactComponent as Responsibilityicn } from '../resources/advantages/icns/responsibilityicn.svg';
import { ReactComponent as Remotecntrlicn } from '../resources/advantages/icns/remotectrlicn.svg';
import { ReactComponent as Professionalicn } from '../resources/advantages/icns/professionalicn.svg';
import { ReactComponent as Individualicn } from '../resources/advantages/icns/individualicn.svg';

import established from '../resources/numericInfo/established.svg';
import workers from '../resources/numericInfo/workers.svg';
import customers from '../resources/numericInfo/customers.svg';
import surveillance from '../resources/numericInfo/surveillance.svg';

import sliderImage1 from '../resources/slider/imgs/img1.jpg';
import sliderImage2 from '../resources/slider/imgs/img2.webp';
import sliderImage3 from '../resources/slider/imgs/img3.webp';

import reviewImage1 from '../resources/reviews/review_1.jpg';
import reviewImage2 from '../resources/reviews/review_2.jpg';
import reviewImage3 from '../resources/reviews/review_3.jpg';

import { ReactComponent as Videoicn } from '../resources/tabs/private/icns/videoicn.svg';
import { ReactComponent as Houseicn } from '../resources/tabs/private/icns/houseicn.svg';
import { ReactComponent as Flaticn } from '../resources/tabs/private/icns/flaticn.svg';
import { ReactComponent as Alarmicn } from '../resources/tabs/private/icns/alarmicn.svg';
import { ReactComponent as Complexicn } from '../resources/tabs/private/icns/complexicn.svg';
import video from '../resources/tabs/private/imgs/video.jpg';
import house from '../resources/tabs/private/imgs/house.jpg';
import flat from '../resources/tabs/private/imgs/flat.jpg';
import alarm from '../resources/tabs/private/imgs/alarm.jpg';
import complex from '../resources/tabs/private/imgs/complex.jpg';

import { ReactComponent as Enterpreneuricn } from '../resources/tabs/business/icns/enterpreneuricn.svg';
import { ReactComponent as Storeicn } from '../resources/tabs/business/icns/storeicn.svg';
import { ReactComponent as Officeicn } from '../resources/tabs/business/icns/officeicn.svg';
import { ReactComponent as Buildingicn } from '../resources/tabs/business/icns/buildingicn.svg';
import { ReactComponent as Warehouseicn } from '../resources/tabs/business/icns/warehouseicn.svg';
import { ReactComponent as Industryicn } from '../resources/tabs/business/icns/industryicn.svg';
import enterpreneur from '../resources/tabs/business/imgs/enterpreneur.jpg';
import store from '../resources/tabs/business/imgs/store.jpg';
import office from '../resources/tabs/business/imgs/office.jpeg';
import building from '../resources/tabs/business/imgs/building.jpg';
import warehouse from '../resources/tabs/business/imgs/warehouse.jpg';
import industry from '../resources/tabs/business/imgs/industry.jpg';

import { ReactComponent as ContactIcn } from '../resources/howToInstall/contacticn.svg';
import { ReactComponent as InfoIcn } from '../resources/howToInstall/infoicn.svg';
import { ReactComponent as MeetingIcn } from '../resources/howToInstall/meetingicn.svg';
import { ReactComponent as ProtectedIcn } from '../resources/howToInstall/protectedicn.svg';

export const advantagesList = [
  {
    id: uuidv4(),
    subtitle: 'Працюємо під ключ',
    description:
      'Беремо на себе всі питання: охоронна сигналізація, сервісне обслуговування, цілодобовий захист',
    icn: Allinclusiveicn,
  },
  {
    id: uuidv4(),
    subtitle: 'Ми завжди поряд',
    description: 'Групи швидкого реагування завжди на чергуванні поряд з Вами. Прибуття 2-10 хв',
    icn: Locationicn,
  },
  {
    id: uuidv4(),
    subtitle: 'Відповідальність',
    description: "Ми сумлінно виконуємо свої обов'язки і виїзджаємо на кожен виклик",
    icn: Responsibilityicn,
  },
  {
    id: uuidv4(),
    subtitle: 'Пультова система',
    description: 'Власний пульт моніторингу працює 24/7',
    icn: Remotecntrlicn,
  },
  {
    id: uuidv4(),
    subtitle: 'Професіоналізм',
    description: 'У нас працюють лише висококваліфіковані спеціалісти',
    icn: Professionalicn,
  },
  {
    id: uuidv4(),
    subtitle: 'Персональний підхід',
    description: 'Ми працюємо з клієнтом індивідуально для задоволення потреб кожного',
    icn: Individualicn,
  },
];

export const navigationList = [
  {
    text: 'Головна',
    to: '/',
  },
  {
    text: 'Про компанію',
    to: '/aboutcompany',
  },
  {
    text: 'Наші послуги',
    to: '/services',
  },
  {
    text: 'Контакти',
    to: '/contacts',
  },
];

export const numericInfoList = [
  { id: uuidv4(), img: established, title: 'Років', amount: '10' },
  { id: uuidv4(), img: workers, title: 'Працівників', amount: '100' },
  { id: uuidv4(), img: customers, title: 'Клієнтів', amount: '200' },
  { id: uuidv4(), img: surveillance, title: "Об'єктів", amount: '50' },
];

export const sliderImages = [
  { img: sliderImage1, alt: 'Фото Оберіг 1' },
  { img: sliderImage2, alt: 'Фото Оберіг 2' },
  { img: sliderImage3, alt: 'Фото Оберіг 3' },
];

export const reviewsList = [
  {
    img: reviewImage1,
    alt: 'Фото першого автора',
    title: 'Ложкіна Олена',
    description:
      'Все дуже оперативно і якісно: лишила на сайті заявку, менш ніж через 2 хвилини зателефонував менеджер, який проконсультував мене максимально повно і зрозуміло, відповівши на всі питання, які в мене виникли як у дуже далекої від техніки людини)) Уже наступного ранку в моєму будинку були хлопці, які швидко встановили датчики',
  },
  {
    img: reviewImage2,
    alt: 'Фото другого автора',
    title: 'Миль Богдан',
    description:
      'Якість охорони на рівні. Ціни доступні. Рекомендую. Користуюсь послугами компанії уже більше року.',
  },
  {
    img: reviewImage3,
    alt: 'Фото третього автора',
    title: 'Кобка Анастасія',
    description:
      'Все дуже оперативно і якісно: лишила на сайті заявку, менш ніж через 2 хвилини зателефонував менеджер, який проконсультував мене максимально повно і зрозуміло, відповівши на всі питання, які в мене виникли як у дуже далекої від техніки людини)) Уже наступного ранку в моєму будинку були хлопці, які швидко встановили датчики',
  },
];

export const firstTabList = [
  {
    id: 'ft1',
    title: 'Відеоспостереження',
    img: video,
    icn: Videoicn,
    description:
      'Безкоштовна установка. Базовий комплект бездротового обладнання. Цілодобовий моніторинг за об’єктом технічними засобами охорони. Виїзд групи швидкого реагування на сигнал тривоги',
    eqvprice: 'Від 5000 грн',
    monthprice: 'Від 300грн/місяць',
  },
  { id: 'ft2', title: 'Охорона будинків', img: house, icn: Houseicn },
  { id: 'ft3', title: 'Охорона квартир', img: flat, icn: Flaticn },
  { id: 'ft4', title: 'Охоронна сигналізація', img: alarm, icn: Alarmicn },
  { id: 'ft5', title: 'Охорона житлових комплексів', img: complex, icn: Complexicn },
];

export const secondTabList = [
  { id: 'st1', title: 'Охорона підприємств', img: enterpreneur, icn: Enterpreneuricn },
  { id: 'st2', title: 'Охорона магазинів', img: store, icn: Storeicn },
  { id: 'st3', title: 'Охорона офісів', img: office, icn: Officeicn },
  { id: 'st4', title: 'Охоронна будівництва', img: building, icn: Buildingicn },
  { id: 'st5', title: 'Охорона нежитлових приміщень', img: warehouse, icn: Warehouseicn },
  { id: 'st6', title: "Охорона промислових об'єктів", img: industry, icn: Industryicn },
];

export const howToInstallList = [
  { id: uuidv4(), title: 'Зателефонуйте/залиште заявку нашому менеджеру', icn: ContactIcn },
  { id: uuidv4(), title: 'Дізнайтеся все необхідне та домовтесь про зустріч', icn: InfoIcn },
  { id: uuidv4(), title: 'Зустріч та складання кошторису', icn: MeetingIcn },
  { id: uuidv4(), title: "Підписання договору та взяття об'єкта під охорону", icn: ProtectedIcn },
];
