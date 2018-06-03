config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

export default function config(
  $stateProvider,
  $urlRouterProvider,
  $locationProvider
) {

  const Home = {
    url: '/',
    template: '<shopping-list></shopping-list>'
  };

  $stateProvider.state('home', Home);

  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
};
