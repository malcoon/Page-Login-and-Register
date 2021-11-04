let recoveryPassword = document.querySelector('.recovery');

document.querySelector('#recovery').onclick = () => {
    recoveryPassword.classList.toggle('active');
}

window.onscroll = () => {
    recoveryPassword.classList.remove('active');
}