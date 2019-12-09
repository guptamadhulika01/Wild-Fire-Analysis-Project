// Create a map object
var myMap = L.map("map", {
    center: [59.25, -115.66],
    zoom: 3
  });

  L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets-basic",
    accessToken: API_KEY
    // accessToken: "pk.eyJ1IjoiYWxleHkxNDMyIiwiYSI6ImNrMDYxY3ltejN3OWEzanFvMGFydDBtaWsifQ.caGCeOZIOmPJnfC07zDLOA"
  }).addTo(myMap);

  // Define a markerSize function that will give each city a different radius based on its population
  function markerSize(numberoffires) {
    return numberoffires * 20;
  }

  function createMarkers(data) {

  coordData = data;
  cities = []
  // Each city object contains the city's name, location and population
  for (var i = 0; i < coordData.length; i++) {
  cities.push (
    {
      name: coordData[i].State,
      location: [coordData[i].Latitude, coordData[i].Longitude],
      numberoffires: coordData[i].NumberOfFires
    })
  }
  // Loop through the cities array and create one marker for each city object
  for (var i = 0; i < cities.length; i++) {
  if (cities[i].numberoffires >10000)  {
    L.circle(cities[i].location, {
      fillOpacity: 0.75,
      color: "firebrick",
      fillColor: "firebrick",
      // Setting our circle's radius equal to the output of our markerSize function
      // This will make our marker's size proportionate to its population
      radius: markerSize(cities[i].numberoffires)
    }).bindPopup("<h1>" + cities[i].name + "</h1> <hr> <h3>Number of Fires: " + cities[i].numberoffires + "</h3>").addTo(myMap);
  }
  else if (cities[i].numberoffires >7500)  {
      L.circle(cities[i].location, {
        fillOpacity: 0.75,
        color: "red",
        fillColor: "red",
        // Setting our circle's radius equal to the output of our markerSize function
        // This will make our marker's size proportionate to its population
        radius: markerSize(cities[i].numberoffires)
      }).bindPopup("<h1>" + cities[i].name + "</h1> <hr> <h3>Number of Fires: " + cities[i].numberoffires + "</h3>").addTo(myMap);
    }
  else if (cities[i].numberoffires >5000)  {
      L.circle(cities[i].location, {
        fillOpacity: 0.75,
        color: "orangered",
        fillColor: "orangered",
        // Setting our circle's radius equal to the output of our markerSize function
        // This will make our marker's size proportionate to its population
        radius: markerSize(cities[i].numberoffires)
      }).bindPopup("<h1>" + cities[i].name + "</h1> <hr> <h3>Number of Fires: " + cities[i].numberoffires + "</h3>").addTo(myMap);
    } 
  else if (cities[i].numberoffires >2500)  {
      L.circle(cities[i].location, {
        fillOpacity: 0.75,
        color: "darkorange",
        fillColor: "darkorange",
        // Setting our circle's radius equal to the output of our markerSize function
        // This will make our marker's size proportionate to its population
        radius: markerSize(cities[i].numberoffires)
      }).bindPopup("<h1>" + cities[i].name + "</h1> <hr> <h3>Number of Fires: " + cities[i].numberoffires + "</h3>").addTo(myMap);
    }   
  else if (cities[i].numberoffires >500)  {
      L.circle(cities[i].location, {
        fillOpacity: 0.75,
        color: "orange",
        fillColor: "orange",
        // Setting our circle's radius equal to the output of our markerSize function
        // This will make our marker's size proportionate to its population
        radius: markerSize(cities[i].numberoffires)
      }).bindPopup("<h1>" + cities[i].name + "</h1> <hr> <h3>Number of Fires: " + cities[i].numberoffires + "</h3>").addTo(myMap);
    } 
  else {
      L.circle(cities[i].location, {
        fillOpacity: 0.75,
        color: "yellow",
        fillColor: "yellow",
        // Setting our circle's radius equal to the output of our markerSize function
        // This will make our marker's size proportionate to its population
        radius: markerSize(cities[i].numberoffires)
      }).bindPopup("<h1>" + cities[i].name + "</h1> <hr> <h3>Number of Fires: " + cities[i].numberoffires + "</h3>").addTo(myMap);   
  }   
  }
  }
  d3.json("data_states")
    .then(createMarkers) 