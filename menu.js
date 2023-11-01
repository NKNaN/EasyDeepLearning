const menuBtn = document.getElementById('listBtn');
const menu = document.querySelector('.menu');
const menuText = document.querySelectorAll('.menuText');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('open');
    menuText.forEach(function(text, index) {
        setTimeout(()=>{
            text.classList.toggle('open2');
        }, index * 50)
    });
});

const layerBtn = document.querySelector(".icon-Layers").parentElement;
layerBtn.addEventListener('click', () => {
    drawer = new LayerDrawer();
    drawer.draw();
})