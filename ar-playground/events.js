AFRAME.registerComponent('markerhandler', {

  init: function() {
    // Set up the tick throttling. Will check if marker is active every 500ms
    this.tick = AFRAME.utils.throttleTick(this.tick, 500, this);
  },

  tick: function(t, dt) {
    const animatedMarker = document.querySelector("#animated-marker");
    var animatedObject = document.querySelector('#animated-model');
    if (animatedMarker.object3D.visible == true || animatedObject.object3D.visible == true) {
        console.log('s', 'AAA', t, dt,);
        // var animatedObject = document.querySelector('#animated-model');
        animatedObject.addEventListener('click', function() {
            alert("clicconeee")
        });
        animatedObject.addEventListener('touchend', function() {
            alert("clicconeee")
        });
        animatedMarker.addEventListener('click', function() {
            alert("clicconeee")
        });
        animatedMarker.addEventListener('touchend', function() {
            alert("clicconeee")
        });
    }
}});
