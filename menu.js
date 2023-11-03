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

const aside = document.querySelector("aside");
const nnCanvas = document.querySelector("#networkCanvas");
const layerBtn = document.querySelector(".icon-Layers").parentElement;
const layerLst = document.querySelectorAll(".layer div");

layerBtn.addEventListener('click', () => {
    aside.classList.toggle('active');
    nnCanvas.classList.toggle('active');
    layerLst.forEach(function(text, index) {
        setTimeout(()=>{
            text.classList.toggle('active');
        }, index * 50);
    })
})

const subLayerBtn = document.querySelectorAll(".subtitle");
subLayerBtn.forEach(element => element.addEventListener('click', () => {
    const subLayerLst = element.nextElementSibling.children;
    for(let i=0; i<subLayerLst.length; i++){
        subLayerLst[i].classList.toggle('active');
    }
})
)

aside.addEventListener('mouseleave', () => {
    const subLayerLst = document.querySelectorAll(".subLayerList li");
    for(let i=0; i<subLayerLst.length; i++){
        subLayerLst[i].classList.remove('active');
    }
})


