<<<<<<< Updated upstream
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

   // displayImages(response) ADD IN LATER
};

searchPhotos('red');
=======
var quoteApiKey =  'o0JPsjaxKAjYHWLbWRhDqA==Zwqo33NhytJuPms3';
var pexelApiKey = 'w2sIrwpKk7Gw4JfF7ws129C25twSIzoVDSKvO0JLYw3ZhrxSTKIsdVXU';

const quoteText = document.querySelector(".quote"),
authorName = document.querySelector(".author.name"),
colorBtn = document.querySelector("button");

function randomQuote(){
    fetch("https://api-ninjas.com/api/quotes").then(res.json()).then(result =>{
        console.log(result);
        
    })

}
>>>>>>> Stashed changes
