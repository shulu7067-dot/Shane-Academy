(function () {
  var input = document.getElementById('search');
  if (!input) return;
  var cards = Array.prototype.slice.call(document.querySelectorAll('.service-card'));
  var count = document.getElementById('search-count');
  var none = document.getElementById('no-results');

  function run() {
    var words = input.value.toLowerCase().split(/\s+/).filter(Boolean);
    var shown = 0;
    cards.forEach(function (card) {
      var text = card.textContent.toLowerCase();
      var match = words.every(function (w) { return text.indexOf(w) !== -1; });
      card.hidden = !match;
      if (match) shown++;
    });
    none.hidden = shown !== 0;
    count.textContent = words.length ? shown + ' result' + (shown === 1 ? '' : 's') : '';
  }
  input.addEventListener('input', run);
})();
