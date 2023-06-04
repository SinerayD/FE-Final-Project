const headerIcon = document.querySelector(".header_icon");
const volumeHeader = document.querySelector(".right_row:nth-child(3)");

let isAscending = false;
headerIcon.addEventListener("click", () => {
    const rankingNumbers = document.querySelectorAll(".ranking_number");
    const rankingNumbersArray = Array.from(rankingNumbers);

    rankingNumbersArray.sort((a, b) => {
        const numA = parseInt(a.textContent);
        const numB = parseInt(b.textContent);
        if (isAscending) {
            return numA - numB;
        } else {
            return numB - numA;
        }
    });

    isAscending = !isAscending;

    const tableRows = document.querySelectorAll(".table_row");
    tableRows.forEach((row) => row.remove());

    const rankingsSection = document.querySelector(".rankings");
    rankingNumbersArray.forEach((number) => {
        const tableRow = number.closest(".table_row");
        rankingsSection.appendChild(tableRow);
    });
});


const volumeBtn = document.getElementById("volume");
volumeBtn.addEventListener("click", () => {

    const volumeElements = document.querySelectorAll(".right_row > p:nth-child(3) span");
    const volumeArray = Array.from(volumeElements);

    volumeArray.sort((a, b) => {
        const volumeA = parseFloat(a.textContent);
        const volumeB = parseFloat(b.textContent);
        if (isAscending) {
            return volumeB - volumeA;
        } else {
            return volumeA - volumeB;
        }
    });

    isAscending = !isAscending;

    const tableRows = document.querySelectorAll(".table_row");
    tableRows.forEach((row) => row.remove());

    const rankingsSection = document.querySelector(".rankings");
    volumeArray.forEach((volume) => {
        const tableRow = volume.closest(".table_row");
        rankingsSection.appendChild(tableRow);
    });
});

const nftsSoldBtn = document.getElementById("nfts");
nftsSoldBtn.addEventListener("click", () => {
    const nftsSoldElements = document.querySelectorAll(".right_row > p:nth-child(2)");

    const nftsSoldArray = Array.from(nftsSoldElements);
    let isAscending = nftsSoldBtn.classList.contains("ascending");

    nftsSoldArray.sort((a, b) => {
        const nftsSoldA = parseInt(a.textContent);
        const nftsSoldB = parseInt(b.textContent);
        if (isAscending) {
            return nftsSoldB - nftsSoldA;
        } else {
            return nftsSoldA - nftsSoldB;
        }
    });

    isAscending = !isAscending;
    nftsSoldBtn.classList.toggle("ascending");

    const tableRows = document.querySelectorAll(".table_row");
    tableRows.forEach((row) => row.remove());

    const rankingsSection = document.querySelector(".rankings");
    nftsSoldArray.forEach((nftsSold) => {
        const tableRow = nftsSold.closest(".table_row");
        rankingsSection.appendChild(tableRow);
    });
});


const changeElement = document.getElementById("change");

let isDescending = false;

changeElement.addEventListener("click", () => {
    const tableRows = Array.from(document.getElementsByClassName("table_row"));

    tableRows.sort((a, b) => {
        const changeValueA = parseFloat(a.getElementsByClassName("right_row")[0].querySelector("span").innerText);
        const changeValueB = parseFloat(b.getElementsByClassName("right_row")[0].querySelector("span").innerText);
        if (isDescending) {
            return changeValueB - changeValueA;
        } else {
            return changeValueA - changeValueB;
        }
    });

    isDescending = !isDescending;

    const rankingsSection = document.querySelector(".rankings");
    tableRows.forEach(row => row.remove());
    tableRows.forEach(row => rankingsSection.appendChild(row));
});

//Sign Up button navigation page code
const signUpButton = document.querySelector('.button1.enroll_icon');

signUpButton.addEventListener('click', function () {
    window.location.href = "../createAccount/index.html";
});