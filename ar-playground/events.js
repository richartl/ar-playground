AFRAME.registerComponent('markerhandler', {

    init: function() {
        // Set up the tick throttling. Will check if marker is active every 500ms
        this.tick = AFRAME.utils.throttleTick(this.tick, 500, this);
    },

    tick: function(t, dt) {
        const animatedMarker = document.querySelector("#animated-marker");
        if (animatedMarker.object3D.visible == true) {

            const handler = function(){
                onClickCheck(() => alert('CLICK!'));
            };

            if (!this.handler) {
                animatedMarker.addEventListener('click', );
                this.handler = handler;
            }
        }
}});



