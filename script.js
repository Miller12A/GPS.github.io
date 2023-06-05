function iniciarMap(){
    var coord = {lat:-2.1709979 ,lng: -79.9223592};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}