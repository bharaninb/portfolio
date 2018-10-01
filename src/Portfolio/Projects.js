const RETIINA = {
  id: 'retiina',
  name: 'Retiina GPS',
  imageLoc: '/images/retiina/',
  thumb: 'retiina.png',
  links: {
    android: 'https://bit.ly/2HRDkxq',
    ios: 'https://apple.co/2G2gK2C',
    web: 'https://retiina.in',
  },
  technologies: ['Meteor', 'Angular', 'Ionic', 'Mongo'],
  filter: ['meteor', 'angular', 'ionic'],
  gallery: {
    items: 11,
    prefix: 'ret',
    extension: '.jpg',
  },
};

const CXONCLOUD = {
  id: 'cxoncloud',
  name: 'Cxoncloud',
  imageLoc: '/images/cxoncloud/',
  thumb: 'cxoncloud.png',
  links: {
    android: 'https://goo.gl/JbtwNe',
    ios: 'https://goo.gl/LbqUrw',
    web: 'https://cxoncloud.com',
  },
  technologies: ['Meteor', 'BlazeJS', 'Mongo'],
  filter: ['meteor'],
  gallery: {
    items: 12,
    prefix: 'cxoc',
    extension: '.jpg',
  },
};

const GROCOO = {
  id: 'grocoo',
  name: 'Grocoo',
  imageLoc: '/images/grocoo/',
  thumb: 'grocoo.png',
  links: {
    android: 'https://bit.ly/2JjfjTa',
    ios: 'https://apple.co/2ssiRJl',
  },
  technologies: ['Meteor', 'Angular', 'Ionic', 'Mongo'],
  filter: ['meteor', 'angular', 'ionic'],
  gallery: {
    items: 16,
    prefix: 'gr',
    extension: '.jpg',
  },
};

const CINEMAKARAN = {
  id: 'cinemakaran',
  name: 'Cinemakaran',
  imageLoc: '/images/cinemakaran/',
  thumb: 'ck.png',
  links: {
    web: 'https://cinemakaran.in',
  },
  technologies: ['Meteor', 'Angular', 'Mongo'],
  filter: ['meteor', 'angular'],
  gallery: {
    items: 9,
    prefix: 'ck',
    extension: '.jpg',
  },
};

export const Projects = [RETIINA, CXONCLOUD, GROCOO, CINEMAKARAN];
