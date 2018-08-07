function onClickCheck(callback) {
    var timeNow = (new Date()).getTime();
    if (timeNow > (lastClicked + 500)) {
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
        var lastClicked = 0;
        const animatedMarker = document.querySelector("#animated-marker");
        if (animatedMarker.object3D.visible == true) {
            animatedMarker.addEventListener('click', function(ev) {
                onClickCheck(() => alert('CLICK!'));
            });
        }
}});



