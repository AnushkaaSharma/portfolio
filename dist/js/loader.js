// Page loader: shown once per browser session, lifted when the page has loaded.
(function () {
  var loader = document.getElementById('page-loader');
  var root = document.documentElement;
  if (!loader || root.classList.contains('no-loader')) return;

  var MIN_MS = 900;   // long enough for one full hop cycle to read
  var MAX_MS = 4000;  // never block the page longer than this
  var start = Date.now();
  var finished = false;

  function finish() {
    if (finished) return;
    finished = true;
    loader.classList.add('is-done');
    root.classList.remove('is-loading');
    try { sessionStorage.setItem('seenLoader', '1'); } catch (e) {}
    setTimeout(function () { loader.remove(); }, 600);
  }

  function onLoad() {
    setTimeout(finish, Math.max(0, MIN_MS - (Date.now() - start)));
  }

  if (document.readyState === 'complete') onLoad();
  else window.addEventListener('load', onLoad);
  setTimeout(finish, MAX_MS);
})();
