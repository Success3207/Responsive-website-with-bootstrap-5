let clickNav = document.querySelector(".hidden");

function alreadyClicked() {
    if (clickNav.style.display == 'none') {
        clickNav.style.display = 'flex';
    } else{
        clickNav.style.display = 'none';
    }
}