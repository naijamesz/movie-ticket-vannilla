(function () {
  const d = document.createElement('link').relList;
  if (d && d.supports && d.supports('modulepreload')) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) e(i);
  new MutationObserver(i => {
    for (const a of i)
      if (a.type === 'childList')
        for (const t of a.addedNodes) t.tagName === 'LINK' && t.rel === 'modulepreload' && e(t);
  }).observe(document, { childList: !0, subtree: !0 });
  function v(i) {
    const a = {};
    return (
      i.integrity && (a.integrity = i.integrity),
      i.referrerPolicy && (a.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === 'use-credentials'
        ? (a.credentials = 'include')
        : i.crossOrigin === 'anonymous'
        ? (a.credentials = 'omit')
        : (a.credentials = 'same-origin'),
      a
    );
  }
  function e(i) {
    if (i.ep) return;
    i.ep = !0;
    const a = v(i);
    fetch(i.href, a);
  }
})();
document.querySelector('#app').innerHTML = `
<div class="movie-container">
<label>Pick a movie:</label>
<select id="movie">
  <option value="10">Avengers: Endgame ($10)</option>
  <option value="12">Joker ($12)</option>
  <option value="8">Toy Story 4 ($8)</option>
  <option value="9">The Lion King ($9)</option>
</select>
</div>

<ul class="showcase">
<li>
  <div class="seat"></div>
  <small>N/A</small>
</li>
<li>
  <div class="seat selected"></div>
  <small>Selected</small>
</li>
<li>
  <div class="seat occupied"></div>
  <small>Occupied</small>
</li>
</ul>

<d class="container">
<div class="label-screen">screen</div>
<div class="screen"></div>
<div class="row">
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
</div>
<div class="row">
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
</div>
<div class="row">
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
</div>
<div class="row">
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
</div>
<div class="row">
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
</div>
<br>
<div class="row">
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
</div>
<div class="row">
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
</div>
<div class="row">
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
</div>
<div class="row">
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
</div>
<div class="row">
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
</div>
<div class="row">
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
</div>
</div>
<br>
<div class="row">
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
</div>
<div class="row">
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
  <div class="seat"></div>
</div>

<div class="label-screen">
    <p class="text">You have selected <span id="count">0</span> seats for a price of $<span id="total">0</span></p>
</div>
`;
const r = document.querySelector('.container'),
  o = document.querySelectorAll('.row .seat:not(.occupied)'),
  u = document.getElementById('count'),
  p = document.getElementById('total'),
  l = document.getElementById('movie');
f();
let n = +l.value;
function m(s, d) {
  localStorage.setItem('selectedMovieIndex', s), localStorage.setItem('selectedMoviePrice', d);
}
function c() {
  const s = document.querySelectorAll('.row .seat.selected'),
    d = [...s].map(e => [...o].indexOf(e));
  localStorage.setItem('selectedSeats', JSON.stringify(d));
  const v = s.length;
  (u.innerText = v), (p.innerText = v * n);
}
function f() {
  const s = JSON.parse(localStorage.getItem('selectedSeats'));
  s !== null &&
    s.length > 0 &&
    o.forEach((v, e) => {
      s.indexOf(e) > -1 && v.classList.add('selected');
    });
  const d = localStorage.getItem('selectedMovieIndex');
  d !== null && (l.selectedIndex = d);
}
l.addEventListener('change', s => {
  (n = +s.target.value), m(s.target.selectedIndex, s.target.value), c();
});
r.addEventListener('click', s => {
  s.target.classList.contains('seat') &&
    !s.target.classList.contains('occupied') &&
    (s.target.classList.toggle('selected'), c());
});
c();
