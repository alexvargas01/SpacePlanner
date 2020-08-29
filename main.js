console.log("Hello world!");

const form = document.querySelector("form");

form.addEventListener("submit", event => {
  event.preventDefault();
  const formData = new FormData(form);

  const lightColor = formData.get("luz");
  const columns = formData.get("columnas");
  const rows = formData.get("filas");
  const percentage = formData.get("percentage");
  const numberOfSeats = formData.get("numberOfSeats");

  for (var i = 0; i < rows * columns; i++) {
    var v = document.createElement("img");
    v.src = "images/seat.png";
    v.className = "seat-image";
    document.getElementById("seat-map").appendChild(v);
  }
});
