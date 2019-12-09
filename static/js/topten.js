function createMarkers(response) {
    topten = response;
    // Initialize an array to hold fire markers
    var firemarkers = [];
  
    // Loop through the fire array
    for (var index = 0; index < topten.length; index++) {
      var fireloc = topten[index];
  
      // For each fire, create a marker and bind a popup with the fires name
      var firemarker = ([fireloc.Lat, fireloc.Long])
        // .bindPopup("<h3>Name of Fire: " + fireloc.Name + "</h3><h3>State: " + fireloc.State + "</h3>" + "<h3>Acreage: " + fireloc.Acres + "</h3>" + "<h3>Cause: " + fireloc.Cause + "</h3>"  + "<h3>Year: " + fireloc.Year);
  
      // Add the marker to the fireMarkers array
      firemarkers.push(firemarker);
      console.log(topten)
    }
    // Create a layer group made from the firemarkers array, pass it into the createMap function
  //   createMap(L.layerGroup(firemarkers));
  } 
function initMap() {
    // Styles a map in night mode.
    var map = new google.maps.Map(document.getElementById('topten'), {
      center: {lat: 59.25, lng: -115.66},
      zoom: 3,
      styles: [
        {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
        {
          featureType: 'administrative.locality',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [{color: '#263c3f'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [{color: '#6b9a76'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{color: '#38414e'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry.stroke',
          stylers: [{color: '#212a37'}]
        },
        {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [{color: '#9ca5b3'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{color: '#746855'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{color: '#1f2835'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [{color: '#f3d19c'}]
        },
        {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [{color: '#2f3948'}]
        },
        {
          featureType: 'transit.station',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{color: '#17263c'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{color: '#515c6d'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.stroke',
          stylers: [{color: '#17263c'}]
        }
      ]
 
    });
    var markers = [
        ['Inowak - Rank 1: 606,945 Acres',61.9827, -157.0857],
        ['Long Draw - Rank 2: 558,198 Acres',42.391894, -117.893687],
        ['Wallow - Rank 3: 538,049 Acres',33.60611111, -109.4497222],
        ['Boundary - Rank 4: 537,627 Acres',65.2663, -146.8858],
        ['Minto Flats South - Rank 5: 517,078 Acres',64.7467, -149.5047],
        ['Biscuit - Rank 6: 499,945 Acres',42.03888889, -123.9116667],
        ['Dall City - Rank 7: 483,280 Acres',66.3029, -149.8843],
        ['Hwy 152 - Rank 8: 479,549 Acres',35.6678, -101.3708],
        ['Billy Ck - Rank 9: 463,994 Acres',63.8163, -143.819],
        ['Holloway - Rank 10: 461,047 Acres',41.9733, -118.365]
    ]
    
    // Display multiple markers on a map
    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < markers.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(markers[i][1], markers[i][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(markers[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }}
    // for (i=0;i<markerslist.length;i++) {
    //     var marker = new google.maps.Marker({
    //       position: {lat: markerslist[0][i],lng: markerslist[1][i]},
    //       map: map,
    //      })
    //      marker.setMap(map)  } 
         
        



//   }
// function createMap(TopTenFires) {


//   console.log("Can you see this?")

//   // Create a baseMaps object to hold the lightmap layer
//   var baseMaps = {
//     "Light Map": lightmap
//   };

//   // Create an overlayMaps object to hold the TopTenFires layer
//   var overlayMaps = {
//     "Top Ten Fires": TopTenFires
//   };

//   // Create the map object with options
//   var map = L.map("topten", {
//     center: [59.25, -115.66],
//     zoom: 3,
//     layers: [lightmap, TopTenFires]
//   });

// }





// Call createMarkers when complete
d3.json("data_topten").then(createMarkers);