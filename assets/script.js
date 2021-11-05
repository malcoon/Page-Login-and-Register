let recoveryPassword = document.querySelector('.recovery');

document.querySelector('#recovery').onclick = () => {
    recoveryPassword.classList.toggle('active');
}

document.querySelector('.close').onclick = () => {
    recoveryPassword.classList.remove('active');
}

window.onscroll = () => {
    recoveryPassword.classList.remove('active');
}