'use strict'
function choose(){
    let season = Math.floor(Math.random() * 10) + 1;
    let episode = 1;
    if (season === 2 || season === 6){
        episode = Math.floor(Math.random() * 25) + 1;
    }
    if (season === 10){
        episode = Math.floor(Math.random() * 17) + 1;
    } else {
        episode = Math.floor(Math.random() * 24) + 1;
    }
    document.querySelector('.season-number').textContent = season;
    document.querySelector('.episode-number').textContent = episode;
    document.querySelector('.message').textContent = 'Приятного просмотра!';
}

document.querySelector('.btn').addEventListener('click', choose)