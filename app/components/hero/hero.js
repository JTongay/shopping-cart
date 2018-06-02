import heroComponent from './hero.component';

export default app => {
  app.component('hero', heroComponent);

  if (ENVIRONMENT === 'test') {
    require('./hero.test.js');
  }
}

