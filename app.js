const button = document.getElementById('button-share');
const shareDiv = document.querySelector('.share');

button.addEventListener('click', (event) => {
    event.stopPropagation(); 
    shareDiv.classList.remove('inactive');
});

document.addEventListener('click', (event) => {
    if (!shareDiv.contains(event.target) && !button.contains(event.target)) {
        shareDiv.classList.add('inactive');
    }
});
