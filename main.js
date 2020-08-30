const form = document.querySelector("form");

form.addEventListener("submit", event => {
  event.preventDefault();
  const formData = new FormData(form);

  const lightColor = formData.get("luz");
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
    var anchor = document.createElement("a");

    seatImage.src = "images/seat.png";
    seatImage.className = "seat-image";
    seatImage.id = "seat-image";

    anchor.onclick = "lowerOpacity()";
    document.getElementById("seat-map").appendChild(v);
  }
  //El aglortimo da una opcion de como acomodar los asietnos, pero el usuario puede modificarlo al final
  //Al darle click a un asiento se opaca (para simbolizar que no se va a usar)
  //Al darle click de nuevo se opaca aun más para simbolizar que ahí no hay butaca
});

function lowerOpacity() {
  console.log("Opacity lowered");
  document.getElementById("seat-image").style.opacity = "0.5";
}
