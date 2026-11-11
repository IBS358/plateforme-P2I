/* P2I : affichage du logo original, sans modification des moteurs métier. */
(function () {
  'use strict';
  function mount() {
    var script = document.querySelector('script[data-p2i-logo-loader]');
    var src = script && script.getAttribute('src') || 'assets/p2i-logo-officiel.js';
    var url = new URL('p2i-logo-officiel.png', new URL(src, document.baseURI)).href;
    document.querySelectorAll('header .logo, .nav-header .logo, nav .logo').forEach(function (node) {
      if (node.querySelector('[data-p2i-official-logo]')) return;
      var old = node.querySelector('.logo-icon');
      if (old) old.remove();
      var first = node.firstChild;
      if (first && first.nodeType === 3) first.textContent = first.textContent.replace(/^\s*[🏭⚙️🏗️]+\s*/u, '');
      var image = document.createElement('img');
      image.setAttribute('data-p2i-official-logo', '1');
      image.src = url;
      image.alt = 'Logo officiel P2I';
      image.width = 46;
      image.height = 41;
      image.style.cssText = 'width:46px;height:41px;object-fit:contain;flex-shrink:0;vertical-align:middle;margin-right:8px;';
      node.insertBefore(image, node.firstChild);
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount);
  else mount();
})();
