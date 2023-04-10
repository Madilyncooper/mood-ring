var colorBtnEl = document.querySelector('.buttons');
var quoteEl = document.querySelector('.quote')
var colorEL = document.querySelector('.color')
var memeApiKey = 'jzeomPx5iwUnwAU/a96sUQ==UdtVN88itkhPAA9i';
var pexelsApiKey = 'w2sIrwpKk7Gw4JfF7ws129C25twSIzoVDSKvO0JLYw3ZhrxSTKIsdVXU';
var photoArr = [];
var quoteArr = [];
let quote = document.getElementById('quote');
let author = document.getElementById('author');
let colorBtn = document.getElementById('button1');
var headerEl = document.querySelector('h1');
var divHeaderEl = document.querySelector('div');


var colorHistory = JSON.parse(localStorage.getItem('Color')) || [];



const url = 'https://corsproxy.io/?https://api.api-ninjas.com/v1/quotes?category=funny';
let button1 = () => {
    fetch(url, {
        method: 'GET',
        headers: {
            'X-Api-Key': 'o0JPsjaxKAjYHWLbWRhDqA==Zwqo33NhytJuPms3',
            'Content-Type': 'application/json',
        },
    })
        .then((data) => data.json())
        .then((item) => {
            var quoteObj = {
                quote: item[0].quote,
                author: item[0].author,
            }
            quoteArr.push(quoteObj)
        });
}
button1();



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

    var photoList = response.photos;
    photoArr.push(photoList);

};



async function colorBtnClick(event) {
    event.preventDefault();

    var colorHistory = JSON.parse(localStorage.getItem('Color')) || [];

    if (event.target.textContent === 'Red') {
        await searchPhotos('red');
        grabPicture()

        if (!colorHistory.includes(event.target.textContent)) {
            colorHistory.push(event.target.textContent);
            localStorage.setItem('Color', JSON.stringify(colorHistory));
        }
    }
    else if (event.target.textContent === 'Green') {
        await searchPhotos('green');
        grabPicture()
        if (!colorHistory.includes(event.target.textContent)) {
            colorHistory.push(event.target.textContent);
            localStorage.setItem('Color', JSON.stringify(colorHistory));
        }
    }
    else if (event.target.textContent === 'Blue') {
        await searchPhotos('blue');
        grabPicture()
        if (!colorHistory.includes(event.target.textContent)) {
            colorHistory.push(event.target.textContent);
            localStorage.setItem('Color', JSON.stringify(colorHistory));
        }
    }
    else if (event.target.textContent === 'Orange') {
        await searchPhotos('orange');
        grabPicture()
        if (!colorHistory.includes(event.target.textContent)) {
            colorHistory.push(event.target.textContent);
            localStorage.setItem('Color', JSON.stringify(colorHistory));
        }
    }
    else if (event.target.textContent === 'Pink') {
        await searchPhotos('pink');
        grabPicture()
        if (!colorHistory.includes(event.target.textContent)) {
            colorHistory.push(event.target.textContent);
            localStorage.setItem('Color', JSON.stringify(colorHistory));
        }
    }
    else if (event.target.textContent === 'Yellow') {
        await searchPhotos('yellow');
        grabPicture()
        if (!colorHistory.includes(event.target.textContent)) {
            colorHistory.push(event.target.textContent);
            localStorage.setItem('Color', JSON.stringify(colorHistory));
        }
    }
    else {
        return;
    }
}

function grabPicture() {

    document.querySelector('section').innerHTML = '';
    document.querySelector('footer').innerHTML = '';


    var quo = document.createElement('h3');
    quo.setAttribute('class', 'recent');
    // quo.textContent = quoteArr[0].quote;
   
    var authorNameEl = document.createElement('p');
    // authorNameEl.textContent = `By ${quoteArr[0].author}`;
    authorNameEl.setAttribute('id', 'author-name');
    
    for (var i = 0; i < photoArr.length; i++) {
        var rand = photoArr[i][Math.floor(Math.random() * photoArr[i].length)];
        quo.textContent = quoteArr[i].quote;
        authorNameEl.textContent = `By ${quoteArr[i].author}`;
    }
   
    var imgEl = document.createElement('img');
    imgEl.setAttribute('src', rand.src.original);
    imgEl.setAttribute('alt', rand.alt);
    imgEl.setAttribute('class', 'size');
    

    var refresh = document.createElement('button');
    refresh.textContent = 'Back';
    refresh.setAttribute('id', 'back-button')
    refresh.classList.add('button', 'is-primary');
    refresh.addEventListener('click', refreshPage);

    quo.appendChild(authorNameEl);
    quo.appendChild(imgEl);
    quoteEl.appendChild(quo);
    quoteEl.appendChild(refresh);

}


colorBtnEl.addEventListener('click', colorBtnClick)

function refreshPage() {
    window.location.reload();
} 
