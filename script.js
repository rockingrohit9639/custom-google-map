function initMap () {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 25.82902620498076, lng: -80.1282103636705},
        zoom: 12,
        mapId: 'your map id'
    });

    new google.maps.Marker({
        position: {lat: 25.80099264597544, lng: -80.1870156777771},
        map, 
        title: "You",
        icon: {
            url: "marker.svg",
            scaledSize: new google.maps.Size(38, 31)
        },
        animation: google.maps.Animation.DROP
    })

    //25.81099264597132, -80.1520156537741
}

//25.82902620498076, -80.1282103636705