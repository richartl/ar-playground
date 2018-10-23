AFRAME.registerComponent('markerhandler', {

    init: function() {
        const animatedMarker = document.querySelector("#animated-marker");

        // every click, we make our model grow in size
        animatedMarker.addEventListener('click', function(ev, target){
            console.log('outside', ev)
            if (animatedMarker.object3D.visible == true && ev.detail.cursorEl) {
                console.log('dentrone', ev)
                const entity = document.querySelector('#animated-model');
                const scale = entity.getAttribute('scale');
                Object.keys(scale).forEach((key) => scale[key] = scale[key] + 1);
                entity.setAttribute('scale', scale);
            }
        });
}});
