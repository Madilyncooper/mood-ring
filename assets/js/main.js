var memeApiKey = 'jzeomPx5iwUnwAU/a96sUQ==UdtVN88itkhPAA9i';
var pexelsApiKey = 'w2sIrwpKk7Gw4JfF7ws129C25twSIzoVDSKvO0JLYw3ZhrxSTKIsdVXU';



async function searchPhotos(query) {
    const data = await fetch(`https://api.pexels.com/v1/search?query=${query}`,
        {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: pexelsApiKey,
            },
        });
    const response = await data.json();
    console.log(response);

    // displayImages(response) ADD IN LATER
};

searchPhotos('red');

let quote = document.getElementById("quote");
let author = document.getElementById("author");
let colorBtn = document.getElementById("button1");

const url = "https://cors-anywhere.herokuapp.com/https://api.api-ninjas.com/v1/quotes?category=inspirational";

let button1 = () => {
    fetch(url, {
        method: 'GET',
        headers: {
            'X-Api-Key': 'o0JPsjaxKAjYHWLbWRhDqA==Zwqo33NhytJuPms3',
            'Content-Type': 'application/json'
        },
       
    })
        .then((data) => data.json())
        .then((item) => {
            console.log(item);
            quote.innerText = item.content;
            author.innerText = item.author;
        });
}

button1();

// colorBtn.addEventListener("click", colorBtn);
