/*function createCard() {

    const card = document.createElement("div");
    card.classList = "album-card card col-lg-3 col-6 p-2 d-flex align-items-center";
    const cardImage = document.createElement("img");
    cardImage.src = "https://picsum.photos/200";
    cardImage.classList = "card-image";
    const albumTitle = document.createElement("p");
    albumTitle.innerText = "Lorem Ipsum";
    albumTitle.classList = "album-title mt-2 mb-2";
    const titleButton = document.createElement("button");
    titleButton.innerText = "Track List"
    titleButton.id = "title-button";
    titleButton.classList = "title-button mb-1";

    card.append(cardImage, albumTitle, titleButton)
    document.querySelector("#searchResults").appendChild(card);
}

createCard()*/

//TEST PER CICLARE ARRAY E VERIFICARE SE LA FUZIONE createCard() venisse eseguita per ogni elemento dell'array.

/*let arrayTest = [1,2,3,4]

for (let i=0; i<arrayTest.length; i++) {
    createCard()
}*/

function createWrapper() {
    const resultWrapper = document.createElement("div");
    resultWrapper.classList = "result-wrapper d-flex justify-content-between"
    document.querySelector("#searchResults").appendChild(resultWrapper);
}

createWrapper()

function showData(serverResponse) {

    //TEST 
    console.log(serverResponse); //restituisce oggetto contenente array di oggetti
    console.log(serverResponse.data); //restituisce array di oggetti
    console.log(serverResponse.data[1].title);

    //TEST STAMPA IN HTML
    /*const test = document.querySelector(".test");
    test.innerText = serverResponse.data[3].title;*/  
    
    const card = document.createElement("div");
    card.classList = "album-card card col-lg-3 col-6 p-2 d-flex align-items-center";
    const cardImage = document.createElement("img");
    cardImage.src = serverResponse.data[2].album.cover
    cardImage.classList = "card-image";
    const albumTitle = document.createElement("p");
    albumTitle.innerText = serverResponse.data[1].title;
    albumTitle.classList = "album-title mt-2 mb-2";
    const titleButton = document.createElement("button");
    titleButton.innerText = "Track List"
    titleButton.id = "title-button";
    titleButton.classList = "title-button mb-1";

    card.append(cardImage, albumTitle, titleButton)
    document.querySelector(".result-wrapper").appendChild(card);

    /*for (let i = 0; i < serverResponse.data.lenght; i++) {
        const card = document.createElement("div");
        card.classList = "album-card card col-3 p-2 d-flex align-items-center";
        const cardImage = document.createElement("img");
        cardImage.src = serverResponse.data[i].cover;
        cardImage.classList = "card-image";
        const albumTitle = document.createElement("p");
        albumTitle.innerText = serverResponse.data[i].album.title;
        albumTitle.classList = "album-title mt-2 mb-2";
        const titleButton = document.createElement("button");
        titleButton.innerText = "Track List"
        titleButton.id = "title-button";
        titleButton.classList = "title-button mb-1";

        card.append(cardImage, albumTitle, titleButton)
        document.querySelector("#searchResults").appendChild(card);
    }*/
}


//Eminem

fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem")

.then(function(eminemResponse) {
    console.log(eminemResponse);

    return eminemResponse.json();
})

.then(function(eminemData) {
    console.log(eminemData);
    console.log(eminemData.data[0].title);
    showData(eminemData);
})

//Metallica

fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica")

.then(function(metallicaResponse) {
    console.log(metallicaResponse);

    return metallicaResponse.json();
})

.then(function(metallicaData) {
    console.log(metallicaData);
    showData(metallicaData)
})

//Queen

fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=queen")

.then(function(queenResponse) {
    console.log(queenResponse);

    return queenResponse.json();
})

.then(function(queenData) {
    console.log(queenData);
    showData(queenData)
})