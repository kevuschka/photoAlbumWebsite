winterImages = ['winter1.jpg','winter2.jpg','winter3.jpg','winter4.jpg','winter5.jpg','winter6.jpg','winter7.jpg','winter8.jpg','winter9.jpg','winter10.jpg','winter11.jpg','winter12.jpg','winter13.jpg','winter14.jpg','winter15.jpg','winter16.jpg','winter17.jpg'];
sommerImages = ['sommer1.jpg','sommer2.jpg','sommer3.jpg','sommer4.jpg','sommer5.jpg','sommer6.jpg','sommer7.jpg','sommer8.jpg','sommer9.jpg','sommer10.jpg','sommer11.jpg','sommer12.jpg','sommer13.jpg','sommer14.jpg','sommer15.jpg','sommer16.jpg','sommer17.jpg','sommer18.jpg','sommer19.jpg'];
fruhlingImages = ['fruhling1.jpg','fruhling2.jpg','fruhling3.jpg','fruhling4.jpg','fruhling5.jpg','fruhling6.jpg'];
herbstImages = ['herbst1.jpg','herbst2.jpg','herbst3.jpg','herbst4.jpg','herbst5.jpg','herbst6.jpg','herbst7.jpg','herbst8.jpg','herbst9.jpg'];

chapters = [winterImages, herbstImages, sommerImages, fruhlingImages];


function loadImages() {
    let wrapper = document.getElementById('wrapper');
    wrapper.innerHTML = '';

    renderWinterImages();
    renderHerbstImages();
    renderSommerImages();
    renderFruhlingImages();
    addPopUpImage();
}


// All 4 functions for each section
function renderWinterImages() {
    document.getElementById('wrapper').innerHTML += `<div id="chapterBox1" class="chapterBox flex"></div>`;
    document.getElementById('chapterBox1').innerHTML +=`<h2 class="chapterHeadline">Winter</h2>`;
    
    for(let i = 0; i < winterImages.length; i++) {
        document.getElementById('chapterBox1').innerHTML += getWinterImages(i);
    }
}


function renderHerbstImages() { 
    document.getElementById('wrapper').innerHTML += `<div id="chapterBox2" class="chapterBox flex"></div>`;
    document.getElementById('chapterBox2').innerHTML +=`<h2 class="chapterHeadline">Herbst</h2>`;
    for(let i = 0; i < herbstImages.length; i++) {
        document.getElementById('chapterBox2').innerHTML += getHerbstImages(i);
    }
}


function renderSommerImages() {
    document.getElementById('wrapper').innerHTML += `<div id="chapterBox3" class="chapterBox flex"></div>`;
    document.getElementById('chapterBox3').innerHTML +=`<h2 class="chapterHeadline">Sommer</h2>`;
    for(let i = 0; i < sommerImages.length; i++) {
        document.getElementById('chapterBox3').innerHTML += getSommerImages(i);
    }
}


function renderFruhlingImages() {
    document.getElementById('wrapper').innerHTML += `<div id="chapterBox4" class="chapterBox flex"></div>`;
    document.getElementById('chapterBox4').innerHTML +=`<h2 class="chapterHeadline">Frühling</h2>`;
    for(let i = 0; i < fruhlingImages.length; i++) {
        document.getElementById('chapterBox4').innerHTML += getFruhlingImages(i);
    }
}


// image pop-up function
function  popUpTheImage(arrayNumber, imageNumber) {
    document.getElementById('popUpImage').classList.remove('displayNone');
    let numberOfImages = chapters[arrayNumber].length;
    
    document.getElementById('popUpImage').innerHTML += getPopUpImage(arrayNumber, imageNumber);
    endOfPreviewImages(imageNumber);
    endOfNextImages(imageNumber, numberOfImages);
    document.getElementById('popUpImage').classList.remove('displayNone');
    document.getElementById('xButton').classList.remove('displayNone');
}

// close the PopUp Image function
function closeTheImage() {
    document.getElementById('preview').classList.add('displayNone');
    document.getElementById('next').classList.add('displayNone');
    document.getElementById('xButton').classList.add('displayNone');
    document.getElementById('popUpImage').classList.add('displayNone');
    cleanPopUp();
}


// add the hidden popUpImage in the background
function addPopUpImage() {
    document.getElementById('wrapper').innerHTML += `<div id="popUpImage" class="popUpImage displayNone flex"></div>`;
}


function cleanPopUp() {
    document.getElementById('popUpImage').innerHTML = '';
}


function nextImage(a,n) {
    closeTheImage();
    popUpTheImage(a, n+1);
}


function previewImage(a, n) {
    closeTheImage();
    popUpTheImage(a, n-1);
}


function getPopUpImage(a, n) {
    return `
        <img src="img/${chapters[a][n]}">
        <p class="xButton displayNone" id="xButton" onclick="closeTheImage()">x</p>
        <div title="Nächstes Foto" class="imageNavigation displayNone next flex" id="next" onclick="nextImage(${a}, ${n})"><img class="arrow" src="img/arrow_right.png"></div>
        <div title="Vorheriges Foto" class="imageNavigation displayNone preview flex" id="preview" onclick="previewImage(${a}, ${n})"><img class="arrow" src="img/arrow_left.png"></div>
        `;
}


function endOfPreviewImages(n) {
    if (n != 0) {
        document.getElementById('preview').classList.remove('displayNone');
    }
}


function endOfNextImages(n, z) {
    if ((n+1) != z) {
        document.getElementById('next').classList.remove('displayNone');
    }
}


function getWinterImages(i) {
    return `<div class="picture flex">
    <img class="flex" src="img/${winterImages[i]}">
    <div class="filter" onclick="popUpTheImage(0, ${i})"></div>
</div>`;
}


function getHerbstImages(i) {
    return `<div class="picture flex">
    <img class="flex" src="img/${herbstImages[i]}">
    <div class="filter" onclick="popUpTheImage(1, ${i})"></div>
</div>`;
}


function getSommerImages(i) {
    return `<div class="picture flex">
    <img class="flex" src="img/${sommerImages[i]}">
    <div class="filter" onclick="popUpTheImage(2, ${i})"></div>
</div>`;
}


function getFruhlingImages(i) {
    return `<div class="picture flex">
    <img class="flex" src="img/${fruhlingImages[i]}">
    <div class="filter" onclick="popUpTheImage(3, ${i})"></div>
</div>`;
}