//ngInject
// export default function mdTheme($mdThemingProvider) {
//   $mdThemingProvider.definePalette('bluePalette', {
//     '50': 'e8eaf6',
//     '100': 'c5cbe9',
//     '200': '9fa8da',
//     '300': '7985cb',
//     '400': '5c6bc0',
//     '500': '3f51b5',
//     '600': '394aae',
//     '700': '3140a5',
//     '800': '29379d',
//     '900': '1b278d',
//     'A100': 'c6cbff',
//     'A200': '939dff',
//     'A400': '606eff',
//     'A700': '4757ff',
//     'contrastDefaultColor': 'light',
//     'contrastDarkColors': [
//       '50',
//       '100',
//       '200',
//       '300',
//       'A100',
//       'A200'
//     ],
//     'contrastLightColors': [
//       '400',
//       '500',
//       '600',
//       '700',
//       '800',
//       '900',
//       'A400',
//       'A700'
//     ]
//   });
// };
export default function mdTheme($mdThemingProvider) {
  $mdThemingProvider.theme('default').primaryPalette('indigo').accentPalette('yellow');
};
