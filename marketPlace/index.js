//Add to favorites code
const nftCards = document.querySelectorAll('.nft_card');
let count = 0;

nftCards.forEach(card => {
  const heartButton = document.createElement('div');
  heartButton.id = 'heart';
  heartButton.classList.add('button');

  heartButton.addEventListener('click', function() {
    this.classList.toggle('red');
    if (this.classList.contains('red')) {
      count++;
    } else {
      count--;
    }
    updateCircleNumber();
  });

  card.insertBefore(heartButton, card.firstChild);
});

function updateCircleNumber() {
  const circleNumber = document.querySelector('.circle');
  circleNumber.textContent = count.toString();
}


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