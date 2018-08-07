// modify scale of 3D model
const modifyScale = function(delta) {
    const entity = document.querySelector('#animated-model');
    const scale = entity.getAttribute('scale');
    Object.keys(scale).forEach((key) => scale[key] = scale[key] + delta);
    entity.setAttribute('scale', scale);
}

AFRAME.registerComponent('markerhandler', {

    init: function() {
        const animatedMarker = document.querySelector("#animated-marker");

        // one click, we make our model grow
        animatedMarker.addEventListener('click', function(){
            if (animatedMarker.object3D.visible == true) {
                modifyScale(1);
            }
        });

        // doubleclick, we keep him tiny
        animatedMarker.addEventListener('dblclick', function(){
            if (animatedMarker.object3D.visible == true) {
                modifyScale(-1);
            }
        });

}});
