AFRAME.registerComponent('markerhandler', {

    init: function() {
        // Set up the tick throttling. Will check if marker is active every 500ms
        this.addedListener = false;
        this.tick = AFRAME.utils.throttleTick(this.tick, 500, this);
    },

    tick: function(t, dt) {
        const animatedMarker = document.querySelector("#animated-marker");
        if (animatedMarker.object3D.visible == true && !this.addedListener) {
                animatedMarker.addEventListener('click', () => {
                    alert('CLICK!');
                });
                this.addedListener = true;
            }
        }
});



