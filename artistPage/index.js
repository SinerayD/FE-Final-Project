const artistCards = document.querySelectorAll('.artist_card');

function handleArtistCardClick(event) {
  if (event.currentTarget.classList.contains('artist_card')) {
    window.location.href = '..//127.0.0.1:5500/Artist%20page/index.html';
  }
}

artistCards.forEach((artistCard) => {
  artistCard.addEventListener('click', handleArtistCardClick);
});
