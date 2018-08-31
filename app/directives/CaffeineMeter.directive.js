// export default function CaffeineMeterDirective() {
//   return {
//     restrict: 'E',
//     template: `<div class="caffeine-scale">Rating: {{rating}}</div>`,
//     link: (scope, ele, attr) => {
//       let gaugeReading,
//         gaugeElements,
//         lastGaugeSectionIndex,
//         selectedGaugeSection,
//         selectedMeter;
//       if (scope.caffeinemg < 80) {
//         scope.rating = 'LOW'
//       }
//
//       if (scope.caffeinemg < 180 && scope.caffeinemg > 80) {
//         scope.rating = 'MEDIUM'
//       }
//
//       if (scope.caffeinemg > 180) {
//         scope.rating = 'HIGH'
//       }
//       gaugeReading = Math.floor((scope.caffeinemg) / 1.6);
//       gaugeElements = `<div id=${scope.id} class='gauge'>
//                             <div class='mask'>
//                               <div class='semi-circle'></div>
//                               <div class='semi-circle--mask'></div>
//                             </div>\
//                           </div>`;
//
//       lastGaugeSectionIndex = $('.gauge-section').length - 1;
//       selectedGaugeSection = $('.gauge-section')[lastGaugeSectionIndex];
//       $(selectedGaugeSection).append(gaugeElements);
//
//       selectedMeter = $("#"+scope.id + " .semi-circle--mask");
//
//       selectedMeter.animate({
//         textIndent: gaugeReading,
//         step: function(now,fx){
//           $(this).css({
//             '-webkit-transform': `rotate(${now}deg)`,
//             '-moz-transform': `rotate(${now}deg)`,
//             '-ms-transform': `rotate(${now}deg)`,
//             'transform': `rotate(${now}deg)`
//           });
//         },
//         duration: 1000
//       });
//       selectedMeter.animate({ textIndent: gaugeReading },
//         {
//           step: (now,fx) => {
//             $(this).css({
//               '-webkit-transform': `rotate(${now}deg)`,
//               '-moz-transform': `rotate(${now}deg)`,
//               '-ms-transform': `rotate(${now}deg)`,
//               'transform': `rotate(${now}deg)`
//             });
//           },
//           duration: 1000
//         });
//
//     }
//   }
// }
