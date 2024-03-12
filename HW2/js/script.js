const dialog = document.querySelector("dialog");
const myPlaylist = [];
const playlistBtn = document.getElementById("myPlaylist");
let savedPlaylist = JSON.parse(localStorage.getItem("playlist"));
const closeButton = document.querySelector("dialog button");
const clearPlaylist = document.getElementById("clearPlaylist");
const dialogBody = document.querySelector("#dialogBody")

closeButton.addEventListener("click", ()=> {
    dialogBody.innerHTML = "";
    dialog.close();
})

playlistBtn.addEventListener("click", ()=> {
    
    dialog.showModal()
    if (savedPlaylist != null) {
        savedPlaylist.map((item) => populateDialog(item));
    }
})

clearPlaylist.addEventListener("click", ()=> {
    localStorage.clear()
    dialogBody.innerHTML = "";
})

function populateDialog(song){
    const createParagraph = document.createElement("p");
    createParagraph.innerHTML = `${song}`;
    dialogBody.append(createParagraph);
}

function createWrapper() {
    const resultWrapper = document.createElement("div");
    resultWrapper.classList = "result-wrapper d-flex justify-content-between flex-wrap g-2"
    document.querySelector("#searchResults").appendChild(resultWrapper);
}

createWrapper()

function showData(image, title,) {

    //TEST 
    /*console.log(serverResponse); //restituisce oggetto contenente array di oggetti
    console.log(serverResponse.data); //restituisce array di oggetti
    console.log(serverResponse.data[1].title);*/
    
    const card = document.createElement("div");
    card.classList = "album-card card col-lg-3 col-6 p-2 d-flex align-items-center";
    const cardImage = document.createElement("img");
    cardImage.src = image;
    cardImage.classList = "card-image";
    const albumTitle = document.createElement("p");
    albumTitle.innerText = title;
    albumTitle.classList = "album-title mt-2 mb-2";
    const titleButton = document.createElement("button");
    titleButton.innerText = "Add to Playlist"
    titleButton.id = "title-button";
    titleButton.classList = "title-button mb-1";
    titleButton.addEventListener("click", ()=> {
        savePlaylistToLocalStorage(title, myPlaylist);
    })

    card.append(cardImage, albumTitle, titleButton)
    document.querySelector(".result-wrapper").appendChild(card);
}

console.log(myPlaylist);

function savePlaylistToLocalStorage(song, array) {
    array.push(song);
    localStorage.setItem("playlist", JSON.stringify(array))
}

//Eminem

const getAlbums = async ()=> {
    try {
        const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem")
        const data = await response.json();

        return data.data
    } catch (error) {
        console.log("Errore durante la richiesta degli album");
    }
}

getAlbums().then(albums => {
    albums.map((album) => {
        //console.log(album);
        showData(album.album.cover_medium, album.title)
    })
})

/*.then(function(eminemResponse) {
    console.log(eminemResponse);

    return eminemResponse.json();
})

.then(function(eminemData) {
    //console.log(eminemData);
    //console.log(eminemData.data[0].title);

    showData(eminemData);
})*/

//Metallica

fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica")

/*.then(function(metallicaResponse) {
    //console.log(metallicaResponse);

    return metallicaResponse.json();
})

.then(function(metallicaData) {
    //console.log(metallicaData);
    showData(metallicaData)
})*/

//Queen

fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=queen")

/*.then(function(queenResponse) {
    //console.log(queenResponse);

    return queenResponse.json();
})

.then(function(queenData) {
    //console.log(queenData);
    showData(queenData)
})*/