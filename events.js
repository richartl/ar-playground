AFRAME.registerComponent("markerhandler", {
  init: function() {
    const bargsMarker = document.querySelector("#marker-bargs");
    const bargsEntity = document.querySelector("#image-bargs");
    const doritosMarker = document.querySelector("#marker-doritos");
    const doritosEntity = document.querySelector("#image-doritos");
    const laysMarker = document.querySelector("#marker-lays");
    const laysEntity = document.querySelector("#image-lays");

    bargsMarker.addEventListener("click", function(ev, target) {
      const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
      if (bargsEntity && intersectedElement === bargsEntity) {
        console.log("bargs clicked");
        document.getElementById("action-bargs").style.display = "flex";
      }
    });
    doritosMarker.addEventListener("click", function(ev, target) {
      const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
      if (doritosEntity && intersectedElement === doritosEntity) {
        console.log("doritos clicked");
        document.getElementById("action-doritos").style.display = "flex";
      }
    });
    laysMarker.addEventListener("click", function(ev, target) {
      const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
      if (laysEntity && intersectedElement === laysEntity) {
        console.log("lays clicked");
        document.getElementById("action-lays").style.display = "flex";
      }
    });
  }
});

function onClosePressed(id) {
  console.log("onClosePressed", id);
  document.getElementById(id).style.display = "none";
}

function onBuyPressed(id) {
  const userCodes = {
    "action-bargs": "purchase-bargs",
    "action-doritos": "purchase-doritos",
    "action-lays": "purchase-lays"
  };
  document.getElementById(id).style.display = "none";
  document.getElementById("loading").style.display = "flex";
  setTimeout(() => {
    document.getElementById("loading").style.display = "none";
    document.getElementById(userCodes[id]).style.display = "flex";
  }, 3000);
}
