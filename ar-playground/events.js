AFRAME.registerComponent('markerhandler', {

    init: function() {
        // Set up the tick throttling. Will check if marker is active every 500ms
        // this.onClickCallback = function(){
        //     alert('CLICK!');
        // };
        // this.tick = AFRAME.utils.throttleTick(this.tick, 500, this);
        const animatedMarker = document.querySelector("#animated-marker");
        animatedMarker.addEventListener('click', function(){
            if (animatedMarker.object3D.visible == true) {
                const entity = document.querySelector('#animated-model');
                entity.scale = '' + +(entity.scale) + 1;
            }
        });
}});
