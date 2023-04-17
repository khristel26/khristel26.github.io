
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


// Function button

function myFunction() {
  var name = prompt("What is your name?");
  var exp = /^[a-zA-ZÀ-ÿ ]+$/;
  if (isNaN(name) && exp.test(name.trim())) {
    alert("Hello, " + name + "! Nice to meet you.");
  } else {
    alert("Please enter a valid name.");
  }
  }


  function alertmessage() {
    alert("Thank you for visiting my page!");
  }

  //Function array

  function findPresidentOrder() {
    const presidents = ["Washington", "Adams", "Jefferson", "Madison", "Monroe", "Adams", "Jackson", "Van Buren", "Harrison", "Tyler", "Polk", "Taylor", "Fillmore", "Pierce", "Buchanan", "Lincoln", "Johnson", "Grant", "Hayes", "Garfield", "Arthur", "Cleveland", "Harrison", "Cleveland", "McKinley", "Roosevelt", "Taft", "Wilson", "Harding", "Coolidge", "Hoover", "Roosevelt", "Truman", "Eisenhower", "Kennedy", "Johnson", "Nixon", "Ford", "Carter", "Reagan", "Bush", "Clinton", "Bush", "Obama", "Trump", "Biden"];
    var lastNameInput = prompt("Enter the last name of a US President to discover their order of presidency");
    var exp = /^[a-zA-ZÀ-ÿ ]+$/;
    var index = presidents.findIndex(president => president.toLowerCase() === lastNameInput.toLowerCase())
    if (index >= 0) {
      alert(`The order of ${presidents[index]} is ${index + 1}.`);
    } else {
      alert("Please enter a valid president last name.");
    }
  }

  //Function sorted array

  function parseArray(){
    var inputStr = document.getElementById("input").value;
    
    var regex = /^(\d+,)*\d+$/;
    if (!regex.test(inputStr)) {
        alert("Please enter a comma-separated list of integers");
        return;
    }
    
    var inputArr = inputStr.split(",").map(function(item) {
      return parseInt(item, 10);
    });
    var sortedArr = inputArr.sort(function(a, b) {
      return a - b;
    });
    document.getElementById("output").innerHTML = "<p>" + sortedArr.join(", ") + "</p>";
}


  //Function Wikipedia

  function wikiapi(){

    var searchterm = document.getElementById('searchterm').value;
    var connect = new XMLHttpRequest();
    var url = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=20&gsrsearch=" + searchterm;
    connect.open('GET', url);
    connect.onload = function (){
      var wikiObject = JSON.parse(this.response);
      //console.log(wikiObject)
      var pages = wikiObject.query.pages;
      for (var i in pages){
        /*var newDiv = document.createElement("div");
        newDiv.setAttribute('class', 'row h5');
        document.getElementById("wiki").appendChild(newDiv);
        newDiv.innerText = pages[i].title;*/
        var pageURL = "https://en.wikipedia.org/?curid="
        var newAnchor = document.createElement("a");
        newAnchor.href = pageURL + pages[i].pageid;
        newAnchor.setAttribute('class', 'row h6');
        newAnchor.innerText = pages[i].title;
        document.getElementById("wiki").appendChild(newAnchor);
      };
    }

    connect.send();

  }


  //Map Data publication

  function mapLoad2() {
    var place = [{ name: "Harris School of Public Policy", latLng: [41.7859287, -87.6013923] }];
  
    var mbAttr =
        'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      mbUrl =
        "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia3phdmFsZXRhMjYiLCJhIjoiY2xnOHkwMG1yMGprbDNrcDlyN2gxcW9veCJ9.tAHobO020QPuqF-7jRRctg";
  
    var grayscale = L.tileLayer(mbUrl, {
        id: "mapbox/light-v9",
        tileSize: 512,
        zoomOffset: -1,
        attribution: mbAttr,
      }),
      streets = L.tileLayer(mbUrl, {
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        attribution: mbAttr,
      });
  
    var map = L.map("map", {
      zoom: 15,
      layers: [streets],
    });
  
    var baseLayers = {
      Grayscale: grayscale,
      Streets: streets,
    };
  
    L.control.layers(baseLayers).addTo(map);
  
    place.forEach((city) => {
      L.marker(city.latLng)
        .addTo(map)
        .bindPopup("<b>" + city.name + "</b>");
      map.setView(city.latLng);
    });
  
    var popup = L.popup();
  
    function onMapClick(e) {
      popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
    }
    map.on("click", onMapClick);
  }


  function loadFunctions() {
    mapLoad2();
    loadXML();
  }



  //OCHRE API

  var parentElement = document.getElementById('ochreTableBody')
  var url= "https://ochre.lib.uchicago.edu/ochre?uuid=accd571b-bae3-4d42-93d9-58b65ec79300"
  
  function loadXML (){
    XMLrequest(url);
    console.log('loadXML -- ok');
  };

  function XMLrequest(link){
    var connect = new XMLHttpRequest();
    connect.onreadystatechange = function(){
      if(this.readyState == 4 && this.status == 200){
        listTexts(this.responseXML);
      };
    };
    connect.open('GET',link, true);
    connect.send();
    console.log('XML request -- ok')
  }
  
  function listTexts(sourceXML){
    document.getElementById('projectTitle').innerText = sourceXML.getElementsByTagName('metadata')[0].children[1].innerHTML;
    document.getElementById('setTitle').innerText = sourceXML.getElementsByTagName('set')[0].children[3].children[0].innerHTML;
    document.getElementById('setDescription').innerText = sourceXML.getElementsByTagName('set')[0].children[4].innerHTML;
    var licenseText = document.getElementById('license');
    licenseText.innerText = sourceXML.getElementsByTagName('availability')[0].children[0].innerHTML;
    licenseText.setAttribute('href', sourceXML.getElementsByTagName('availability')[0].children[0].attributes[0].nodeValue);

    console.log(sourceXML);
    var textList = sourceXML.getElementsByTagName('text');
    console.log(textList);
    for(i = 0; i<textList.length;i++) {
      var tr= document.createElement('tr');
      tr.setAttribute('class','ochreTableRows');
      tr.setAttribute('id', 'row_'+i);
      document.getElementById('ochreTableBody').appendChild(tr);
      var td = document.createElement('td');
      td.setAttribute('id','td_name_'+i);
      td.textContent = textList[i].children[0].children[0].innerHTML;
      document.getElementById('row_'+i).appendChild(td)
      var td2 = document.createElement('td');
      td2.setAttribute('id', 'td_des_'+i);
      td2.textContent = textList[i].children[3].innerHTML;
      document.getElementById('row_'+i).appendChild(td2);
    }
  }

  

  