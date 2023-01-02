const menuBackground = document.querySelector('.menu-background');

const handleMenu = () =>{
    if (menuBackground.style.display === 'none') {
        menuBackground.style.display = "flex";
    } else {
        menuBackground.style.display = "none";
    }
}

const selfClose = (elem) =>{
    console.log(elem);
    elem.style.display = "none";
}

