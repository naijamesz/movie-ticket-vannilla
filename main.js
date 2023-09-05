import './styles/style.css';

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

const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

populateUI();

let ticketPrice = +movieSelect.value;

// Save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
}

// Update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');

  const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

// Get data from localstorage and populate UI
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected');
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }
}

// Movie select event
movieSelect.addEventListener('change', e => {
  ticketPrice = +e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});

// Seat click event
container.addEventListener('click', e => {
  if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
    e.target.classList.toggle('selected');

    updateSelectedCount();
  }
});

// Initial count and total set
updateSelectedCount();
