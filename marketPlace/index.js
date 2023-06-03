//Local Storage code
const addHeartButtons = () => {
  const nftCards = document.querySelectorAll('.nft_card');

  nftCards.forEach(card => {
    const heartButton = document.createElement('div');
    heartButton.id = 'heart';
    heartButton.classList.add('button');

    heartButton.addEventListener('click', function() {
      this.classList.toggle('red');
      const card = this.closest('.nft_card');
      setLocal(card);
    });

    card.insertBefore(heartButton, card.firstChild);
  });
};


const setLocal = (card) => {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  const img = card.querySelector('img');
  const imgSrc = img.getAttribute('src');
  const nftName = card.querySelector('.nft_name h5').innerHTML;
  const nftArtist = card.querySelector('.nft_name .nft_artist p').innerHTML;
  const additionalInfo=card.querySelector('.additional_info');

  const obj = {
    imgSrc: imgSrc,
    nftName: nftName,
    nftArtist: nftArtist,
    additionalInfo:additionalInfo,
  };

  if (favorites.some(favorite => favorite.imgSrc === imgSrc)) {
    
    const updatedFavorites = favorites.filter(favorite => favorite.imgSrc !== imgSrc);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    updateCircleNumber(updatedFavorites.length); 
  } else {
    favorites.push(obj);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateCircleNumber(favorites.length); 
  }
};

function updateCircleNumber(count) {
  const circleNumber = document.querySelector('.circle');
  circleNumber.textContent = count.toString();
}

addHeartButtons();

 
// Search Engine code
const searchInput = document.getElementById('search_nft');

searchInput.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();

    nftCards.forEach(function (nftCard) {
        const nftName = nftCard.querySelector('.nft_name h5').textContent.toLowerCase();

        if (nftName.includes(searchTerm)) {
            nftCard.style.display = 'block';
        } else {
            nftCard.style.display = 'none';
        }
    });
});


//Sign Up button navigation page code
const signUpButton = document.querySelector('.button1.enroll_icon');

signUpButton.addEventListener('click', function() {
  window.location.href = "../createAccount/index.html";
});




