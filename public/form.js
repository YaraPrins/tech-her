const locationFieldset = document.querySelector('.location');
const locationLong = document.querySelector('.location div #long');
const locationLat = document.querySelector('.location div #lat');

navigator.geolocation.getCurrentPosition(position => {
  const lat = position.coords.latitude;
  const long = position.coords.longitude;

  locationLat.value = lat;
  locationLong.value = long;
});


