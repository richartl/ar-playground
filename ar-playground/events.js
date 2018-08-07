var lastClicked = 0;

function onClickCheck(callback) {
    var timeNow = Date.now();
    if (timeNow - lastClicked < 15000) {
        callback();
    }
    lastClicked = timeNow;
}

AFRAME.registerComponent('markerhandler', {

    init: function() {
        // Set up the tick throttling. Will check if marker is active every 500ms
        this.tick = AFRAME.utils.throttleTick(this.tick, 500, this);
    },

    tick: function(t, dt) {
        const animatedMarker = document.querySelector("#animated-marker");
        if (animatedMarker.object3D.visible == true) {
            animatedMarker.addEventListener('click', function(ev) {
                onClickCheck(() => alert('CLICK!'));
            });
        }
}});



