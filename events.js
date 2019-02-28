AFRAME.registerComponent("markerhandler", {
  init: function() {
    const cheetosMarker = document.querySelector("#marker-cheetos");
    const cheetosEntity = document.querySelector("#image-cheetos");
    const chicharronesMarker = document.querySelector("#marker-chicharrones");
    const chicharronesEntity = document.querySelector("#image-chicharrones");

    cheetosMarker.addEventListener("click", function(ev, target) {
      const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
      if (cheetosEntity && intersectedElement === cheetosEntity) {
        console.log("cheetos clicked");
        document.getElementById("interactive-cheetos").style.display = "flex";
      }
    });

    chicharronesMarker.addEventListener("click", function(ev, target) {
      const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
      if (chicharronesEntity && intersectedElement === chicharronesEntity) {
        console.log("chicharrones clicked");
        document.getElementById("interactive-chicharrones").style.display =
          "flex";
      }
    });
  }
});

function onClosePressed(id) {
  console.log("onClosePressed", id);
  document.getElementById(id).style.display = "none";
}

function onBuyPressed(id) {
  console.log("onBuyPressed", id);
  // fetch("https://jsonplaceholder.typicode.com/todos/1")
  //   .then(response => response.json())
  //   .then(json => console.log(json));
  fetch("http://165.227.18.165:3000/api/v4/product_servers/1/deals", {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: "Token token=f185f12c3ca4e88ab6de07c8cd1b8eb8",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      user_code: id === "interactive-cheetos" ? 51 : 34,
      sale_type_code: 2,
      origin: "web",
      any_product: false
    })
  })
    .then(response => response.json())
    .then(json => console.log(json));
}
