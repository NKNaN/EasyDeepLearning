const nnCvs = document.getElementById("networkCanvas");
const nnctx = nnCvs.getContext("2d");

function init() {
    nnCvs.width = window.innerWidth / 8 * 6 * devicePixelRatio;
    nnCvs.height = window.innerHeight / 7 * 5 * devicePixelRatio;
}

init();

class Layer{
    constructor() {
        this.w = window.innerWidth / 8;
        this.h = window.innerWidth / 8;
    }
}
class LayerDrawer{
    constructor(nLayers = 1) {
        this.layerArray = new Array(nLayers).fill(0).map(() => new Layer());
    }

    // addLayer() {

    // }

    draw() {
        nnctx.fillRect(window.innerWidth / 3, window.innerHeight / 3, this.layerArray[0].w, this.layerArray[0].h);
    }
}
