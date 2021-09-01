
var googleMap = null;

function initAutocomplete() {
    //center: {lat: 18.109581, lng: -77.2975082} - jamaica

    googleMap = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 0, lng: 0},
        zoom: 2,
        minZoom: 2,
        mapTypeId: 'roadmap',
        gestureHandling: 'greedy',
        streetViewControl: false,
        mapTypeControl: true,
        zoomControl: true,
        fullscreenControl: true

    });

    
    let input_group = document.createElement("div");
    
   
    let input = document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("placeholder","Search Here");
    input.style.marginTop = "12px";
    

    input_group.appendChild(input);


    let searchBox = new google.maps.places.SearchBox(input);

    googleMap.controls[google.maps.ControlPosition.TOP_CENTER].push(input_group);

    googleMap.addListener('bounds_changed', function () {
        searchBox.setBounds(googleMap.getBounds());
    });

    var markers = [];
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener('places_changed', function () {
        var places = searchBox.getPlaces();

        if (places.length == 0) {
            return;
        }

        // Clear out the old markers.
        markers.forEach(function (marker) {
            marker.setMap(null);
        });
        markers = [];

        // For each place, get the icon, name and location.
        var bounds = new google.maps.LatLngBounds();
        places.forEach(function (place) {
            if (!place.geometry) {
                console.log("Returned place contains no geometry");
                return;
            }
            var icon = {
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25)
            };
            markers.push(new google.maps.Marker({
                map: googleMap,
                icon: icon,
                title: place.name,
                position: place.geometry.location
            }));

            if (place.geometry.viewport) {

                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
        });
        googleMap.fitBounds(bounds);
    });
}


function initMap(){
    MAP_READY = true;
    initAutocomplete();
}

