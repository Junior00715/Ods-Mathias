var map = L.map('map').setView([-23.550520, -46.633308], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    map.setView([lat, lon], 13);
    L.marker([lat, lon]).addTo(map)
      .bindPopup("Você está aqui!")
      .openPopup();
  });
} else {
  alert("A geolocalização não está disponível no seu navegador.");
}

map.on('click', function(e) {
  var latlng = e.latlng;
  L.marker(latlng).addTo(map)
    .bindPopup("Local marcado!")
    .openPopup();
});

function enviarAlerta() {
  var btn = document.getElementById('btn-alerta');
  var alertMessage = document.getElementById('alert-message');
  btn.style.backgroundColor = "#ff3333";
  alertMessage.innerHTML = "Alerta enviado! Assistência será encaminhada.";

  setTimeout(function() {
    btn.style.backgroundColor = "#ff5c5c";
    alertMessage.innerHTML = "";
  }, 5000);
}

function filtrarDicas() {
  var categoria = document.getElementById('categoria').value;
  var dicas = document.querySelectorAll('.dicas-list li');

  dicas.forEach(function(dica) {
    if (categoria === 'todas' || dica.classList.contains(categoria)) {
      dica.style.display = 'block';
    } else {
      dica.style.display = 'none';
    }
  });
}
