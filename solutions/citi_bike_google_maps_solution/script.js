// GOOGLE MAP SETUP HERE:
var myMap = new google.maps.Map(document.getElementById('map'), {
  center: {
    lat: 40.7128,
    lng: -74.0060,
  },
  zoom: 12
});

var marker = new google.maps.Marker({
  position: {
    lat: 40.7128,
    lng: -74.0060,
  },
  map: myMap,
  title: 'New York, NY'
});


// CITIBIKE PROJECT HERE:
function renderCitiBikeMarkers(stations) {
  stations.forEach(function(station) {
    var stationLat = station.lat / 1000000
    var stationLng = station.lng / 1000000

    var marker = new google.maps.Marker({
      position: {
        lat: stationLat,
        lng: stationLng,
      },
      map: myMap,
      title: station.name,
    });
  })
}

// AJAX request to fetch the station data from CitiBike's API
// Warning! Do not break this :D
$.ajax({
	type: 'GET',
	url: 'http://api.citybik.es/citi-bike-nyc.json',
	success: renderCitiBikeMarkers,
});


/*ajax is a collection of technologies: 
-update a web page without reloading the page
-request data from the server - after the page has loaded
-receive data from the server - after the page has loaded
-send data to a server - in the background
-it is not a programming language
- a technique for accessing web servers from a web page
- AJAX stands for Asynchronous JavaScript And XML.



