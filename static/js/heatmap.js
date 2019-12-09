// Creating map object
var myMap = L.map("heat-map", {
  enter: [46.8 -100.78],
  zoom: 3
});

//to make a dark layer of the map
//L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/dark-v10.html?title=true&access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA#0.39/0/0", {
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
  maxZoom: 8,
  id: "mapbox.dark",
  accessToken: API_KEY
}).addTo(myMap);

console.log(" just before heat Array" )

function createMap(heatmap) {
  var heatArray = [];
  
// connect app.py json data with the map
heatMapjson = heatmap

console.log("empty heat array")
  //console.log("LEN => ", heatMapjson.heatMapData.length)
  var max = heatMapjson.heatMapData.length
  max = 100;
  for (var i = 0; i < max; i++) {
    // console.log(heatMapjson.heatMapData[i]);
   // var response = heatMapData[i];
    var latitude = heatMapjson.heatMapData[i].Lat;
    var longitude = heatMapjson.heatMapData[i].Long;
    // console.log(latitude);
    // console.log(longitude);
    //console.log("L.heatLayer: ", L.heatLayer);
    if (latitude && longitude) {
    heatArray.push([latitude,longitude]);

      }
    var heat = L.heatLayer(heatArray, {
      radius: 1,
      blur: 1
    }).addTo(myMap);
    
    };

  };


//console.log("fetching heatdata")
d3.json("/heatdata").then(createMap);