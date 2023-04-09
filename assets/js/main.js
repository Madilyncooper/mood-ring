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

const url = 'https://corsproxy.io/?https://api.api-ninjas.com/v1/quotes?';
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
    // console.log(response.photos);

    var photoList = response.photos;
    //    displayImages(response) 
    //Add in images
    photoArr.push(photoList);

};



async function colorBtnClick(event) {

    event.preventDefault();

    // console.log(event.target.textContent)
    // if (!event.target.matches('.color-buttons')) {
    //     return;
    // }

    if (event.target.textContent === 'Red') {
        await searchPhotos('red');
        grabPicture()
    }
    else if (event.target.textContent === 'Green') {
        await searchPhotos('green');
        grabPicture()
    }
    else if (event.target.textContent === 'Blue') {
        await searchPhotos('blue');
        grabPicture()
    }
    else if (event.target.textContent === 'Orange') {
        await searchPhotos('orange');
        grabPicture()
    }
    else if (event.target.textContent === 'Pink') {
        await searchPhotos('pink');
        grabPicture()
    }
    else if (event.target.textContent === 'Yellow') {
        await searchPhotos('yellow');
        grabPicture()
    }
    else {
        return;
    }
}

function grabPicture (){
document.querySelector('section').innerHTML = ''
var quo = document.createElement('h3')
quo.setAttribute('class', 'recent')
quo.textContent = quoteArr[0].quote + ' by ' + quoteArr[0].author
quoteEl.appendChild(quo)
   
    var rand = photoArr[0][Math.floor(Math.random() * photoArr[0].length)]

    var imgEl = document.createElement('img');
    imgEl.setAttribute('src', rand.src.original);
    imgEl.setAttribute('alt', rand.alt);
    imgEl.setAttribute('class', 'size')
    quoteEl.appendChild(imgEl)

    var refresh = document.createElement('button');
    refresh.textContent = 'Refresh';
    refresh.classList.add('button', 'is-primary');
    refresh.addEventListener('click', refreshPage);

    quoteEl.appendChild(refresh);

}


colorBtnEl.addEventListener('click', colorBtnClick)

function refreshPage(){
    window.location.reload();
} 
