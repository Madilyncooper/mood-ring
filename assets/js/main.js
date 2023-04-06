var colorBtnEl = document.querySelector('.buttons');

var memeApiKey =  'jzeomPx5iwUnwAU/a96sUQ==UdtVN88itkhPAA9i';
var pexelsApiKey = 'w2sIrwpKk7Gw4JfF7ws129C25twSIzoVDSKvO0JLYw3ZhrxSTKIsdVXU';

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
    console.log(response);

//    displayImages(response) 
   //Add in images

};


colorBtnEl.addEventListener('click', colorBtnClick);

function colorBtnClick (event) {

event.preventDefault();

// console.log(event.target.textContent)
// if (!event.target.matches('.color-buttons')) {
//     return;
// }

if (event.target.textContent === 'Red') {
    searchPhotos('red');
}
else if (event.target.textContent === 'Green') {
    searchPhotos('green');
}
else if (event.target.textContent === 'Blue') {
    searchPhotos('blue');
}
else if (event.target.textContent === 'Orange') {
    searchPhotos('orange');
}
else if (event.target.textContent === 'Pink') {
    searchPhotos('pink');
}
else if (event.target.textContent === 'Yellow') {
    searchPhotos('yellow');
}
else {
    return;
}
}

// function renderPhoto () {
//     var imageEl = document.createAttribute('img');

// }

