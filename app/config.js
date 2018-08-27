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

  const Checkout = {
    url: '/checkout',
    template: '<checkout></checkout>'
  };

  $stateProvider.state('home', Home);
  $stateProvider.state('checkout', Checkout);

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
  $urlRouterProvider.otherwise('/');
};
