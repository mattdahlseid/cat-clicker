let rightScroll = document.getElementById('scroll-right');
let leftScroll = document.getElementById('scroll-left');
let catpic = document.getElementById('catpic');
let counter = document.getElementById('counter');
let catName = document.getElementById('catName');

let Richard = {
    name: 'POOR RICHARD',
    url: 'images/poor_richard.jpg',
    count: 0
}

let Pepper = {
    name: 'ROCKY',
    url: 'images/rocky.jpg',
    count: 0
}

let Eddie = {
    name: 'EDDIE',
    url: 'images/eddie.jpg',
    count: 0
}

let Lewis = {
    name: 'LEWIS',
    url: 'images/lewis.jpg',
    count: 0
}

let Karen = {
    name: 'KAREN',
    url: 'images/karen.jpg',
    count: 0
}

let catGang = [
    Richard,
    Karen,
    Lewis,
    Eddie, 
    Pepper
]


for (var i = 0; i < catGang.length; i++) {

    // This is the number we're on...
    let num = catGang[i];


    // We're creating a DOM element for the number
    const elem = document.createElement('div');
    elem.setAttribute('class', 'box');
    const a = document.createElement('a');
    a.setAttribute('href', ('#' + num.name));
    
    
    elem.innerHTML = num.name;

    // ... and when we click, alert the value of `num`

    rightScroll.appendChild(a).appendChild(elem);
    rightScroll.getElementsByClassName('box')[0].classList.add('active');

        elem.addEventListener('click', (function(numCopy) {
            return function() {
                counter.innerHTML = numCopy.count;
                catName.innerHTML = numCopy.name;
            };
        })(num));


        elem.addEventListener('click', function() {
        let current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace(' active', '');
        this.className += ' active';
    })

};


for (var i = 0; i < catGang.length; i++) {

    // This is the number we're on...
    let num = catGang[i];


    // We're creating a DOM element for the number
    const elem = document.createElement('div');
    elem.setAttribute('id', num.name);
    elem.setAttribute('class', 'boxBig');
    const catPhoto = document.createElement('div');
    catPhoto.setAttribute('class', 'catPhoto');
    catPhoto.style.backgroundImage = 'url(' + num.url + ')';

    // ... and when we click, alert the value of `num`

    leftScroll.appendChild(elem).appendChild(catPhoto);

        elem.addEventListener('click', (function(numCopy) {
            return function() {
                numCopy.count += 1;
                console.log(numCopy.count);
                counter.innerHTML = numCopy.count;
            };
        })(num));
};


window.onload = function () {
    leftScroll.scrollTop = 0;

}