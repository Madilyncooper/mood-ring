var colorBtnEl = document.querySelector('.buttons');
var quoteEl = document.querySelector('.quote')
var memeApiKey =  'jzeomPx5iwUnwAU/a96sUQ==UdtVN88itkhPAA9i';
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
            console.log(item[0]);
            var quoteObj = {
                quote: item[0].quote,
                author: item[0].author,
            }
            quoteArr.push(quoteObj)
        });
    }
button1();



async function searchPhotos(query){
    const data=await fetch(`https://api.pexels.com/v1/search?query=${query}`, 
    {
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: pexelsApiKey,
        },
    });
    const response=await data.json();
    // console.log(response.photos);

    var photoList = response.photos;
//    displayImages(response) 
   //Add in images
photoArr.push(photoList);

};



function colorBtnClick (event) {

event.preventDefault();

// console.log(event.target.textContent)
// if (!event.target.matches('.color-buttons')) {
//     return;
// }

if (event.target.textContent === 'Red') {
    searchPhotos('red');
    document.querySelector('section').innerHTML = ''
    var quo = document.createElement('h1')
    quo.setAttribute('class','recent')
    quo.textContent = JSON.stringify(quoteArr)
    quoteEl.appendChild(quo)
    console.log(quoteArr)
    console.log(photoArr);
}
else if (event.target.textContent === 'Green') {
    searchPhotos('green');
    document.querySelector('section').innerHTML = ''
    var quo = document.createElement('h1')
    quo.setAttribute('class','recent')
    quo.textContent = JSON.stringify(quoteArr)
    quoteEl.appendChild(quo)
    console.log(quoteArr)
    console.log(photoArr);
}
else if (event.target.textContent === 'Blue') {
    searchPhotos('blue');
    document.querySelector('section').innerHTML = ''
    var quo = document.createElement('h1')
    quo.setAttribute('class','recent')
    quo.textContent = JSON.stringify(quoteArr)
    quoteEl.appendChild(quo)
    console.log(quoteArr)
    console.log(photoArr);
}
else if (event.target.textContent === 'Orange') {
    searchPhotos('orange');
    document.querySelector('section').innerHTML = ''
    var quo = document.createElement('h1')
    quo.setAttribute('class','recent')
    quo.textContent = JSON.stringify(quoteArr)
    quoteEl.appendChild(quo)
    console.log(quoteArr)
    console.log(photoArr);
}
else if (event.target.textContent === 'Pink') {
    searchPhotos('pink');
    document.querySelector('section').innerHTML = ''
    var quo = document.createElement('h1')
    quo.setAttribute('class','recent')
    quo.textContent = JSON.stringify(quoteArr)
    quoteEl.appendChild(quo)
    console.log(quoteArr)
    console.log(photoArr);
}
else if (event.target.textContent === 'Yellow') {
    searchPhotos('yellow');
    document.querySelector('section').innerHTML = ''
    var quo = document.createElement('h1')
    quo.setAttribute('class','recent')
    quo.textContent = JSON.stringify(quoteArr)
    quoteEl.appendChild(quo)
    console.log(quoteArr)
    console.log(photoArr);
}
else {
    return;
}
}



// function renderPhoto () {
//     var imageEl = document.createAttribute('img');

// }

colorBtnEl.addEventListener('click', colorBtnClick);

