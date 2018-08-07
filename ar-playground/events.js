AFRAME.registerComponent('markerhandler', {

  init: function() {
    // Set up the tick throttling. Will check if marker is active every 500ms
    this.tick = AFRAME.utils.throttleTick(this.tick, 500, this);
  },

  tick: function(t, dt) {
    const animatedMarker = document.querySelector("#animated-marker");
    var animatedObject = document.querySelector('#animated-model');
    if (animatedObject.object3D.visible == true && animatedMarker.object3D.visible == true) {
        animatedMarker.addEventListener('click', function(ev) {
            ev.stopPropagation()
            alert("clicconeee marker click")
        });
        animatedMarker.addEventListener('touchend', function(ev) {
            ev.stopPropagation()
            alert("clicconeee marker touchend")
        });
    }
}});
