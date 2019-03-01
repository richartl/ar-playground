AFRAME.registerComponent("markerhandler", {
  init: function() {
    const appleJacksMarker = document.querySelector("#marker-apple-jacks");
    const appleJacksEntity = document.querySelector("#image-apple-jacks");
    const bargsMarker = document.querySelector("#marker-bargs");
    const bargsEntity = document.querySelector("#image-bargs");
    const cheetosMarker = document.querySelector("#marker-cheetos");
    const cheetosEntity = document.querySelector("#image-cheetos");
    const doritosMarker = document.querySelector("#marker-doritos");
    const doritosEntity = document.querySelector("#image-doritos");
    const fritosMarker = document.querySelector("#marker-fritos");
    const fritosEntity = document.querySelector("#image-fritos");
    const hersheysMarker = document.querySelector("#marker-hersheys");
    const hersheysEntity = document.querySelector("#image-hersheys");
    const laysMarker = document.querySelector("#marker-lays");
    const laysEntity = document.querySelector("#image-lays");
    const snydersMarker = document.querySelector("#marker-snyders");
    const snydersEntity = document.querySelector("#image-snyders");
    const sunChipsMarker = document.querySelector("#marker-sun-chips");
    const sunChipsEntity = document.querySelector("#image-sun-chips");
    const welchsMarker = document.querySelector("#marker-welchs");
    const welchsEntity = document.querySelector("#image-welchs");

    appleJacksMarker.addEventListener("click", function(ev, target) {
      const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
      if (appleJacksEntity && intersectedElement === appleJacksEntity) {
        console.log("apple-jacks clicked");
        document.getElementById("action-apple-jacks").style.display = "flex";
      }
    });
    bargsMarker.addEventListener("click", function(ev, target) {
      const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
      if (bargsEntity && intersectedElement === bargsEntity) {
        console.log("bargs clicked");
        document.getElementById("action-bargs").style.display = "flex";
      }
    });
    cheetosMarker.addEventListener("click", function(ev, target) {
      const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
      if (cheetosEntity && intersectedElement === cheetosEntity) {
        console.log("cheetos clicked");
        document.getElementById("action-cheetos").style.display = "flex";
      }
    });
    doritosMarker.addEventListener("click", function(ev, target) {
      const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
      if (doritosEntity && intersectedElement === doritosEntity) {
        console.log("doritos clicked");
        document.getElementById("action-doritos").style.display = "flex";
      }
    });
    fritosMarker.addEventListener("click", function(ev, target) {
      const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
      if (fritosEntity && intersectedElement === fritosEntity) {
        console.log("fritos clicked");
        document.getElementById("action-fritos").style.display = "flex";
      }
    });
    hersheysMarker.addEventListener("click", function(ev, target) {
      const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
      if (hersheysEntity && intersectedElement === hersheysEntity) {
        console.log("hersheys clicked");
        document.getElementById("action-hersheys").style.display = "flex";
      }
    });
    laysMarker.addEventListener("click", function(ev, target) {
      const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
      if (laysEntity && intersectedElement === laysEntity) {
        console.log("lays clicked");
        document.getElementById("action-lays").style.display = "flex";
      }
    });
    snydersMarker.addEventListener("click", function(ev, target) {
      const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
      if (snydersEntity && intersectedElement === snydersEntity) {
        console.log("snyders clicked");
        document.getElementById("action-snyders").style.display = "flex";
      }
    });
    sunChipsMarker.addEventListener("click", function(ev, target) {
      const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
      if (sunChipsEntity && intersectedElement === sunChipsEntity) {
        console.log("sun-chips clicked");
        document.getElementById("action-sun-chips").style.display = "flex";
      }
    });
    welchsMarker.addEventListener("click", function(ev, target) {
      const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
      if (welchsEntity && intersectedElement === welchsEntity) {
        console.log("welchs clicked");
        document.getElementById("action-welchs").style.display = "flex";
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
  const userCodes = {
    "action-apple-jacks": 1,
    "action-bargs": 2,
    "action-cheetos": 3,
    "action-doritos": 4,
    "action-fritos": 5,
    "action-hersheys": 6,
    "action-lays": 7,
    "action-snyders": 8,
    "action-sun-chips": 9,
    "action-welchs": 10
  };
  fetch("http://165.227.18.165:3000/api/v4/product_servers/1/deals", {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: "Token token=f185f12c3ca4e88ab6de07c8cd1b8eb8",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      user_code: userCodes[id],
      sale_type_code: 2,
      origin: "web",
      any_product: false
    })
  })
    .then(response => response.json())
    .then(json => console.log(json));
}
