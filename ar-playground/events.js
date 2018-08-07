AFRAME.registerComponent('markerhandler', {

  init: function() {
    // Set up the tick throttling. Will check if marker is active every 500ms
    this.tick = AFRAME.utils.throttleTick(this.tick, 500, this);
  },

  tick: function(t, dt) {
    if (document.querySelector("#animated").object3D.visible == true) {
        // MARKER IS PRESENT
        //alert("MARKER IS PRESENT")

  	    var animatedObject = document.querySelector('#animated-model');
        animatedObject.addEventListener('click', function () { console.log("object01 clickable in AR") });
    }
}});
