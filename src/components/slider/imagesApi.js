/**
 * Get cats pictures
 * @param {number} length
 * @returns {Promise<Array<{ title: string, url:string }>}
 */
export const getImages = (length = 10) => {
  return fetch(`https://api.thecatapi.com/v1/breeds`)
    .then((response) => response.json())
    .then((response) => {
      const images = [];
      response.forEach((c) => {
        const title = c?.description;
        const url = c?.image?.url;

        images.push({ title, url });
      });
      return images.slice(0, length); // remove the extra cats
    });
};

import img1 from './assets/imgs/img1.jpg';
import img2 from './assets/imgs/img2.webp';
import img3 from './assets/imgs/img3.webp';

const images = [
  { img: { img1 }, alt: 'Фото Оберіг 1' },
  { img: { img2 }, alt: 'Фото Оберіг 2' },
  { img: { img3 }, alt: 'Фото Оберіг 3' },
];
