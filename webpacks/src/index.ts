import L, { LatLngExpression } from 'leaflet';
import mapConfig from './map.config';
import fetchData from './fetchData';
import { districts } from './districtData';


const $selectDistrict =
  document.getElementById('select-district');
  if ( $selectDistrict ===null){
    throw new Error('沒有選到');
  }
  
districts.forEach((d) => {
  const $optionTag = document.createElement('option');

  $optionTag.setAttribute('value',d);
  $optionTag.innerText = d;
  $selectDistrict.appendChild($optionTag);
})


fetchData().then(data=>{
  console.log(data);
})
const {
  coordinate,
  zoomLevel,
  tileLayerURL,
  containerID
} = mapConfig;

const taipeiCoord : LatLngExpression = coordinate;


const zoom = zoomLevel;

const map = L.map(containerID);

map.setView(taipeiCoord, zoom);

L.tileLayer(tileLayerURL)
.addTo(map);