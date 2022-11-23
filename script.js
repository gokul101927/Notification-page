let notifications = document.querySelectorAll('.notifications');
let allRead = document.querySelector('.mark-all-read');
let count = document.querySelector('.count');

allRead.addEventListener('click', (e) => {
    e.preventDefault();
    notifications.forEach(e => {
        e.classList.add('read');
    })

    count.innerHTML = '0';

})

notifications.forEach((notification) => notification.addEventListener('click', () => {
    if (!notification.classList.contains('read')) {
        notification.classList.add('read');
        count.innerHTML = +count.innerHTML - 1;
    }
    
}))