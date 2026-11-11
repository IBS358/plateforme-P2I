/* P2I — identité visuelle : chargement non destructif du logo officiel. */
(function () {
  'use strict';
  function mount() {
    var script = document.querySelector('script[data-p2i-logo-loader]');
    if (!script) return;
    var source = script.getAttribute('src');
    var url = new URL('p2i-logo-officiel.png', new URL(source, document.baseURI)).href;
    document.querySelectorAll('header .logo, .nav-header .logo, nav .logo').forEach(function (node) {
      if (node.querySelector('[data-p2i-official-logo]')) return;
      var image = document.createElement('img');
      image.setAttribute('data-p2i-official-logo', '1');
      image.alt = 'Logo officiel P2I';
      image.width = 46;
      image.height = 41;
      image.style.cssText = 'width:46px;height:41px;object-fit:contain;flex-shrink:0;vertical-align:middle;margin-right:8px;';
      image.onload = function () {
        var old = node.querySelector('.logo-icon');
        if (old) old.hidden = true;
        if (node.classList.contains('logo')) {
          node.style.display = 'flex';
          node.style.alignItems = 'center';
        }
        var textNodes = Array.prototype.filter.call(node.childNodes, function (child) {
          return child.nodeType === 3;
        });
        textNodes.forEach(function (child) {
          child.textContent = child.textContent.replace(/^\s*[🏭⚙️🏗️]+\s*/u, '');
        });
        node.insertBefore(image, node.firstChild);
      };
      image.onerror = function () {
        /* Le PNG absent ne doit pas casser l'en-tête : conserver le logo historique. */
        image.remove();
      };
      image.src = url;
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount);
  else mount();
})();
