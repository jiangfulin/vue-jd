/*;(function (doc, win, undefined) {
  let docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize',
    recalc = function () {
      let clientWidth = docEl.clientWidth;
      if (clientWidth === undefined) return;
      docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
    };
  if (doc.addEventListener === undefined) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window);*/
;(function (document, window) {
  let recalc = () => {
    let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
    let htmlDom = document.getElementsByTagName('html')[0];
    if (htmlWidth > 670) {
      htmlDom.style.fontSize = '67px';
      return
    }
    htmlDom.style.fontSize = htmlWidth / 10 + 'px';
  };
  window.addEventListener('resize', recalc);
  document.addEventListener('DOMContentLoaded', recalc)
})(document, window);

