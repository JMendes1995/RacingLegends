


function mostraCat(arrayCategorias) {
    // `arrayDePilotos` é um Array. A função `forEach` do Array
    // é uma alternativa ao ciclo `for`.
    // A função que é passada por parâmetro é invocada para
    // cada item do array.
    arrayCategorias.forEach(function (cat) {

        var catName = document.createElement("p");
        catName.textContent = cat.name;
        var id = cat.id;

        showImage(id, catName);
    });

}

function showImage(id, cat) {
    var imgConteiner = document.createElement('div');
    imgConteiner.className = 'contClass';
    listCat.appendChild(imgConteiner);
    var img = document.createElement('img');

    img.setAttribute('src', "http://ipt-ti2-racinglegends-api.eu-gb.mybluemix.net/api/v1/categories/" + id + "/image");
    img.setAttribute('width', '400px');
    img.setAttribute('height', '200px');
    imgConteiner.appendChild(img);

    var writecat = document.createElement('div');
    writecat.className = 'top-right';

    writecat.textContent = cat.textContent;
    imgConteiner.appendChild(writecat);

    clearScr(imgConteiner, id, cat);
}
function clearScr(imgConteiner, id, cat) {
    imgConteiner.addEventListener('click', function (evt) {

        listCat.className = 'hide';
        fetchDrivers(id);
    });
}

function getDrivers(arrayDrivers) {
    arrayDrivers.forEach(function (driver) {

        var driveName = document.createElement('p');
        driver.textContent = driver.name;
        console.log(driver);
        var id = driver.id;
        listaDrivers(driver, id);
    });
}

function listaDrivers(driver, id) {
    var driverConteiner = document.createElement('div');
    driverConteiner.className = 'driverConteiner';
    listPilotos.appendChild(driverConteiner);

    var fotoPilotos = document.createElement('img');
    fotoPilotos.setAttribute('src', "http://ipt-ti2-racinglegends-api.eu-gb.mybluemix.net/api/v1/drivers/" + id + "/image");
    fotoPilotos.setAttribute('width', '250px');
    fotoPilotos.setAttribute('height', '300px');
    driverConteiner.appendChild(fotoPilotos);

    var nameConteiner = document.createElement('div');
    nameConteiner.className = 'driver-top-right';
    nameConteiner.textContent = driver.textContent;
    driverConteiner.appendChild(nameConteiner);
    clearScrDrivers(driverConteiner,id);
}

function clearScrDrivers(driverConteiner, id) {
    driverConteiner.addEventListener('click', function (evt) {
        listPilotos.className = 'hide-drivers';
        fetchDriversDetails(id);
    });
}

function getDriversDetails(arrayDriversDetails) {
    var titleConteiner = document.createElement('div');
    titleConteiner.className = 'titleConteiner';
    driverContent.appendChild(titleConteiner);
    var fotoPiloto = document.createElement('img');
    var fotoDriverConteiner = document.createElement('div');
    titleConteiner.appendChild(fotoDriverConteiner);
    fotoPiloto.setAttribute('src', "http://ipt-ti2-racinglegends-api.eu-gb.mybluemix.net/api/v1/drivers/" + arrayDriversDetails.id + "/image");
    fotoPiloto.setAttribute('width', '175px');
    fotoPiloto.setAttribute('height', '225px');
    fotoDriverConteiner.appendChild(fotoPiloto);

    var detailsConteiner = document.createElement('div');
    detailsConteiner.className = 'detailsConteiner';
    var driveNameDetails = document.createElement('h1');
    driveNameDetails.textContent = arrayDriversDetails.name;
    titleConteiner.appendChild(detailsConteiner);
    detailsConteiner.appendChild(driveNameDetails);

    var driveNicknameDetails = document.createElement('p');
    driveNicknameDetails.textContent = arrayDriversDetails.nickname;
    detailsConteiner.appendChild(driveNicknameDetails);

    var driveBirthDetails = document.createElement('p');

    driveBirthDetails.textContent = 'Born: ' + arrayDriversDetails.birth_date + '  Died: ' + arrayDriversDetails.death_date;
    detailsConteiner.appendChild(driveBirthDetails);

    var victoryContainer = document.createElement('div');
    victoryContainer.className = 'victoryContainer';
    titleConteiner.appendChild(victoryContainer);

    var driveFirstVictoryDetails = document.createElement('p');
    driveFirstVictoryDetails.textContent = 'First Victory: ' + arrayDriversDetails.records.first_race_win;
    victoryContainer.appendChild(driveFirstVictoryDetails);

    var driveRaceVictoryDetails = document.createElement('p');
    driveRaceVictoryDetails.textContent = 'Races won: ' + arrayDriversDetails.records.race_victories;
    victoryContainer.appendChild(driveRaceVictoryDetails);

    var driveVictoryDetails = document.createElement('p');
    driveVictoryDetails.textContent = 'Championships won: ' + arrayDriversDetails.records.championship_victories;
    victoryContainer.appendChild(driveVictoryDetails);

    var driverHistoryConteiner = document.createElement('div');
    driverHistoryConteiner.className = 'driverHistoryConteiner';
    driverContent.appendChild(driverHistoryConteiner);

    var driveHistoryDetails = document.createElement('p');
    driveHistoryDetails.textContent = arrayDriversDetails.introduction;
    driverHistoryConteiner.appendChild(driveHistoryDetails);





    var driverFullConteiner = document.createElement('div');
    driverFullConteiner.className = 'driverFullConteiner';
    driverContent.appendChild(driverFullConteiner);

    var separador = document.createElement('hr');
    separador.className = 'seperador';
    driverFullConteiner.appendChild(separador);

    var driverFullHistConteiner = document.createElement('div');
    driverFullHistConteiner.className = 'driverFullHistConteiner';
    driverFullConteiner.appendChild(driverFullHistConteiner);
    var driveTitleHistoryDetails = document.createElement('h1');
    driveTitleHistoryDetails.textContent = arrayDriversDetails.career[0].title;
    driverFullHistConteiner.appendChild(driveTitleHistoryDetails);

    var driveFullHistoryDetails = document.createElement('p');
    driveFullHistoryDetails.textContent = arrayDriversDetails.career[0].text;
    driverFullHistConteiner.appendChild(driveFullHistoryDetails);

    //side bar
    var sideBar = document.createElement('div');
    sideBar.className = 'sideBar';
    driverContent.appendChild(sideBar);
  
    getArrayImg(arrayDriversDetails.id, arrayDriversDetails.multimedia.images, arrayDriversDetails.multimedia.videos, sideBar);
    //http://ipt-ti2-racinglegends-api.eu-gb.mybluemix.net/api/v1/drivers/colinmcrae/multimedia/images/4e1e98d3-6fe9-4f56-b7a6-55086e33db59/image
}

function getArrayImg(driverID, imgID, youtubeID, sideBar) {
    var count = 0;
    imgID.forEach((idImg) =>{
        count++;
        var imgg = document.createElement('img');
        imgg.setAttribute('src', "http://ipt-ti2-racinglegends-api.eu-gb.mybluemix.net/api/v1/drivers/" + driverID+"/multimedia/images/"+idImg.id+"/image");
        imgg.setAttribute('width', '250px');
        imgg.setAttribute('height', '200px');
        sideBar.appendChild(imgg);

        imgg.addEventListener("click", function (evt) {
            indexArray = imgID.indexOf(idImg);
            getVid(youtubeID, sideBar, imgg, indexArray);
          
            
        });
    });
    

}
function getVid(youtubeID, sideBar, imgg, indexArray) {
    var video = document.createElement('div');
    var vidID = youtubeID[indexArray].youtube_id;
    if (vidID != null) {

  
    videoConteiner.appendChild(video);
    videoConteiner.className ='setvideoConteiner'
    var showVid = document.createElement('iframe');
    showVid.className = 'mbed-responsive-item';
    
    showVid.setAttribute('src', "https://www.youtube.com/embed/" + vidID);
    showVid.setAttribute('width', '900px');
    showVid.setAttribute('height', '600px');
    showVid.setAttribute('allowFullScreen', '')
    video.appendChild(showVid);

    var closeContainer = document.createElement('div');
    video.appendChild(closeContainer);
    var closeButton = document.createElement('button');
    closeButton.className = 'close';
    closeButton.textContent='Close'
    closeContainer.appendChild(closeButton);
    closeButton.addEventListener('click', function () {
        video.remove();
        videoConteiner.className = 'videoConteiner';
        })
    }
}

