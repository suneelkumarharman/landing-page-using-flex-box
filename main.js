// Slider (article 1)
const bookmark = document.querySelector('.slider.bookmark');
const search = document.querySelector('.slider.search');
const share = document.querySelector('.slider.share');
const redBar = document.querySelector('.slider-bar');

const bookmarkTab = document.querySelector('.tab.bookmark');
const searchTab = document.querySelector('.tab.search');
const shareTab = document.querySelector('.tab.share');

function selectSlider(slider) {
    switch (slider) {
        case 'bookmark':
            bookmark.classList.add('active');
            search.classList.remove('active');
            share.classList.remove('active');
            redBar.style.left = "0";
            displayTab(slider)
            break;
        case 'search':
            bookmark.classList.remove('active');
            search.classList.add('active');
            share.classList.remove('active');
            redBar.style.left = "275px";
            displayTab(slider)
            break;
        case 'share':
            bookmark.classList.remove('active');
            search.classList.remove('active');
            share.classList.add('active');
            redBar.style.left = "550px";
            displayTab(slider)
            break;
    }
}

function displayTab(slider) {
    switch (slider) {
        case 'bookmark':
            bookmarkTab.classList.add('active');
            searchTab.classList.remove('active');
            shareTab.classList.remove('active');
            break;
        case 'search':
            bookmarkTab.classList.remove('active');
            searchTab.classList.add('active');
            shareTab.classList.remove('active');
            break;
        case 'share':
            bookmarkTab.classList.remove('active');
            searchTab.classList.remove('active');
            shareTab.classList.add('active');
    }
}

bookmark.addEventListener('click', e => {
    selectSlider('bookmark');
})

search.addEventListener('click', e => {
    selectSlider('search');
})

share.addEventListener('click', e => {
    selectSlider('share');
})