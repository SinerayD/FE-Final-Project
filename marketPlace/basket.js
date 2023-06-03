const basketJson = localStorage.getItem('basket');
const row = document.querySelector('.row');

if (basketJson != null) {
    const baskets = JSON.parse(basketJson);

    baskets.forEach((basket) => {
        let box = `<div class="nft_card">
    <img src="${basket.imgSrc}">
    <div class="nft_info">
        <div class="nft_name">
            <h5>${basket.nftName}</h5>
            <div class="nft_artist">
                <img src="${basket.nftArtist}">
                <p>Shroomie</p>
            </div>
        </div>
        <div class="additional_info">
            <div class="price">
                <p>Price</p>
                <p> 1.63 ETH</p>
            </div>
            <div class="highest_bid">
                <p>Highest Bid</p>
                <p>0.33wETH</p>
            </div>
        </div>
    </div>
</div>`;
        row.innerHTML += box;
    });
} else {
    row.innerHTML = 'Add your favorites in basket';
}