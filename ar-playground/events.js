AFRAME.registerComponent('markerhandler', {

    init: function() {
        const animatedMarker = document.querySelector("#animated-marker");

        // one click, we make our model grow
        animatedMarker.addEventListener('click', function(ev, target){
            if (animatedMarker.object3D.visible == true) {
                console.log('qua', ev, target)
                const entity = document.querySelector('#animated-model');
                const scale = entity.getAttribute('scale');
                Object.keys(scale).forEach((key) => scale[key] = scale[key] + 1);
                entity.setAttribute('scale', scale);
            }
        });
}});
