(function(){
  'use strict';
  var style=document.createElement('style');
  style.textContent=`
@media(prefers-reduced-motion:reduce){
  .final-finale,.final-finale *{transition:none!important}
  .final-finale.is-fast .intro-eye-wrap{animation:none!important}
  .final-finale.is-fast .finale-static,
  .final-finale.cut .finale-static,
  .final-finale.cut .finale-flash{display:none!important;animation:none!important}
  .final-finale.is-fast .intro-title{visibility:hidden!important}
  .final-finale .intro-iris{transition:none!important}
  .finale-end.show,.finale-end .q.show,.finale-credit.show{transition:none!important}
}
`;
  document.head.appendChild(style);
})();
