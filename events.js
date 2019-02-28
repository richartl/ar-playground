// let items = [];

function ready() {
  const body = document.getElementsByTagName("body")[0];
  const scene = document.getElementsByTagName("a-scene")[0];
  const assets = document.getElementsByTagName("a-assets")[0];
  let lastMarker = null;
  // fetch("http://165.227.18.165:3000/api/v4/product_servers/1/products", {
  //   // fetch("https://nimanic.com/api/v4/product_servers/1/products", {
  //   headers: { Authorization: "Token token=f185f12c3ca4e88ab6de07c8cd1b8eb8" }
  // })
  //   .then(response => response.json())
  //   .then(json => {
  //     console.log(json);
  // const { product_server_items: productServerItems } = json;
  // items = productServerItems;
  console.log("productServerItems", productServerItems);
  productServerItems.map((element, index) => {
    const newAsset = document.createElement("a-asset");
    newAsset.id = `asset-${element.id}`;
    newAsset.setAttribute("src", element.photo_url);
    assets.appendChild(newAsset);
    const newMarker = document.createElement("a-marker");
    newMarker.id = `marker-${element.id}`;
    newMarker.setAttribute("emitevents", "true");
    newMarker.setAttribute("cursor", "fuse: false; rayOrigin: mouse");
    newMarker.setAttribute("type", "barcode");
    newMarker.setAttribute("value", `${index + 1}`);
    lastMarker = newMarker;
    const newAImage = document.createElement("a-image");
    newAImage.id = `image-${element.id}`;
    newAImage.setAttribute("width", "1");
    newAImage.setAttribute("height", "1");
    newAImage.setAttribute("src", `#asset-${element.id}`);
    newAImage.setAttribute("rotation", "-90 0 0");
    scene.appendChild(newMarker);
    newMarker.appendChild(newAImage);
    const newDiv = document.createElement("div");
    newDiv.id = `interactive-${element.id}`;
    newDiv.setAttribute(
      "style",
      "position: absolute; z-index: 99; width: 50%; height: 100%; top: 0; display: none; flex-direction: column; justify-content: center; align-items: center; left: 0; right: 0; margin: 0 auto;"
    );
    body.appendChild(newDiv);
    const newCloseButton = document.createElement("button");
    newCloseButton.setAttribute(
      "onclick",
      `onClosePressed('interactive-${element.id}')`
    );
    newCloseButton.innerHTML = "X";
    const newImage = document.createElement("img");
    newImage.setAttribute("style", "width: 100%; ; max-height: 300px");
    newImage.setAttribute("src", element.photo_url);
    const newBuyButton = document.createElement("button");
    newBuyButton.setAttribute(
      "onclick",
      `onBuyPressed('interactive-${element.id}')`
    );
    newBuyButton.innerHTML = "Comprar";
    newDiv.appendChild(newCloseButton);
    newDiv.appendChild(newImage);
    newDiv.appendChild(newBuyButton);
  });
  lastMarker.setAttribute("markerhandler", "");
  // });
}

document.addEventListener("DOMContentLoaded", ready);

AFRAME.registerComponent("markerhandler", {
  multiple: true,
  init: function() {
    productServerItems.map(element => {
      const marker = document.querySelector(`#marker-${element.id}`);
      const image = document.querySelector(`#image-${element.id}`);
      marker.addEventListener("click", function(ev, target) {
        console.log("marker", marker);
        const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
        console.log("intersectedElement", intersectedElement);
        if (image && intersectedElement === image) {
          document.getElementById(`interactive-${element.id}`).style.display =
            "flex";
        }
      });
    });
    // const cheetosMarker = document.querySelector("#marker-cheetos");
    // const cheetosEntity = document.querySelector("#image-cheetos");

    // cheetosMarker.addEventListener("click", function(ev, target) {
    //   const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
    //   if (cheetosEntity && intersectedElement === cheetosEntity) {
    //     console.log("cheetos clicked");
    //     document.getElementById("interactive-cheetos").style.display = "flex";
    //   }
    // });
  }
});

function onClosePressed(id) {
  console.log("onClosePressed", id);
  document.getElementById(id).style.display = "none";
}

function onBuyPressed(id) {
  console.log("onBuyPressed", id);
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(json => console.log(json));
}
