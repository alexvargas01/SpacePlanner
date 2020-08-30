const form = document.querySelector("form");

form.addEventListener("submit", event => {
  event.preventDefault();
  const formData = new FormData(form);

  const lightColor = formData.get("trafficLights");
  const columns = formData.get("columnas");
  const rows = formData.get("filas");
  const percentage = formData.get("percentage");
  const numberOfSeats = formData.get("numberOfSeats");

  //Reset the seat map container
  document.getElementById("seat-map").innerHTML = "";

  //Set the size of the seat map container
  var containerWidth = 20 * columns;
  var containerHeight = 20 * rows;
  document.getElementById("seat-map").style.width = `${containerWidth}px`;
  document.getElementById("seat-map").style.height = `${containerHeight}px`;

  for (var i = 0; i < rows * columns; i++) {
    var seatImage = document.createElement("img");
    //var anchor = document.createElement("a");

    seatImage.src = "images/seat.png";
    seatImage.className = "seat-image";
    seatImage.id = "seat-image";

    //anchor.onclick = "lowerOpacity()";
    document.getElementById("seat-map").appendChild(seatImage);
  }
});

function lowerOpacity() {
  console.log("Opacity lowered");
  document.getElementById("seat-image").style.opacity = "0.5";
}
