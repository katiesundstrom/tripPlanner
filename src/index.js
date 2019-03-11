import buildMarker from './marker';
console.log("I am buildMaker", buildMarker('hotel', [-74.009151, 40.705086]));
const mapboxgl = require('mapbox-gl');
mapboxgl.accessToken =
  'pk.eyJ1Ijoia2FncmVzdGExMiIsImEiOiJjanQ0ajVucncxMjhwM3lwYzd3dXkweTdvIn0.r7y-hFzABCJx63KHOHYg_A';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10',
});



const marker = buildMarker('hotel', [-74.009151, 40.705086]);
marker.addTo(map);
