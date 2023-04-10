// Dropdown menu
$(document).ready(function(){
  $('.dropdown-toggle').dropdown();
});


// Map in Personal

 function mapLoad(){
  //Define the lat lon coordinate
  var cities = [
    {name: "Lima, Peru", latLng: [-12.046374, -77.042793]},
    {name: "Addis Ababa, Ethiopia", latLng: [9.005401, 38.763611]},
    {name: "Madrid, Spain", latLng: [40.416775, -3.703790]},
    {name: "Colorado, USA", latLng: [39.113014, -105.358887]},
    {name: "Chicago, USA", latLng: [41.878113, -87.629799]},
    {name: "Vienna, Austria", latLng: [48.2082, 16.3738]}
  ];


  var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
  'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia3phdmFsZXRhMjYiLCJhIjoiY2xnOHkwMG1yMGprbDNrcDlyN2gxcW9veCJ9.tAHobO020QPuqF-7jRRctg';

  var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox/light-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr}),
  streets  = L.tileLayer(mbUrl, {id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr});

  var map = L.map('map', {
    center: cities[2].latLng,
    zoom: 2,
    layers: [streets]
  });

  var baseLayers = {
    "Grayscale": grayscale,
    "Streets": streets
  };

  L.control.layers(baseLayers).addTo(map);

  cities.forEach(city => {
    L.marker(city.latLng).addTo(map)
      .bindPopup("<b>" + city.name + "</b>")
  });


  var popup = L.popup();

  function onMapClick(e) {
    popup
    .setLatLng(e.latlng)
    .setContent("You clicked the map at " + e.latlng.toString())
    .openOn(map);
  }
  map.on('click', onMapClick);
}

//Get Time - minutes
function displayMinute() {
  var currentDate = new Date();
  var currentMinute = currentDate.getMinutes();
  var minuteDiv = document.getElementById("minuteDiv");
  minuteDiv.innerText = `The current minute is: ${currentMinute}`;
}

//Get function hide and show

function hideElement() {
  var Element = document.getElementById("hide-button");
  Element.style.display = "none";
}

function showElement() {
  var Element = document.getElementById("hide-button");
  Element.style.display = "block";
}



  